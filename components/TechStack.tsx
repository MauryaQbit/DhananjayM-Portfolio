import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiJenkins,
  SiLinux,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiClaude,
} from "react-icons/si";
import { TbApi, TbBrandAws, TbBrain } from "react-icons/tb";
import {
  FiKey,
  FiRefreshCw,
  FiLayers,
  FiBox,
  FiDatabase,
  FiTerminal,
  FiCpu,
  FiLayout,
  FiCode,
  FiServer,
  FiCloud,
} from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { techStack } from "@/data/portfolio";

const categoryIcons: Record<string, IconType> = {
  layout: FiLayout,
  code: FiCode,
  server: FiServer,
  database: FiDatabase,
  cloud: FiCloud,
  cpu: FiCpu,
  brain: TbBrain,
};

const techIcons: Record<string, IconType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Tailwind CSS": SiTailwindcss,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Django: SiDjango,
  Flask: SiFlask,
  "REST APIs": TbApi,
  "JWT Authentication": FiKey,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Firebase / Firestore": SiFirebase,
  MySQL: SiMysql,
  "AWS EC2": TbBrandAws,
  "AWS S3": TbBrandAws,
  Git: SiGit,
  GitHub: SiGithub,
  Jenkins: SiJenkins,
  "CI/CD": FiRefreshCw,
  Linux: SiLinux,
  "Data Structures & Algorithms": FiLayers,
  OOP: FiBox,
  DBMS: FiDatabase,
  "Operating Systems": FiTerminal,
  "Machine Learning": FiCpu,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit-learn": SiScikitlearn,
  "Anthropic Claude API": SiClaude,
};

export default function TechStack() {
  return (
    <section id="skills" className="py-20 sm:py-28" aria-label="Tech stack">
      <div className="section-shell">
        <SectionHeading
          index="02"
          kicker="Toolbox"
          title={
            <>
              Drawers I reach for, <em className="display-italic">daily.</em>
            </>
          }
          description="Not a logo wall — these are the tools I've actually shipped with, grouped the way I think about a build."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {techStack.map((category, i) => {
            const CategoryIcon = categoryIcons[category.icon] ?? FiBox;
            return (
              <Reveal key={category.title} delay={(i % 2) * 0.07}>
                <div className="paper-card group relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-line bg-surface-2/60 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-background text-accent-light">
                        <CategoryIcon size={17} aria-hidden />
                      </span>
                      <h3 className="font-display text-xl text-heading">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[0.65rem] text-muted">
                      DRAWER {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* drawer handle */}
                  <div className="flex justify-center py-2.5" aria-hidden>
                    <span className="h-1.5 w-24 rounded-full bg-line" />
                  </div>
                  <ul className="flex flex-wrap gap-2 px-6 pb-6">
                    {category.items.map((label) => {
                      const Icon = techIcons[label];
                      return (
                        <li
                          key={label}
                          className="inline-flex items-center gap-2 border border-line bg-background/60 px-3 py-2 text-[0.82rem] text-body rounded-sm transition-colors hover:border-accent hover:text-heading"
                        >
                          {Icon && (
                            <Icon
                              size={14}
                              aria-hidden
                              className="text-muted group-hover:text-accent-light"
                            />
                          )}
                          {label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
