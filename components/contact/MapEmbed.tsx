import { SITE_CONFIG } from "@/lib/site-config";

export function MapEmbed() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(216,155,60,0.2)" }}
    >
      <iframe
        src={SITE_CONFIG.address.embedUrl}
        width="100%"
        height="360"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Mason Jar location — 202 Trade St, Greer, SC 29651"
      />
    </div>
  );
}
