export interface SocialLink {
  label: string;
  url: string;
}

export interface Stat {
  /** Numeric stats animate with a counter; non-numeric stats render as text. */
  value: number | string;
  suffix?: string;
  label: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary?: string;
  points: string[];
  highlight?: string;
  link?: { label: string; url: string };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  /** Featured projects render as a large case-study card. */
  featured?: boolean;
  /** Visual preview variant rendered inside a browser-frame mock. */
  preview: "analytics" | "campus" | "traffic";
  badge?: { label: string; icon: "trophy" | "users" };
  result?: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
  icon: "trophy" | "briefcase" | "certificate" | "git";
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}
