/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Code, 
  Smartphone, 
  CheckCircle, 
  Globe, 
  QrCode
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

type Language = 'de' | 'en';

const TRANSLATIONS = {
  de: {
    nav: {
      experience: "Erfahrung",
      skills: "Skills",
      share: "Share"
    },
    profile: {
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
    languages: "Sprachkenntnisse",
    scan: {
      title: "Portfolio scannen",
      modalTitle: "Digitales Profil",
      modalDesc: "Scannen Sie diesen Code, um mein Profil mobil zu öffnen.",
      close: "Schließen"
    },
    footer: "Digitale Version verfügbar auf {url} • Aktualisiert: April 2026",
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
      "Softwareentwicklung mit KI-Basis & Tools",
      "Integration von GitHub Copilot & ChatGPT in den Workflow",
      "State Management & Clean Architecture (AI-optimiert)",
      "Mobile Development mit Flutter & AI-Unterstützung"
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
    languages: "Language Skills",
    scan: {
      title: "Scan Portfolio",
      modalTitle: "Digital Profile",
      modalDesc: "Scan this code to open my profile on your mobile device.",
      close: "Close"
    },
    footer: "Digital version available at {url} • Updated: April 2026",
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
      "Software development with AI base & tools",
      "Integration of GitHub Copilot & ChatGPT into the workflow",
      "State Management & Clean Architecture (AI-optimized)",
      "Mobile development with Flutter & AI support"
    ],
    skill_headers: {
      core: "Programming",
      mobile: "Mobile & Hardware",
      soft: "Expertise & Soft Skills"
    }
  }
};

const PROFILE = {
  name: "Oleksandr Prykhodko",
  email: "olexandr.prykhodko@gmail.com",
  github: "https://github.com/Kanzatuwka",
  linkedin: "https://www.linkedin.com/in/oleksandr-prykhodko-542158143",
};

const SKILLS = {
  core: ["Flutter", "Dart", "Firebase", "React", "TypeScript", "JavaScript", "HTML/CSS"],
  tech: ["Mobile Testing (3G/4G/5G)", "ADB Tools", "Qualcomm & MTK Tools", "Android OS", "Unix/Linux", "SQL", "Docker"],
  soft: ["Problemlösung", "Teamleitung", "Interkulturelle Kommunikation", "Analytisches Denken"]
};

// Data with mixed structure for mapping
const EXPERIENCE_BASE = [
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

const EDUCATION_BASE = [
  {
    degree_de: "AI Software Developer (Flutter Fokus)",
    degree_en: "AI Software Developer (Flutter Focus)",
    institution: "AppAkademie Berlin",
    period: "11.2025 - Heute",
    period_en: "11.2025 - Present",
    status_de: "In Ausbildung / Aktuell",
    status_en: "Current Training",
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

const LANGUAGES = {
  de: [
    { lang: "Deutsch", level: "B2 (Zertifiziert 2025)" },
    { lang: "Englisch", level: "B2+ (Obere Mittelstufe)" },
    { lang: "Ukrainisch", level: "Muttersprache" },
    { lang: "Russisch", level: "Muttersprache" },
    { lang: "Chinesisch", level: "Mittelstufe" }
  ],
  en: [
    { lang: "German", level: "B2 (Certified 2025)" },
    { lang: "English", level: "B2+ (Upper Intermediate)" },
    { lang: "Ukrainian", level: "Native" },
    { lang: "Russian", level: "Native" },
    { lang: "Chinese", level: "Intermediate" }
  ]
};

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [qrOpen, setQrOpen] = useState(false);
  const currentUrl = "https://kanzatuwka.github.io/my_cv/";
  
  const T = TRANSLATIONS[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Navigation (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600"></span> O.P.
          </span>
          <div className="flex gap-4 md:gap-6 items-center uppercase tracking-widest text-[10px] font-bold">
            <div className="flex border border-slate-200 rounded-sm overflow-hidden mr-2">
              <button 
                onClick={() => setLang('de')}
                className={`px-2 py-1 transition-colors ${lang === 'de' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
              >
                DE
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-2 py-1 transition-colors ${lang === 'en' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
              >
                EN
              </button>
            </div>
            <a href="#experience" className="hidden sm:block hover:text-blue-600 transition-colors uppercase">{T.nav.experience}</a>
            <a href="#skills" className="hidden sm:block hover:text-blue-600 transition-colors uppercase">{T.nav.skills}</a>
            <button 
              onClick={() => setQrOpen(true)}
              className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-sm hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
            >
              <QrCode size={12} />
              {T.nav.share}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
          key={lang} /* Force re-animation on lang change */
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {/* LEFT COLUMN */}
          <div className="md:col-span-4 space-y-6">
            {/* Header Card */}
            <motion.div variants={itemVariants} className="bg-white p-8 border-l-4 border-blue-600 shadow-sm">
              <h1 className="text-4xl font-black tracking-tight leading-none uppercase">
                {PROFILE.name.split(' ').map((n, i) => (
                  <React.Fragment key={i}>{n}<br/></React.Fragment>
                ))}
              </h1>
              <p className="mt-4 text-blue-600 font-bold uppercase tracking-widest text-xs">
                {T.profile.title}
              </p>
            </motion.div>

            {/* Contact Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 border border-slate-200 space-y-4">
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{T.contact}</h2>
              <div className="text-sm space-y-3 font-medium">
                <p className="flex items-center gap-3"><MapPin size={16} className="text-slate-400" /> {T.profile.location}</p>
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                  <Mail size={16} className="text-slate-400" /> {PROFILE.email}
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-600 underline">
                  <Linkedin size={16} className="flex-shrink-0" /> LinkedIn
                </a>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-600 underline">
                  <Github size={16} className="flex-shrink-0" /> GitHub
                </a>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 border border-slate-200">
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{T.languages}</h2>
              <div className="space-y-3">
                {LANGUAGES[lang].map(l => (
                  <div key={l.lang} className="flex justify-between items-center text-sm">
                    <span className="font-semibold">{l.lang}</span>
                    <span className="text-slate-500 italic text-xs">{l.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scan Card */}
            <motion.div 
              variants={itemVariants} 
              className="bg-slate-900 text-white p-6 rounded-sm flex items-center justify-between cursor-pointer group hover:bg-slate-800 transition-colors"
                onClick={() => setQrOpen(true)}>
              <div>
                <p className="text-[9px] uppercase tracking-widest opacity-60 mb-1">{T.scan.title}</p>
                <p className="text-[10px] font-mono break-all">{PROFILE.github.replace('https://', '')}</p>
              </div>
              <div className="w-14 h-14 bg-white p-0.5 rounded-sm overflow-hidden group-hover:scale-110 transition-transform">
                <QRCodeSVG value={currentUrl} size={56} level="L" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-8 space-y-8">
            <div className="bg-white p-10 border border-slate-200 shadow-sm min-h-[800px] flex flex-col">
              
              {/* Profile Intro Section */}
              <section className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> {T.sections.intro}
                </h2>
                <p className="text-slate-600 font-medium italic leading-relaxed text-sm text-justify">
                  "{T.profile.description}"
                </p>
              </section>

              {/* Training Section */}
              <section className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> {T.sections.qualification}
                </h2>
                <div className="relative pl-8 border-l border-slate-200">
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-600"></div>
                  <div className="mb-1 text-xs font-bold text-blue-600 uppercase tracking-widest">{lang === 'de' ? EDUCATION_BASE[0].period : EDUCATION_BASE[0].period_en}</div>
                  <h3 className="text-xl font-black italic">{lang === 'de' ? EDUCATION_BASE[0].degree_de : EDUCATION_BASE[0].degree_en}</h3>
                  <p className="text-slate-600 font-medium italic mb-2">{EDUCATION_BASE[0].institution}</p>
                  <ul className="text-sm text-slate-600 space-y-1.5 list-none ml-0">
                    {T.qual_items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-blue-500 flex-shrink-0" /> 
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tech Stack Section */}
              <section id="skills" className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> {T.sections.techProfile}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  <div>
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{T.skill_headers.core}</h5>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.core.map(s => (
                        <span key={s} className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{T.skill_headers.mobile}</h5>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.tech.map(s => (
                        <span key={s} className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{T.skill_headers.soft}</h5>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.soft.map(s => (
                        <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience Timeline */}
              <section id="experience" className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> {T.sections.experience}
                </h2>
                <div className="space-y-8">
                  {EXPERIENCE_BASE.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-slate-100">
                      <div className="absolute -left-[4px] top-0 w-2 h-2 rounded-full bg-slate-300"></div>
                      <div className="mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{exp.period}</div>
                      <h4 className="text-lg font-bold leading-tight italic">
                        {lang === 'de' ? (exp.role_de) : (exp.role_en)}
                      </h4>
                      <p className="text-sm font-medium text-blue-600 mb-3">{exp.company}, {lang === 'de' ? exp.location_de : exp.location_en}</p>
                      {exp.item_key && (
                        <ul className="text-xs text-slate-500 space-y-1 ml-4 list-disc">
                          {(T.exp_details as any)[exp.item_key].map((item: string, i: number) => <li key={i}>{item}</li>)}
                        </ul>
                      )}
                      {exp.key && <p className="text-xs text-slate-500 italic mt-2 text-justify">{(T.exp_details as any)[exp.key]}</p>}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Sub-timeline */}
              <section className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> {T.sections.education}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {EDUCATION_BASE.filter(e => !e.isQual).map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{edu.period}</p>
                      <h4 className="font-bold text-sm leading-tight italic">
                        {lang === 'de' ? edu.degree_de : edu.degree_en}
                      </h4>
                      <p className="text-[10px] text-slate-500 italic leading-snug">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-auto pt-6 border-t border-slate-100 text-[10px] text-slate-400 text-center">
                <p>{T.footer.replace('{url}', 'kanzatuwka.github.io')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* QR Code Modal Overlay */}
      <AnimatePresence>
        {qrOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-900/40 backdrop-blur-sm"
            onClick={() => setQrOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs w-full text-center space-y-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xl">{T.scan.modalTitle}</h4>
                <p className="text-sm text-zinc-500 leading-snug">{T.scan.modalDesc}</p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-2xl flex justify-center shadow-inner">
                <QRCodeSVG 
                  value={currentUrl} 
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <button 
                onClick={() => setQrOpen(false)}
                className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-colors"
              >
                {T.scan.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
