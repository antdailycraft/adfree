import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const apps = JSON.parse(await readFile(new URL("../src/data/apps.json", import.meta.url), "utf8"));

test("catalogue contains 30 unique candidates", () => {
  assert.equal(apps.length, 30);
  assert.equal(new Set(apps.map((app) => app.slug)).size, 30);
});

test("each category starts with exactly three candidates", () => {
  const counts = new Map();
  for (const app of apps) counts.set(app.category, (counts.get(app.category) ?? 0) + 1);
  assert.equal(counts.size, 10);
  for (const count of counts.values()) assert.equal(count, 3);
});

test("confirmed records include dated official evidence", () => {
  const confirmed = apps.filter((app) => app.sourceStatus === "confirmed");
  assert.equal(confirmed.length, 8);
  for (const app of confirmed) {
    assert.match(app.sourceCheckedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(app.sourceEvidence.length > 0);
    assert.ok(app.sourceEvidence.every((url) => url.startsWith("https://")));
  }
});

test("no installer is overstated as verified without Windows evidence", () => {
  const verified = apps.filter((app) => app.installerStatus === "verified");
  assert.equal(verified.length, 0);
});

test("download pages stay within the declared official host set", () => {
  for (const app of apps) {
    const host = new URL(app.downloadPage).hostname;
    assert.ok(app.officialHosts.includes(host), `${app.name} does not allow ${host}`);
  }
});
