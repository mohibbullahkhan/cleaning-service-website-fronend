export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  author: string;
  content: string[];
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "daily-habits-for-a-fresh-home",
    title: "10 Tips for Maintaining a Fresh Home Every Day",
    category: "Home Care",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
    excerpt: "Discover the simple daily habits that keep your home smelling great and looking spotless between deep cleans.",
    readTime: "6 min read",
    author: "Ronald Chen",
    tags: ["daily routine", "home care", "fresh living"],
    content: [
      "A fresh home starts with tiny repeatable habits. Focus on entry points, kitchen counters, and bathroom touchpoints to keep the entire home feeling calm.",
      "Build a three-minute evening reset: clear surfaces, return items to their place, and run a quick floor sweep in high-traffic spaces.",
      "Pair a weekly deeper reset with professional cleaning to protect the finish of your surfaces and reduce the stress of bigger cleaning sessions.",
    ],
  },
  {
    slug: "eco-friendly-cleaning-for-families",
    title: "Why Eco-Friendly Cleaning is Better for Your Family",
    category: "Health",
    date: "May 08, 2026",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=1200&q=80",
    excerpt: "Explore the benefits of using non-toxic cleaning products and how they impact your indoor air quality.",
    readTime: "5 min read",
    author: "Alya Rahman",
    tags: ["eco-friendly", "wellness", "family"],
    content: [
      "Eco-friendly cleaning reduces harsh residue and makes the air in your home feel lighter and more breathable.",
      "For families with children or pets, the move to non-toxic products can improve daily comfort without sacrificing results.",
      "The best approach combines effective ingredients, proper tools, and a methodical process that avoids over-spraying or waste.",
    ],
  },
  {
    slug: "office-productivity-and-cleanliness",
    title: "The Ultimate Guide to Office Productivity & Cleanliness",
    category: "Workspace",
    date: "May 02, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    excerpt: "A clean desk is a productive desk. Learn how to organize your workspace for maximum efficiency.",
    readTime: "7 min read",
    author: "Nadia Putri",
    tags: ["office", "productivity", "workspace"],
    content: [
      "A clean office reduces cognitive load. People spend less time searching for items, and teams can move through their day more confidently.",
      "Focus on common surfaces, shared devices, and waste management. These are the spaces that define how polished a workplace feels.",
      "Recurring office cleaning is not just about appearance; it supports consistency, morale, and a better first impression for clients.",
    ],
  },
  {
    slug: "spring-cleaning-checklist",
    title: "Spring Cleaning Checklist: The Complete Guide",
    category: "Cleaning Tips",
    date: "April 25, 2026",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    excerpt: "Everything you need to know about deep cleaning your home from top to bottom this spring season.",
    readTime: "8 min read",
    author: "Fajar Aditya",
    tags: ["checklist", "deep clean", "seasonal"],
    content: [
      "Spring cleaning works best when you break the project into zones. Start with rooms you use most, then move outward into utility spaces and storage.",
      "Create a checklist that includes windows, skirting, fixtures, and under-furniture areas because these are the spots most easily missed.",
      "A professional deep clean can handle the toughest tasks while you focus on decluttering and organizing your space for the season ahead.",
    ],
  },
  {
    slug: "remove-tough-stains",
    title: "How to Remove Tough Stains from Your Upholstery",
    category: "DIY",
    date: "April 18, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    excerpt: "Don't panic! Here's a step-by-step guide to removing common spills and stains from your favorite sofa.",
    readTime: "5 min read",
    author: "Mira Han",
    tags: ["stain removal", "upholstery", "DIY"],
    content: [
      "The key to stain removal is fast action and the right amount of moisture. Blot first, then apply a targeted treatment designed for the fabric type.",
      "Avoid rubbing aggressively, as that can push the stain deeper or distort the fabric texture.",
      "If the stain is old or large, bring in a professional cleaner to avoid permanent damage and ensure the fabric recovers evenly.",
    ],
  },
  {
    slug: "benefits-of-professional-cleaners",
    title: "The Benefits of Hiring Professional Cleaners",
    category: "Lifestyle",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=1200&q=80",
    excerpt: "Reclaim your time and energy by trusting experts to handle your home maintenance needs.",
    readTime: "6 min read",
    author: "Raka Pratama",
    tags: ["professional cleaning", "time saving", "lifestyle"],
    content: [
      "Professional cleaners bring routine, skill, and speed to tasks that can otherwise consume a full weekend.",
      "The biggest value is consistency. A well-run cleaning schedule protects surfaces and keeps your home feeling ready for guests or family time.",
      "It is also easier to maintain a healthy routine when the most demanding parts of housework are already under control.",
    ],
  },
];
