import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nehmen Sie Kontakt auf und vereinbaren Sie ein unverbindliches Erstgespräch. Beratung für mentale Gesundheit — Lukas Herbig.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-light to-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">Kontakt</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up-delay-1">Sprechen Sie mich an</h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed animate-fade-in-up-delay-2">Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Ich freue mich auf Ihre Nachricht.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">Nachricht senden</h2>
                <p className="text-muted text-sm mb-8">Füllen Sie das Formular aus und ich melde mich zeitnah bei Ihnen zurück.</p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">Vorname *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" placeholder="Ihr Vorname" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Nachname *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" placeholder="Ihr Nachname" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-Mail *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" placeholder="ihre.email@beispiel.de" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" placeholder="+49 ..." />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Betreff *</label>
                    <select id="subject" name="subject" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors">
                      <option value="">Bitte wählen...</option>
                      <option value="mpu">MPU Beratung</option>
                      <option value="mentalhealth">Mentale Gesundheit & Leistungsfähigkeit</option>
                      <option value="unternehmen">Psychologie in Unternehmen</option>
                      <option value="erstgespraech">Allgemeines Erstgespräch</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Ihre Nachricht *</label>
                    <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors resize-y" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" name="privacy" required className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary/30" />
                    <label htmlFor="privacy" className="text-xs text-muted leading-relaxed">Ich habe die Datenschutzerklärung gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden. *</label>
                  </div>
                  <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200">Nachricht senden</button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Adresse & Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div><p className="text-foreground font-medium">Psychologische Beratung — Lukas Herbig</p><p className="text-muted text-sm">Paul-Robeson-Str. 3</p><p className="text-muted text-sm">10439 Berlin</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div><p className="text-foreground font-medium">Telefon</p><p className="text-muted text-sm">+49 176 72229459</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div><p className="text-foreground font-medium">E-Mail</p><p className="text-muted text-sm">kontakt@herbig-beratung.de</p></div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Sprechzeiten</h3>
                <ul className="space-y-3 text-sm">
                  {[{ day: "Montag – Donnerstag", time: "09:00 – 18:00 Uhr" }, { day: "Freitag", time: "09:00 – 14:00 Uhr" }, { day: "Samstag – Sonntag", time: "Geschlossen" }].map((item, i) => (
                    <li key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className="text-muted">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary-light border border-secondary/15 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">Telefonische Erreichbarkeit</h3>
                <p className="text-sm text-muted leading-relaxed">Sollte ich gerade in einer Sitzung sein, hinterlassen Sie bitte eine Nachricht auf dem Anrufbeantworter. Ich rufe Sie zeitnah zurück. Alternativ können Sie mir jederzeit eine E-Mail schreiben.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
