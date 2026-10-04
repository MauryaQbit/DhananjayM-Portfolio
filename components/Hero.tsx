"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDown, FiArrowUpRight, FiFileText } from "react-icons/fi";
import { githubUrl, linkedinUrl, profile } from "@/data/portfolio";
import LocalTime from "./LocalTime";

const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AI products",
  "Open source",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-40 pb-10"
      aria-label="Introduction"
    >
      <div className="blueprint absolute inset-0" aria-hidden />
      {/* warm horizon wash, not a neon glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(255,92,31,0.13), transparent 70%)",
        }}
      />

      <div className="section-shell relative">
        {/* meta ledger row */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] tracking-[0.18em] text-muted"
        >
          <span className="inline-flex items-center gap-2 text-heading">
            <span className="h-2 w-2 rounded-full bg-moss" aria-hidden />
            OPEN TO WORK — 2026
          </span>
          <span aria-hidden className="text-line">/</span>
          <LocalTime />
          <span aria-hidden className="text-line">/</span>
          <span>MUMBAI, IN — 19.07°N</span>
        </motion.div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.5fr_0.9fr] lg:gap-10 items-start">
          <div>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="display-title text-[2.9rem] leading-[0.98] sm:text-7xl lg:text-[5.4rem]"
            >
              I build software
              <br />
              that <em className="display-italic">survives</em>
              <br />
              production.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-body"
            >
              I&apos;m{" "}
              <span className="text-heading font-semibold">{profile.name}</span>
              , a full-stack developer working across{" "}
              <span className="text-heading">
                React, Next.js, TypeScript, Node.js and Python
              </span>{" "}
              — most recently on multi-tenant AI analytics and ML pipelines that
              had to work for real users, not just demos.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn btn-primary">
                See the work
                <FiArrowDown aria-hidden />
              </a>
              <a
                href="/SDE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiFileText aria-hidden />
                SDE.pdf
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !px-3.5"
                aria-label="GitHub profile"
              >
                <FaGithub size={17} aria-hidden />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !px-3.5"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn size={17} aria-hidden />
              </a>
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 font-mono text-xs text-muted"
            >
              Currently: Web Dev Intern @ Zidio ·{" "}
              <a href="#open-source" className="link-sketch text-body">
                10+ PRs merged
              </a>{" "}
              · NEOFuture hackathon recog.
            </motion.p>
          </div>

          {/* Field log — index card, not a code window */}
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative paper-card p-6 sm:p-7"
            aria-label="Field log"
          >
            <span className="tape -top-3 left-8 -rotate-6" aria-hidden />
            <span className="tape -top-3 right-8 rotate-6" aria-hidden />
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.65rem] tracking-[0.24em] text-muted">
                FIELD LOG — NO. 004
              </p>
              <span className="stamp !text-[0.6rem]">Verified</span>
            </div>
            <ul className="mt-5 space-y-4 text-[0.92rem] leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono text-xs text-accent pt-1">01</span>
                <span>
                  <span className="text-heading font-semibold">
                    Project LOOP
                  </span>{" "}
                  — multi-tenant feedback platform with RAG Q&amp;A, led a
                  4-person team.
                </span>
              </li>
              <li className="ticket-perf" aria-hidden />
              <li className="flex gap-3">
                <span className="font-mono text-xs text-accent pt-1">02</span>
                <span>
                  <span className="text-heading font-semibold">
                    CampusSync
                  </span>{" "}
                  — live for 500+ students, QR check-in, predictive booking.
                </span>
              </li>
              <li className="ticket-perf" aria-hidden />
              <li className="flex gap-3">
                <span className="font-mono text-xs text-accent pt-1">03</span>
                <span>
                  <span className="text-heading font-semibold">Traffic ML</span>{" "}
                  — 48k rows, Random Forest MAE ~2.89, Streamlit dashboard.
                </span>
              </li>
            </ul>
            <a
              href="#experience"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light link-sketch"
            >
              How I work
              <FiArrowUpRight aria-hidden />
            </a>
            <p className="mt-5 font-display italic text-lg text-muted">
              — signed, {profile.firstName}
            </p>
          </motion.aside>
        </div>

        {/* marquee ledger */}
        <div className="mt-14 border-y border-line py-3 overflow-hidden" aria-hidden>
          <div className="marquee-track font-mono text-[0.72rem] tracking-[0.24em] text-muted">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {MARQUEE.map((m) => (
                  <span key={`${copy}-${m}`} className="flex items-center">
                    <span className="px-5">{m.toUpperCase()}</span>
                    <span className="text-accent">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
