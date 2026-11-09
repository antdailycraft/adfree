import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const apps = JSON.parse(await readFile(new URL("../src/data/apps.json", import.meta.url), "utf8"));
const expectedCategories = new Set([
  "archive",
  "files",
  "documents",
  "media",
  "images",
  "capture",
  "backup",
  "security",
  "system",
  "text",
]);
const sourceStatuses = new Set(["confirmed", "pending", "changed"]);
const installerStatuses = new Set(["verified", "pending", "failed"]);
const portableStatuses = new Set(["yes", "no", "unknown"]);
const errors = [];
const slugs = new Set();
const names = new Set();
const categoryCounts = new Map();

const addError = (app, message) => errors.push(`${app?.slug ?? "<unknown>"}: ${message}`);
const isDate = (value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));

if (apps.length < 30) errors.push(`catalogue: expected at least 30 candidates, found ${apps.length}`);

for (const app of apps) {
  for (const field of ["slug", "name", "category", "summary", "editorNote", "license", "commercialUse", "homepage", "downloadPage"]) {
    if (typeof app[field] !== "string" || app[field].trim() === "") addError(app, `missing ${field}`);
  }

  if (slugs.has(app.slug)) addError(app, "duplicate slug");
  if (names.has(app.name.toLocaleLowerCase("en-US"))) addError(app, "duplicate name");
  slugs.add(app.slug);
  names.add(app.name.toLocaleLowerCase("en-US"));

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(app.slug)) addError(app, "slug must be lowercase kebab-case");
  if (!expectedCategories.has(app.category)) addError(app, `unknown category ${app.category}`);
  categoryCounts.set(app.category, (categoryCounts.get(app.category) ?? 0) + 1);

  for (const field of ["homepage", "downloadPage"]) {
    try {
      const url = new URL(app[field]);
      if (url.protocol !== "https:") addError(app, `${field} must use https`);
    } catch {
      addError(app, `${field} is not a valid URL`);
    }
  }

  if (!Array.isArray(app.officialHosts) || app.officialHosts.length === 0) addError(app, "officialHosts must not be empty");
  if (!sourceStatuses.has(app.sourceStatus)) addError(app, `invalid sourceStatus ${app.sourceStatus}`);
  if (!installerStatuses.has(app.installerStatus)) addError(app, `invalid installerStatus ${app.installerStatus}`);
  if (!portableStatuses.has(app.portable)) addError(app, `invalid portable status ${app.portable}`);
  if (typeof app.accountRequired !== "boolean") addError(app, "accountRequired must be boolean");

  if (app.sourceStatus === "confirmed") {
    if (!isDate(app.sourceCheckedAt)) addError(app, "confirmed source needs a valid sourceCheckedAt date");
    if (!Array.isArray(app.sourceEvidence) || app.sourceEvidence.length === 0) addError(app, "confirmed source needs evidence URLs");
  }

  if (app.installerStatus === "verified" && !isDate(app.installerCheckedAt)) addError(app, "verified installer needs installerCheckedAt");
  if (app.releaseDate !== null && !isDate(app.releaseDate)) addError(app, "releaseDate must be YYYY-MM-DD or null");
  if (!app.releaseSource || !["page", "github"].includes(app.releaseSource.kind)) addError(app, "releaseSource must be page or github");
  if (app.releaseSource?.kind === "github" && !/^[^/]+\/[^/]+$/.test(app.releaseSource.repo ?? "")) addError(app, "GitHub release source needs owner/repo");
}

for (const category of expectedCategories) {
  const count = categoryCounts.get(category) ?? 0;
  if (count < 3) errors.push(`category ${category}: expected at least 3 candidates, found ${count}`);
}

if (errors.length > 0) {
  console.error(`Data validation failed in ${root}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const confirmed = apps.filter((app) => app.sourceStatus === "confirmed").length;
const verified = apps.filter((app) => app.installerStatus === "verified").length;
console.log(`Data valid: ${apps.length} apps · ${expectedCategories.size} categories · ${confirmed} sources confirmed · ${verified} installers verified`);
