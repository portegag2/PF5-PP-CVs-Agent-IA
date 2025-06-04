import React, { useRef } from 'react';
import { useCVStore } from '../store/cvStore';
import { PersonalInfo } from './PersonalInfo';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { DownloadButton } from './DownloadButton';

export const CV: React.FC = () => {
  const { cv, selectedTheme } = useCVStore();
  const themeClass = selectedTheme === 'classic' ? 'classic-theme' : 'modern-theme';
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <div className="cv-container">
      <div className={themeClass} ref={cvRef}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
          <DownloadButton cvRef={cvRef} />
        </div>
        <div className="space-y-8">
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
