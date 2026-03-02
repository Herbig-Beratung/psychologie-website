import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingMpuCta from "@/components/FloatingMpuCta";
import Providers from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const siteUrl = "https://herbig-beratung.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Psychologische Beratung Berlin | MPU Beratung & Workshops — Lukas Herbig",
    template: "%s | Psychologische Beratung Berlin — Lukas Herbig",
  },
  description:
    "Psychologische Beratung in Berlin: Verkehrspsychologische Begutachtungsvorbereitung, psychische Gefährdungsbeurteilungen und Workshops. Praxis in Berlin Mitte & Neukölln.",
  keywords: [
    "MPU Beratung Berlin",
    "MPU Vorbereitung Berlin",
    "Verkehrspsychologische Beratung Berlin",
    "Psychologische Beratung Berlin",
    "Psychische Gefährdungsbeurteilung Berlin",
    "Workshops Resilienz Berlin",
    "Verkehrspsychologie Berlin",
    "Klinische Psychologie Berlin",
    "Systemischer Ansatz",
    "Lukas Herbig Berlin",
    "MPU Berlin Kosten",
    "MPU Berater Berlin",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Psychologische Beratung Berlin — Lukas Herbig",
    title: "Psychologische Beratung Berlin | MPU Beratung & Workshops — Lukas Herbig",
    description:
      "Verkehrspsychologische Begutachtungsvorbereitung in Berlin & Workshops — professionelle psychologische Beratung mit systemischem Ansatz. Praxis in Berlin Mitte & Neukölln.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Psychologische Beratung — Lukas Herbig",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologische Beratung Berlin | MPU Beratung & Workshops — Lukas Herbig",
    description:
      "Verkehrspsychologische Begutachtungsvorbereitung in Berlin & Workshops — professionelle psychologische Beratung mit systemischem Ansatz.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16671563154"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16671563154');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16671563154/kz_OCMiE2_obEJK7z40-',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Psychologische Beratung — Lukas Herbig",
              description:
                "Psychologische Beratung in Berlin: Verkehrspsychologische Begutachtungsvorbereitung, psychische Gefährdungsbeurteilungen und Workshops.",
              url: "https://herbig-beratung.de",
              telephone: "+493098596064",
              email: "kontakt@herbig-beratung.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Paul-Robeson-Straße 3",
                addressLocality: "Berlin",
                postalCode: "10439",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.5488,
                longitude: 13.4105,
              },
              areaServed: {
                "@type": "City",
                name: "Berlin",
              },
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Psychologische Beratungsleistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "MPU Beratung Berlin",
                      description:
                        "Verkehrspsychologische Begutachtungsvorbereitung und MPU-Vorbereitung in Berlin. Fahreignungsfragen, Punkteauffälligkeiten, P-Schein. 4–8 Stunden Einzelberatung.",
                    },
                    price: "1200",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Psychische Gefährdungsbeurteilung Berlin",
                      description:
                        "IHK-zertifizierte psychische Gefährdungsbeurteilung für Unternehmen in Berlin nach GDA-Leitlinien.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Psychologische Workshops Berlin",
                      description:
                        "Workshops für Resilienz, Stressbewältigung und gesunde Führung in Berlin.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <Providers>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingMpuCta />
            <CookieBanner />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
