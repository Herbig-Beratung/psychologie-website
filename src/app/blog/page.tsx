import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogFilter from "@/components/BlogFilter";

export const metadata: Metadata = {
  title: "Blog — Psychologische Beratung Berlin",
  description:
    "Artikel und Einblicke zu MPU-Vorbereitung, mentaler Gesundheit, Resilienz und gesunder Führung — von Psychologe Lukas Herbig in Berlin.",
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up-delay-1">
            Wissen & Einblicke
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
            Artikel zu den Themen MPU, mentale Gesundheit, Resilienz und
            Psychologie in Unternehmen.
          </p>
        </div>
      </section>

      {/* Blog Posts with Filter */}
      <BlogFilter posts={blogPosts} />
    </>
  );
}
