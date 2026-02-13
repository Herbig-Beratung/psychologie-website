import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "Beratung für mentale Gesundheit | Lukas Herbig",
    template: "%s | Beratung für mentale Gesundheit — Lukas Herbig",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
