import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "MPU Beratung — Verkehrspsychologische Beratung & MPU-Vorbereitung",
  description:
    "Strukturierte, evidenzbasierte MPU-Vorbereitung mit 4–8 Stunden verkehrspsychologischer Beratung. Online oder in Präsenz in Berlin. Komplettpaket für 1.200 €.",
};

export default function MpuPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <Link
            href="/services"
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
            Zurück zur Übersicht
          </Link>
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Für Einzelpersonen
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up-delay-1">
            Verkehrspsychologische Beratung &<br className="hidden md:block" />{" "}MPU-Vorbereitung
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
            Strukturierte, evidenzbasierte Vorbereitung auf die
            medizinisch-psychologische Untersuchung — mit Fokus auf Einsicht,
            Veränderung und nachhaltige Stabilität.
          </p>
        </div>
      </section>

      {/* Überblick */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Das Angebot
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Was Sie erwartet
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Meine Beratung richtet sich an alle, die eine{" "}
                  <strong className="text-foreground">MPU-Anordnung</strong> erhalten haben — ob wegen{" "}
                  <strong className="text-foreground">Alkohol, Drogen, Punkten</strong> oder im Zusammenhang
                  mit dem{" "}
                  <strong className="text-foreground">Personenbeförderungsschein (P-Schein)</strong>.
                  Unabhängig vom Anlass begleite ich Sie strukturiert und individuell
                  durch den gesamten Vorbereitungsprozess.
                </p>
                <p>
                  Die verkehrspsychologische Beratung umfasst je nach
                  individuellem Fall <strong className="text-foreground">4 bis 8 Stunden</strong> intensive
                  Einzelberatung. Gemeinsam erarbeiten wir die Grundlagen für
                  eine erfolgreiche MPU — von der Ursachenanalyse über die
                  Veränderungsmotivation bis hin zur Rückfallprophylaxe.
                </p>
                <p>
                  Die Beratung kann flexibel{" "}
                  <strong className="text-foreground">online oder in Präsenz</strong> stattfinden.
                  Für Präsenz-Sitzungen werden Beratungsräume in{" "}
                  <strong className="text-foreground">Berlin Mitte</strong> oder{" "}
                  <strong className="text-foreground">Berlin Neukölln</strong> angemietet,
                  um eine professionelle und angenehme Atmosphäre zu
                  gewährleisten.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">Umfang</h3>
                </div>
                <p className="text-sm text-muted">4–8 Stunden verkehrspsychologische Einzelberatung, individuell angepasst an Ihren Fall</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">Format</h3>
                </div>
                <p className="text-sm text-muted">Online-Beratung oder Präsenz in Berlin (Mitte oder Neukölln) — Sie entscheiden</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">Komplettpaket</h3>
                </div>
                <p className="text-sm text-muted">Alle Sitzungen, Materialien, Vermittlung zu Instituten und Terminierung inklusive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beratungsinhalte */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Beratungsinhalte
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-10">
            Was wir gemeinsam erarbeiten
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ursachenanalyse",
                description:
                  "Gemeinsame Analyse der Hintergründe und Auslöser, die zur Auffälligkeit geführt haben. Verstehen, was passiert ist und warum.",
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
              },
              {
                title: "Veränderungsmotivation",
                description:
                  "Entwicklung einer glaubwürdigen, intrinsischen Motivation zur Veränderung — nicht nur für die MPU, sondern für Ihr Leben.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Aufarbeitung",
                description:
                  "Erkennen und Bearbeiten dysfunktionaler Verhaltensmuster. Neue Strategien für den Umgang mit kritischen Situationen.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Rückfallprophylaxe",
                description:
                  "Entwicklung konkreter Strategien und Handlungspläne, um Rückfälle dauerhaft zu verhindern.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusätzliche Leistungen */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Rundum-Service
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Mehr als nur Beratung
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Die MPU-Vorbereitung endet nicht bei den Beratungssitzungen.
                  Ich übernehme für Sie die{" "}
                  <strong className="text-foreground">Vermittlung zu zertifizierten Instituten</strong>{" "}
                  für die Durchführung von Abstinenznachweisen und unterstütze
                  Sie bei der{" "}
                  <strong className="text-foreground">Terminierung Ihres MPU-Termins</strong>.
                </p>
                <p>
                  So können Sie sich voll auf die inhaltliche Vorbereitung
                  konzentrieren, während ich die organisatorischen Schritte
                  koordiniere.
                </p>
              </div>
            </div>

            <div>
              <ul className="space-y-4">
                {[
                  "Vermittlung zu Instituten für Abstinenznachweise (Urin-/Haaranalyse)",
                  "Unterstützung bei der MPU-Terminierung",
                  "Begleitung bei der Abstinenznachweis-Dokumentation",
                  "MPU-Simulation mit detailliertem Feedback",
                  "Bereitstellung aller relevanten Materialien und Unterlagen",
                  "Nachbetreuung und Rückfragen auch nach Abschluss",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preis & CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Komplettpaket
          </p>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">{"1.200 €"}</p>
          <p className="text-white/60 text-sm mb-8">
            inkl. aller Sitzungen, Materialien & organisatorischer Begleitung
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
            In einem unverbindlichen Erstgespräch klären wir Ihre individuelle
            Situation und ich berate Sie zum weiteren Vorgehen.
          </p>
          <Link
            href="/contact?subject=mpu"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
          >
            Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
