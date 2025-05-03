import React, { useState } from 'react';
import styles from './PatientDetails.module.css';
import { PatientInfo } from '../types';

interface PatientDetailsProps {
  patient: PatientInfo;
  onClose: () => void;
}

type Section = 'physical' | 'cognitive' | 'medication' | 'history';

export default function PatientDetails({ patient, onClose }: PatientDetailsProps) {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const sections = [
    {
      id: 'physical',
      title: 'Estatus físico',
      image: '/images/placeholder.svg',
      content: 'Información sobre el estado físico del paciente...'
    },
    {
      id: 'cognitive',
      title: 'Estatus cognitivo',
      image: '/images/placeholder.svg',
      content: 'Información sobre el estado cognitivo del paciente...'
    },
    {
      id: 'medication',
      title: 'Medicamentos',
      image: '/images/placeholder.svg',
      content: 'Lista de medicamentos actuales...'
    },
    {
      id: 'history',
      title: 'Historial',
      image: '/images/placeholder.svg',
      content: 'Historial médico del paciente...'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{patient.name} {patient.lastName}</h2>
        <button className={styles.closeButton} onClick={onClose}>
          Cerrar
        </button>
      </div>

      <div className={styles.sectionsGrid}>
        {sections.map((section) => (
          <div
            key={section.id}
            className={styles.sectionCard}
            onClick={() => setActiveSection(section.id as Section)}
          >
            <div 
              className={styles.sectionImage}
              style={{ backgroundImage: `url(${section.image})` }}
            >
              <h3 className={styles.sectionTitle}>{section.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {activeSection && (
        <div className={styles.sectionDetail}>
          <h3>{sections.find(s => s.id === activeSection)?.title}</h3>
          <p>{sections.find(s => s.id === activeSection)?.content}</p>
          <button 
            className={styles.backButton}
            onClick={() => setActiveSection(null)}
          >
            Volver
          </button>
        </div>
      )}
    </div>
  );
} 