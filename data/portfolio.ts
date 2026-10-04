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
