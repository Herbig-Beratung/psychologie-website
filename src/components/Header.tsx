"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über mich" },
  { href: "/services", label: "Leistungen" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lukas-herbig.png"
            alt="Lukas Herbig"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover ring-1 ring-border"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-primary-dark tracking-tight">
              Psychologische Beratung
            </span>
            <span className="text-xs text-muted tracking-wide uppercase">
              Lukas Herbig
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-secondary pb-0.5"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200"
        >
          Kontakt aufnehmen
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    pathname === link.href ? "text-primary" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center px-5 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-200"
              >
                Kontakt aufnehmen
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
