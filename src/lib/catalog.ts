import type { AppRecord } from "../data/apps";
import type { CategoryId } from "../data/categories";

export interface CatalogFilters {
  query?: string;
  category?: CategoryId | "all";
  source?: "all" | "confirmed" | "pending";
  portableOnly?: boolean;
}

export const normalizeSearchText = (value: string) =>
  value.normalize("NFKC").trim().toLocaleLowerCase("ko-KR");

export const filterApps = (apps: AppRecord[], filters: CatalogFilters) => {
  const query = normalizeSearchText(filters.query ?? "");

  return apps.filter((app) => {
    const haystack = normalizeSearchText(
      [app.name, app.summary, app.editorNote, app.license].join(" "),
    );
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory =
      !filters.category ||
      filters.category === "all" ||
      app.category === filters.category;
    const matchesSource =
      !filters.source ||
      filters.source === "all" ||
      app.sourceStatus === filters.source;
    const matchesPortable = !filters.portableOnly || app.portable === "yes";

    return matchesQuery && matchesCategory && matchesSource && matchesPortable;
  });
};

export const isRecordStale = (checkedAt: string | null, now = new Date()) => {
  if (!checkedAt) return true;
  const checked = new Date(`${checkedAt}T00:00:00Z`);
  const ageInDays = (now.getTime() - checked.getTime()) / 86_400_000;
  return ageInDays > 90;
};
