export type BookingServiceKey =
  | "postConstruction"
  | "moveInOut"
  | "deepCleaning"
  | "commercial"
  | "residential";

export type BookingService = {
  key: BookingServiceKey;
  title: string;
  price: number;
  description: string;
  accent: string;
};

export const bookingServices: BookingService[] = [
  {
    key: "postConstruction",
    title: "Post Construction Cleaning",
    price: 550,
    description: "Heavy-duty cleanup for newly built or renovated spaces.",
    accent: "from-slate-900 to-slate-700",
  },
  {
    key: "moveInOut",
    title: "Move In / Move Out Cleaning",
    price: 400,
    description: "Detailed reset service for transitions and key handoffs.",
    accent: "from-[#111111] to-[#303030]",
  },
  {
    key: "deepCleaning",
    title: "Deep Cleaning",
    price: 320,
    description: "A more intensive clean for hard-to-reach buildup and detail work.",
    accent: "from-neutral-900 to-neutral-700",
  },
  {
    key: "commercial",
    title: "Commercial Cleaning",
    price: 250,
    description: "Reliable recurring cleaning for offices and workspaces.",
    accent: "from-zinc-900 to-zinc-700",
  },
  {
    key: "residential",
    title: "Residential Cleaning",
    price: 120,
    description: "Fresh, consistent home cleaning for everyday comfort.",
    accent: "from-stone-900 to-stone-700",
  },
];

export const bookingTimeSlots = [
  { label: "Morning", value: "8:00 AM - 12:00 PM" },
  { label: "Afternoon", value: "12:00 PM - 4:00 PM" },
  { label: "Evening", value: "4:00 PM - 8:00 PM" },
];

export const bookingPropertySizes = [
  { label: "Studio", multiplier: 0.9 },
  { label: "1BR", multiplier: 1 },
  { label: "2BR", multiplier: 1.1 },
  { label: "3BR", multiplier: 1.25 },
  { label: "4BR+", multiplier: 1.45 },
];

export const bookingSteps = [
  "Service",
  "Date & Time",
  "Details",
  "Review",
];
