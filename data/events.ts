export interface EventItem {
  name: string;
  slug: string;
  badge: string | null;
  city: string;
  date: string;
  locationText: string;
  heroImage: string;
  description?: string;
}

export const eventsData: EventItem[] = [
  {
    name: "TUNIS",
    slug: "tunis",
    badge: "NEXT EVENT",
    city: "TUNIS",
    date: "OCTOBER 2026",
    locationText: "HABIB BOURGUIBA AVENUE",
    heroImage: "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Tunisia-SidiBouSaid-760300645-1440x823.jpg",
    description: "Join us for an unforgettable experience in the heart of Tunis, where culture meets excitement. Our event promises a blend of music, art, and culinary delights that will leave you inspired and entertained.",
  },
  {
    name: "NABEUL",
    slug: "nabeul",
    badge: null,
    city: "NABEUL",
    date: "NOVEMBER 2026",
    locationText: "THE BEACHFRONT GARDENS",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdMKpvBgvnqVqql7_wz-x7vRRysFkQ2j-AUX8n7UXdVZ11vjn_RXBPoo&s=10",
    description: "Experience the charm of Nabeul with our upcoming event, featuring local artisans, live performances, and a vibrant atmosphere that captures the essence of this coastal town.",
  },
];