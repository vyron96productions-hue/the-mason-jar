import { SITE_CONFIG } from "@/lib/site-config";

export function GET() {
  const body = `# The Mason Jar — Bar & Grill in Downtown Greer, SC

## About
The Mason Jar is a local bar and grill located at 202 Trade St in downtown Greer, South Carolina.
We serve burgers, wings, ribs, wraps, sandwiches, salads, craft cocktails, and cold beer.
We host karaoke every Friday and Saturday night starting at 9 PM, plus weekly events throughout the week.

## Contact
- Address: 202 Trade St, Greer, SC 29651
- Phone: (864) 879-4454
- Website: ${SITE_CONFIG.url}
- Facebook: ${SITE_CONFIG.social.facebook}
- Instagram: ${SITE_CONFIG.social.instagram}

## Hours
- Monday–Tuesday: 11 AM – 10 PM
- Wednesday–Thursday: 11 AM – 11 PM
- Friday–Saturday: 11 AM – 2 AM
- Sunday: 11 AM – 9 PM

## Pages
- Home: ${SITE_CONFIG.url}
- Menu: ${SITE_CONFIG.url}/menu
- Events: ${SITE_CONFIG.url}/events
- About: ${SITE_CONFIG.url}/about
- Gallery: ${SITE_CONFIG.url}/gallery
- Contact: ${SITE_CONFIG.url}/contact
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
