import type { APIRoute } from "astro";
import { apps } from "../data/apps";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("A site URL is required to generate the sitemap.");
  const paths = [
    "/", "/apps/", "/updates/", "/methodology/", "/guides/official-downloads/",
    ...apps.map((app) => `/apps/${app.slug}/`),
  ];
  const entries = paths.map((path) => {
    const url = new URL(path, site).href.replaceAll("&", "&amp;");
    return `<url><loc>${url}</loc></url>`;
  }).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
