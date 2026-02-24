"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function FloatingMpuCta() {
  const [minimized, setMinimized] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setScrolling(false), 800);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-8 z-50 flex items-end gap-2 sm:gap-3">
      {/* Speech Bubble */}
      {!minimized && (
        <div
          className="relative bg-card border border-border rounded-2xl shadow-2xl p-3 sm:p-4 w-48 sm:w-56 animate-fade-in-up"
          style={{
            opacity: scrolling ? 0 : 1,
            pointerEvents: scrolling ? "none" : "auto",
            transition: "opacity 0.5s ease",
          }}
        >
          <button
            onClick={() => setMinimized(true)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-background/80 transition-colors"
            aria-label="Minimieren"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 pr-5">
            Kostenloses Erstgespräch
          </h3>
          <a
            href="tel:+493098596064"
            className="flex items-center gap-2 w-full px-3 py-2 sm:px-4 sm:py-2.5 bg-secondary text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen
          </a>
          <p className="text-[11px] text-muted text-center mt-1.5">
            030 98596064
          </p>

          {/* Arrow pointing right */}
          <div className="absolute bottom-4 -right-[7px]">
            <div className="w-3.5 h-3.5 bg-card border-r border-t border-border rotate-45" />
          </div>
        </div>
      )}

      {/* Avatar */}
      <button
        onClick={() => minimized && setMinimized(false)}
        className={`relative w-14 h-14 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-3 ring-secondary shadow-lg shrink-0 transition-transform duration-200 ${
          minimized ? "hover:scale-105 cursor-pointer" : ""
        }`}
        aria-label={minimized ? "Erstgespräch-Info öffnen" : "Lukas Herbig"}
      >
        <img
          src="/lukas-cta.png"
          alt="Lukas Herbig"
          width={512}
          height={512}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </button>
    </div>
  );
}
