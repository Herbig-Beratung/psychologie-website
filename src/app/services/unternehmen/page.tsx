import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psychologie in Unternehmen Berlin — Gefährdungsbeurteilung & Workshops",
  description:
    "Psychische Gefährdungsbeurteilung Berlin (IHK-zertifiziert), Führungskräfteberatung und Workshops für gesunde Organisationen. Psychologe Lukas Herbig in Berlin.",
};

export default function UnternehmenPage() {
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
            Für Unternehmen
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up-delay-1">
            Psychologie in Unternehmen & Organisationen
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
            Psychologische Expertise für gesunde Führung, nachhaltige
            Leistungsfähigkeit und gesetzeskonforme Prävention psychischer
            Belastungen.
          </p>
        </div>
      </section>

      {/* Leistungsspektrum */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Leistungsspektrum
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Was ich für Ihre Organisation leiste
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Psychische Gesundheit ist ein{" "}
                  <strong className="text-foreground">strategischer Erfolgsfaktor</strong>.
                  Unternehmen, die in die mentale Gesundheit ihrer
                  Mitarbeitenden investieren, profitieren von weniger
                  Fehlzeiten, höherer Zufriedenheit und nachhaltiger
                  Leistungsfähigkeit.
                </p>
                <p>
                  Als{" "}
                  <strong className="text-foreground">IHK-zertifizierte Fachkraft für psychische
                  Gefährdungsbeurteilung</strong>{" "}
                  biete ich Ihnen ein umfassendes Leistungsspektrum — von der
                  gesetzlich vorgeschriebenen Gefährdungsbeurteilung über
                  Führungskräfteberatung bis hin zu maßgeschneiderten Workshops.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Psychische Gefährdungsbeurteilung",
                  description: "Gesetzeskonforme Erfassung und Bewertung psychischer Belastungen gemäß GDA-Leitlinien und § 5 ArbSchG.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                },
                {
                  title: "Führungskräfteberatung",
                  description: "Individuelle Beratung für Führungskräfte zu psychologischen Themen, gesunder Führung und Umgang mit belasteten Mitarbeitenden.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  title: "Schulungen & Workshops",
                  description: "Interaktive Formate für Personalverantwortliche, Führungskräfte und Teams — zu Themen wie Resilienz, Stressprävention und mentale Gesundheit.",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf Gefährdungsbeurteilung */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Ablauf
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
            Psychische Gefährdungsbeurteilung — Schritt für Schritt
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-12">
            Die psychische Gefährdungsbeurteilung ist nach § 5 ArbSchG für alle
            Arbeitgeber verpflichtend. Ich begleite Sie durch den gesamten
            Prozess — strukturiert, transparent und praxisnah.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Bedarfsanalyse",
                description: "Erfassung der Ausgangslage, Abstimmung des Vorgehens und Definition der zu bewertenden Arbeitsbereiche.",
              },
              {
                step: "02",
                title: "Durchführung",
                description: "Erhebung psychischer Belastungsfaktoren mittels wissenschaftlich validierter Instrumente und Interviews.",
              },
              {
                step: "03",
                title: "Maßnahmen",
                description: "Entwicklung konkreter, praxistauglicher Maßnahmen zur Reduktion identifizierter Belastungen.",
              },
              {
                step: "04",
                title: "Wirksamkeit",
                description: "Begleitung bei der Umsetzung, Wirksamkeitskontrolle und Dokumentation gemäß gesetzlicher Anforderungen.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6 relative">
                <span className="text-5xl font-bold text-primary-light/50 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="relative">
                  <h3 className="font-semibold text-foreground mb-3 mt-8">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gesetzlicher Rahmen */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Gesetzlicher Rahmen
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Rechtliche Grundlagen
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Seit 2013 sind Arbeitgeber nach{" "}
                  <strong className="text-foreground">§ 5 Arbeitsschutzgesetz (ArbSchG)</strong>{" "}
                  verpflichtet, psychische Belastungen am Arbeitsplatz im
                  Rahmen der Gefährdungsbeurteilung zu erfassen und zu
                  bewerten. Die{" "}
                  <strong className="text-foreground">GDA-Leitlinien</strong>{" "}
                  (Gemeinsame Deutsche Arbeitsschutzstrategie) definieren den
                  methodischen Rahmen.
                </p>
                <p>
                  Als IHK-zertifizierte Fachkraft sorge ich dafür, dass Ihre
                  Gefährdungsbeurteilung allen gesetzlichen Anforderungen
                  entspricht — und gleichzeitig echten Mehrwert für Ihre
                  Organisation schafft.
                </p>
              </div>
            </div>

            <div className="bg-secondary-light border border-secondary/20 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ihre Vorteile</h3>
              <ul className="space-y-4">
                {[
                  "Erfüllung der gesetzlichen Pflicht nach § 5 ArbSchG",
                  "Reduzierung von Fehlzeiten und Fluktuation",
                  "Förderung einer gesunden Unternehmenskultur",
                  "Stärkung der Arbeitgebermarke und Mitarbeiterbindung",
                  "Prävention statt Reaktion — Kosten sparen durch Früherkennung",
                  "Lückenlose Dokumentation für Aufsichtsbehörden",
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

      {/* Workshops Verweis */}
      <section className="py-16 bg-primary-light border-y border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Workshops für Ihr Unternehmen
              </h3>
              <p className="text-muted leading-relaxed max-w-xl">
                Neben der individuellen Beratung biete ich interaktive
                Online-Webinare zu Themen wie Gesunde Führung, Resilienz,
                Change-Management und Prävention an.
              </p>
            </div>
            <Link
              href="/workshops#unternehmen"
              className="inline-flex items-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm shrink-0"
            >
              Workshops ansehen
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
            Maßgeschneidertes Angebot für Ihre Organisation
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Lassen Sie uns über Ihre Organisation sprechen
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
            In einem unverbindlichen Erstgespräch klären wir den Bedarf Ihrer
            Organisation und ich erstelle Ihnen ein individuelles Angebot.
          </p>
          <Link
            href="/contact?subject=unternehmen"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
          >
            Angebot anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
