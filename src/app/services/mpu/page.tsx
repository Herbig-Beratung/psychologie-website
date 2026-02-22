import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "MPU Beratung Berlin — Verkehrspsychologische Beratung & MPU-Vorbereitung",
  description:
    "MPU Beratung in Berlin: Strukturierte, evidenzbasierte MPU-Vorbereitung mit 4–8 Stunden verkehrspsychologischer Beratung. Alkohol, Drogen, Punkte & P-Schein. Online oder in Präsenz in Berlin Mitte & Neukölln. Komplettpaket 1.200 €.",
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

      {/* Ablaufplan */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Ihr Weg zur MPU
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-10">
            So läuft die Vorbereitung ab
          </h2>

          <div className="relative">
            {[
              {
                step: "1",
                title: "Kostenloses Erstgespräch",
                description:
                  "Persönliche Einschätzung Ihrer Situation und bei Bedarf Beratung zur Abstinenzplanung.",
              },
              {
                step: "2",
                title: "Akteneinsicht & Ursachenanalyse",
                description:
                  "Beginn der Sitzungen mit Sichtung Ihrer Unterlagen und gemeinsamer Analyse der Hintergründe.",
              },
              {
                step: "3",
                title: "Aufarbeitung der Ursachen",
                description:
                  "Tiefere Auseinandersetzung mit den Hintergründen Ihres Verhaltens und den zugrundeliegenden Mustern.",
              },
              {
                step: "4",
                title: "Veränderungsmotivation aufbauen",
                description:
                  "Entwicklung einer glaubwürdigen, intrinsischen Motivation zur nachhaltigen Verhaltensänderung.",
              },
              {
                step: "5",
                title: "Rückfallprophylaxe",
                description:
                  "Erarbeitung konkreter Strategien und Handlungspläne für den Umgang mit kritischen Situationen.",
              },
              {
                step: "6",
                title: "Prüfungssimulation",
                description:
                  "Realistische Simulation der MPU-Prüfung mit detailliertem Feedback zur optimalen Vorbereitung.",
              },
            ].map((item, i, arr) => (
              <div key={i} className="relative flex gap-4 sm:gap-6">
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 z-10">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-secondary/20 my-1" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 sm:pb-10 ${i === arr.length - 1 ? "pb-0" : ""}`}>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1 pt-2 sm:pt-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
