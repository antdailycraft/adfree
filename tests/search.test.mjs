import assert from "node:assert/strict";
import test from "node:test";
import { createSearchText, matchesSearch, searchRank } from "../src/lib/search.ts";

test("search accepts separated words, reversed order and Unicode width differences", () => {
  const text = "7-Zip 가벼운 파일 압축·해제 Windows";
  for (const query of ["압축 파일", "파일   압축", "  ７－ＺＩＰ  ", "WINDOWS 압축", " "]) {
    assert.ok(matchesSearch(text, query), query);
  }
  assert.equal(matchesSearch(text, "압축 사진"), false);
});

test("both search surfaces can search category descriptions and licenses", () => {
  const text = createSearchText(
    { name: "Example", summary: "편집 도구", editorNote: "공식 출처 확인", license: "MIT" },
    { label: "텍스트 편집", description: "메모와 코드 편집" },
  );
  assert.ok(matchesSearch(text, "코드 MIT"));
  assert.ok(matchesSearch(text, "메모 텍스트"));
});

test("exact app names rank ahead of prefixes and description-only matches", () => {
  const names = ["Editor", "MarkText Extra", "MarkText", "New MarkText"];
  names.sort((a, b) => searchRank(b, "marktext") - searchRank(a, "marktext"));
  assert.deepEqual(names, ["MarkText", "MarkText Extra", "New MarkText", "Editor"]);
  assert.equal(searchRank("Editor", ""), 0);
});
