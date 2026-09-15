import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blog";
import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Field notes | Dhananjay Maurya",
  description:
    "Notes and write-ups on AI tools, internships, and building real-world software.",
};

export default function BlogIndex() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="pt-28">
        <div className="section-shell py-14 sm:py-20">
          <Reveal className="mb-10 max-w-2xl">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-accent">
                05
              </span>
              <span className="index-label">/ Field notes</span>
              <span aria-hidden className="h-px flex-1 self-center bg-line" />
            </div>
            <h1 className="display-title mt-5 text-4xl sm:text-6xl">
              Things I <em className="display-italic">wrote down.</em>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-body">
              Honest notes from internships, experiments, and way too many
              changelogs.
            </p>
          </Reveal>

          <ol className="border-t border-line">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <li className="group border-b border-line transition-colors hover:bg-surface/60">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex gap-5 px-2 py-7 sm:gap-8 sm:px-4"
                  >
                    <span className="w-10 shrink-0 pt-1 font-display italic text-2xl text-muted/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem] tracking-[0.16em] text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <FiCalendar aria-hidden />
                          {post.date.toUpperCase()}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FiClock aria-hidden />
                          {post.readTime.toUpperCase()}
                        </span>
                      </span>
                      <span className="mt-2 block font-display text-2xl leading-snug text-heading transition-colors group-hover:text-accent-light sm:text-[1.8rem]">
                        {post.title}
                      </span>
                      <span className="mt-2 block max-w-2xl text-[0.95rem] leading-relaxed text-body">
                        {post.excerpt}
                      </span>
                    </span>
                    <span className="hidden h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-line text-body transition-all group-hover:rotate-45 group-hover:border-accent group-hover:text-accent-light sm:flex">
                      <FiArrowUpRight size={18} aria-hidden />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12">
            <Link href="/#blog" className="btn btn-outline py-2 px-4 text-sm">
              ← Back home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
