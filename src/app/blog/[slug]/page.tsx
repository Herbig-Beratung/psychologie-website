import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Zurück zum Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${post.categoryColor}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-white/50">
              {formatDate(post.date)}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight animate-fade-in-up">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-16 bg-background">
        <article className="max-w-3xl mx-auto px-5 sm:px-6">
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6 md:mb-8 font-medium border-l-4 border-secondary pl-6">
            {post.excerpt}
          </p>
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-foreground/80 leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}

          {/* CTA */}
          <div className="mt-12 p-5 md:p-8 bg-primary-light rounded-2xl border border-border">
            <h3 className="text-lg font-bold text-foreground mb-2">
              Haben Sie Fragen zu diesem Thema?
            </h3>
            <p className="text-sm text-muted mb-4">
              Ich freue mich über Ihre Nachricht. Vereinbaren Sie ein
              unverbindliches Gespräch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-secondary hover:bg-secondary/90 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Kontakt aufnehmen
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Alle Beiträge ansehen
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
