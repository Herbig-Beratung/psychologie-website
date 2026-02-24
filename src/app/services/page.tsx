import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Themenbereiche — Psychologische Beratung Berlin",
  description:
    "MPU-Beratung Berlin, psychische Gefährdungsbeurteilungen für Unternehmen und Workshops für mentale Gesundheit. Psychologe Lukas Herbig in Berlin.",
};

const services = [
  {
    id: "mpu",
    label: "Für Einzelpersonen",
    title: "Verkehrspsychologische Beratung & MPU-Vorbereitung",
    description:
      "Strukturierte, evidenzbasierte Vorbereitung auf die medizinisch-psychologische Untersuchung — mit Fokus auf Einsicht, Veränderung und nachhaltige Stabilität.",
    items: [
      "Realistische Ersteinschätzung",
      "Beratung zur Abstinenzplanung",
      "Aufarbeitung der Ursachen",
      "Verhaltensänderung",
      "Rückfallprävention",
      "Prüfungssimulation",
    ],
    ctaLabel: "Erstgespräch vereinbaren",
    ctaHref: "/contact?subject=mpu",
    moreHref: "/services/mpu",
  },
  {
    id: "mentale-gesundheit",
    label: "Für Einzelpersonen",
    title: "Mentale Gesundheit & Leistungsfähigkeit",
    description:
      "Psychologische Beratung zur Stärkung von Selbstregulation, Belastbarkeit und mentaler Klarheit — präventiv wie auch interventionsnah.",
    items: [
      "Stress- & Belastungsmanagement",
      "Mentale Leistungsfähigkeit",
      "Resilienz & Burnout-Prävention",
      "Achtsamkeitsbasierte Ansätze",
      "Selbstregulationsstrategien",
      "Umgang mit Veränderungen",
    ],
    ctaLabel: "Angebot anfragen",
    ctaHref: "/contact?subject=mentalhealth",
    moreHref: "/services/mentale-gesundheit",
  },
  {
    id: "unternehmen",
    label: "Für Unternehmen",
    title: "Psychologie in Unternehmen & Organisationen",
    description:
      "Psychologische Expertise für gesunde Führung, nachhaltige Leistungsfähigkeit und gesetzeskonforme Prävention psychischer Belastungen.",
    items: [
      "Workshops \u201EGesunde Führung\u201C",
      "Psychische Gefährdungsbeurteilung",
      "Beratung für Führungskräfte",
      "Schulung von Personalverantwortlichen",
      "Maßnahmen & Wirksamkeitskontrolle",
      "Dokumentation nach GDA-Leitlinien",
    ],
    ctaLabel: "Angebot anfragen",
    ctaHref: "/contact?subject=unternehmen",
    moreHref: "/services/unternehmen",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Themenbereiche
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
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="scroll-mt-24 bg-card border border-border rounded-2xl p-5 sm:p-7 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                  {s.label}
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {s.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.items.map((item, i) => (
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
                <div className="space-y-3 mt-auto">
                  <Link
                    href={s.ctaHref}
                    className="block w-full px-5 py-2.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm text-center"
                  >
                    {s.ctaLabel}
                  </Link>
                  <Link
                    href={s.moreHref}
                    className="block w-full px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-background transition-colors duration-200 text-sm text-center"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            ))}
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
