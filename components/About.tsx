"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "@/data/portfolio";

function LedgerNumber({ value }: { value: number | string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const numeric = typeof value === "number";

  useEffect(() => {
    if (!numeric || !inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, numeric, value, reduceMotion]);

  const shown = numeric ? (reduceMotion ? value : inView ? display : 0) : value;

  return (
    <span
      ref={ref}
      className="font-display text-4xl sm:text-5xl text-heading tabular-nums"
    >
      {shown}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-label="About me">
      <div className="section-shell">
        <SectionHeading
          index="01"
          kicker="About"
          title={
            <>
              Not a template. <em className="display-italic">A workshop.</em>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 items-start">
          <Reveal>
            <div className="border-l-2 border-accent pl-6">
              <p className="text-lg sm:text-xl leading-relaxed text-heading">
                I&apos;m a final-year IT student who likes software with{" "}
                <em className="font-display italic text-accent-light">
                  fingerprints on it
                </em>{" "}
                — tested, reviewed, shipped.
              </p>
              <div className="mt-5 space-y-4 text-[1rem] leading-[1.8] text-body">
                {profile.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 font-mono text-xs tracking-[0.16em] text-muted">
                BASED IN {profile.location.toUpperCase()} — WORKS WORLDWIDE,
                REMOTE-FRIENDLY
              </p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                ["Now", "Web Dev Intern @ Zidio Development"],
                ["Also", "Open-source contributor, Corsair"],
                ["Stack", "React · Next.js · TS · Node · Python"],
                ["Focus", "AI analytics, real-time apps, ML pipelines"],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="flex items-baseline gap-3 border-b border-line-soft pb-2.5"
                >
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] text-accent w-12 shrink-0">
                    {k.toUpperCase()}
                  </span>
                  <span className="text-body">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="paper-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <span className="font-mono text-[0.65rem] tracking-[0.24em] text-muted">
                LEDGER — RECEIPTS
              </span>
              <span className="font-mono text-[0.65rem] text-moss">● AUDITED</span>
            </div>
            <ol>
              {stats.map((stat, i) => (
                <li
                  key={stat.label}
                  className={`flex items-center justify-between gap-4 px-6 py-5 ${
                    i !== stats.length - 1 ? "border-b border-line-soft" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-baseline gap-1">
                      <LedgerNumber value={stat.value} />
                      {stat.suffix && (
                        <span className="font-display text-2xl text-accent">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-body">{stat.label}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
