import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedItems } from "@/components/home/FeaturedItems";
import { AtmosphereStrip } from "@/components/home/AtmosphereStrip";
import { EventsPreview } from "@/components/home/EventsPreview";
import { WhyLocals } from "@/components/home/WhyLocals";
import { CTAStrip } from "@/components/home/CTAStrip";
import { HomeMapStrip } from "@/components/home/HomeMapStrip";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Mason Jar Bar & Grill | Downtown Greer, SC",
  description:
    "The Mason Jar is Greer's favorite bar and grill on Trade Street. Great burgers, cold drinks, karaoke nights, and live events in downtown Greer, South Carolina.",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedItems />
      <AtmosphereStrip />
      <EventsPreview />
      <WhyLocals />
      <CTAStrip />
      <HomeMapStrip />
    </>
  );
}
