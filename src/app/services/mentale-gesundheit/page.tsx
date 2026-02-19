import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentale Gesundheit & Leistungsfähigkeit — Psychologische Beratung Berlin",
  description:
    "Psychologische Beratung in Berlin zur Stärkung von Selbstregulation, Belastbarkeit und mentaler Klarheit. Psychologe Lukas Herbig — online oder in Präsenz in Berlin Mitte & Neukölln.",
};

export default function MentaleGesundheitPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up-delay-1">
            Mentale Gesundheit & Leistungsfähigkeit
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
            Psychologische Beratung zur Stärkung von Selbstregulation,
            Belastbarkeit und mentaler Klarheit — präventiv wie auch
            interventionsnah.
          </p>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Für wen
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                An wen richtet sich das Angebot?
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Dieses Angebot richtet sich an Menschen, die sich in{" "}
                  <strong className="text-foreground">Phasen erhöhter Belastung</strong>{" "}
                  befinden oder präventiv an ihrer mentalen Stärke arbeiten
                  möchten. Ob beruflicher Leistungsdruck, persönliche
                  Umbruchphasen, anhaltender Stress oder das Gefühl, den
                  Anforderungen des Alltags nicht mehr gerecht zu werden.
                </p>
                <p>
                  Die Beratung ist{" "}
                  <strong className="text-foreground">kein Ersatz für Psychotherapie</strong>,
                  sondern eine gezielte, lösungsorientierte Unterstützung für
                  Menschen, die aktiv an ihrer mentalen Gesundheit und
                  Leistungsfähigkeit arbeiten wollen.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Berufliche Überlastung",
                  description: "Hoher Leistungsdruck, Burnout-Gefährdung oder das Gefühl, die Kontrolle zu verlieren.",
                },
                {
                  title: "Umbruchphasen",
                  description: "Trennung, Jobwechsel, Neuorientierung — Zeiten, in denen alles in Bewegung ist.",
                },
                {
                  title: "Präventive Stärkung",
                  description: "Resilienz aufbauen, bevor es zur Krise kommt. Mentale Fitness als Investition in sich selbst.",
                },
                {
                  title: "Leistungsoptimierung",
                  description: "Konzentration, Entscheidungssicherheit und mentale Klarheit für anspruchsvolle Lebensphasen.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Themenfelder */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Themenfelder
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-10">
            Womit ich Sie unterstützen kann
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stress- & Belastungsmanagement",
                description: "Stressoren identifizieren, individuelle Bewältigungsstrategien entwickeln und nachhaltig den Umgang mit Belastungen verbessern.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Resilienz & Burnout-Prävention",
                description: "Ihre psychische Widerstandskraft stärken und Frühwarnzeichen erkennen, bevor es zur Erschöpfung kommt.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Selbstregulation",
                description: "Emotionen verstehen und steuern lernen. Techniken für einen bewussteren Umgang mit inneren Zuständen und Reaktionsmustern.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Mentale Leistungsfähigkeit",
                description: "Konzentration, Fokus und Entscheidungssicherheit gezielt trainieren — für berufliche und persönliche Höchstleistungen.",
                icon: "M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1c-1.5-1.5-3-3.5-3-6a7 7 0 017-7zM9 18h6M10 21h4",
              },
              {
                title: "Achtsamkeit & Präsenz",
                description: "Achtsamkeitsbasierte Ansätze für mehr Präsenz im Moment und einen gelasseneren Umgang mit Herausforderungen.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Umgang mit Veränderungen",
                description: "Unsicherheit und Wandel als Chance begreifen. Psychologische Strategien für Übergangs- und Neuorientierungsphasen.",
                icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
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

      {/* Ansatz */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              Mein Ansatz
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
              Systemisch, evidenzbasiert, individuell
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Mein Beratungsansatz ist <strong className="text-foreground">systemisch</strong>:
                Ich betrachte Sie nicht isoliert, sondern immer im Kontext Ihrer
                Beziehungen, Rollen und Lebenswelten. Probleme entstehen selten
                in einem Vakuum — und die besten Lösungen berücksichtigen das
                gesamte System.
              </p>
              <p>
                Gleichzeitig arbeite ich <strong className="text-foreground">evidenzbasiert</strong>{" "}
                und integriere je nach Anliegen Elemente aus der kognitiven
                Verhaltenstherapie, der Achtsamkeitspraxis und weiteren
                wissenschaftlich fundierten Verfahren. So entsteht eine Beratung,
                die flexibel auf Ihre individuellen Bedürfnisse eingeht.
              </p>
              <p>
                Die Beratung findet <strong className="text-foreground">online oder in Präsenz</strong>{" "}
                statt — mit flexibler Termingestaltung, die sich an Ihren
                Alltag anpasst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Individuell
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Auf Anfrage</p>
          <p className="text-white/60 text-sm mb-8">
            Individuelles Angebot, zugeschnitten auf Ihre Bedürfnisse und Ziele
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
            In einem unverbindlichen Erstgespräch klären wir gemeinsam, wie ich
            Sie am besten unterstützen kann — und ob die Beratung das Richtige
            für Sie ist.
          </p>
          <Link
            href="/contact?subject=mentalhealth"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
          >
            Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
