import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28" aria-label="Experience">
      <div className="section-shell">
        <SectionHeading
          index="03"
          kicker="Experience"
          title={
            <>
              Stamped in, <em className="display-italic">shipped out.</em>
            </>
          }
        />

        <ol className="mx-auto flex max-w-3xl flex-col gap-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <li className="paper-card relative overflow-hidden p-6 sm:p-8">
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-display italic text-6xl text-line/70 select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.14em] rounded-sm ${
                      job.current
                        ? "border-moss/50 bg-moss/10 text-moss"
                        : "border-line bg-surface-2 text-muted"
                    }`}
                  >
                    {job.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden />
                    )}
                    {job.period.toUpperCase()}
                  </span>
                  {job.current && <span className="stamp !py-1">Current</span>}
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-[1.7rem] text-heading">
                  {job.role}
                </h3>
                <p className="mt-1 font-mono text-[0.8rem] tracking-[0.12em] text-accent-light uppercase">
                  {job.company}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point.slice(0, 32)}
                      className="flex gap-3 text-[0.95rem] leading-relaxed text-body"
                    >
                      <span aria-hidden className="text-accent font-bold">
                        →
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {(job.highlight || job.link) && (
                  <div className="ticket-perf my-5" aria-hidden />
                )}

                {(job.highlight || job.link) && (
                  <div className="flex flex-wrap items-center gap-4">
                    {job.highlight && (
                      <span className="tag-stamp !border-accent/60 !text-accent-light">
                        ✳ {job.highlight}
                      </span>
                    )}
                    {job.link && (
                      <a
                        href={job.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-body link-sketch"
                      >
                        <FaGithub aria-hidden />
                        {job.link.label}
                      </a>
                    )}
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
