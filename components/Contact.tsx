import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";
import { githubUrl, linkedinUrl, profile } from "@/data/portfolio";
import LocalTime from "./LocalTime";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32" aria-label="Contact">
      <div className="section-shell">
        <Reveal className="paper-card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
          <span className="tape top-0 left-1/2 -translate-x-1/2 rotate-2" aria-hidden />
          <p className="index-label">/ 08 — Contact</p>
          <h2 className="display-title mt-4 max-w-2xl text-4xl sm:text-6xl">
            Have something{" "}
            <em className="display-italic">worth building?</em>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
            Internships, freelance builds, open-source collabs, or just a gnarly
            bug you want a second pair of eyes on — my inbox is the fastest way
            in. I reply within a day, usually with questions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiMail aria-hidden />
              {profile.email}
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaLinkedinIn aria-hidden />
              LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaGithub aria-hidden />
              GitHub
            </a>
          </div>

          <div className="ticket-perf my-8" aria-hidden />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <LocalTime />
            <a
              href={`mailto:${profile.email}?subject=Project%20idea%20—%20let's%20talk`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light link-sketch"
            >
              Or pitch me in one line
              <FiArrowUpRight aria-hidden />
            </a>
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted">
              AVG. REPLY — UNDER 24H
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
