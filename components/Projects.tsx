import { FaGithub, FaTrophy, FaUsers } from "react-icons/fa";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectPreview from "./ProjectPreview";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";

function Badge({ project }: { project: Project }) {
  if (!project.badge) return null;
  const Icon = project.badge.icon === "trophy" ? FaTrophy : FaUsers;
  const gold = project.badge.icon === "trophy";
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 border px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.1em] uppercase rounded-sm ${
        gold
          ? "border-gold/60 bg-gold/10 text-gold"
          : "border-accent/60 bg-accent-soft text-accent-light"
      }`}
    >
      <Icon size={12} aria-hidden />
      {project.badge.label}
    </span>
  );
}

function ProjectCard({ project, no }: { project: Project; no: string }) {
  const featured = project.featured;
  return (
    <Reveal>
      <article
        className={`group paper-card overflow-hidden ${
          featured ? "md:grid md:grid-cols-[0.95fr_1.05fr]" : "flex h-full flex-col"
        }`}
      >
        <div className={`p-5 pb-0 sm:p-6 sm:pb-0 ${featured ? "md:p-8 md:pr-0 md:pb-8" : ""}`}>
          <ProjectPreview variant={project.preview} />
          <p className="mt-3 flex items-center justify-between font-mono text-[0.65rem] tracking-[0.18em] text-muted">
            <span>FIG. {no}</span>
            <span>{project.preview.toUpperCase()}</span>
          </p>
        </div>

        <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? "md:pl-8" : ""}`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-accent font-bold">{no}</span>
            <Badge project={project} />
          </div>

          <h3 className="mt-3 font-display text-2xl sm:text-[1.75rem] leading-tight text-heading">
            {project.title}
          </h3>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-body">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.features.slice(0, featured ? 6 : 4).map((feature) => (
              <li key={feature.slice(0, 32)} className="flex gap-2.5 text-sm leading-relaxed text-body">
                <FiCheck className="mt-1 shrink-0 text-moss" size={14} aria-hidden />
                {feature}
              </li>
            ))}
          </ul>

          {project.result && (
            <p className="mt-4 border-l-2 border-moss bg-moss/10 px-4 py-2.5 text-sm text-heading">
              {project.result}
            </p>
          )}

          <p className="mt-5 font-mono text-[0.7rem] leading-relaxed tracking-wide text-muted">
            {project.tech.join("  /  ").toUpperCase()}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 pt-1 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !py-2 !px-4 !text-[0.82rem]"
              aria-label={`${project.title} — GitHub`}
            >
              <FaGithub aria-hidden />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !py-2 !px-4 !text-[0.82rem]"
                aria-label={`${project.title} — live demo`}
              >
                Live site
                <FiArrowUpRight aria-hidden />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28" aria-label="Projects">
      <div className="section-shell">
        <SectionHeading
          index="04"
          kicker="Selected work"
          title={
            <>
              Pinned to the <em className="display-italic">board.</em>
            </>
          }
          description="Three builds I'd defend in a code review — an AI analytics platform, a live campus system, and an end-to-end ML pipeline."
        />

        <div className="flex flex-col gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} no={String(i + 1).padStart(2, "0")} />
          ))}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {standard.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                no={String(featured.length + i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
