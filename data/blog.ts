import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "free-ai-coding-tools-honest-rundown",
    title: "I Tried a Bunch of Free AI Coding Tools So You Don't Have To",
    excerpt:
      "An honest rundown of five free-ish AI tools — OpenCode, Claude, Cursor, ZCode, and Sakana AI — what they're good for, and where to be careful. Built from real internship experience with Project LOOP and ML traffic forecasting.",
    date: "September 2026",
    readTime: "8 min read",
    tags: ["AI Tools", "OpenCode", "Claude", "Cursor", "ZCode", "Sakana AI"],
    featured: true,
  },
  {
    slug: "microsoft-edge-2026-browser-review",
    title: "Microsoft Edge in 2026: Is It Finally the Browser Microsoft Wanted It to Be?",
    excerpt:
      "Edge was the browser you used to download Chrome. After reading the 2026 release notes and reviews, I break down Copilot everywhere, the leaner UX, enterprise security shifts, and the productivity layer — plus where it still falls short.",
    date: "September 2026",
    readTime: "9 min read",
    tags: ["Browsers", "Microsoft Edge", "Copilot", "Productivity", "Research"],
    featured: true,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
