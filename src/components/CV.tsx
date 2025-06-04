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
          <h1 className="text-2xl font-bold">Curriculum Vitae</h1>
          <div className="flex items-center gap-4">
            <DownloadButton cvRef={cvRef} />
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Imprimir
            </button>
          </div>
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
