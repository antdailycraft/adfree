import { readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const apps = JSON.parse(await readFile(new URL("../src/data/apps.json", import.meta.url), "utf8"));
const reportPath = process.env.SOURCE_CHECK_REPORT ?? join(tmpdir(), "adfree-source-check.json");
const timeoutMs = Number(process.env.SOURCE_CHECK_TIMEOUT ?? 15_000);
const limit = Number(process.env.CHECK_LIMIT ?? apps.length);
const token = process.env.GITHUB_TOKEN;

const describeError = (error) => {
  const cause = [error.cause?.code, error.cause?.message].filter(Boolean).join(": ");
  return cause ? `${error.message} (${cause})` : error.message;
};

const normalizeVersion = (value) =>
  value
    ?.trim()
    .replace(/^v/i, "")
    .replace(/^release[-_]/i, "")
    .replace(/_(?:stable|beta|canary)_\d{4}-\d{2}-\d{2}$/i, "") ?? null;
const request = async (url, headers = {}) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "Adfree source monitor (+https://github.com/antdailycraft/adfree)",
        accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
        ...headers,
      },
    });
  } finally {
    clearTimeout(timer);
  }
};

const checkApp = async (app) => {
  const result = {
    slug: app.slug,
    name: app.name,
    checkedUrl: app.downloadPage,
    finalUrl: null,
    finalHost: null,
    httpStatus: null,
    observedVersion: null,
    status: "ok",
    messages: [],
  };

  try {
    const response = await request(app.downloadPage);
    result.httpStatus = response.status;
    result.finalUrl = response.url;
    result.finalHost = new URL(response.url).hostname;
    if (!response.ok) {
      result.status = "review";
      result.messages.push(`download page returned HTTP ${response.status}`);
    }
    if (!app.officialHosts.includes(result.finalHost)) {
      result.status = "review";
      result.messages.push(`unexpected redirect host: ${result.finalHost}`);
    }
  } catch (error) {
    result.status = "review";
    result.messages.push(error.name === "AbortError" ? `download page timed out after ${timeoutMs} ms` : `download page request failed: ${describeError(error)}`);
  }

  if (app.releaseSource.kind === "github") {
    try {
      const headers = token ? { authorization: `Bearer ${token}`, accept: "application/vnd.github+json" } : { accept: "application/vnd.github+json" };
      const response = await request(`https://api.github.com/repos/${app.releaseSource.repo}/releases/latest`, headers);
      if (response.ok) {
        const release = await response.json();
        result.observedVersion = release.tag_name ?? null;
        if (app.stableVersion && normalizeVersion(result.observedVersion) !== normalizeVersion(app.stableVersion)) {
          result.status = "review";
          result.messages.push(`stable release changed: recorded ${app.stableVersion}, observed ${result.observedVersion}`);
        }
      } else if (response.status !== 404) {
        result.status = "review";
        result.messages.push(`GitHub release API returned HTTP ${response.status}`);
      }
    } catch (error) {
      result.status = "review";
      result.messages.push(`GitHub release check failed: ${describeError(error)}`);
    }
  }

  return result;
};

const queue = apps.slice(0, limit);
const results = [];
const workers = Array.from({ length: Math.min(5, queue.length) }, async () => {
  while (queue.length > 0) {
    const app = queue.shift();
    if (app) results.push(await checkApp(app));
  }
});
await Promise.all(workers);
results.sort((left, right) => left.name.localeCompare(right.name, "en"));

const review = results.filter((result) => result.status === "review");
const report = {
  generatedAt: new Date().toISOString(),
  checked: results.length,
  needsReview: review.length,
  results,
};
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);

console.log(`Source check complete: ${results.length} checked · ${review.length} need review`);
console.log(`Report: ${reportPath}`);
for (const item of review) console.error(`- ${item.name}: ${item.messages.join("; ")}`);
if (review.length > 0) process.exitCode = 1;
