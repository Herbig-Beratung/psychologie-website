import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Psychologische Beratung Berlin",
  description: "Kontaktieren Sie Psychologe Lukas Herbig in Berlin für ein unverbindliches Erstgespräch. MPU Beratung, Workshops & psychologische Beratung in Berlin Mitte & Neukölln.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">Kontakt</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up-delay-1">Sprechen Sie mich an</h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up-delay-2">Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Ich freue mich auf Ihre Nachricht.</p>
          </div>
          <div className="hidden md:block shrink-0">
            <div className="w-72 h-72 rounded-full overflow-hidden relative ring-4 ring-white/20">
              <Image
                src="/lukas-herbig.png"
                alt="Lukas Herbig"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card border border-border rounded-2xl p-5 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Adresse & Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div><p className="text-foreground font-medium">Psychologische Beratung — Lukas Herbig</p><p className="text-muted text-sm">Paul-Robeson-Str. 3</p><p className="text-muted text-sm">10439 Berlin</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div><p className="text-foreground font-medium">Telefon</p><p className="text-muted text-sm">030 98596064</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div><p className="text-foreground font-medium">E-Mail</p><p className="text-muted text-sm">kontakt@herbig-beratung.de</p></div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 md:p-8">
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

              <div className="bg-secondary-light border border-secondary/15 rounded-2xl p-5 md:p-8">
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
