export interface Event {
  id: string;
  title: string;
  day: string; // e.g. "Every Friday"
  time: string;
  description: string;
  badge?: string; // e.g. "Weekly", "Monthly", "Special"
  icon?: string; // emoji shorthand
}

export interface SpecialEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  tag?: string;
}

export const WEEKLY_EVENTS: Event[] = [
  {
    id: "karaoke-friday",
    title: "Karaoke Night",
    day: "Every Friday",
    time: "9:00 PM – Close",
    description:
      "Downtown Greer's favorite night out. Grab the mic, pick your song, and let loose. All skill levels welcome — this crowd is your biggest fan.",
    badge: "Weekly",
    icon: "🎤",
  },
  {
    id: "karaoke-saturday",
    title: "Saturday Karaoke",
    day: "Every Saturday",
    time: "9:00 PM – Close",
    description:
      "We do it again. Saturday nights at The Mason Jar are electric — full bar, great food, and a stage waiting for you.",
    badge: "Weekly",
    icon: "🎤",
  },
  {
    id: "wing-monday",
    title: "Wing Night",
    day: "Every Monday",
    time: "All Night",
    description:
      "Half-price wings, cold beer, and a spot to unwind after the weekend. It's the start of the week done right.",
    badge: "Weekly",
    icon: "🍗",
  },
  {
    id: "taco-tuesday",
    title: "Taco Tuesday",
    day: "Every Tuesday",
    time: "All Night",
    description:
      "Street tacos + margarita specials. The best Tuesday tradition in Greer, SC.",
    badge: "Weekly",
    icon: "🌮",
  },
  {
    id: "burger-beer-wednesday",
    title: "Burger + Beer Wednesday",
    day: "Every Wednesday",
    time: "All Night",
    description:
      "A classic combo at a great price. Pick any burger, grab a cold draft, and call it a win.",
    badge: "Weekly",
    icon: "🍺",
  },
  {
    id: "ladies-night",
    title: "Ladies Night",
    day: "Every Thursday",
    time: "Starting at 8:00 PM",
    description:
      "Drink specials for the ladies, good music, and sometimes live entertainment. Thursday nights at The Mason Jar are worth making plans for.",
    badge: "Weekly",
    icon: "✨",
  },
];

export const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    id: "live-band-1",
    title: "Live Music — Local Artist Night",
    date: "Check our Facebook",
    time: "8:00 PM – Close",
    description:
      "We spotlight local Upstate South Carolina talent throughout the year. Follow us on Facebook @themasonjargreer for the latest lineup.",
    tag: "Live Music",
  },
  {
    id: "game-day",
    title: "Game Day Watch Parties",
    date: "Football Season",
    time: "Kickoff",
    description:
      "The Mason Jar is your game day HQ. Multiple screens, cold beer, great food, and the best sports crowd in downtown Greer.",
    tag: "Sports",
  },
  {
    id: "holiday-events",
    title: "Holiday & Seasonal Events",
    date: "Throughout the Year",
    time: "Varies",
    description:
      "From New Year's Eve to St. Patrick's Day to Greer's local festivals — we celebrate it all. Stay tuned on Facebook for announcements.",
    tag: "Special",
  },
];
