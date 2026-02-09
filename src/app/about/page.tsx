import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Erfahren Sie mehr über Lukas Herbig — Klinischer Psychologe (M.Sc.) mit systemischem Schwerpunkt.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-light to-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">Über mich</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up-delay-1">Lernen Sie mich kennen</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-28">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image src="/lukas-herbig.png" alt="Lukas Herbig — Psychologe" fill className="object-cover object-top" priority />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Lukas Herbig</h2>
                <p className="text-secondary font-medium text-sm mb-6">Psychologe (M.Sc. Klinische Psychologie)</p>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>Mit meinem Masterabschluss in Klinischer Psychologie bringe ich ein breites Fundament psychologischer Methoden und Verfahren mit. In meiner Arbeit verbinde ich verschiedenste therapeutische Ansätze miteinander — von verhaltenstherapeutischen über tiefenpsychologische bis hin zu achtsamkeitsbasierten Methoden.</p>
                  <p>Mein Schwerpunkt liegt dabei auf dem <strong className="text-foreground">systemischen Ansatz</strong>. Das bedeutet: Ich betrachte Menschen nicht isoliert, sondern immer im Kontext ihrer Beziehungen, Rollen und Lebenswelten. Probleme entstehen selten in einem Vakuum — und die besten Lösungen berücksichtigen das gesamte System.</p>
                  <p>Diese Herangehensweise bewährt sich in all meinen Arbeitsbereichen: In der MPU-Beratung hilft sie, die tieferliegenden Muster hinter dem Verhalten zu verstehen. In Unternehmen ermöglicht sie eine ganzheitliche Betrachtung psychischer Belastungen. Und in Workshops schafft sie echtes Verständnis für die Dynamiken in Teams und Führungsbeziehungen.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Qualifikationen</h3>
                <ul className="space-y-3">
                  {["Master of Science in Klinischer Psychologie", "Schwerpunkt systemische Beratung und Therapie", "Verkehrspsychologische Beratung (MPU-Vorbereitung)", "Psychische Gefährdungsbeurteilung nach GDA-Leitlinien", "Workshop-Leitung: Mentale Gesundheit & Führung", "Fortlaufende Weiterbildungen in evidenzbasierten Verfahren"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Mein Arbeitsansatz</h3>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>Die systemische Perspektive bildet das Herzstück meiner Arbeit. Sie geht davon aus, dass Verhalten immer in einem Kontext stattfindet — und dass nachhaltige Veränderung erst möglich wird, wenn wir diesen Kontext verstehen und einbeziehen.</p>
                  <p>Gleichzeitig bin ich kein Dogmatiker: Je nach Anliegen und Situation integriere ich Elemente aus der kognitiven Verhaltenstherapie, der Gesprächsführung nach Rogers, der Achtsamkeitspraxis und weiteren evidenzbasierten Verfahren. Diese Methodenvielfalt ermöglicht es mir, flexibel auf Ihre individuellen Bedürfnisse einzugehen.</p>
                </div>
              </div>

              <div className="bg-secondary-light border border-secondary/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Meine Überzeugung</h3>
                <blockquote className="text-muted leading-relaxed italic">&ldquo;Veränderung beginnt mit dem Verstehen. Wenn wir die Zusammenhänge erkennen, in denen wir handeln und fühlen, eröffnen sich neue Möglichkeiten — für Einzelne genauso wie für ganze Organisationen.&rdquo;</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Haben Sie Fragen?</h2>
          <p className="text-muted mb-8">Ich freue mich darauf, von Ihnen zu hören. Vereinbaren Sie ein unverbindliches Erstgespräch.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200">Kontakt aufnehmen</Link>
        </div>
      </section>
    </>
  );
}
