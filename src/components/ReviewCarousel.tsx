"use client";

import { useState, useCallback, useEffect } from "react";

const reviews = [
  {
    name: "Max",
    text: "Habe mich super aufgehoben und direkt verstanden gefühlt. Würde die Beratung definitiv nochmal in Anspruch nehmen!",
  },
  {
    name: "Alexis",
    text: "Man merkt einfach, dass hier viel Erfahrung dahintersteckt und dass es wirklich um den Menschen geht. Ich hab mich von Anfang an ernst genommen gefühlt. Kann ich auf jeden Fall weiterempfehlen, wenn man kompetente und vertrauensvolle Unterstützung sucht.",
  },
  {
    name: "Mark",
    text: "Sehr angenehme und professionelle Beratung. Die Atmosphäre ist wertschätzend und vertrauensvoll. Die Gespräche waren gut strukturiert, aber gleichzeitig sehr menschlich — und ich habe konkrete Impulse mitnehmen können, die mir im Alltag helfen.",
  },
  {
    name: "Dennis",
    text: "Klare Struktur, kompetente Beratung und ein sehr respektvoller Umgang. Ich wusste nach dem Erstgespräch sofort, dass ich hier richtig bin.",
  },
  {
    name: "Felix",
    text: "Ich war anfangs ziemlich unsicher, was auf mich zukommt, aber die Beratung hat mir schnell die Nervosität genommen. Alles wurde verständlich erklärt und ich hatte immer das Gefühl, gut vorbereitet zu sein. Kann ich wirklich empfehlen.",
  },
  {
    name: "Darjusch",
    text: "Was mich besonders überzeugt hat, war die ehrliche und direkte Art der Beratung. Kein Drumherumreden, sondern konkrete Hilfe, die wirklich weiterbringt. Die Sitzungen waren intensiv, aber nie unangenehm — und am Ende hatte ich das Gefühl, wirklich etwas verstanden zu haben.",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const count = reviews.length;

  const prev = useCallback(() => {
    setActive((c) => (c - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setActive((c) => (c + 1) % count);
  }, [count]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  function getOffset(index: number) {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  }

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Kundenstimmen
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            Das sagen unsere Kunden
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-secondary" />
            ))}
            <span className="text-sm text-muted ml-2">Google-Bewertungen</span>
          </div>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Vorherige Bewertung"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-muted hover:text-foreground hover:border-secondary/50 transition-colors -ml-1 sm:ml-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Nächste Bewertung"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-muted hover:text-foreground hover:border-secondary/50 transition-colors -mr-1 sm:mr-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex items-center justify-center h-[280px] sm:h-[260px] mx-10 sm:mx-14">
            {reviews.map((review, i) => {
              const offset = getOffset(i);
              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 1;
              const isFar = Math.abs(offset) > 1;

              return (
                <div
                  key={i}
                  className="absolute w-[85%] sm:w-[340px] transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${offset * 105}%) scale(${isCenter ? 1 : 0.88})`,
                    opacity: isFar ? 0 : isCenter ? 1 : 0.35,
                    zIndex: isCenter ? 10 : isVisible ? 5 : 0,
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  <div
                    className={`bg-card border rounded-2xl p-6 flex flex-col h-full transition-shadow duration-500 ${
                      isCenter ? "border-secondary/30 shadow-lg" : "border-border"
                    }`}
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <StarIcon key={j} className="w-4 h-4 text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted leading-relaxed flex-1">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-4">
                      {review.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Bewertung ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-secondary"
                    : "w-2 h-2 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
