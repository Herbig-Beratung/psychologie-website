import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
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
    default: "Psychologische Beratung | Lukas Herbig",
    template: "%s | Psychologische Beratung — Lukas Herbig",
  },
  description:
    "Professionelle psychologische Beratung: MPU-Vorbereitung, psychische Gefährdungsbeurteilungen für Unternehmen und Workshops für mentale Gesundheit.",
  keywords: [
    "MPU Beratung",
    "Psychische Gefährdungsbeurteilung",
    "Workshops mentale Gesundheit",
    "Verkehrspsychologie",
    "Klinische Psychologie",
    "Systemischer Ansatz",
    "Lukas Herbig",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Psychologische Beratung — Lukas Herbig",
    title: "Psychologische Beratung | Lukas Herbig",
    description:
      "MPU-Vorbereitung, mentale Gesundheit & Workshops — professionelle psychologische Beratung mit systemischem Ansatz.",
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
    title: "Psychologische Beratung | Lukas Herbig",
    description:
      "MPU-Vorbereitung, mentale Gesundheit & Workshops — professionelle psychologische Beratung mit systemischem Ansatz.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <Providers>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieBanner />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
