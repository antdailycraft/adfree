/** Shared by the catalogue and the global search dialog. */
export const normalizeSearchText = (value: string) =>
  value.normalize("NFKC").toLocaleLowerCase("ko-KR").trim();

export const matchesSearch = (text: string, query: string) => {
  const haystack = normalizeSearchText(text);
  return normalizeSearchText(query).split(/\s+/u).every((word) => haystack.includes(word));
};

export const createSearchText = (
  app: { name: string; summary: string; editorNote: string; license: string },
  category: { label: string; description: string },
) => [app.name, app.summary, app.editorNote, app.license, category.label, category.description].join(" ");

/** Exact app names should precede incidental mentions in descriptions. */
export const searchRank = (name: string, query: string) => {
  const normalizedName = normalizeSearchText(name);
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return 0;
  if (normalizedName === normalizedQuery) return 3;
  if (normalizedName.startsWith(normalizedQuery)) return 2;
  if (normalizedName.includes(normalizedQuery)) return 1;
  return 0;
};
