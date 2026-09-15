import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-28" aria-label="Blog">
      <div className="section-shell">
        <SectionHeading
          index="05"
          kicker="Field notes"
          title={
            <>
              Things I <em className="display-italic">wrote down.</em>
            </>
          }
          description="Research dives and honest tool rundowns — written like I'd explain them to a classmate, with sources attached."
        />

        <ol className="border-t border-line">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li className="group border-b border-line transition-colors hover:bg-surface/60">
                <Link href={`/blog/${post.slug}`} className="flex gap-5 px-2 py-7 sm:gap-8 sm:px-4">
                  <span className="font-display italic text-2xl text-muted/70 w-10 shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem] tracking-[0.16em] text-muted">
                      <span>{post.date.toUpperCase()}</span>
                      <span aria-hidden>·</span>
                      <span>{post.readTime.toUpperCase()}</span>
                      {post.featured && (
                        <>
                          <span aria-hidden>·</span>
                          <span className="text-accent">FEATURED</span>
                        </>
                      )}
                    </span>
                    <span className="mt-2 block font-display text-2xl sm:text-[1.8rem] leading-snug text-heading group-hover:text-accent-light transition-colors">
                      {post.title}
                    </span>
                    <span className="mt-2 line-clamp-2 block max-w-2xl text-[0.95rem] leading-relaxed text-body">
                      {post.excerpt}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                          #{tag}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-line text-body transition-all group-hover:border-accent group-hover:text-accent-light group-hover:rotate-45">
                    <FiArrowUpRight size={18} aria-hidden />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
