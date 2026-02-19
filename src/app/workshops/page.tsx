import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops — Psychologische Online-Webinare Berlin",
  description:
    "Psychologische Workshops und Online-Webinare von Lukas Herbig in Berlin: Resilienz, Stressbewältigung, Gesunde Führung, mentale Leistungsfähigkeit. Für Privatpersonen und Unternehmen.",
};

const b2cWorkshops = [
  {
    id: "resilienz-stressbewaeltigung",
    title: "Resilienz & Stressbewältigung",
    description:
      "Lernen Sie, mit Belastungen konstruktiv umzugehen und Ihre psychische Widerstandskraft nachhaltig zu stärken. Evidenzbasierte Strategien für den Alltag.",
    topics: [
      "Stressoren erkennen und verstehen",
      "Individuelle Bewältigungsstrategien entwickeln",
      "Achtsamkeitsbasierte Übungen",
      "Langfristige Resilienzförderung",
    ],
  },
  {
    id: "mentale-leistungsfaehigkeit",
    title: "Mentale Leistungsfähigkeit",
    description:
      "Steigern Sie Ihre Konzentration, Entscheidungssicherheit und mentale Klarheit. Psychologische Techniken für mehr Fokus und nachhaltige Leistung.",
    topics: [
      "Kognitive Leistungsfaktoren verstehen",
      "Fokus und Konzentration trainieren",
      "Entscheidungssicherheit stärken",
      "Mentale Routinen aufbauen",
    ],
  },
  {
    id: "emotionale-intelligenz",
    title: "Emotionale Intelligenz & Beziehungsdynamiken",
    description:
      "Entwickeln Sie ein tieferes Verständnis für eigene und fremde Emotionen — und nutzen Sie dieses Wissen für gelingende Beziehungen und klare Kommunikation.",
    topics: [
      "Emotionen wahrnehmen und regulieren",
      "Empathie und Perspektivwechsel",
      "Beziehungsdynamiken verstehen",
      "Kommunikationsmuster erkennen",
    ],
  },
  {
    id: "selbstwert-identitaet",
    title: "Selbstwert & Identität",
    description:
      "Stärken Sie Ihr Selbstbewusstsein und entwickeln Sie ein stabiles Selbstbild. Psychologische Ansätze für mehr innere Sicherheit und Authentizität.",
    topics: [
      "Selbstwert und Selbstkonzept verstehen",
      "Innere Antreiber und Glaubenssätze erkennen",
      "Authentizität und Selbstakzeptanz",
      "Grenzen setzen und vertreten",
    ],
  },
];

const b2bWorkshops = [
  {
    id: "gesunde-fuehrung",
    title: "Gesunde Führung",
    description:
      "Evidenzbasierte Strategien für einen Führungsstil, der Leistung fördert und gleichzeitig die psychische Gesundheit von Führungskräften und Teams schützt.",
    topics: [
      "Psychologische Grundlagen gesunder Führung",
      "Belastungssignale im Team erkennen",
      "Kommunikation, die Vertrauen schafft",
      "Selbstfürsorge als Führungskompetenz",
    ],
  },
  {
    id: "resilienz-mitarbeitende",
    title: "Resilienz & Stressmanagement für Mitarbeitende",
    description:
      "Stärken Sie die Belastbarkeit Ihrer Teams mit praxisnahen Methoden zur Stressregulation und psychologischen Widerstandskraft am Arbeitsplatz.",
    topics: [
      "Stressmodelle und individuelle Stressoren",
      "Frühwarnsignale für Burnout",
      "Evidenzbasierte Regulationstechniken",
      "Nachhaltige Routinen für den Arbeitsalltag",
    ],
  },
  {
    id: "change-resilienz",
    title: "Change & Resilienz für Organisationen",
    description:
      "Veränderungsprozesse psychologisch begleiten. Wie Organisationen Wandel gestalten können, ohne die Gesundheit ihrer Mitarbeitenden zu gefährden.",
    topics: [
      "Psychologie von Veränderungsprozessen",
      "Widerstände verstehen und begleiten",
      "Resilienz auf Organisationsebene",
      "Kommunikation in Veränderungszeiten",
    ],
  },
  {
    id: "mentale-gesundheit-praevention",
    title: "Mentale Gesundheit & Prävention",
    description:
      "Psychische Gesundheit als strategischen Erfolgsfaktor nutzen. Prävention, Früherkennung und nachhaltige Maßnahmen für gesunde Organisationen.",
    topics: [
      "Psychische Belastungen erkennen und vorbeugen",
      "Gefährdungsbeurteilung psychischer Belastungen",
      "Maßnahmen zur Prävention entwickeln",
      "Gesundheitskultur nachhaltig verankern",
    ],
  },
];

function WorkshopCard({
  workshop,
  contactSubject,
}: {
  workshop: (typeof b2cWorkshops)[number];
  contactSubject: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
          {workshop.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-5">
          {workshop.description}
        </p>
        <div className="mb-6">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
            Inhalte
          </p>
          <ul className="space-y-2">
            {workshop.topics.map((topic, j) => (
              <li
                key={j}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <svg
                  className="w-4 h-4 text-secondary shrink-0 mt-0.5"
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
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-muted">
              Online-Webinar, ca. 4h
            </span>
            <span className="text-lg font-bold text-foreground">
              Auf Anfrage
            </span>
          </div>
          <Link
            href={`/contact?subject=${contactSubject}`}
            className="block w-full text-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm"
          >
            Workshop anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WorkshopsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            Workshops
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up-delay-1">
            Online-Webinare
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
            Psychologisch fundierte Webinare für Privatpersonen und Unternehmen
            — interaktiv, praxisnah und direkt buchbar.
          </p>
        </div>
      </section>

      {/* Format-Info */}
      <section className="py-6 md:py-10 bg-primary-light border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-foreground">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">Online-Webinar</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Halbtag (ca. 4 Stunden)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span className="font-medium">Interaktiv & praxisnah</span>
            </div>
          </div>
        </div>
      </section>

      {/* B2C Workshops */}
      <section id="privatpersonen" className="py-12 md:py-20 bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-secondary text-sm font-medium uppercase tracking-wider">
                  Für Privatpersonen
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Persönliche Entwicklung & mentale Gesundheit
                </h2>
              </div>
            </div>
            <p className="text-muted leading-relaxed max-w-2xl md:ml-13">
              Webinare für alle, die ihre psychische Gesundheit stärken, sich
              persönlich weiterentwickeln und neue Perspektiven gewinnen möchten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {b2cWorkshops.map((ws) => (
              <WorkshopCard
                key={ws.id}
                workshop={ws}
                contactSubject={`workshop-${ws.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* B2B Workshops */}
      <section id="unternehmen" className="py-12 md:py-20 bg-card border-t border-border scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-secondary text-sm font-medium uppercase tracking-wider">
                  Für Unternehmen
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Psychologie in der Organisation
                </h2>
              </div>
            </div>
            <p className="text-muted leading-relaxed max-w-2xl md:ml-13">
              Webinare für Unternehmen, die in die psychische Gesundheit ihrer
              Mitarbeitenden investieren und eine gesunde Arbeitskultur fördern
              möchten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {b2bWorkshops.map((ws) => (
              <WorkshopCard
                key={ws.id}
                workshop={ws}
                contactSubject={`workshop-${ws.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Individuelles Webinar gewünscht?
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
            Sie haben ein spezifisches Thema oder besondere Anforderungen? Gerne
            konzipiere ich ein maßgeschneidertes Webinar für Sie oder Ihre
            Organisation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
          >
            Unverbindlich anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
