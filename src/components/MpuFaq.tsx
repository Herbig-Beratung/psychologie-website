"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Brauche ich überhaupt eine professionelle Vorbereitung?",
    a: "Eine MPU ohne Vorbereitung zu bestehen ist möglich, aber deutlich schwieriger. Der Gutachter prüft nicht nur Wissen, sondern vor allem Einsicht, Veränderungsmotivation und stabile Verhaltensänderung. Eine strukturierte Vorbereitung hilft Ihnen, diese Punkte glaubwürdig und überzeugend darzulegen.",
  },
  {
    q: "Wann sollte ich mit der Vorbereitung beginnen?",
    a: "So früh wie möglich. Abhängig von Ihrem Fall können Nachweisprogramme über 6 bis 12 Monate erforderlich sein, die vor der Begutachtung abgeschlossen sein müssen. Die inhaltliche Beratung selbst kann parallel dazu stattfinden. Im kostenlosen Erstgespräch klären wir den idealen Zeitplan für Ihren Fall.",
  },
  {
    q: "Wie läuft das kostenlose Erstgespräch ab?",
    a: "Das Erstgespräch dauert ca. 15–20 Minuten und findet telefonisch oder per Video statt. Ich verschaffe mir einen Überblick über Ihre Situation, beantworte Ihre Fragen und gebe Ihnen eine erste Einschätzung zum weiteren Vorgehen. Danach entscheiden Sie in Ruhe, ob und wie Sie die Vorbereitung starten möchten.",
  },
  {
    q: "Online oder vor Ort — was ist besser?",
    a: "Beide Formate sind gleich wirksam. Die Online-Beratung bietet maximale Flexibilität und spart Anfahrtszeit. Präsenz-Sitzungen finden in angemieteten Beratungsräumen in Berlin Mitte oder Neukölln statt. Viele Klienten kombinieren beide Formate — das besprechen wir individuell.",
  },
  {
    q: "Was unterscheidet Ihre Beratung von anderen Anbietern?",
    a: "Ich arbeite als ausgebildeter Psychologe (M.Sc. Klinische Psychologie) mit einem systemischen Ansatz. Das bedeutet: Ich helfe Ihnen nicht nur, die richtigen Antworten zu kennen, sondern die Hintergründe Ihres Verhaltens wirklich zu verstehen und nachhaltig zu verändern. Zusätzlich übernehme ich die Organisation rund um Nachweise und MPU-Terminierung.",
  },
];

export default function MpuFaq() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  function toggleItem(index: number) {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = openItems[i] ?? false;
        return (
          <div
            key={i}
            className="border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleItem(i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-card hover:bg-primary-light/50 transition-colors"
            >
              <span className="font-medium text-foreground text-sm sm:text-base">
                {item.q}
              </span>
              <svg
                className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 pt-1 bg-card">
                <p className="text-sm text-muted leading-relaxed">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
