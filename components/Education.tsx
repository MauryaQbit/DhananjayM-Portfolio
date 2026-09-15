import { FaGraduationCap } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28" aria-label="Education">
      <div className="section-shell">
        <SectionHeading
          index="07"
          kicker="Schooling"
          title={
            <>
              Where I <em className="display-italic">learned the rules.</em>
            </>
          }
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.07}>
              <div className="paper-card relative flex h-full flex-col gap-4 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-background text-accent-light">
                    <FaGraduationCap size={19} aria-hidden />
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.16em] uppercase rounded-sm ${
                      edu.status === "Pursuing"
                        ? "border-moss/50 bg-moss/10 text-moss"
                        : "border-line text-muted"
                    }`}
                  >
                    {edu.status === "Pursuing" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden />
                    )}
                    {edu.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[1.35rem] leading-snug text-heading">
                    {edu.degree}
                  </h3>
                  <p className="mt-1.5 font-mono text-[0.75rem] tracking-[0.1em] text-accent-light uppercase">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {edu.location} · {edu.period}
                  </p>
                </div>
                <div className="ticket-perf mt-auto" aria-hidden />
                <p className="font-mono text-[0.62rem] tracking-[0.22em] text-muted">
                  REG. NO. EDU-00{i + 1} ✳ MUMBAI
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
