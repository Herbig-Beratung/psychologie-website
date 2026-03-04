import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MpuGruende from "@/components/MpuGruende";
import MpuFaq from "@/components/MpuFaq";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "MPU Vorbereitung Berlin — Verkehrspsychologische Begutachtungsvorbereitung",
  description:
    "Strukturierte MPU-Vorbereitung in Berlin: Verkehrspsychologische Begutachtungsvorbereitung bei Fahreignungsfragen. Kompakt-Paket ab 799 € oder Standard-Paket ab 1.200 €. Online oder Präsenz in Berlin Mitte & Neukölln.",
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
            Verhaltensänderung und nachhaltige Stabilität.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 animate-fade-in-up-delay-3">
            <Link
              href="/contact?subject=mpu"
              className="inline-flex items-center justify-center px-7 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm"
            >
              Kostenloses Erstgespräch vereinbaren
            </Link>
            <a
              href="tel:03098596064"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              030 98596064
            </a>
          </div>
        </div>
      </section>

      {/* Kurzvorstellung */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <Image
              src="/lukas-herbig.png"
              alt="Lukas Herbig — Psychologe & MPU-Berater"
              width={180}
              height={180}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-top shrink-0"
            />
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Ihr Berater
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                Lukas Herbig
              </h2>
              <p className="text-muted mb-5">
                M.Sc. Klinische Psychologie · Verkehrspsychologische Beratung
              </p>
              <ul className="space-y-3">
                {[
                  "Ausgebildeter Psychologe mit systemischem Beratungsansatz",
                  "Spezialisiert auf verkehrspsychologische Begutachtungsvorbereitung",
                  "Beratung online oder in Präsenz in Berlin",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
                  Meine Beratung richtet sich an alle, die eine MPU-Anordnung
                  erhalten haben — ob aufgrund verkehrsrechtlicher Auffälligkeiten,
                  Punkteauffälligkeiten oder im Zusammenhang mit dem
                  Personenbeförderungsschein (P-Schein). Unabhängig vom Anlass
                  begleite ich Sie strukturiert und individuell durch den
                  gesamten Vorbereitungsprozess.
                </p>
                <p>
                  Je nach Bedarf biete ich zwei Pakete an: das Kompakt-Paket
                  (2 Einheiten à 2 Stunden) für klare Fälle und das
                  Standard-Paket (4–6 Einheiten) für eine umfassende
                  Vorbereitung. Gemeinsam erarbeiten wir die Grundlagen für
                  eine fundierte Begutachtungsvorbereitung — von der Ursachenanalyse
                  über die Veränderungsmotivation bis hin zu wirksamen
                  Stabilisierungsstrategien.
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
                <p className="text-sm text-muted">Kompakt (2 × 2 Std.) oder Standard (4–6 Einheiten) — individuell angepasst an Ihren Fall</p>
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
                  <h3 className="font-semibold text-foreground">Zwei Pakete</h3>
                </div>
                <p className="text-sm text-muted">Kompakt-Paket ab 799 € oder Standard-Paket ab 1.200 € — inkl. aller Materialien</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-border">
            <h3 className="font-semibold text-foreground text-lg mb-6">Rundum-Service inklusive</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
              {[
                "Vermittlung zu Instituten für erforderliche Nachweisverfahren",
                "Unterstützung bei der MPU-Terminierung",
                "Begleitung bei der Nachweisdokumentation",
                "Begutachtungssimulation mit detailliertem Feedback",
                "Bereitstellung aller relevanten Materialien",
                "Nachbetreuung auch nach Abschluss",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-secondary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pakete & Preise */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              Pakete & Preise
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Zwei Wege zur MPU-Vorbereitung
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Wählen Sie das Paket, das zu Ihrer Situation passt — oder lassen
              Sie sich im kostenlosen Erstgespräch beraten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Kompakt-Paket */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col">
              <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                Kompakt-Paket
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                799 €
              </p>
              <p className="text-white/50 text-sm mb-6">
                2 Einheiten · je 2 Stunden
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "2 Einzelsitzungen (je 2 Std.)",
                  "Ersteinschätzung & Ursachenanalyse",
                  "Aufarbeitung der Kernthemen",
                  "Begutachtungssimulation",
                  "Teilnahmebestätigung zur Vorlage bei der MPU",
                  "Alle Materialien inklusive",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?subject=mpu-kompakt"
                className="block w-full px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm text-center"
              >
                Erstgespräch vereinbaren
              </Link>
            </div>

            {/* Standard-Paket */}
            <div className="relative bg-white/15 backdrop-blur-sm border-2 border-secondary rounded-2xl p-6 sm:p-8 flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Empfohlen
              </div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                Standard-Paket
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                1.200 €
              </p>
              <p className="text-white/50 text-sm mb-6">
                4–6 Einheiten · umfassende Begleitung
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "4–6 Einzelsitzungen",
                  "Ausführliche Ursachenanalyse",
                  "Nachweisplanung & Dokumentationsbegleitung",
                  "Aufarbeitung & Verhaltensänderung",
                  "Stabilisierungsstrategien",
                  "Begutachtungssimulation mit Feedback",
                  "Teilnahmebestätigung zur Vorlage bei der MPU",
                  "MPU-Terminierung & Nachbetreuung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?subject=mpu"
                className="block w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-sm text-center"
              >
                Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ablaufplan */}
      <section className="py-12 md:py-20 bg-background">
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
                  "Persönliche Einschätzung Ihrer Situation und Beratung zur weiteren Vorgehensweise inkl. Nachweisplanung.",
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
                title: "Stabilisierungsstrategien entwickeln",
                description:
                  "Erarbeitung konkreter Strategien und Handlungspläne für den Umgang mit kritischen Situationen.",
              },
              {
                step: "6",
                title: "Begutachtungssimulation",
                description:
                  "Realistische Simulation der MPU-Begutachtung mit detailliertem Feedback zur optimalen Vorbereitung.",
              },
            ].map((item, i, arr) => (
              <div key={i} className="relative flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 z-10">
                    {item.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-secondary/20 my-1" />
                  )}
                </div>

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

      {/* Gründe für MPU */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Hintergründe
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8">
            Häufige Anlässe für eine MPU
          </h2>
          <MpuGruende />
        </div>
      </section>

      {/* Bewertungen */}
      <ReviewCarousel />

      {/* Allgemeine FAQ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Häufige Fragen
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8">
            Das sollten Sie wissen
          </h2>
          <MpuFaq />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
            In einem kostenlosen Erstgespräch klären wir Ihre individuelle
            Situation und ich berate Sie zum weiteren Vorgehen — unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-white/60 mb-8">
            {[
              "15–20 Minuten, telefonisch oder per Video",
              "Einschätzung Ihrer individuellen Situation",
              "Klärung der nächsten Schritte",
              "Unverbindlich und kostenlos",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
          <Link
            href="/contact?subject=mpu"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </>
  );
}
