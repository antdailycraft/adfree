import rawApps from "./apps.json";
import type { CategoryId } from "./categories";

export type PortableStatus = "yes" | "no" | "unknown";
export type SourceStatus = "confirmed" | "pending" | "changed";
export type InstallerStatus = "verified" | "pending" | "failed";
export type ReleaseSource =
  | { kind: "page" }
  | { kind: "github"; repo: string };

export interface AppRecord {
  slug: string;
  name: string;
  category: CategoryId;
  summary: string;
  editorNote: string;
  license: string;
  commercialUse: string;
  accountRequired: boolean;
  portable: PortableStatus;
  homepage: string;
  downloadPage: string;
  officialHosts: string[];
  sourceStatus: SourceStatus;
  sourceCheckedAt: string | null;
  sourceEvidence: string[];
  installerStatus: InstallerStatus;
  installerCheckedAt: string | null;
  stableVersion: string | null;
  releaseDate: string | null;
  releaseSource: ReleaseSource;
}

export const apps = rawApps as AppRecord[];

export const sourceConfirmedApps = apps.filter(
  (app) => app.sourceStatus === "confirmed",
);

export const installerVerifiedApps = apps.filter(
  (app) => app.installerStatus === "verified",
);
