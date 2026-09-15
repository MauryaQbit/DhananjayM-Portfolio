import type { IconType } from "react-icons";
import { FaTrophy, FaBriefcase, FaGitAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/data/portfolio";

const icons: Record<string, IconType> = {
  trophy: FaTrophy,
  briefcase: FaBriefcase,
  certificate: TbCertificate,
  git: FaGitAlt,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28" aria-label="Achievements and certifications">
      <div className="section-shell">
        <SectionHeading
          index="06"
          kicker="Receipts"
          title={
            <>
              Proof, not <em className="display-italic">promises.</em>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon] ?? FaTrophy;
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="paper-card relative flex h-full flex-col gap-4 overflow-hidden p-6">
                  <span className="tape -top-0 left-1/2 -translate-x-1/2 -rotate-2" aria-hidden />
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-background text-gold">
                    <Icon size={19} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-snug text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mono text-[0.72rem] tracking-[0.12em] text-accent-light uppercase">
                      {item.issuer}
                    </p>
                    {item.date && (
                      <p className="mt-1 font-mono text-xs text-muted">{item.date}</p>
                    )}
                    {item.description && (
                      <p className="pt-2 text-sm leading-relaxed text-body">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="ticket-perf mt-auto" aria-hidden />
                  <p className="font-mono text-[0.62rem] tracking-[0.22em] text-muted">
                    ADMIT — VERIFIED ✳ NO. 00{i + 1}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="mt-6">
          <div className="paper-card flex flex-wrap items-center justify-center gap-4 px-6 py-5 sm:justify-between">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-[#1a0e05] border border-[#7a2c0c]">
                <FaGitAlt size={19} aria-hidden />
              </span>
              <p className="text-sm text-heading sm:text-base">
                <span className="font-display text-xl text-accent-light">10+ merged</span>{" "}
                open-source pull requests
              </p>
            </div>
            <a
              href="https://github.com/MauryaQbit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-body link-sketch"
            >
              <FiCheckCircle aria-hidden />
              All merged into production
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
