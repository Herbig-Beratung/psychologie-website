"use client";

import Image from "next/image";

export default function FloatingMpuCta() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-end gap-3">
      {/* Text Card */}
      <div className="bg-card border border-border rounded-2xl shadow-2xl p-4 sm:p-5 w-56 sm:w-64">
        <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
          Kurz & unverbindlich
        </p>
        <h3 className="text-sm sm:text-base font-bold text-foreground mb-2">
          Kostenloses Erstgespräch
        </h3>
        <p className="text-xs sm:text-sm text-muted mb-3">
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
        <p className="text-[11px] text-muted text-center mt-1.5">
          +49 176 72229459
        </p>
      </div>

      {/* Avatar */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-3 ring-secondary shadow-lg shrink-0">
        <Image
          src="/lukas-cta.png"
          alt="Lukas Herbig"
          width={96}
          height={96}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
