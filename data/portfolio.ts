import type {
  Achievement,
  Education,
  Experience,
  Project,
  SocialLink,
  Stat,
  TechCategory,
} from "@/types";

/* ------------------------------------------------------------------ */
/* Profile — the single source of truth for personal details & links.  */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Dhananjay Maurya",
  firstName: "Dhananjay",
  initials: "DM",
  role: "Software Engineer & Full-Stack Developer",
  location: "Mumbai, India",
  email: "dhananjaymaury366@gmail.com",
  phone: "+91-8268303521",
  tagline:
    "I build modern web applications, AI-powered products, and real-world software systems using technologies like React, Next.js, TypeScript, Node.js, and Python.",
  about: [
    "I'm a final-year Information Technology student and full-stack developer passionate about building practical, production-style applications. I work across frontend and backend development with React, Next.js, TypeScript, Node.js, and Python.",
    "My experience includes AI-powered analytics, real-time applications, REST APIs, machine learning pipelines, and open-source development.",
  ],
};

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/MauryaQbit" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/dhananjay-maurya-8943312bb/" },
];

export const githubUrl = "https://github.com/MauryaQbit";
export const linkedinUrl = "https://www.linkedin.com/in/dhananjay-maurya-8943312bb/";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* About stats — only figures supported by the provided résumé.        */
/* ------------------------------------------------------------------ */

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Merged PRs" },
  { value: 3, suffix: "-Month", label: "Web Development Internship" },
  { value: 4, suffix: "+", label: "Major Technologies" },
  { value: "🏆", label: "Hackathon Recognition" },
];

/* ------------------------------------------------------------------ */
/* Tech stack — exactly the technologies provided, grouped.            */
/* ------------------------------------------------------------------ */

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    icon: "database",
    items: [ "MongoDB", "Firebase / Firestore", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS EC2", "AWS S3", "Git", "GitHub",  "CI/CD", "Linux"],
  },
  {
    title: "Core CS",
    icon: "cpu",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Machine Learning",
    ],
  },
  {
    title: "AI / ML",
    icon: "brain",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Anthropic Claude API"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience — Zidio is ongoing: "Jul 2026 – Present".                */
/* ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "Zidio Development",
    period: "Jul 2026 – Present",
    current: true,
    points: [
      "Assisting in the design, development, and deployment of responsive web applications using modern front-end and back-end technologies.",
      "Collaborating with UI/UX teams to implement intuitive and visually appealing user interfaces.",
      "Writing clean, modular, and well-documented code following industry best practices and coding standards.",
      "Integrating third-party APIs and back-end services to support dynamic and interactive application functionality.",
      "Participating in code reviews, debugging sessions, and performance optimization tasks.",
      "Supporting development documentation and following agile development methodologies.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Corsair Open Source",
    period: "2026",
    points: [
      "Delivered 10+ pull requests, all merged into production, building API plugins in TypeScript integrated through REST APIs.",
      "Participated in maintainer-led code reviews and CI/CD workflows, improving code quality and adherence to project standards.",
    ],
    highlight: "10+ merged pull requests",
    link: { label: "github.com/MauryaQbit", url: "https://github.com/MauryaQbit" },
  },
];

/* ------------------------------------------------------------------ */
/* Projects — only real URLs are used.                                 */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Customer Feedback Intelligence Platform",
    description:
      "An AI-powered multi-tenant customer feedback analytics platform designed to transform raw feedback into actionable insights.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Anthropic Claude API",
      "Vercel",
    ],
    features: [
      "Multi-tenant architecture with Role-Based Access Control (RBAC)",
      "Organization-level dashboards and responsive analytics interfaces",
      "AI-powered sentiment classification and theme clustering",
      "RAG-based natural-language Q&A over customer feedback",
      "Recharts visualizations and Zod-validated forms",
      "NextAuth authentication with Vercel deployment",
    ],
    githubUrl: "https://github.com/MauryaQbit",
    featured: true,
    preview: "analytics",
    badge: { label: "Led a 4-member team", icon: "users" },
  },
  {
    id: 2,
    title: "CampusSync – Smart Campus Management Platform",
    description:
      "A smart campus management platform providing role-based access, real-time room availability, QR-based check-in/check-out, and predictive booking functionality.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Firestore"],
    features: [
      "Role-based authentication for students, faculty, and admins",
      "Firebase Authentication with custom security rules",
      "Real-time floor plan interface and room availability via Firestore listeners",
      "Supports 500+ students",
      "Optimistic locking to prevent double-bookings",
      "Per-room QR codes for check-in/check-out",
      "Predictive booking engine using historical usage logs",
    ],
    githubUrl: "https://github.com/MauryaQbit",
    liveUrl: "https://campussync-c3d3c.web.app",
    preview: "campus",
    badge: { label: "Top Team Recognition — NEOFuture Hackathon 2026", icon: "trophy" },
  },
  {
    id: 3,
    title: "Smart City Traffic Forecasting",
    description:
      "An end-to-end machine learning pipeline for forecasting traffic patterns across multiple city traffic junctions.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    features: [
      "48,120-row dataset spanning 4 traffic junctions",
      "Data preprocessing and feature engineering",
      "Model training and evaluation: Linear Regression, Random Forest, SARIMA, LSTM",
      "Interactive Streamlit dashboard",
    ],
    githubUrl: "https://github.com/MauryaQbit",
    preview: "traffic",
    result: "Random Forest achieved the best performance with MAE ~2.89.",
  },
  {
    id: 4,
    title: "Expanse Tracker — Personal Expense Manager",
    description:
      "A Django web application for logging and analysing day-to-day spending, with machine-learning categorisation of expenses typed in free text, spending goals, and PDF report generation.",
    tech: [
      "Django",
      "Django REST Framework",
      "Python",
      "scikit-learn",
      "NLTK",
      "Pandas",
      "SQLite",
      "JavaScript",
    ],
    features: [
      "Log expenses with date, description, amount and category",
      "Automatic categorisation of new entries from their description using TF-IDF vectorisation and a Random Forest classifier",
      "NLTK-based text preprocessing (tokenisation, stop-word removal) feeding the classifier",
      "Per-user accounts, profiles and currency preferences",
      "Savings goals that compute progress and the daily amount required to hit the target",
      "PDF report generation with ReportLab and embedded QR codes",
      "REST APIs exposed through Django REST Framework alongside a JavaScript-driven UI",
      "Daily expense limits with email notifications when approached",
    ],
    githubUrl: "https://github.com/MauryaQbit/Expanse-Tracker",
    preview: "expense",
  },
  {
    id: 5,
    title: "IronFlex Gym — 3D Fitness Experience",
    description:
      "A React gym site with a real-time 3D hero, booking and cart flows, and a rule-based AI coach that hands off to WhatsApp. Deployed on Vercel.",
    tech: [
      "React 19",
      "Vite 8",
      "react-three-fiber",
      "Three.js",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
    ],
    features: [
      "Real-time 3D hero and gym-equipment scenes built with react-three-fiber, drei and postprocessing",
      "Firebase authentication with a demo-mode fallback so the site works before sign-in",
      "Per-user Firestore documents with debounced auto-sync of bookings, cart and weight logs",
      "Graceful degradation: local state stays authoritative when Firebase isn't configured",
      "Class schedule, trainer profiles and programmes driven from a single data module",
      "Rule-based coach chat with keyword matching plus a WhatsApp deep-link handoff",
      "BMI calculator, weight log, and an offline-friendly shop cart with running totals",
    ],
    githubUrl: "https://github.com/MauryaQbit/IronFlex-Gym",
    liveUrl: "https://iron-flex-gym.vercel.app",
    preview: "gym",
    badge: { label: "Live on Vercel", icon: "trophy" },
  },
  {
    id: 6,
    title: "SmartDesk AI — Full-Stack Helpdesk",
    description:
      "A MERN helpdesk platform that triages tickets with Gemini, answers from company documents with local RAG, and keeps support rooms in sync over Socket.io.",
    tech: [
      "React 19",
      "Node.js 24",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "Gemini API",
      "Tailwind CSS",
      "Docker",
    ],
    features: [
      "Ticket lifecycle (open → assigned → resolved → closed) with priorities, ownership, SLA countdown and history",
      "Role-based workspaces for customer, agent and admin, enforced server-side rather than only hidden in the UI",
      "AI triage returning priority, sentiment, category and a summary, plus suggested draft replies",
      "Grounded RAG assistant: 500-char chunks with 50-char overlap, embedded with Ollama's nomic-embed-text, retrieved by in-memory cosine similarity — no vector database",
      "Assistant refuses to guess and recommends human escalation when retrieval finds no usable context",
      "Real-time ticket rooms over Socket.io with REST fallback for message history",
      "Hardened API: JWT in an httpOnly cookie, Helmet, CORS, rate limiting, HPP, mongo sanitisation and Zod validation",
      "node-cron escalates overdue open tickets to Urgent; Jest + Supertest suite runs in GitHub Actions",
    ],
    githubUrl: "https://github.com/MauryaQbit/Smartdesk-ai",
    liveUrl: "https://smartdesk-ai-alpha.vercel.app",
    preview: "helpdesk",
    badge: { label: "AI + RAG", icon: "trophy" },
  },
  {
    id: 7,
    title: "python-base-billing-system",
    description:
      "A Flask point-of-sale app covering product browsing, cart, checkout and downloadable PDF invoices, with a server-rendered UI and email delivery built in.",
    tech: ["Python", "Flask", "SQLite", "ReportLab", "Bootstrap", "HTML/CSS"],
    features: [
      "Product catalogue seeded from schema.sql with categories, stock levels and SKUs",
      "Cart, checkout and invoice views with configurable 18% tax",
      "PDF invoices generated with ReportLab (A4, styled tables) and served for download",
      "Email delivery of invoices and attachments over SMTP, falling back to console logging when unconfigured",
      "Per-invoice upload folders with an extension allowlist and a 16 MB size cap",
      "Sessions hardened with HttpOnly, SameSite=Lax and an optional Secure flag; secret key persisted with 0600 permissions",
      "Admin product management and a Python test suite",
    ],
    githubUrl: "https://github.com/MauryaQbit/python-base-billing-system",
    preview: "billing",
  },
];

/* ------------------------------------------------------------------ */
/* Achievements & certifications                                       */
/* ------------------------------------------------------------------ */

export const achievements: Achievement[] = [
  {
    title: "Top Team Recognition",
    issuer: "NEOFuture Hackathon 2026",
    date: "Shree L.R. Tiwari College of Engineering",
    icon: "trophy",
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    issuer: "Forage",
    date: "September 2025",
    description: "Completed financial data analysis and trading dashboard simulation.",
    icon: "briefcase",
  },
  {
    title: "Foundation Course on Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation",
    icon: "certificate",
  },
];

export const openSource = {
  heading: "Open Source",
  message: "I don't just build projects — I contribute to real codebases.",
  prCount: "10+",
  prLabel: "Pull Requests",
  prSub: "Merged into production",
  technologies: ["TypeScript", "REST APIs", "CI/CD", "Code Reviews"],
  githubUrl: "https://github.com/MauryaQbit",
};

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    degree: "B.E. in Information Technology",
    institution: "Shree L.R. Tiwari College of Engineering",
    location: "Mumbai",
    period: "2023 – 2027",
    status: "Pursuing",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Aditya Academy",
    location: "Mumbai",
    period: "Graduated 2023",
    status: "Completed",
  },
];
