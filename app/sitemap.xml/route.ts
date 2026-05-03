import { SITE_CONFIG } from "@/lib/site-config";

const PAGES = [
  { path: "", lastmod: "2026-04-13", priority: "1.0", changefreq: "weekly" },
  { path: "/menu", lastmod: "2026-04-13", priority: "0.9", changefreq: "monthly" },
  { path: "/events", lastmod: "2026-04-13", priority: "0.9", changefreq: "weekly" },
  { path: "/about", lastmod: "2026-04-13", priority: "0.7", changefreq: "monthly" },
  { path: "/gallery", lastmod: "2026-04-13", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", lastmod: "2026-04-13", priority: "0.8", changefreq: "monthly" },
  { path: "/downtown-greer-restaurants", lastmod: "2026-05-03", priority: "0.8", changefreq: "monthly" },
  { path: "/downtown-greer-bar-and-grill", lastmod: "2026-05-03", priority: "0.8", changefreq: "monthly" },
  { path: "/karaoke-greer-sc", lastmod: "2026-05-03", priority: "0.8", changefreq: "weekly" },
];

export function GET() {
  const urls = PAGES.map(
    ({ path, lastmod, priority, changefreq }) => `
  <url>
    <loc>${SITE_CONFIG.url}${path}</loc>
    <lastmod>${lastmod}</lastmod>
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
