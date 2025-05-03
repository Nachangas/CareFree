import React, { useState } from 'react';
import styles from './App.module.css';
import PatientDetails from './components/PatientDetails';
import { PatientInfo } from './types';

const patientsData: PatientInfo[] = [
  {
    id: '1',
    name: 'Marcelo',
    lastName: 'Salinas',
    age: 45,
    condition: 'Hypertension',
    lastVisit: '2024-02-15',
  },
  {
    id: '2',
    name: 'Marcela',
    lastName: 'Torrejon',
    age: 38,
    condition: 'Diabetes Type 2',
    lastVisit: '2024-02-20',
  },
];

function App() {
  const [selectedPatient, setSelectedPatient] = useState<PatientInfo | null>(null);

  const handlePatientClick = (patient: PatientInfo) => {
    setSelectedPatient(patient);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PACIENTES</h1>
      
      <div className={styles.profilesContainer}>
        {patientsData.map((patient) => (
          <div
            key={patient.id}
            className={styles.profileCard}
            onClick={() => handlePatientClick(patient)}
          >
            <div className={styles.avatar}>
              <div className={styles.avatarIcon} />
            </div>
            <div className={styles.patientName}>
              {patient.name}
              <br />
              {patient.lastName}
            </div>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <PatientDetails
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}

export default App; 