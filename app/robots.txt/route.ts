import { SITE_CONFIG } from "@/lib/site-config";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
