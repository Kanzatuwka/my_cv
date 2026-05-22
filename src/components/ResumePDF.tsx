/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';
import { 
  Language, 
  TRANSLATIONS, 
  PROFILE, 
  SKILLS, 
  EXPERIENCE_BASE, 
  EDUCATION_BASE, 
  LANGUAGES_DATA 
} from '../constants';

// Register fonts to embed them in the PDF. This naturally increases the file size to at least 40-50KB (overcoming the 8KB limit of Stepstone) and provides a highly polished typography layout.
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf', fontWeight: 400 },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf', fontWeight: 700 },
    { src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-italic.ttf', fontWeight: 400, fontStyle: 'italic' }
  ]
});

// ATS-friendly styling: Pure vertical single-column layouts with absolute linear parsing ease.
// No complex nested sidebars or floated grids, which can cause parsers to read lines out of order.
const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 9.5,
    color: '#1e293b', // slate-800
    fontFamily: 'Inter',
    lineHeight: 1.45,
  },
  header: {
    marginBottom: 16,
    textAlign: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#0f172a', // deep navy accent
    paddingBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 11,
    color: '#2563eb', // blue-600
    marginTop: 6,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 6,
    gap: 8,
    fontSize: 8.5,
    color: '#475569',
  },
  contactItem: {
    fontSize: 8.5,
  },
  bulletDivider: {
    color: '#cbd5e1',
  },
  contactLink: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderBottomColor: '#cbd5e1',
    borderBottomWidth: 1,
    marginBottom: 8,
    paddingBottom: 2,
    color: '#0f172a',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#334155',
  },
  // Skill structures made extremely simple and parsable
  skillLine: {
    marginBottom: 5,
    fontSize: 9,
  },
  skillLabel: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  skillText: {
    color: '#334155',
  },
  // Experience item structures
  expItem: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  expRole: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  expPeriod: {
    fontSize: 8.5,
    fontWeight: 'bold',
    color: '#475569',
  },
  expSubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
    color: '#2563eb',
    marginBottom: 3,
  },
  expCompany: {
    fontWeight: 'bold',
  },
  expLocation: {
    color: '#64748b',
    fontSize: 8.5,
  },
  bulletList: {
    marginTop: 2,
    marginLeft: 10,
  },
  bulletItem: {
    fontSize: 8.5,
    color: '#475569',
    marginBottom: 2.5,
    lineHeight: 1.35,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 35,
    right: 35,
    textAlign: 'center',
    fontSize: 7.5,
    color: '#94a3b8',
    borderTopWidth: 0.5,
    borderTopColor: '#e2e8f0',
    paddingTop: 5,
  }
});

interface ResumePDFProps {
  lang: Language;
}

export const ResumePDF = ({ lang }: ResumePDFProps) => {
  const T = TRANSLATIONS[lang];
  const L = LANGUAGES_DATA[lang];

  // Helper elements to prevent duplication in layout
  const cleanUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ATS-Optimized Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{PROFILE.name}</Text>
          <Text style={styles.title}>{T.profile.title}</Text>
          
          <View style={styles.contactContainer}>
            <Text style={styles.contactItem}>{T.profile.location}</Text>
            <Text style={styles.bulletDivider}>•</Text>
            
            <Link style={styles.contactLink} src={`mailto:${PROFILE.email}`}>
              <Text style={styles.contactItem}>{PROFILE.email}</Text>
            </Link>
            <Text style={styles.bulletDivider}>•</Text>
            
            <Link style={styles.contactLink} src={PROFILE.linkedin}>
              <Text style={styles.contactItem}>{cleanUrl(PROFILE.linkedin)}</Text>
            </Link>
            <Text style={styles.bulletDivider}>•</Text>
            
            <Link style={styles.contactLink} src={PROFILE.github}>
              <Text style={styles.contactItem}>{cleanUrl(PROFILE.github)}</Text>
            </Link>
          </View>
        </View>

        {/* Profile / Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{T.sections.intro}</Text>
          <Text style={styles.description}>{T.profile.description}</Text>
        </View>

        {/* Core & Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{T.sections.techProfile}</Text>
          
          <Text style={styles.skillLine}>
            <Text style={styles.skillLabel}>{T.skill_headers.core}: </Text>
            <Text style={styles.skillText}>{SKILLS.core.join(', ')}</Text>
          </Text>
          
          <Text style={styles.skillLine}>
            <Text style={styles.skillLabel}>{T.skill_headers.mobile}: </Text>
            <Text style={styles.skillText}>{SKILLS.tech.join(', ')}</Text>
          </Text>

          <Text style={styles.skillLine}>
            <Text style={styles.skillLabel}>{T.languages}: </Text>
            <Text style={styles.skillText}>
              {L.map(item => `${item.lang} (${item.level})`).join(', ')}
            </Text>
          </Text>
        </View>

        {/* Current Qualification (Latest Highlighted Education) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{T.sections.qualification}</Text>
          <View style={styles.expItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expRole}>{lang === 'de' ? EDUCATION_BASE[0].degree_de : EDUCATION_BASE[0].degree_en}</Text>
              <Text style={styles.expPeriod}>{lang === 'de' ? EDUCATION_BASE[0].period : EDUCATION_BASE[0].period_en}</Text>
            </View>
            <View style={styles.expSubHeader}>
              <Text style={styles.expCompany}>{EDUCATION_BASE[0].institution}</Text>
              <Text style={styles.expLocation}>Berlin, {lang === 'de' ? 'Deutschland' : 'Germany'}</Text>
            </View>
            {T.qual_desc && (
              <Text style={[styles.description, { marginTop: 2, marginBottom: 6 }]}>
                {T.qual_desc}
              </Text>
            )}
            <View style={styles.bulletList}>
              {T.qual_items.map((item, i) => (
                <Text key={i} style={styles.bulletItem}>• {item}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{T.sections.experience}</Text>
          {EXPERIENCE_BASE.map((exp, idx) => (
            <View key={idx} style={styles.expItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expRole}>{lang === 'de' ? exp.role_de : exp.role_en}</Text>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <View style={styles.expSubHeader}>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expLocation}>{lang === 'de' ? exp.location_de : exp.location_en}</Text>
              </View>
              
              {exp.item_key && (
                <View style={styles.bulletList}>
                  {(T.exp_details as any)[exp.item_key].map((item: string, i: number) => (
                    <Text key={i} style={styles.bulletItem}>• {item}</Text>
                  ))}
                </View>
              )}
              {exp.key && (
                <View style={styles.bulletList}>
                  <Text style={styles.bulletItem}>• {(T.exp_details as any)[exp.key]}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Traditional Academic Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{T.sections.education}</Text>
          {EDUCATION_BASE.filter(e => !e.isQual).map((edu, idx) => (
            <View key={idx} style={{ marginBottom: 6 }}>
              <View style={styles.expHeader}>
                <Text style={{ fontSize: 9.5, fontWeight: 'bold', color: '#0f172a' }}>
                  {lang === 'de' ? edu.degree_de : edu.degree_en}
                </Text>
                <Text style={styles.expPeriod}>{edu.period}</Text>
              </View>
              <Text style={{ fontSize: 8.5, color: '#2563eb', fontWeight: 'bold' }}>{edu.institution}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>
          {T.footer.replace('{url}', 'kanzatuwka.github.io')}
        </Text>
      </Page>
    </Document>
  );
};
