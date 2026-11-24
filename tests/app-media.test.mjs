import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";

const apps = JSON.parse(await readFile(new URL("../src/data/apps.json", import.meta.url), "utf8"));
const media = JSON.parse(await readFile(new URL("../src/data/app-media.json", import.meta.url), "utf8"));
const platforms = new Set(["windows", "macos", "linux", "android", "ios", "freebsd"]);

test("every product has sourced platform information without orphan media records", () => {
  assert.deepEqual(Object.keys(media).sort(), apps.map(a => a.slug).sort());
  for (const item of Object.values(media)) {
    assert.ok(item.platforms.length > 0);
    assert.equal(new Set(item.platforms).size, item.platforms.length);
    assert.ok(item.platforms.every(p => platforms.has(p)));
    assert.match(item.platformSource, /^https:\/\//);
    assert.ok(item.platformNote.trim());
  }
});

test("product images are local files with attribution and screenshot dimensions", async () => {
  for (const item of Object.values(media)) {
    for (const kind of ["logo", "screenshot"]) {
      const asset = item[kind];
      if (!asset) continue;
      assert.match(asset.src, /^media\/apps\/[a-z0-9-]+\.(png|svg|ico|jpg|webp)$/);
      await access(new URL(`../public/${asset.src}`, import.meta.url));
      assert.match(asset.source, /^https:\/\//);
      assert.match(asset.originalUrl, /^https:\/\//);
      assert.ok(asset.alt.trim());
      if (kind === "screenshot") {
        assert.ok(asset.width > 0 && asset.height > 0);
      }
    }
  }
});
