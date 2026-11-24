import rawMedia from "./app-media.json";

export const platformLabels = {
  windows: "Windows", macos: "macOS", linux: "Linux",
  android: "Android", ios: "iOS / iPadOS", freebsd: "FreeBSD",
} as const;
export type Platform = keyof typeof platformLabels;
export interface ProductImage {
  src: string;
  source: string;
  originalUrl: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  provenance?: "documentation" | "capture";
}
export interface AppMedia {
  platforms: Platform[];
  platformSource: string;
  platformNote: string;
  checkedAt: string;
  logo?: ProductImage;
  screenshot?: ProductImage;
}
export const appMedia = rawMedia as Record<string, AppMedia>;
