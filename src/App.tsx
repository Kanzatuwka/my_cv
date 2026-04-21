/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Smartphone, 
  CheckCircle, 
  Globe, 
  Cpu,
  GraduationCap,
  Briefcase,
  Languages,
  QrCode,
  Download
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

// Data definitions
const PROFILE = {
  name: "Oleksandr Prykhodko",
  title: "Flutter App Entwickler",
  location: "Berlin, Deutschland",
  phone: "+49 17647088838",
  email: "olexandr.prykhodko@gmail.com",
  github: "https://github.com/Kanzatuwka",
  linkedin: "https://www.linkedin.com/in/oleksandr-prykhodko-542158143",
  description: "Erfahrener IT-Spezialist mit über 3 Jahren Erfahrung im Mobile Testing, der sich nun konsequent auf die Softwareentwicklung spezialisiert hat. Mein beruflicher Fokus liegt aktuell ausschließlich auf der Entwicklung von performanten und skalierbaren Cross-Plattform-Applikationen mit Flutter unter Einsatz moderner KI-gestützter Entwicklungsprozesse.",
};

const SKILLS = {
  core: ["Flutter", "Dart", "Firebase", "React", "TypeScript", "JavaScript", "HTML/CSS"],
  tech: ["Mobile Testing (3G/4G/5G)", "ADB Tools", "Qualcomm & MTK Tools", "Android OS", "Unix/Linux", "SQL", "Docker"],
  soft: ["Problemlösung", "Teamleitung", "Interkulturelle Kommunikation", "Analytisches Denken"]
};

const EXPERIENCE = [
  {
    role: "Techniker im Testing",
    company: "Momenta",
    location: "Deutschland",
    period: "2023",
    description: "Prüfung und Validierung hardware- und softwarebasierter Autopilot-Systeme für die Automobilindustrie."
  },
  {
    role: "Teamleiter / Field Test Engineer",
    company: "Thundersoft",
    location: "Schweden, Thailand, VAE, Griechenland, Italien, Frankreich",
    period: "2021 - 2023",
    items: [
      "Leitung von Smartphone- und Smart-Vehicle-Testprojekten in mehreren Ländern.",
      "Organisation von Schulungen für angehende Field Test Engineers.",
      "Aufbau und Training eines Test-Teams in Thailand."
    ]
  },
  {
    role: "Field Test Engineer",
    company: "Thundersoft",
    location: "Ukraine, Rumänien, Schweden, Thailand, VAE, Italien, Belarus",
    period: "2020 - 2021",
    items: [
      "Durchführung von Netzwerktests (VoLTE/ViLTE/VoWIFI, 5G transition tests).",
      "Fehleranalyse mit Tools wie QXDM, QPST, Wireshark und ADB.",
      "Dokumentation und Registrierung von Bug-Reports in Tracking-Systemen."
    ]
  },
  {
    role: "Chief Specialist (Automated Banking Systems)",
    company: "PJSC BTA BANK",
    location: "Ukraine",
    period: "2011 - 2015",
    description: "Unterstützung und Wartung von automatisierten Bankensystemen."
  }
];

const EDUCATION = [
  {
    degree: "AI Software Developer (Flutter Fokus)",
    institution: "AppAkademie Berlin",
    period: "11.2025 - Heute",
    status: "In Ausbildung / Aktuell"
  },
  {
    degree: "Computer Application Technology",
    institution: "Lanzhou Jiaotong University",
    period: "2015 - 2019"
  },
  {
    degree: "Information Technology Design",
    institution: "Kremenchuts'kyy Universytet Ekonomiky, Informatsiynykh Tekhnolohiy IUpravlinnya",
    period: "2004 - 2010"
  }
];

const LANGUAGES = [
  { lang: "Deutsch", level: "B2 (Zertifiziert 2025)" },
  { lang: "Englisch", level: "B2+ (Obere Mittelstufe)" },
  { lang: "Ukrainisch", level: "Muttersprache" },
  { lang: "Russisch", level: "Muttersprache" },
  { lang: "Chinesisch", level: "Mittelstufe" }
];

export default function App() {
  const [qrOpen, setQrOpen] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://github.com/Kanzatuwka';

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
          <div className="flex gap-6 items-center uppercase tracking-widest text-[10px] font-bold">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Erfahrung</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <button 
              onClick={() => setQrOpen(true)}
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-sm hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
            >
              <QrCode size={12} />
              Share
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
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
                {PROFILE.title}
              </p>
            </motion.div>

            {/* Contact Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 border border-slate-200 space-y-4">
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Kontakt</h2>
              <div className="text-sm space-y-3 font-medium">
                <p className="flex items-center gap-3"><MapPin size={16} className="text-slate-400" /> {PROFILE.location}</p>
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                  <Mail size={16} className="text-slate-400" /> {PROFILE.email}
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-600 underline">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-600 underline">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 border border-slate-200">
              <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Sprachkenntnisse</h2>
              <div className="space-y-3">
                {LANGUAGES.map(l => (
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
              onClick={() => setQrOpen(true)}
            >
              <div>
                <p className="text-[9px] uppercase tracking-widest opacity-60 mb-1">Portfolio scannen</p>
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
                  <span className="w-2 h-6 bg-blue-600"></span> Profil & Ziele
                </h2>
                <p className="text-slate-600 font-medium italic leading-relaxed text-sm">
                  "{PROFILE.description}"
                </p>
              </section>

              {/* Training Section */}
              <section className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> Aktuelle Qualifikation
                </h2>
                <div className="relative pl-8 border-l border-slate-200">
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-600"></div>
                  <div className="mb-1 text-xs font-bold text-blue-600 uppercase tracking-widest">11.2025 — Heute</div>
                  <h3 className="text-xl font-black italic">AI Software Developer (Flutter Fokus)</h3>
                  <p className="text-slate-600 font-medium italic mb-2">AppAkademie Berlin</p>
                  <ul className="text-sm text-slate-600 space-y-1.5 list-none ml-0">
                    <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Softwareentwicklung mit KI-Basis & Tools</li>
                    <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Integration von GitHub Copilot & ChatGPT in den Workflow</li>
                    <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> State Management & Clean Architecture (AI-optimiert)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Mobile Development mit Flutter & AI-Unterstützung</li>
                  </ul>
                </div>
              </section>

              {/* Tech Stack Section */}
              <section id="skills" className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> Technisches Profil
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  <div>
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Core Development</h5>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.core.map(s => (
                        <span key={s} className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Mobile & Infrastructure</h5>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.tech.map(s => (
                        <span key={s} className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200 uppercase">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Expertise & Soft Skills</h5>
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
                  <span className="w-2 h-6 bg-blue-600"></span> Berufserfahrung
                </h2>
                <div className="space-y-8">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-slate-100">
                      <div className="absolute -left-[4px] top-0 w-2 h-2 rounded-full bg-slate-300"></div>
                      <div className="mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{exp.period}</div>
                      <h4 className="text-lg font-bold leading-tight">{exp.role}</h4>
                      <p className="text-sm font-medium text-blue-600 mb-3">{exp.company}, {exp.location}</p>
                      {exp.items && (
                        <ul className="text-xs text-slate-500 space-y-1 ml-4 list-disc">
                          {exp.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      )}
                      {exp.description && <p className="text-xs text-slate-500 italic mt-2">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Sub-timeline */}
              <section className="mb-10">
                <h2 className="text-lg font-bold border-b-2 border-slate-100 pb-2 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-blue-600"></span> Akademische Ausbildung
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {EDUCATION.filter(e => !e.degree.includes('Kurs')).map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">{edu.period}</p>
                      <h4 className="font-bold text-sm leading-tight">{edu.degree}</h4>
                      <p className="text-[10px] text-slate-500 italic leading-snug">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-auto pt-6 border-t border-slate-100 text-[10px] text-slate-400 text-center">
                <p>Digitale Version verfügbar auf <strong>kanzatuwka.github.io</strong> &bull; Aktualisiert: April 2026</p>
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
                <h4 className="font-display font-bold text-xl">Digitales Profil</h4>
                <p className="text-sm text-zinc-500 leading-snug">Scannen Sie diesen Code, um mein Profil mobil zu öffnen.</p>
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
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
