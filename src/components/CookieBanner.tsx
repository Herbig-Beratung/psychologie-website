"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
};

const COOKIE_NAME = "cookie_consent_v1";

export function getConsent(): CookieConsent | null {
  const raw = Cookies.get(COOKIE_NAME);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

function setConsent(consent: CookieConsent) {
  Cookies.set(COOKIE_NAME, JSON.stringify(consent), { expires: 365 });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptAll() {
    setConsent({ necessary: true, analytics: true });
    setVisible(false);
    window.location.reload();
  }

  function acceptNecessary() {
    setConsent({ necessary: true, analytics: false });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6 animate-fade-in-up">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl shadow-xl p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">
          <p className="text-sm text-foreground font-medium mb-1 sm:mb-2">Cookie-Einstellungen</p>
          <p className="text-xs text-muted leading-relaxed">
            Diese Website verwendet technisch notwendige Cookies sowie optionale Analyse-Cookies, um die Nutzung der Website zu verstehen und zu verbessern. Weitere Informationen finden Sie in der{" "}
            <Link href="/datenschutz" className="text-secondary hover:text-secondary/80 underline transition-colors">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={acceptAll}
            className="px-6 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={acceptNecessary}
            className="px-6 py-2.5 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-background transition-colors duration-200"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
