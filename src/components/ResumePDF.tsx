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

// Register fonts if needed, but standard ones are safe
// react-pdf has default fonts like Helvetica, Times-Roman

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    color: '#1e293b', // slate-800
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb', // blue-600
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#0f172a', // slate-900
  },
  title: {
    fontSize: 12,
    color: '#2563eb',
    marginTop: 4,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0', // slate-200
    marginBottom: 8,
    paddingBottom: 2,
    color: '#0f172a',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftCol: {
    width: '30%',
    paddingRight: 10,
  },
  rightCol: {
    width: '70%',
  },
  contactItem: {
    fontSize: 9,
    marginBottom: 2,
  },
  contactLink: {
    fontSize: 9,
    marginBottom: 2,
    color: '#2563eb', // blue-600
    textDecoration: 'underline',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#475569',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  expItem: {
    marginBottom: 12,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  expRole: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  expCompany: {
    fontSize: 9,
    color: '#2563eb',
  },
  expPeriod: {
    fontSize: 8,
    color: '#64748b',
  },
  bulletList: {
    marginTop: 4,
    marginLeft: 10,
  },
  bulletItem: {
    fontSize: 8,
    color: '#64748b',
    marginBottom: 2,
  },
  skillGroup: {
    marginBottom: 6,
  },
  skillHeader: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#94a3b8',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillBadge: {
    fontSize: 8,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#e2e8f0',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 7,
    color: '#94a3b8',
    borderTopWidth: 0.5,
    borderTopColor: '#f1f5f9',
    paddingTop: 5,
  }
});

interface ResumePDFProps {
  lang: Language;
}

export const ResumePDF = ({ lang }: ResumePDFProps) => {
  const T = TRANSLATIONS[lang];
  const L = LANGUAGES_DATA[lang];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{PROFILE.name}</Text>
          <Text style={styles.title}>{T.profile.title}</Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 20 }}>
          {/* Sidebar Area */}
          <View style={{ width: '30%' }}>
            {/* Contact */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{T.contact}</Text>
              <Text style={styles.contactItem}>{T.profile.location}</Text>
              <Link style={styles.contactLink} src={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </Link>
              <Link style={styles.contactLink} src={PROFILE.linkedin}>
                LinkedIn
              </Link>
              <Link style={styles.contactLink} src={PROFILE.github}>
                GitHub
              </Link>
            </View>

            {/* Languages */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{T.languages}</Text>
              {L.map((item, i) => (
                <View key={i} style={{ marginBottom: 4 }}>
                  <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{item.lang}</Text>
                  <Text style={{ fontSize: 7, color: '#64748b' }}>{item.level}</Text>
                </View>
              ))}
            </View>

            {/* Skills Summary */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillGroup}>
                <Text style={styles.skillHeader}>{T.skill_headers.core}</Text>
                <Text style={{ fontSize: 8 }}>{SKILLS.core.join(', ')}</Text>
              </View>
              <View style={styles.skillGroup}>
                <Text style={styles.skillHeader}>{T.skill_headers.mobile}</Text>
                <Text style={{ fontSize: 8 }}>{SKILLS.tech.join(', ')}</Text>
              </View>
            </View>
          </View>

          {/* Main Area */}
          <View style={{ width: '70%' }}>
            {/* Profile */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{T.sections.intro}</Text>
              <Text style={styles.description}>"{T.profile.description}"</Text>
            </View>

            {/* Qualification */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{T.sections.qualification}</Text>
              <View style={styles.expItem}>
                <View style={styles.expHeader}>
                  <Text style={styles.expRole}>{lang === 'de' ? EDUCATION_BASE[0].degree_de : EDUCATION_BASE[0].degree_en}</Text>
                  <Text style={styles.expPeriod}>{lang === 'de' ? EDUCATION_BASE[0].period : EDUCATION_BASE[0].period_en}</Text>
                </View>
                <Text style={styles.expCompany}>{EDUCATION_BASE[0].institution}</Text>
                <View style={styles.bulletList}>
                  {T.qual_items.map((item, i) => (
                    <Text key={i} style={styles.bulletItem}>• {item}</Text>
                  ))}
                </View>
              </View>
            </View>

            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{T.sections.experience}</Text>
              {EXPERIENCE_BASE.map((exp, idx) => (
                <View key={idx} style={styles.expItem}>
                  <View style={styles.expHeader}>
                    <Text style={styles.expRole}>{lang === 'de' ? exp.role_de : exp.role_en}</Text>
                    <Text style={styles.expPeriod}>{exp.period}</Text>
                  </View>
                  <Text style={styles.expCompany}>{exp.company}, {lang === 'de' ? exp.location_de : exp.location_en}</Text>
                  
                  {exp.item_key && (
                    <View style={styles.bulletList}>
                      {(T.exp_details as any)[exp.item_key].map((item: string, i: number) => (
                        <Text key={i} style={styles.bulletItem}>• {item}</Text>
                      ))}
                    </View>
                  )}
                  {exp.key && (
                    <Text style={[styles.bulletItem, { marginTop: 4 }]}>
                      {(T.exp_details as any)[exp.key]}
                    </Text>
                  )}
                </View>
              ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{T.sections.education}</Text>
              {EDUCATION_BASE.filter(e => !e.isQual).map((edu, idx) => (
                <View key={idx} style={{ marginBottom: 6 }}>
                  <View style={styles.expHeader}>
                    <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{lang === 'de' ? edu.degree_de : edu.degree_en}</Text>
                    <Text style={styles.expPeriod}>{edu.period}</Text>
                  </View>
                  <Text style={{ fontSize: 8, color: '#64748b' }}>{edu.institution}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          {T.footer.replace('{url}', 'kanzatuwka.github.io')}
        </Text>
      </Page>
    </Document>
  );
};
