import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/hero-bg.jpg"
          alt="Gehirn mit Glühbirnen — Psychologische Beratung"
          fill
          className="object-cover object-right-bottom"
          priority
        />
        {/* Dark olive-brown overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2e1f]/90 via-[#3a3528]/70 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-24 md:py-36">
          <div className="max-w-2xl animate-fade-in-up">
              <p className="text-white/70 font-medium text-sm uppercase tracking-widest mb-4">
                Beratung für mentale Gesundheit
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Psychologische Beratung{" "}
                <span className="text-primary-light">mit System</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Von der MPU-Vorbereitung über psychische Gefährdungsbeurteilungen
                bis hin zu Workshops — ich unterstütze Einzelpersonen und
                Unternehmen mit einem ganzheitlichen, systemischen Ansatz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 text-base"
                >
                  Beratungsgespräch vereinbaren
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200 text-base"
                >
                  Meine Leistungen
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              Themenbereiche
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Wie ich Sie unterstützen kann
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 17h2l.64-2.54a6 6 0 00-1.13-5.22L17.5 5.5A2 2 0 0016 5H8a2 2 0 00-1.5.5L3.49 9.24a6 6 0 00-1.13 5.22L3 17h2m14 0H5m14 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0M9 17a2 2 0 11-4 0m4 0a2 2 0 10-4 0"
                    />
                  </svg>
                ),
                title: "Verkehrspsychologische Beratung & MPU-Vorbereitung",
                description:
                  "Strukturierte, evidenzbasierte Vorbereitung auf medizinisch-psychologische Untersuchungen — mit Fokus auf Einsicht, Veränderung und psychologische Stabilität.",
                href: "/services#mpu",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1c-1.5-1.5-3-3.5-3-6a7 7 0 017-7zM9 18h6M10 21h4"
                    />
                  </svg>
                ),
                title: "Mentale Gesundheit & Leistungsfähigkeit",
                description:
                  "Psychologische Beratung zur Stärkung von Selbstregulation, Belastbarkeit und mentaler Klarheit — präventiv wie auch interventionsnah.",
                href: "/services#mentale-gesundheit",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                title: "Psychologie in Unternehmen & Organisationen",
                description:
                  "Psychologische Expertise für gesunde Führung, nachhaltige Leistungsfähigkeit und gesetzeskonforme Prävention psychischer Belastungen.",
                href: "/services#unternehmen",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-primary mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors duration-200 group"
            >
              Alle Leistungen ansehen
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="animate-fade-in-up-delay-2 flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative ring-4 ring-primary-light">
                <Image
                  src="/lukas-herbig.png"
                  alt="Lukas Herbig"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Text */}
            <div className="animate-fade-in-up-delay-3">
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                Über mich
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Lukas Herbig
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Als Psychologe (M.Sc. Klinische Psychologie) verbinde ich
                verschiedenste psychologische Methoden miteinander — mit einem
                klaren Schwerpunkt auf dem systemischen Ansatz.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Mein Angebot richtet sich an Einzelpersonen, die sich auf ihre
                MPU vorbereiten möchten, sowie an Unternehmen, die in die
                mentale Gesundheit ihrer Mitarbeitenden investieren.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors duration-200 group"
              >
                Mehr erfahren
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Teaser */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              Online-Webinare
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Workshops buchen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B2C */}
            <Link
              href="/workshops#privatpersonen"
              className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300 group block"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Für Privatpersonen</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {["Resilienz & Stressbewältigung", "Mentale Leistungsfähigkeit", "Emotionale Intelligenz & Beziehungsdynamiken", "Selbstwert & Identität"].map((title, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {title}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center text-secondary font-medium text-sm group-hover:text-secondary/80 transition-colors">
                Workshops ansehen
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* B2B */}
            <Link
              href="/workshops#unternehmen"
              className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300 group block"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Für Unternehmen</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {["Gesunde Führung", "Resilienz & Stressmanagement für Mitarbeitende", "Change & Resilienz für Organisationen", "Mentale Gesundheit & Prävention"].map((title, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {title}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center text-secondary font-medium text-sm group-hover:text-secondary/80 transition-colors">
                Workshops ansehen
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Der erste Schritt ist der wichtigste
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Ob MPU-Vorbereitung, Gefährdungsbeurteilung oder Workshop —
            kontaktieren Sie mich für ein unverbindliches Erstgespräch und wir
            finden die passende Lösung für Ihr Anliegen.
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
