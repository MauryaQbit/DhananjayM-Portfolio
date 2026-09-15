import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import AiToolsArticle from "@/components/blog/AiToolsArticle";
import EdgeArticle from "@/components/blog/EdgeArticle";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Dhananjay Maurya`,
    description: post.excerpt,
  };
}

function ArticleBody({ slug }: { slug: string }) {
  if (slug === "microsoft-edge-2026-browser-review") return <EdgeArticle />;
  return <AiToolsArticle />;
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="pt-28">
        <article className="section-shell py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent-light"
            >
              <FiArrowLeft aria-hidden />
              Back to field notes
            </Link>

            <p className="index-label mt-8">/ Field note</p>
            <h1 className="display-title mt-4 text-4xl sm:text-[3.4rem]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar aria-hidden />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock aria-hidden />
                {post.readTime}
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Post tags">
              {post.tags.map((tag) => (
                <li key={tag} className="tag-stamp">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="paper-card mt-8 p-6 sm:p-8">
              <p className="font-display text-lg leading-relaxed text-heading/90 sm:text-xl">
                {post.excerpt}
              </p>
            </div>

            <ArticleBody slug={post.slug} />

            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/#blog" className="btn btn-outline py-2 px-4 text-sm">
                ← All notes
              </Link>
              <Link href="/#contact" className="btn btn-primary py-2 px-4 text-sm">
                Discuss this with me
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
