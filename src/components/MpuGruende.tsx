"use client";

import { useState } from "react";

const tabs = [
  {
    id: "alkohol",
    label: "MPU Alkohol",
    intro:
      "Eine MPU wegen Alkohol wird angeordnet, wenn Sie mit einer Blutalkoholkonzentration (BAK) von 1,6 Promille oder mehr im Straßenverkehr aufgefallen sind — oder bei wiederholten Alkoholdelikten bereits ab 0,5 Promille.",
    questions: [
      {
        q: "Ab welchem Promillewert wird eine MPU angeordnet?",
        a: "In der Regel ab 1,6 Promille bei einer Ersttat. Bei Wiederholungstätern oder Auffälligkeiten im Zusammenhang mit Alkohol kann die MPU bereits ab 0,5 Promille angeordnet werden. Auch eine Straftat unter Alkoholeinfluss (z.\u00A0B. Körperverletzung) kann zur MPU-Anordnung führen.",
      },
      {
        q: "Muss ich einen Abstinenznachweis erbringen?",
        a: "In den meisten Fällen ja. Je nach Schwere des Falls wird ein Abstinenznachweis über 6 oder 12 Monate gefordert — entweder über Urinscreenings oder eine Haaranalyse. Ich berate Sie im Erstgespräch, welches Programm für Ihren Fall sinnvoll ist, und vermittle Sie an zertifizierte Institute.",
      },
      {
        q: "Wie lange dauert die Vorbereitung?",
        a: "Die reine Beratung umfasst je nach Paket 3 bis 6 Stunden. Hinzu kommt die Zeit für den Abstinenznachweis (6–12 Monate). Je früher Sie mit der Vorbereitung beginnen, desto besser stehen Ihre Chancen.",
      },
    ],
  },
  {
    id: "punkte",
    label: "MPU Punkte",
    intro:
      "Wer im Fahreignungsregister in Flensburg 8 oder mehr Punkte ansammelt, muss zur MPU. Auch bei schwerwiegenden Einzelverstößen kann die Fahrerlaubnisbehörde eine MPU anordnen.",
    questions: [
      {
        q: "Ab wie vielen Punkten droht die MPU?",
        a: "Die MPU wird angeordnet, wenn Sie 8 Punkte in Flensburg erreicht haben und Ihnen der Führerschein entzogen wurde. In Einzelfällen kann die Behörde bereits vorher Zweifel an Ihrer Fahreignung äußern.",
      },
      {
        q: "Welche Vergehen führen zu Punkten?",
        a: "Geschwindigkeitsüberschreitungen, Rotlichtverstöße, Handy am Steuer, Abstandsvergehen und weitere Ordnungswidrigkeiten. Besonders schwer wiegen Straftaten im Straßenverkehr wie Nötigung oder Unfallflucht.",
      },
      {
        q: "Was wird in der MPU bei Punkten geprüft?",
        a: "Der Gutachter prüft, ob Sie die Ursachen Ihres Fahrverhaltens erkannt haben, welche Veränderungen Sie eingeleitet haben und wie stabil diese sind. Ziel ist der Nachweis, dass Sie dauerhaft verkehrsgerecht handeln werden.",
      },
    ],
  },
  {
    id: "drogen",
    label: "MPU Drogen",
    intro:
      "Eine MPU wegen Drogen wird angeordnet, wenn Sie unter dem Einfluss illegaler Substanzen am Straßenverkehr teilgenommen haben — unabhängig davon, ob ein Unfall passiert ist oder nicht.",
    questions: [
      {
        q: "Welche Substanzen führen zur MPU?",
        a: "Alle illegalen Substanzen können zur MPU-Anordnung führen: Cannabis (THC), Amphetamine, Kokain, MDMA, Opiate und weitere. Bereits ein einmaliger Nachweis im Blut bei einer Verkehrskontrolle reicht aus.",
      },
      {
        q: "Welche Abstinenznachweise werden verlangt?",
        a: "In der Regel wird ein Abstinenzprogramm über 6 oder 12 Monate gefordert. Dies erfolgt über Urinscreenings (mindestens 4–6 Termine) oder eine Haaranalyse (mindestens 6 cm Haarlänge für 6 Monate). Ich berate Sie, welches Verfahren für Sie passt.",
      },
      {
        q: "Kann ich die MPU auch ohne Abstinenz bestehen?",
        a: "Bei harten Drogen ist Abstinenz in der Regel zwingend erforderlich. Bei Cannabis kann unter bestimmten Umständen auch kontrolliertes Konsumverhalten (nur Gelegenheitskonsum ohne Verkehrsbezug) akzeptiert werden — das hängt vom Einzelfall ab.",
      },
    ],
  },
];

export default function MpuGruende() {
  const [activeTab, setActiveTab] = useState("alkohol");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-secondary text-white"
                : "bg-primary-light text-foreground hover:bg-border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <p className="text-muted leading-relaxed mb-6">{currentTab.intro}</p>

      {/* Accordion */}
      <div className="space-y-3">
        {currentTab.questions.map((item, i) => {
          const key = `${currentTab.id}-${i}`;
          const isOpen = openItems[key] ?? false;
          return (
            <div
              key={key}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(key)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-card hover:bg-primary-light/50 transition-colors"
              >
                <span className="font-medium text-foreground text-sm sm:text-base">
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-4 pt-1 bg-card">
                  <p className="text-sm text-muted leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
