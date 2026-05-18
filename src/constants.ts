/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'de' | 'en';

export const TRANSLATIONS = {
  de: {
    nav: {
      experience: "Erfahrung",
      skills: "Skills",
      share: "Share"
    },
    profile: {
      name: "Oleksandr Prykhodko",
      title: "Flutter App Entwickler",
      location: "Berlin, Deutschland",
      description: "Erfahrener IT-Spezialist mit über 3 Jahren Erfahrung im Mobile Testing, der sich nun konsequent auf die Softwareentwicklung spezialisiert hat. Mein beruflicher Fokus liegt aktuell ausschließlich auf der Entwicklung von performanten und skalierbaren Cross-Plattform-Applikationen mit Flutter unter Einsatz moderner KI-gestützter Entwicklungsprozesse.",
      status: "Verfügbar ab sofort"
    },
    sections: {
      intro: "Profil & Ziele",
      qualification: "Aktuelle Qualifikation",
      techProfile: "Technisches Profil",
      experience: "Berufserfahrung",
      education: "Akademische Ausbildung"
    },
    contact: "Kontakt",
    download: "PDF Herunterladen",
    languages: "Sprachkenntnisse",
    scan: {
      title: "Portfolio scannen",
      modalTitle: "Digitales Profil",
      modalDesc: "Scannen Sie diesen Code, um mein Profil mobil zu öffnen.",
      close: "Schließen"
    },
    footer: "Digitale Version verfügbar auf {url} • Aktualisiert: Mai 2026",
    exp_details: {
      momenta: "Prüfung und Validierung hardware- und softwarebasierter Autopilot-Systeme für die Automobilindustrie.",
      bts: "Unterstützung und Wartung von automatisierten Bankensystemen.",
      ts_field_items: [
        "Leitung von Smartphone- und Smart-Vehicle-Testprojekten in mehreren Ländern.",
        "Organisation von Schulungen für angehende Field Test Engineers.",
        "Aufbau und Training eines Test-Teams in Thailand."
      ],
      ts_eng_items: [
        "Durchführung von Netzwerktests (VoLTE/ViLTE/VoWIFI, 5G transition tests).",
        "Fehleranalyse mit Tools wie QXDM, QPST, Wireshark und ADB.",
        "Dokumentation und Registrierung von Bug-Reports in Tracking-Systemen."
      ]
    },
    qual_items: [
      "Softwareentwicklung mit Dart (OOP, Null Safety, Async)",
      "Mobile App-Entwicklung mit Flutter (Layouts, State Mgmt, APIs)",
      "AI Assisted Development (KI-Assistenz, Context Engineering)",
      "Testen, Debugging und Deployment (iOS & Android)"
    ],
    skill_headers: {
      core: "Programmierung",
      mobile: "Mobile & Hardware",
      soft: "Expertise & Soft Skills"
    }
  },
  en: {
    nav: {
      experience: "Experience",
      skills: "Skills",
      share: "Share"
    },
    profile: {
      name: "Oleksandr Prykhodko",
      title: "Flutter App Developer",
      location: "Berlin, Germany",
      description: "Experienced IT specialist with over 3 years in mobile testing, now consistently specializing in software development. My professional focus is currently exclusively on developing performant and scalable cross-platform applications with Flutter using modern AI-supported development processes.",
      status: "Available immediately"
    },
    sections: {
      intro: "Profile & Goals",
      qualification: "Current Qualification",
      techProfile: "Technical Profile",
      experience: "Work Experience",
      education: "Academic Education"
    },
    contact: "Contact",
    download: "Download PDF",
    languages: "Language Skills",
    scan: {
      title: "Scan Portfolio",
      modalTitle: "Digital Profile",
      modalDesc: "Scan this code to open my profile on your mobile device.",
      close: "Close"
    },
    footer: "Digital version available at {url} • Updated: May 2026",
    exp_details: {
      momenta: "Testing and validation of hardware and software-based autopilot systems for the automotive industry.",
      bts: "Support and maintenance of automated banking systems.",
      ts_field_items: [
        "Lead smartphone and smart vehicle field testing projects in multiple countries.",
        "Organization of training sessions for junior field test engineers.",
        "Recruitment and training of a field testing team in Thailand."
      ],
      ts_eng_items: [
        "Network testing (VoLTE/ViLTE/VoWIFI, 5G transition tests).",
        "Error analysis using tools like QXDM, QPST, Wireshark, and ADB.",
        "Preparation of bug reports and registration in bug tracking systems."
      ]
    },
    qual_items: [
      "Software Development with Dart (OOP, Null Safety, Async)",
      "Mobile App Development with Flutter (Layouts, State Mgmt, APIs)",
      "AI Assisted Development (AI Assistants, Context Engineering)",
      "Testing, Debugging and Deployment (iOS & Android)"
    ],
    skill_headers: {
      core: "Programming",
      mobile: "Mobile & Hardware",
      soft: "Expertise & Soft Skills"
    }
  }
};

export const PROFILE = {
  name: "Oleksandr Prykhodko",
  email: "olexandr.prykhodko@gmail.com",
  github: "https://github.com/Kanzatuwka",
  linkedin: "https://www.linkedin.com/in/oleksandr-prykhodko-542158143",
};

export const SKILLS = {
  core: ["Flutter", "Dart", "Firebase", "React", "TypeScript", "JavaScript", "HTML/CSS"],
  tech: ["Mobile Testing (3G/4G/5G)", "ADB Tools", "Qualcomm & MTK Tools", "Android OS", "Unix/Linux", "SQL", "Docker"],
  soft: ["Problemlösung", "Teamleitung", "Interkulturelle Kommunikation", "Analytisches Denken"]
};

export const EXPERIENCE_BASE = [
  {
    company: "Momenta",
    location_de: "Deutschland",
    location_en: "Germany",
    period: "2023",
    role_de: "Techniker im Testing",
    role_en: "Testing Technician",
    key: "momenta"
  },
  {
    company: "Thundersoft",
    location_de: "Schweden, Thailand, VAE, Griechenland, Italien, Frankreich",
    location_en: "Sweden, Thailand, UAE, Greece, Italy, France",
    period: "2021 - 2023",
    role_de: "Teamleiter / Field Test Engineer",
    role_en: "Team Lead / Field Test Engineer",
    item_key: "ts_field_items"
  },
  {
    company: "Thundersoft",
    location_de: "Ukraine, Rumänien, Schweden, Thailand, VAE, Italien, Belarus",
    location_en: "Ukraine, Romania, Sweden, Thailand, UAE, Italy, Belarus",
    period: "2020 - 2021",
    role_de: "Field Test Engineer",
    role_en: "Field Test Engineer",
    item_key: "ts_eng_items"
  },
  {
    company: "PJSC BTA BANK",
    location_de: "Ukraine",
    location_en: "Ukraine",
    period: "2011 - 2015",
    role_de: "Hauptspezialist (Automatisierte Bankensysteme)",
    role_en: "Chief Specialist (Automated Banking Systems)",
    key: "bts"
  }
];

export const EDUCATION_BASE = [
  {
    degree_de: "App Entwickler (Moderne Anwendungsentwicklung)",
    degree_en: "App Developer (Modern Application Development)",
    institution: "AppAkademie Berlin",
    period: "11.2025 - 05.2026",
    period_en: "11.2025 - 05.2026",
    status_de: "Abgeschlossen",
    status_en: "Completed",
    isQual: true
  },
  {
    degree_de: "Computer-Anwendungstechnologie",
    degree_en: "Computer Application Technology",
    institution: "Lanzhou Jiaotong University",
    period: "2015 - 2019"
  },
  {
    degree_de: "Informationstechnologie-Design",
    degree_en: "Information Technology Design",
    institution: "Kremenchuts'kyy Universytet Ekonomiky",
    period: "2004 - 2010"
  }
];

export const LANGUAGES_DATA = {
  de: [
    { lang: "Deutsch", level: "B2 (Zertifiziert 2025)" },
    { lang: "Englisch", level: "B2 (Obere Mittelstufe)" },
    { lang: "Ukrainisch", level: "Muttersprache" },
    { lang: "Russisch", level: "Muttersprache" },
    { lang: "Chinesisch", level: "Mittelstufe" }
  ],
  en: [
    { lang: "German", level: "B2 (Certified 2025)" },
    { lang: "English", level: "B2 (Upper Intermediate)" },
    { lang: "Ukrainian", level: "Native" },
    { lang: "Russian", level: "Native" },
    { lang: "Chinese", level: "Intermediate" }
  ]
};
