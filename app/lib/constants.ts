// ─── Site-wide configuration ─────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "MatchPoint",
  tagline: "Every Call Counts",
  description:
    "The platform built for Philippine basketball officials — get discovered, get booked, and get paid on time.",
  url: "https://matchpoint.ph",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Experience", href: "#experience" },
  { label: "Purpose", href: "#purpose" },
] as const;

// ─── Pain Points Section ─────────────────────────────────────────────────────
export const PAIN_POINTS = [
  {
    icon: "/icons/calendar-x.svg",
    title: "No Consistent Games",
    body: "You are qualified, but organizers cannot find you. Weekends go empty while games are filled by officials with less experience.",
  },
  {
    icon: "/icons/wallet-outline.svg",
    title: "Chasing Your Pay",
    body: "After every game, the wait begins. Following up on payments takes more time than the game itself — and some never arrive.",
  },
  {
    icon: "/icons/chat-outline.svg",
    title: "No Central Inbox",
    body: "Assignments arrive through personal messages, group chats, and phone calls. No record, no confirmation, no accountability.",
  },
  {
    icon: "/icons/people.svg",
    title: "No Way to Stand Out",
    body: "Your certifications and experience exist only on paper. There is no digital profile to show leagues who you are and what you have achieved.",
  },
] as const;

// ─── Features Section ────────────────────────────────────────────────────────
// Icons are semantically matched to each feature (no duplicates).
export const FEATURES = [
  {
    icon: "/icons/user-plus.svg",
    title: "Verified Profile",
    body: "Build credibility with a digital resume of your certifications, experience, and complete game history.",
  },
  {
    icon: "/icons/calendar-x.svg",
    title: "Availability Calendar",
    body: "Set your available dates and block-out times so leagues can only book you when you are ready.",
  },
  {
    icon: "/icons/inbox.svg",
    title: "Game Alerts",
    body: "Get notified instantly when leagues in your area are looking for officials — never miss an opportunity.",
  },
  {
    icon: "/icons/wallet-outline.svg",
    title: "Payment Tracking",
    body: "Know exactly when you will get paid. Track every game fee with a dedicated earnings dashboard.",
  },
  {
    icon: "/icons/trending-up.svg",
    title: "Rating System",
    body: "Earn ratings from organizers after every game and build a reputation that gets you more bookings.",
  },
  {
    icon: "/icons/search.svg",
    title: "Performance Analytics",
    body: "Track your growth — games officiated, total earnings, ratings over time, and booking trends.",
  },
] as const;

// ─── How It Works Section ────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    icon: "/icons/user-plus.svg",
    number: "01",
    text: "Create your verified profile with certifications, experience, and game history",
  },
  {
    icon: "/icons/search.svg",
    number: "02",
    text: "Get discovered by leagues and tournaments actively looking for qualified referees",
  },
  {
    icon: "/icons/inbox.svg",
    number: "03",
    text: "Accept and manage game assignments from one unified inbox",
  },
  {
    icon: "/icons/trending-up.svg",
    number: "04",
    text: "Track your earnings, ratings, and build a reputation that gets you more games",
  },
] as const;

// ─── Social Proof / Testimonial Stats ────────────────────────────────────────
export const TESTIMONIAL_STATS = [
  { value: "500+", label: "Active Referees" },
  { value: "12,000+", label: "Games Officiated" },
  { value: "85", label: "Partner Leagues" },
] as const;

// ─── Marquee ─────────────────────────────────────────────────────────────────
export const MARQUEE_ITEM_COUNT = 8;
