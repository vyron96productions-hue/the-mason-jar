import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GTMScript } from "@/components/analytics/GTMScript";
import { GTM_ID } from "@/lib/gtm";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Bar & Grill in Downtown Greer SC | The Mason Jar",
    template: "%s | The Mason Jar – Greer, SC",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "bar and grill Greer SC",
    "downtown Greer restaurant",
    "Greer SC karaoke bar",
    "places to eat Greer South Carolina",
    "bars downtown Greer",
    "Greer nightlife",
    "Greer burgers and drinks",
    "local restaurant Greer SC",
    "The Mason Jar Greer",
    "202 Trade St Greer SC",
  ],
  authors: [{ name: "The Mason Jar Bar & Grill" }],
  creator: "The Mason Jar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Bar & Grill in Downtown Greer SC | The Mason Jar",
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "The Mason Jar Bar & Grill — Downtown Greer, SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bar & Grill in Downtown Greer SC | The Mason Jar",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.seo.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    name: "The Mason Jar",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: "+1-864-879-4454",
    address: {
      "@type": "PostalAddress",
      streetAddress: "202 Trade St",
      addressLocality: "Greer",
      addressRegion: "SC",
      postalCode: "29651",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.938,
      longitude: -82.227,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday"],
        opens: "11:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "02:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    image: `${SITE_CONFIG.url}${SITE_CONFIG.seo.ogImage}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/images/Logo/logo.png`,
    },
    servesCuisine: ["American", "Bar Food", "Burgers", "BBQ"],
    menu: `${SITE_CONFIG.url}/menu`,
    hasMap: SITE_CONFIG.address.googleMapsUrl,
    acceptsReservations: false,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 34.938,
        longitude: -82.227,
      },
      geoRadius: "50000",
    },
    sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram],
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GTMScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
