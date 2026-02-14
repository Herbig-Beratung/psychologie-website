"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

const categories = [
  { key: "Alle", label: "Alle" },
  { key: "MPU", label: "MPU" },
  { key: "Privatpersonen", label: "F\u00fcr Privatpersonen" },
  { key: "Unternehmen", label: "F\u00fcr Unternehmen" },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface BlogFilterProps {
  posts: BlogPost[];
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [active, setActive] = useState("Alle");

  const filtered =
    active === "Alle" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                active === cat.key
                  ? "bg-secondary text-white shadow-md"
                  : "bg-primary-light text-foreground hover:bg-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
            >
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${post.categoryColor}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-secondary font-medium text-sm group-hover:text-secondary/80 transition-colors">
                  Weiterlesen
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
