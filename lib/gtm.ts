export const GTM_ID = "GTM-TB3VRXK8";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

// ── Typed event helpers ──────────────────────────────────────────────────────

export function trackPhoneClick(source: string) {
  pushEvent({ event: "phone_click", click_source: source });
}

export function trackDirectionsClick(source: string) {
  pushEvent({ event: "directions_click", click_source: source });
}

export function trackSocialClick(platform: "facebook" | "instagram", source: string) {
  pushEvent({ event: "social_click", platform, click_source: source });
}

export function trackCTAClick(label: string, destination: string) {
  pushEvent({ event: "cta_click", cta_label: label, destination });
}

export function trackMenuCategoryClick(category: string) {
  pushEvent({ event: "menu_category_click", category });
}
