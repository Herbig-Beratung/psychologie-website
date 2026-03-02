"use client";

import { useState } from "react";

const tabs = [
  {
    id: "verkehrsrecht",
    label: "Verkehrsrechtliche Auffälligkeiten",
    intro:
      "Eine MPU wird angeordnet, wenn die Fahrerlaubnisbehörde Zweifel an Ihrer Fahreignung hat — etwa nach verkehrsrechtlichen Auffälligkeiten, die auf eine eingeschränkte Verkehrszuverlässigkeit hindeuten. Die Vorbereitung umfasst eine strukturierte Aufarbeitung der Vorgeschichte und den Aufbau stabiler Verhaltensänderungen.",
    questions: [
      {
        q: "Wann wird eine MPU wegen verkehrsrechtlicher Auffälligkeiten angeordnet?",
        a: "Die Fahrerlaubnisbehörde ordnet eine MPU an, wenn bestimmte gesetzlich definierte Grenzwerte überschritten wurden oder wiederholte Auffälligkeiten im Straßenverkehr vorliegen. Auch Straftaten mit Verkehrsbezug können zur Anordnung führen.",
      },
      {
        q: "Welche Nachweise werden im Vorfeld benötigt?",
        a: "Je nach Art und Schwere der Auffälligkeit können Nachweisprogramme über 6 oder 12 Monate erforderlich sein. Ich berate Sie im Erstgespräch, welche Dokumentationsanforderungen in Ihrem Fall gelten, und vermittle Sie an zertifizierte Institute.",
      },
      {
        q: "Wie lange dauert die Vorbereitung?",
        a: "Die Beratung umfasst je nach Paket 2 bis 6 Stunden. Hinzu kommt die Zeit für eventuelle Nachweisprogramme (6–12 Monate). Je früher Sie mit der Vorbereitung beginnen, desto besser stehen Ihre Aussichten.",
      },
    ],
  },
  {
    id: "punkte",
    label: "Punkteauffälligkeiten",
    intro:
      "Wer im Fahreignungsregister in Flensburg 8 oder mehr Punkte ansammelt, muss zur MPU. Auch bei schwerwiegenden Einzelverstößen kann die Fahrerlaubnisbehörde eine MPU anordnen.",
    questions: [
      {
        q: "Ab wie vielen Punkten droht die MPU?",
        a: "Die MPU wird angeordnet, wenn Sie 8 Punkte in Flensburg erreicht haben und Ihnen der Führerschein entzogen wurde. In Einzelfällen kann die Behörde bereits vorher Zweifel an Ihrer Fahreignung äußern.",
      },
      {
        q: "Welche Vergehen führen zu Punkten?",
        a: "Geschwindigkeitsüberschreitungen, Rotlichtverstöße, Handynutzung am Steuer, Abstandsvergehen und weitere Ordnungswidrigkeiten. Besonders schwer wiegen Straftaten im Straßenverkehr wie Nötigung oder Unfallflucht.",
      },
      {
        q: "Was wird in der MPU bei Punkteauffälligkeiten geprüft?",
        a: "Der Gutachter prüft, ob Sie die Ursachen Ihres Fahrverhaltens erkannt haben, welche Veränderungen Sie eingeleitet haben und wie stabil diese sind. Ziel ist der Nachweis, dass Sie dauerhaft verkehrsgerecht handeln werden.",
      },
    ],
  },
  {
    id: "substanzen",
    label: "Substanzbezogene Auffälligkeiten",
    intro:
      "Eine MPU wird angeordnet, wenn Sie im Zusammenhang mit verkehrsrelevanten Substanzen im Straßenverkehr aufgefallen sind — unabhängig davon, ob ein Unfall vorlag oder nicht. Die Begutachtungsvorbereitung konzentriert sich auf Ursachenverständnis, Verhaltensänderung und die Erfüllung der behördlichen Nachweisanforderungen.",
    questions: [
      {
        q: "Welche Auffälligkeiten führen zur MPU?",
        a: "Bereits ein einmaliger Nachweis verkehrsrelevanter Substanzen bei einer Verkehrskontrolle kann zur MPU-Anordnung führen. Die Fahrerlaubnisbehörde prüft in diesen Fällen, ob Zweifel an der Fahreignung bestehen.",
      },
      {
        q: "Welche Nachweisanforderungen gelten?",
        a: "In der Regel wird ein Nachweisprogramm über 6 oder 12 Monate gefordert. Die konkreten Dokumentationsanforderungen richten sich nach Art und Umfang der Auffälligkeit. Ich berate Sie, welches Verfahren in Ihrem Fall erforderlich ist.",
      },
      {
        q: "Was ist der zentrale Fokus in der Vorbereitung?",
        a: "Die Begutachtung prüft Ihre Einsichtsfähigkeit, die Tragfähigkeit Ihrer Verhaltensänderung und Ihre Stabilisierungsstrategien. Je nach Fallkonstellation können unterschiedliche Nachweisanforderungen gelten — das klären wir gemeinsam im Erstgespräch.",
      },
    ],
  },
];

export default function MpuGruende() {
  const [activeTab, setActiveTab] = useState("verkehrsrecht");
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
