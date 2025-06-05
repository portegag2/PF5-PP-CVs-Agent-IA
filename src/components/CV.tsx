import React, { useRef } from 'react';
import { useCVStore } from '../store/cvStore';
import { PersonalInfo } from './PersonalInfo';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { DownloadButton } from './DownloadButton';

interface CVProps {
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export const CV: React.FC<CVProps> = ({ cvRef }) => {
  const { cv, selectedTheme } = useCVStore();
  const themeClass = selectedTheme === 'classic' ? 'classic-theme' : 'modern-theme';

  return (
    <div id="cv-container" className="cv-container">
      <div id="cv-content" className={themeClass} ref={cvRef}>
        <div id="cv-sections" className="space-y-8">
          <PersonalInfo info={cv.datos_personales} />
          <div>
            <h2 className="section-title">Perfil Profesional</h2>
            <p className="section-content">{cv.perfil_profesional}</p>
          </div>
          <Experience experiencias={cv.experiencia_laboral} />
          <Education formacion={cv.formacion[0]} />
          <Skills habilidades={cv.habilidades_tecnicas} />
        </div>
      </div>
    </div>
  );
};
