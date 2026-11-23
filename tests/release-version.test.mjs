import assert from "node:assert/strict";
import test from "node:test";
import { compareReleaseVersion } from "../scripts/lib/release-version.mjs";

test("known stable tag decorations do not produce false update alerts", () => {
  for (const [slug, recorded, observed] of [
    ["explorer-plus-plus", "1.4.0", "version-1.4.0"],
    ["sumatrapdf", "3.6.1", "3.6.1rel"],
    ["veracrypt", "1.26.31", "VeraCrypt_VeraCrypt_1.26.31"],
    ["duplicati", "2.4.1.0", "v2.4.1.0_stable_2026-10-29"],
    ["example", "1.2.3", "release-v1.2.3"],
    ["powertoys", "0.102.3101.0", "v0.102.3101"],
  ]) assert.equal(compareReleaseVersion(recorded, observed, slug), "same", slug);
});

test("real upgrades and prerelease differences remain reviewable", () => {
  for (const tag of ["v1.2.4", "v1.2.3-beta", "v1.2.3_beta_2026-10-29", "v1.2.3_canary_2026-10-29"]) {
    assert.equal(compareReleaseVersion("1.2.3", tag, "example"), "changed", tag);
  }
  assert.equal(compareReleaseVersion("3.6.1", "3.6.1rel", "other-project"), "changed");
  assert.equal(compareReleaseVersion("0.102.3101.1", "v0.102.3101", "powertoys"), "changed");
  assert.equal(compareReleaseVersion("0.102.3101.0", "v0.102.3101", "other-project"), "changed");
});

test("unrecorded and missing versions are distinguished from unchanged versions", () => {
  assert.equal(compareReleaseVersion(null, "v1.2.3", "example"), "unrecorded");
  assert.equal(compareReleaseVersion("1.2.3", null, "example"), "unavailable");
  assert.equal(compareReleaseVersion("1.2.3", " ", "example"), "unavailable");
});
