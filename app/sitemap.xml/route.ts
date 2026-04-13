import { SITE_CONFIG } from "@/lib/site-config";

const PAGES = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/menu", priority: "0.9", changefreq: "monthly" },
  { path: "/events", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/gallery", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
];

export function GET() {
  const today = new Date().toISOString().split("T")[0];

  const urls = PAGES.map(
    ({ path, priority, changefreq }) => `
  <url>
    <loc>${SITE_CONFIG.url}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
