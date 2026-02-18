"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function FloatingMpuCta() {
  const [open, setOpen] = useState(false);
  const [pulsed, setPulsed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }

    if (open) {
      document.addEventListener("keydown", handleKey);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, close]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pulsed) setPulsed(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [pulsed]);

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50">
      {/* Popover */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-200 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Kostenloses Erstgespräch"
      >
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-5 w-64 sm:w-72 relative">
          <button
            onClick={close}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-background transition-colors"
            aria-label="Schließen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
            Kurz & unverbindlich
          </p>
          <h3 className="text-base font-bold text-foreground mb-3">
            Kostenloses Erstgespräch
          </h3>
          <p className="text-sm text-muted mb-4">
            Ich berate Sie gerne telefonisch zu Ihrer MPU-Vorbereitung.
          </p>
          <a
            href="tel:+4917672229459"
            className="flex items-center gap-2 w-full px-4 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen
          </a>
          <p className="text-xs text-muted text-center mt-2">
            +49 176 72229459
          </p>
        </div>
      </div>

      {/* Avatar Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-3 ring-secondary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary/50 ${
          pulsed && !open ? "animate-attention" : ""
        }`}
        aria-label="Erstgespräch vereinbaren"
        aria-expanded={open}
      >
        <Image
          src="/lukas-cta.png"
          alt="Lukas Herbig"
          fill
          className="object-cover object-top"
        />
        {!open && (
          <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-200" />
        )}
      </button>
    </div>
  );
}
