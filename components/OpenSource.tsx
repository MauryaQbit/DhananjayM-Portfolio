import { FaGithub } from "react-icons/fa";
import { FiGitMerge } from "react-icons/fi";
import Reveal from "./Reveal";
import { openSource } from "@/data/portfolio";

export default function OpenSource() {
  return (
    <section id="open-source" className="py-20 sm:py-28" aria-label="Open source">
      <div className="section-shell">
        <Reveal>
          <div className="paper-card relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
            <span className="tape top-0 left-10 -rotate-3" aria-hidden />
            <p
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-2 select-none font-display italic text-[9rem] leading-none text-line/40"
            >
              &amp;
            </p>
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <p className="index-label">/ {openSource.heading}</p>
                <h2 className="display-title mt-4 max-w-xl text-3xl sm:text-[2.6rem]">
                  I don&apos;t just build —{" "}
                  <em className="display-italic">I contribute.</em>
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-body">
                  {openSource.message} Maintainer-led reviews, CI/CD, REST API
                  plugins in TypeScript — the unglamorous work that keeps real
                  codebases alive.
                </p>
                <div className="mt-5 flex flex-wrap gap-2" aria-label="Open-source tooling">
                  {openSource.technologies.map((tech) => (
                    <span key={tech} className="tag-stamp">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-6">
                  <a
                    href={openSource.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-fit"
                  >
                    <FaGithub aria-hidden />
                    Walk the commits
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 border-t border-line pt-6 lg:flex-col lg:items-end lg:border-0 lg:pt-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#7a2c0c] bg-accent text-[#1a0e05]">
                  <FiGitMerge size={24} aria-hidden />
                </span>
                <div className="lg:text-right">
                  <p className="font-display text-6xl leading-none text-heading sm:text-7xl">
                    {openSource.prCount}
                  </p>
                  <p className="mt-2 font-semibold text-heading">{openSource.prLabel}</p>
                  <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
                    {openSource.prSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
