import React, { useRef } from 'react';
import { useCVStore } from '../store/cvStore';
import { PersonalInfo } from './PersonalInfo';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { DownloadButton } from './DownloadButton';
import { ProfileSection } from './ProfileSection';
import styles from './CV.module.css';

interface CVProps {
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export const CV: React.FC<CVProps> = ({ cvRef }) => {
  const { cv, selectedTheme } = useCVStore();
  const themeClass = selectedTheme === 'classic' ? 'classic-theme' : 'modern-theme';

  return (
    <div className={styles.cvContainer}>
      <div className={styles.devGuide}></div>
      <div className={`${styles.cvContent} ${themeClass}`} ref={cvRef}>
        <div className="section">
          <PersonalInfo info={cv.datos_personales} />
        </div>
        <div className="section">
          <ProfileSection perfil={cv.perfil_profesional} />
        </div>
        <div className="section">
          <Experience experiencias={cv.experiencia_laboral} />
        </div>
        <div className="section">
          <Education formacion={cv.formacion[0]} />
        </div>
        <div className="section">
          <Skills habilidades={cv.habilidades_tecnicas} />
        </div>
      </div>
    </div>
  );
};
