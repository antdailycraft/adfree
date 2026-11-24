import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8430,
  },
  site: process.env.SITE_URL ?? "https://adfree.aidaon.com",
  base: "/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  vite: {
    server: {
      allowedHosts: ["metis", "metis.local", "metis.tail04fe8.ts.net", "metis.aidaon.com"],
    },
    preview: {
      allowedHosts: ["metis", "metis.local", "metis.tail04fe8.ts.net", "metis.aidaon.com"],
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
