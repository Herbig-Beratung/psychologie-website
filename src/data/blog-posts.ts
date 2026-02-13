export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  // ── MPU ────────────────────────────────────────────────
  {
    slug: "was-erwartet-mich-bei-der-mpu",
    title: "Was erwartet mich bei der MPU?",
    date: "2026-02-01",
    category: "MPU",
    categoryColor: "bg-primary/10 text-primary",
    excerpt:
      "Die medizinisch-psychologische Untersuchung ist f\u00fcr viele ein Buch mit sieben Siegeln. Ein \u00dcberblick \u00fcber Ablauf, Inhalte und die h\u00e4ufigsten Fragen.",
    content: [
      "Die MPU \u2014 umgangssprachlich oft als \"Idiotentest\" bezeichnet \u2014 ist f\u00fcr viele Betroffene mit gro\u00dfer Unsicherheit verbunden. Was genau passiert dort? Welche Fragen werden gestellt? Und wie kann ich mich vorbereiten? In diesem Beitrag gebe ich Ihnen einen ehrlichen \u00dcberblick.",
      "Die Untersuchung besteht in der Regel aus drei Teilen: einem medizinischen Check, einem Leistungstest am Computer und dem psychologischen Gespr\u00e4ch. Der medizinische Teil umfasst eine k\u00f6rperliche Untersuchung sowie gegebenenfalls Blut- oder Urinproben, insbesondere bei Alkohol- oder Drogenfragestellungen. Der Leistungstest pr\u00fcft Ihre Reaktionsf\u00e4higkeit, Konzentration und Wahrnehmungsgeschwindigkeit.",
      "Das Herzst\u00fcck der MPU ist das psychologische Gespr\u00e4ch. Hier geht es nicht darum, Sie \"reinzulegen\", sondern darum zu verstehen: Was ist passiert? Warum ist es passiert? Und was hat sich seitdem ver\u00e4ndert? Der Gutachter m\u00f6chte nachvollziehen, ob Sie die Hintergr\u00fcnde Ihres Verhaltens reflektiert haben und ob eine stabile Verhaltens\u00e4nderung stattgefunden hat.",
      "Eine gute Vorbereitung ist entscheidend \u2014 nicht im Sinne von auswendig gelernten Antworten, sondern im Sinne einer echten Auseinandersetzung mit sich selbst. In meiner verkehrspsychologischen Beratung arbeiten wir genau daran: Wir analysieren Ihre pers\u00f6nliche Situation, erarbeiten glaubw\u00fcrdige Ver\u00e4nderungsschritte und \u00fcben die Gespr\u00e4chssituation. So gehen Sie nicht nur gut vorbereitet, sondern auch mit mehr Selbstverst\u00e4ndnis in die Untersuchung.",
    ],
  },
  {
    slug: "mpu-nicht-bestanden-was-jetzt",
    title: "MPU nicht bestanden \u2014 was jetzt?",
    date: "2026-01-20",
    category: "MPU",
    categoryColor: "bg-primary/10 text-primary",
    excerpt:
      "Ein negatives MPU-Gutachten ist ein R\u00fcckschlag, aber kein Endurteil. Was Sie jetzt tun k\u00f6nnen und wie Sie beim n\u00e4chsten Anlauf bestehen.",
    content: [
      "Ein negatives MPU-Gutachten ist f\u00fcr die meisten Betroffenen ein Schock. Monatelange Vorbereitung, hohe Kosten \u2014 und dann das Ergebnis: \"negativ\". Doch so frustrierend das ist: Ein nicht bestandenes Gutachten bedeutet nicht, dass Sie die Fahrerlaubnis dauerhaft verlieren. Es bedeutet, dass die Begutachtungsstelle zum jetzigen Zeitpunkt noch Zweifel an einer stabilen Verhaltens\u00e4nderung hat.",
      "Der erste Schritt nach einem negativen Gutachten: Lesen Sie das Gutachten sorgf\u00e4ltig. Die Begr\u00fcndung enth\u00e4lt konkrete Hinweise darauf, was gefehlt hat. H\u00e4ufige Gr\u00fcnde sind eine unzureichende Aufarbeitung der Vorgeschichte, mangelnde Einsicht in das eigene Risikoverhalten oder fehlende Nachweise f\u00fcr eine stabile Ver\u00e4nderung \u2014 etwa Abstinenzbelege oder eine dokumentierte Beratung.",
      "Wichtig: Es gibt keine Sperrfrist. Sie k\u00f6nnen die MPU theoretisch sofort wiederholen. In der Praxis ist es allerdings ratsam, sich ausreichend Zeit f\u00fcr eine gr\u00fcndliche Nachbereitung zu nehmen. Eine professionelle verkehrspsychologische Beratung kann helfen, die L\u00fccken im ersten Anlauf gezielt zu schlie\u00dfen.",
      "In meiner Beratung analysieren wir gemeinsam das Gutachten, identifizieren die kritischen Stellen und erarbeiten einen individuellen Plan f\u00fcr den n\u00e4chsten Versuch. Das Ziel ist nicht, die \"richtigen Antworten\" zu lernen, sondern eine echte, nachvollziehbare Auseinandersetzung mit sich selbst zu f\u00fchren. Denn genau das ist es, was die Gutachter sehen wollen.",
    ],
  },
  {
    slug: "alkohol-drogen-punkte-welche-mpu-arten-gibt-es",
    title: "Alkohol, Drogen, Punkte: Welche MPU-Arten gibt es?",
    date: "2026-01-08",
    category: "MPU",
    categoryColor: "bg-primary/10 text-primary",
    excerpt:
      "Nicht jede MPU ist gleich. Je nach Anlass unterscheiden sich Ablauf, Anforderungen und Vorbereitung erheblich. Ein \u00dcberblick \u00fcber die verschiedenen MPU-Arten.",
    content: [
      "Die MPU wird h\u00e4ufig als ein einheitliches Verfahren wahrgenommen, doch tats\u00e4chlich gibt es verschiedene Arten, die sich je nach Anlass deutlich unterscheiden. Die drei h\u00e4ufigsten Gr\u00fcnde f\u00fcr eine MPU-Anordnung sind: Alkohol im Stra\u00dfenverkehr, Drogenkonsum und ein \u00fcberh\u00f6hter Punktestand in Flensburg. Dar\u00fcber hinaus kann eine MPU auch bei Straftaten im Stra\u00dfenverkehr oder bei k\u00f6rperlichen bzw. psychischen Einschr\u00e4nkungen angeordnet werden.",
      "Bei einer Alkohol-MPU steht die Trinkgeschichte im Mittelpunkt. Der Gutachter m\u00f6chte verstehen, welche Rolle Alkohol in Ihrem Leben spielt oder gespielt hat, wie es zur Trunkenheitsfahrt kam und welche Ver\u00e4nderungen Sie seitdem vorgenommen haben. Je nach Promillewert und Vorgeschichte kann ein Abstinenznachweis \u00fcber 6 oder 12 Monate erforderlich sein.",
      "Bei einer Drogen-MPU ist der Abstinenznachweis fast immer Pflicht \u2014 in der Regel \u00fcber 12 Monate mit regelm\u00e4\u00dfigen Screenings. Der Gutachter pr\u00fcft, ob der Drogenkonsum dauerhaft eingestellt wurde und ob ein R\u00fcckfallrisiko besteht. Bei einer Punkte-MPU hingegen geht es weniger um Substanzen, sondern um das Verhalten im Stra\u00dfenverkehr: Warum haben Sie wiederholt Regeln missachtet? Was hat sich an Ihrer Einstellung ge\u00e4ndert?",
      "Unabh\u00e4ngig von der Art der MPU gilt: Eine fundierte Vorbereitung ist der Schl\u00fcssel zum Erfolg. In meiner verkehrspsychologischen Beratung gehe ich individuell auf Ihre Situation ein \u2014 denn die Strategie f\u00fcr eine Alkohol-MPU unterscheidet sich grundlegend von der f\u00fcr eine Punkte-MPU. Gemeinsam erarbeiten wir einen klaren, glaubw\u00fcrdigen Weg.",
    ],
  },

  // \u2500\u2500 Privatpersonen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    slug: "5-anzeichen-dass-stress-chronisch-wird",
    title: "5 Anzeichen, dass Stress chronisch wird",
    date: "2026-01-15",
    category: "Privatpersonen",
    categoryColor: "bg-secondary/10 text-secondary",
    excerpt:
      "Stress geh\u00f6rt zum Leben. Aber wann wird er zum Problem? F\u00fcnf Warnsignale, die Sie ernst nehmen sollten \u2014 und was Sie dagegen tun k\u00f6nnen.",
    content: [
      "Ein gewisses Ma\u00df an Stress ist normal und kann sogar leistungsf\u00f6rdernd sein. Problematisch wird es, wenn der Stress nicht mehr nachl\u00e4sst \u2014 wenn das Nervensystem dauerhaft im Alarmzustand bleibt. Chronischer Stress ist einer der h\u00e4ufigsten Ausl\u00f6ser f\u00fcr psychische und k\u00f6rperliche Erkrankungen. Doch die \u00dcberg\u00e4nge sind oft schleichend.",
      "Erstes Anzeichen: Sie k\u00f6nnen nicht mehr abschalten. Selbst am Wochenende oder im Urlaub kreisen die Gedanken um Arbeit und Verpflichtungen. Zweites Anzeichen: Schlafprobleme. Sie wachen nachts auf, k\u00f6nnen nicht einschlafen oder f\u00fchlen sich morgens nicht erholt. Drittes Anzeichen: Reizbarkeit und emotionale D\u00fcnnh\u00e4utigkeit. Kleinigkeiten bringen Sie auf die Palme, und Sie reagieren unverh\u00e4ltnism\u00e4\u00dfig auf Alltagssituationen.",
      "Viertes Anzeichen: K\u00f6rperliche Symptome ohne klare Ursache. Kopfschmerzen, Verspannungen, Magenprobleme oder ein geschw\u00e4chtes Immunsystem k\u00f6nnen Ausdruck chronischer Stressbelastung sein. F\u00fcnftes Anzeichen: R\u00fcckzug und Motivationsverlust. Aktivit\u00e4ten, die Ihnen fr\u00fcher Freude gemacht haben, f\u00fchlen sich anstrengend an. Soziale Kontakte werden gemieden.",
      "Wenn Sie sich in mehreren dieser Punkte wiedererkennen, ist das ein wichtiges Signal. Chronischer Stress ist kein Zeichen von Schw\u00e4che \u2014 er ist eine nat\u00fcrliche Reaktion eines \u00fcberlasteten Systems. Der erste Schritt ist, die eigenen Stressoren zu erkennen und ernst zu nehmen. In meinen Webinaren zur Stressbew\u00e4ltigung und Resilienz arbeiten wir mit evidenzbasierten Methoden, die Ihnen helfen, aus dem Dauerstress-Modus herauszufinden.",
    ],
  },
  {
    slug: "resilienz-staerken-3-uebungen-fuer-den-alltag",
    title: "Resilienz st\u00e4rken: 3 \u00dcbungen f\u00fcr den Alltag",
    date: "2025-12-28",
    category: "Privatpersonen",
    categoryColor: "bg-secondary/10 text-secondary",
    excerpt:
      "Resilienz ist keine angeborene Eigenschaft \u2014 sie l\u00e4sst sich trainieren. Drei evidenzbasierte \u00dcbungen, die Sie sofort in Ihren Alltag integrieren k\u00f6nnen.",
    content: [
      "Resilienz beschreibt die F\u00e4higkeit, mit Belastungen, R\u00fcckschl\u00e4gen und Krisen umzugehen, ohne dauerhaft Schaden zu nehmen. Die gute Nachricht: Resilienz ist kein fester Pers\u00f6nlichkeitszug. Sie ist eine Kompetenz, die sich gezielt aufbauen und st\u00e4rken l\u00e4sst. Die folgenden drei \u00dcbungen basieren auf Erkenntnissen der positiven Psychologie und der kognitiven Verhaltenstherapie.",
      "\u00dcbung 1: Das Dankbarkeitstagebuch. Notieren Sie jeden Abend drei Dinge, die gut gelaufen sind \u2014 und warum. Das klingt simpel, hat aber einen nachweislich positiven Effekt auf die psychische Gesundheit. Studien zeigen, dass diese \u00dcbung nach bereits zwei Wochen das Wohlbefinden steigert und depressive Symptome reduziert. Der Mechanismus: Sie trainieren Ihr Gehirn, den Fokus von Problemen auf Ressourcen zu verlagern.",
      "\u00dcbung 2: Die 4-7-8-Atemtechnik. Atmen Sie 4 Sekunden ein, halten Sie 7 Sekunden an, atmen Sie 8 Sekunden aus. Wiederholen Sie dies vier Mal. Diese Technik aktiviert den Parasympathikus \u2014 den Teil des Nervensystems, der f\u00fcr Entspannung zust\u00e4ndig ist. Besonders wirksam bei akutem Stress, Einschlafproblemen oder vor herausfordernden Situationen.",
      "\u00dcbung 3: Kognitive Umstrukturierung. Wenn ein belastendes Ereignis eintritt, fragen Sie sich: Welche Gedanken habe ich gerade? Sind diese Gedanken Fakten oder Interpretationen? Gibt es eine alternative Sichtweise? Diese Methode aus der kognitiven Verhaltenstherapie hilft, automatische negative Denkmuster zu erkennen und bewusst zu ver\u00e4ndern. In meinen Webinaren zur Resilienz und Stressbew\u00e4ltigung vertiefen wir diese Techniken und passen sie an Ihre individuelle Situation an.",
    ],
  },
  {
    slug: "selbstwert-und-innere-staerke",
    title: "Selbstwert und innere St\u00e4rke: Warum wir uns selbst im Weg stehen",
    date: "2025-12-15",
    category: "Privatpersonen",
    categoryColor: "bg-secondary/10 text-secondary",
    excerpt:
      "Ein niedriger Selbstwert beeinflusst Beziehungen, Karriere und Wohlbefinden. Wie innere \u00dcberzeugungen entstehen \u2014 und wie Sie sie ver\u00e4ndern k\u00f6nnen.",
    content: [
      "Viele Menschen tragen innere \u00dcberzeugungen mit sich, die ihnen nicht bewusst sind, ihr Verhalten aber ma\u00dfgeblich steuern: \"Ich bin nicht gut genug\", \"Ich darf keine Fehler machen\", \"Ich muss es allen recht machen\". Diese Glaubenss\u00e4tze entstehen oft in der Kindheit und Jugend und werden im Erwachsenenalter selten hinterfragt \u2014 obwohl sie l\u00e4ngst nicht mehr zur aktuellen Lebenssituation passen.",
      "Ein niedriger Selbstwert zeigt sich auf vielf\u00e4ltige Weise: in der Schwierigkeit, Nein zu sagen, im st\u00e4ndigen Vergleich mit anderen, in der Angst vor Ablehnung oder im Perfektionismus. Betroffene leisten oft \u00fcberdurchschnittlich viel \u2014 nicht aus Freude, sondern aus der unbewussten \u00dcberzeugung, nur durch Leistung wertvoll zu sein. Das f\u00fchrt langfristig zu Ersch\u00f6pfung, Unzufriedenheit und h\u00e4ufig auch zu Beziehungsproblemen.",
      "Die systemische Psychologie betrachtet Selbstwert nicht als isoliertes Problem, sondern im Kontext von Beziehungen und Lebenserfahrungen. Wer bin ich \u2014 unabh\u00e4ngig von meiner Leistung? Welche Rollen spiele ich in meinem Leben, und welche davon habe ich bewusst gew\u00e4hlt? Diese Fragen sind oft der Ausgangspunkt f\u00fcr echte Ver\u00e4nderung.",
      "In meinem Webinar zu Selbstwert und Identit\u00e4t arbeiten wir mit Methoden aus der systemischen Therapie und der Schematherapie. Ziel ist es, die eigenen Muster zu erkennen, ihre Entstehung zu verstehen und schrittweise neue, ges\u00fcndere \u00dcberzeugungen aufzubauen. Denn ein stabiler Selbstwert ist kein Luxus \u2014 er ist die Grundlage f\u00fcr ein erf\u00fclltes Leben.",
    ],
  },

  // \u2500\u2500 Unternehmen \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  {
    slug: "warum-gesunde-fuehrung-kein-softskill-ist",
    title: "Warum gesunde F\u00fchrung kein Softskill ist",
    date: "2026-01-05",
    category: "Unternehmen",
    categoryColor: "bg-primary-light text-primary-dark",
    excerpt:
      "Gesunde F\u00fchrung wird oft als \"nice to have\" abgetan. Dabei zeigt die Forschung: Sie ist einer der st\u00e4rksten Hebel f\u00fcr Leistung, Zufriedenheit und Mitarbeiterbindung.",
    content: [
      "In vielen Unternehmen wird gesunde F\u00fchrung als weiches Thema betrachtet \u2014 etwas, das man macht, wenn Zeit und Budget \u00fcbrig sind. Die psychologische Forschung zeichnet ein anderes Bild: Der F\u00fchrungsstil hat einen nachweislich gr\u00f6\u00dferen Einfluss auf die psychische Gesundheit von Mitarbeitenden als fast jeder andere Arbeitsplatzfaktor.",
      "Studien zeigen, dass F\u00fchrungskr\u00e4fte, die psychologische Sicherheit schaffen, nicht nur ges\u00fcndere Teams haben, sondern auch produktivere. Google's bekannte \"Project Aristotle\"-Studie identifizierte psychologische Sicherheit als den wichtigsten Faktor f\u00fcr Team-Performance. Mitarbeitende, die sich sicher f\u00fchlen Fehler anzusprechen und Ideen einzubringen, sind innovativer, engagierter und bleiben l\u00e4nger im Unternehmen.",
      "Gesunde F\u00fchrung bedeutet nicht, allen alles recht zu machen. Es bedeutet, die Auswirkungen des eigenen F\u00fchrungsverhaltens auf die psychische Gesundheit des Teams zu verstehen und bewusst zu gestalten. Das umfasst klare Kommunikation, realistische Erwartungen, das Erkennen von Belastungssignalen und die F\u00e4higkeit, auch die eigene Belastung zu regulieren.",
      "In meinem Workshop \"Gesunde F\u00fchrung\" arbeiten wir praxisnah an genau diesen Kompetenzen. F\u00fchrungskr\u00e4fte lernen, psychologische Grundlagen auf ihren F\u00fchrungsalltag anzuwenden \u2014 nicht als zus\u00e4tzliche Aufgabe, sondern als integralen Bestandteil guter F\u00fchrung. Denn gesunde F\u00fchrung ist kein Softskill. Sie ist ein strategischer Erfolgsfaktor.",
    ],
  },
  {
    slug: "psychische-gefaehrdungsbeurteilung-was-unternehmen-wissen-muessen",
    title: "Psychische Gef\u00e4hrdungsbeurteilung: Was Unternehmen wissen m\u00fcssen",
    date: "2025-12-20",
    category: "Unternehmen",
    categoryColor: "bg-primary-light text-primary-dark",
    excerpt:
      "Seit 2013 gesetzlich vorgeschrieben, von vielen Unternehmen noch immer vernachl\u00e4ssigt: Die psychische Gef\u00e4hrdungsbeurteilung. Was steckt dahinter und wie setzen Sie sie um?",
    content: [
      "Seit der Novellierung des Arbeitsschutzgesetzes 2013 sind Arbeitgeber in Deutschland verpflichtet, auch psychische Belastungen am Arbeitsplatz zu erfassen und zu beurteilen (\u00a7 5 ArbSchG). In der Praxis wird diese Pflicht jedoch h\u00e4ufig vernachl\u00e4ssigt \u2014 oft aus Unsicherheit dar\u00fcber, wie eine psychische Gef\u00e4hrdungsbeurteilung konkret umgesetzt werden soll.",
      "Anders als bei physischen Gef\u00e4hrdungen (L\u00e4rm, Gefahrstoffe, Ergonomie) lassen sich psychische Belastungen nicht mit einem Messger\u00e4t erfassen. Die GDA-Leitlinien empfehlen daher eine Kombination aus standardisierten Befragungen, Arbeitsplatzbeobachtungen und moderierten Workshops. Zentrale Themen sind: Arbeitsintensit\u00e4t, Handlungsspielraum, soziale Beziehungen, Arbeitsumgebung und neue Arbeitsformen wie Homeoffice.",
      "Wichtig: Die psychische Gef\u00e4hrdungsbeurteilung ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Nach der Erfassung folgen Ma\u00dfnahmen, deren Umsetzung und eine Wirksamkeitskontrolle. Die Dokumentation ist nicht nur gesetzlich vorgeschrieben, sondern sch\u00fctzt das Unternehmen auch bei Pr\u00fcfungen durch die Aufsichtsbeh\u00f6rden.",
      "Als Psychologe mit Erfahrung in der betrieblichen Gesundheit unterst\u00fctze ich Unternehmen bei der gesamten Durchf\u00fchrung: von der Planung und Kommunikation \u00fcber die Datenerhebung bis zur Ableitung konkreter Ma\u00dfnahmen. Das Ziel ist nicht nur die Erf\u00fcllung der gesetzlichen Pflicht, sondern ein echter Mehrwert f\u00fcr die Organisation \u2014 weniger Fehlzeiten, h\u00f6here Zufriedenheit und eine ges\u00fcndere Arbeitskultur.",
    ],
  },
  {
    slug: "mitarbeiterbindung-beginnt-bei-der-mentalen-gesundheit",
    title: "Mitarbeiterbindung beginnt bei der mentalen Gesundheit",
    date: "2025-12-08",
    category: "Unternehmen",
    categoryColor: "bg-primary-light text-primary-dark",
    excerpt:
      "Fachkr\u00e4ftemangel, steigende Fluktuation, \"Quiet Quitting\": Warum Unternehmen die mentale Gesundheit ihrer Teams ernst nehmen m\u00fcssen.",
    content: [
      "Der Fachkr\u00e4ftemangel ist in nahezu allen Branchen sp\u00fcrbar. Unternehmen investieren Millionen in Recruiting, Employer Branding und Benefits. Doch ein entscheidender Faktor f\u00fcr Mitarbeiterbindung wird h\u00e4ufig \u00fcbersehen: die psychische Gesundheit am Arbeitsplatz. Studien der Gallup-Organisation zeigen, dass der h\u00e4ufigste K\u00fcndigungsgrund nicht das Gehalt ist \u2014 sondern die F\u00fchrungskraft und das Arbeitsklima.",
      "\"Quiet Quitting\" \u2014 das Ph\u00e4nomen, dass Mitarbeitende nur noch das N\u00f6tigste tun \u2014 ist oft kein Zeichen von Faulheit, sondern von emotionaler Ersch\u00f6pfung. Wer sich dauerhaft \u00fcberlastet, nicht geh\u00f6rt oder nicht wertgesch\u00e4tzt f\u00fchlt, zieht sich zur\u00fcck. Die innere K\u00fcndigung geht der tats\u00e4chlichen K\u00fcndigung meist Monate voraus \u2014 und in dieser Phase sinken Produktivit\u00e4t, Kreativit\u00e4t und Teamdynamik.",
      "Was k\u00f6nnen Unternehmen tun? Der Schl\u00fcssel liegt in einer Unternehmenskultur, die psychische Gesundheit nicht als Privatsache betrachtet, sondern als gemeinsame Verantwortung. Das beginnt bei der F\u00fchrungsebene: F\u00fchrungskr\u00e4fte m\u00fcssen lernen, Belastungssignale zu erkennen, offene Gespr\u00e4che zu f\u00fchren und pr\u00e4ventiv zu handeln. Es geht nicht um Therapie am Arbeitsplatz, sondern um einen bewussten Umgang mit den psychologischen Grundbed\u00fcrfnissen von Mitarbeitenden.",
      "In meinen Workshops f\u00fcr Unternehmen verbinde ich wissenschaftliche Erkenntnisse mit praktischen Tools. F\u00fchrungskr\u00e4fte und HR-Verantwortliche lernen, eine Arbeitsumgebung zu gestalten, in der Menschen nicht nur funktionieren, sondern sich entfalten k\u00f6nnen. Denn nachhaltige Mitarbeiterbindung beginnt nicht beim Obstkorb \u2014 sie beginnt bei der mentalen Gesundheit.",
    ],
  },
];
