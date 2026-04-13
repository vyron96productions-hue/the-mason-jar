import { SITE_CONFIG } from "@/lib/site-config";

export function MapEmbed() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(193,127,36,0.2)" }}
    >
      {/*
        Replace this placeholder with an actual embed from Google Maps:
        1. Go to maps.google.com
        2. Search "202 Trade St, Greer, SC 29651"
        3. Click Share → Embed a map → Copy HTML
        4. Paste the iframe src value into SITE_CONFIG.address.embedUrl
      */}
      <div
        className="w-full h-64 md:h-80 flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "rgba(61,43,31,0.3)" }}
        role="img"
        aria-label="Map showing The Mason Jar location at 202 Trade St, Greer, SC 29651"
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#c17f24" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <div className="text-center">
          <p className="font-semibold text-sm mb-1" style={{ color: "#f5efe0" }}>
            202 Trade St
          </p>
          <p className="text-xs" style={{ color: "#8a7a6a" }}>
            Greer, SC 29651
          </p>
        </div>
        <a
          href={SITE_CONFIG.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
          style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
        >
          Open in Google Maps
        </a>
        <p className="text-xs italic" style={{ color: "#5c3d2e" }}>
          (Replace this block with Google Maps embed iframe)
        </p>
      </div>
    </div>
  );
}
