export const SITE_CONFIG = {
  name: "The Mason Jar",
  tagline: "Bar & Grill in Downtown Greer, SC",
  description:
    "The Mason Jar is Greer's favorite bar and grill — great food, cold drinks, live events, and karaoke in the heart of downtown. Come hungry, leave happy.",
  url: "https://themasonjargreer.com",

  // NAP — Name, Address, Phone
  address: {
    street: "202 Trade St",
    city: "Greer",
    state: "SC",
    zip: "29651",
    full: "202 Trade St, Greer, SC 29651",
    googleMapsUrl:
      "https://www.google.com/maps/place/The+Mason+Jar/@34.9375,-82.2266667,17z/data=!3m1!4b1!4m6!3m5!1s0x88582a90bca1119f:0x4de1b40d554d5c2!8m2!3d34.9375!4d-82.2266667!16s%2Fg%2F1hc1j8003",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.6!2d-82.2290554!3d34.9375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582a90bca1119f%3A0x4de1b40d554d5c2!2sThe%20Mason%20Jar!5e0!3m2!1sen!2sus!4v1713000000000",
  },
  phone: {
    display: "(864) 879-4454",
    href: "tel:+18648794454",
  },

  // Hours
  hours: [
    { day: "Monday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "11:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "2:00 AM" },
    { day: "Saturday", open: "11:00 AM", close: "2:00 AM" },
    { day: "Sunday", open: "11:00 AM", close: "9:00 PM" },
  ],

  // Social
  social: {
    facebook: "https://www.facebook.com/themasonjargreer",
    instagram: "https://www.instagram.com/tmjgreer",
    handle: "@tmjgreer",
  },

  // SEO
  seo: {
    ogImage: "/images/og-default.jpg",
    twitterHandle: "@tmjgreer",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
