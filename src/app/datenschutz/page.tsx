import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung — Psychologische Beratung Lukas Herbig, Berlin.",
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2e1f] via-[#3a3528] to-[#3d4a3a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fade-in-up">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="space-y-10 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Verantwortliche Stelle</h2>
              <p>
                Lukas Herbig<br />
                Paul-Robeson-Straße 3<br />
                10439 Berlin<br />
                Deutschland
              </p>
              <p className="mt-3">
                Telefon: 017672229459<br />
                E-Mail: kontakt@herbig-beratung.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</h2>
              <p>
                Beim Aufrufen dieser Website werden automatisch Informationen durch den Browser Ihres Endgeräts an den Server meines Hosting-Anbieters übermittelt. Diese Informationen werden temporär in sogenannten Server-Logfiles gespeichert.
              </p>
              <p className="mt-3">Folgende Daten können dabei ohne Ihr Zutun erfasst werden:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und Betriebssystem</li>
                <li>Name Ihres Access-Providers</li>
              </ul>
              <p className="mt-3">
                Diese Daten werden verarbeitet, um einen reibungslosen Verbindungsaufbau der Website zu gewährleisten, die Systemsicherheit und -stabilität auszuwerten sowie zu administrativen Zwecken.
              </p>
              <p className="mt-3">Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Nutzung des Kontaktformulars</h2>
              <p>
                Wenn Sie mir über ein Kontaktformular Anfragen senden, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
              </p>
              <p className="mt-3">Verarbeitet werden können insbesondere:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Inhalt Ihrer Nachricht</li>
              </ul>
              <p className="mt-3">
                Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                Die Daten werden nicht ohne Ihre Einwilligung weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Hosting der Website</h2>
              <p>
                Diese Website wird über den Hosting-Anbieter Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA betrieben.
              </p>
              <p className="mt-3">
                Die Datenverarbeitung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission gemäß Art. 46 DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Domainverwaltung</h2>
              <p>
                Die Domain wird verwaltet durch Namecheap, Inc., 4600 East Washington Street, Suite 305, Phoenix, AZ 85034, USA.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Cookies</h2>
              <p>
                Diese Website verwendet technisch notwendige Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Nutzung bestimmter Funktionen ermöglichen.
              </p>
              <p className="mt-3">
                Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers deaktivieren oder einschränken.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Ihre Rechte als betroffene Person</h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft gemäß Art. 15 DSGVO</li>
                <li>Berichtigung gemäß Art. 16 DSGVO</li>
                <li>Löschung gemäß Art. 17 DSGVO</li>
                <li>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                <li>Widerspruch gemäß Art. 21 DSGVO</li>
              </ul>
              <p className="mt-3">
                Sie haben außerdem das Recht, eine erteilte Einwilligung jederzeit zu widerrufen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2025.
                Durch die Weiterentwicklung der Website oder aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung erforderlich werden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
