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
  QrCode,
  Download
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  Language, 
  TRANSLATIONS, 
  PROFILE, 
  SKILLS, 
  EXPERIENCE_BASE, 
  EDUCATION_BASE, 
  LANGUAGES_DATA 
} from './constants';
import { ResumePDF } from './components/ResumePDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [qrOpen, setQrOpen] = useState(false);
  const currentUrl = 'https://kanzatuwka.github.io/my_cv/';
  
  const T = TRANSLATIONS[lang];

  const handleDownloadLegacy = (targetLang: Language) => {
    setLang(targetLang);
    // Wait for the state to update and UI to re-render
    setTimeout(() => {
      window.print();
    }, 300);
  };

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 no-print">
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

            {/* Download Card */}
            <motion.div variants={itemVariants} className="bg-blue-600 text-white p-6 rounded-sm shadow-md no-print">
              <h2 className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Download size={12} /> {T.download}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <PDFDownloadLink 
                  document={<ResumePDF lang="de" />} 
                  fileName="CV_Oleksandr_Prykhodko_DE.pdf"
                  className="bg-white text-blue-600 py-2 px-3 rounded text-xs font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  {({ loading }) => (loading ? '...' : 'DE')}
                </PDFDownloadLink>
                <PDFDownloadLink 
                  document={<ResumePDF lang="en" />} 
                  fileName="CV_Oleksandr_Prykhodko_EN.pdf"
                  className="bg-blue-700 text-white py-2 px-3 rounded text-xs font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  {({ loading }) => (loading ? '...' : 'EN')}
                </PDFDownloadLink>
              </div>
              <p className="mt-3 text-[9px] text-blue-100 opacity-80 text-center italic">
                {lang === 'de' ? 'Hochwertige PDF-Download-Links' : 'High-quality PDF download links'}
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
                {LANGUAGES_DATA[lang].map(l => (
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
              className="bg-slate-900 text-white p-6 rounded-sm flex items-center justify-between cursor-pointer group hover:bg-slate-800 transition-colors no-print"
                onClick={() => setQrOpen(true)}
              >
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
