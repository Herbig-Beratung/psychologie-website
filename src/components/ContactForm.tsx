"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Nachricht gesendet</h2>
          <p className="text-muted leading-relaxed mb-6">
            Vielen Dank für Ihre Nachricht. Ich melde mich zeitnah bei Ihnen zurück.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-background transition-colors duration-200 text-sm"
          >
            Weitere Nachricht senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
      <h2 className="text-2xl font-bold text-foreground mb-2">Nachricht senden</h2>
      <p className="text-muted text-sm mb-8">Füllen Sie das Formular aus und ich melde mich zeitnah bei Ihnen zurück.</p>

      {status === "error" && errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
            <optgroup label="Workshops — Privatpersonen">
              <option value="workshop-resilienz-stressbewaeltigung">Workshop: Resilienz & Stressbewältigung</option>
              <option value="workshop-mentale-leistungsfaehigkeit">Workshop: Mentale Leistungsfähigkeit</option>
              <option value="workshop-emotionale-intelligenz">Workshop: Emotionale Intelligenz & Beziehungsdynamiken</option>
              <option value="workshop-selbstwert-identitaet">Workshop: Selbstwert & Identität</option>
            </optgroup>
            <optgroup label="Workshops — Unternehmen">
              <option value="workshop-gesunde-fuehrung">Workshop: Gesunde Führung</option>
              <option value="workshop-resilienz-mitarbeitende">Workshop: Resilienz & Stressmanagement für Mitarbeitende</option>
              <option value="workshop-change-resilienz">Workshop: Change & Resilienz für Organisationen</option>
              <option value="workshop-mentale-gesundheit-praevention">Workshop: Mentale Gesundheit & Prävention</option>
            </optgroup>
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
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-8 py-3.5 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Wird gesendet...
            </>
          ) : (
            "Nachricht senden"
          )}
        </button>
      </form>
    </div>
  );
}
