import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen — Psychologische Beratung Berlin",
  description:
    "MPU-Beratung Berlin, psychische Gefährdungsbeurteilungen für Unternehmen und Workshops für mentale Gesundheit. Psychologe Lukas Herbig in Berlin.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Leistungen
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up-delay-1">
            Mein Angebot
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
            Von der individuellen MPU-Vorbereitung über psychologische
            Einzelberatung bis hin zu Workshops und Gefährdungsbeurteilungen für
            Unternehmen.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 space-y-10">
          {/* MPU Beratung */}
          <div
            id="mpu"
            className="scroll-mt-24 bg-card border border-border rounded-2xl p-5 sm:p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8">
              <div className="flex-1">
                <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">
                  Für Einzelpersonen
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Verkehrspsychologische Beratung & MPU-Vorbereitung
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Strukturierte, evidenzbasierte Vorbereitung auf die
                  medizinisch-psychologische Untersuchung — mit Fokus auf
                  Einsicht, Veränderung und nachhaltige Stabilität.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {[
                    "Realistische Ersteinschätzung",
                    "Beratung zur Abstinenzplanung",
                    "Aufarbeitung der Ursachen",
                    "Verhaltensänderung",
                    "Rückfallprävention",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <svg
                        className="w-4 h-4 text-secondary shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-64 shrink-0 bg-primary-light rounded-2xl p-6 text-center">
                <p className="text-sm text-muted mb-1">Komplettpaket</p>
                <p className="text-4xl font-bold text-foreground mb-1">
                  1.200 €
                </p>
                <p className="text-xs text-muted mb-6">
                  inkl. aller Sitzungen & Materialien
                </p>
                <Link
                  href="/contact?subject=mpu"
                  className="block w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm"
                >
                  Erstgespräch vereinbaren
                </Link>
                <Link
                  href="/services/mpu"
                  className="block w-full px-6 py-3 mt-3 border border-border text-foreground font-medium rounded-lg hover:bg-background transition-colors duration-200 text-sm"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>

          {/* Mentale Gesundheit */}
          <div
            id="mentale-gesundheit"
            className="scroll-mt-24 bg-card border border-border rounded-2xl p-5 sm:p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8">
              <div className="flex-1">
                <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">
                  Für Einzelpersonen
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Mentale Gesundheit & Leistungsfähigkeit
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Psychologische Beratung zur Stärkung von Selbstregulation,
                  Belastbarkeit und mentaler Klarheit — präventiv wie auch
                  interventionsnah.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {[
                    "Stress- & Belastungsmanagement",
                    "Mentale Leistungsfähigkeit",
                    "Resilienz & Burnout-Prävention",
                    "Achtsamkeitsbasierte Ansätze",
                    "Selbstregulationsstrategien",
                    "Umgang mit Veränderungen",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <svg
                        className="w-4 h-4 text-secondary shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-64 shrink-0 bg-primary-light rounded-2xl p-6 text-center">
                <p className="text-sm text-muted mb-1">Individuell</p>
                <p className="text-2xl font-bold text-foreground mb-1">
                  Auf Anfrage
                </p>
                <p className="text-xs text-muted mb-6">
                  Individuelles Angebot, zugeschnitten auf Ihre Bedürfnisse
                </p>
                <Link
                  href="/contact?subject=mentalhealth"
                  className="block w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm"
                >
                  Angebot anfragen
                </Link>
                <Link
                  href="/services/mentale-gesundheit"
                  className="block w-full px-6 py-3 mt-3 border border-border text-foreground font-medium rounded-lg hover:bg-background transition-colors duration-200 text-sm"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>

          {/* Unternehmen */}
          <div
            id="unternehmen"
            className="scroll-mt-24 bg-card border border-border rounded-2xl p-5 sm:p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8">
              <div className="flex-1">
                <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">
                  Für Unternehmen
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Psychologie in Unternehmen & Organisationen
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Psychologische Expertise für gesunde Führung, nachhaltige
                  Leistungsfähigkeit und gesetzeskonforme Prävention psychischer
                  Belastungen.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {[
                    "Workshops \u201EGesunde Führung\u201C",
                    "Psychische Gefährdungsbeurteilung",
                    "Beratung für Führungskräfte",
                    "Schulung von Personalverantwortlichen",
                    "Maßnahmen & Wirksamkeitskontrolle",
                    "Dokumentation nach GDA-Leitlinien",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <svg
                        className="w-4 h-4 text-secondary shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-64 shrink-0 bg-primary-light rounded-2xl p-6 text-center">
                <p className="text-sm text-muted mb-1">Individuell</p>
                <p className="text-2xl font-bold text-foreground mb-1">
                  Auf Anfrage
                </p>
                <p className="text-xs text-muted mb-6">
                  Maßgeschneidertes Angebot für Ihre Organisation
                </p>
                <Link
                  href="/contact?subject=unternehmen"
                  className="block w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm"
                >
                  Angebot anfragen
                </Link>
                <Link
                  href="/services/unternehmen"
                  className="block w-full px-6 py-3 mt-3 border border-border text-foreground font-medium rounded-lg hover:bg-background transition-colors duration-200 text-sm"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Nicht sicher, welches Angebot passt?
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
            In einem unverbindlichen Erstgespräch klären wir gemeinsam, wie ich
            Sie am besten unterstützen kann.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
