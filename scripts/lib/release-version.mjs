/** Remove known tag decoration, while retaining prerelease qualifiers. */
export const normalizeVersion = (value, slug = "") => {
  if (typeof value !== "string" || !value.trim()) return null;
  let version = value.trim()
    .replace(/^(?:version|release)[-_]/i, "")
    .replace(/^v(?=\d)/i, "")
    .replace(/_stable_\d{4}-\d{2}-\d{2}$/i, "");

  // These conventions belong to these projects, not to arbitrary version tags.
  if (slug === "veracrypt") version = version.replace(/^(?:VeraCrypt_)+(?=\d)/i, "");
  if (slug === "sumatrapdf") version = version.replace(/^(\d+(?:\.\d+)+)rel$/i, "$1");
  // PowerToys installers include a fourth zero component omitted by release tags.
  if (slug === "powertoys") version = version.replace(/^(\d+\.\d+\.\d+)\.0$/, "$1");
  return version;
};

export const compareReleaseVersion = (recorded, observed, slug) => {
  const next = normalizeVersion(observed, slug);
  if (!next) return "unavailable";
  const current = normalizeVersion(recorded, slug);
  if (!current) return "unrecorded";
  return current === next ? "same" : "changed";
};
