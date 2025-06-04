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
    <div id="cv-container" className="cv-container">
      <div id="cv-content" className={themeClass} ref={cvRef}>
        <div id="cv-header" className="flex justify-between items-center mb-8">
          <h1 id="cv-title" className="text-2xl font-bold">Curriculum Vitae</h1>
          <div id="cv-actions" className="flex items-center gap-4">
            <DownloadButton cvRef={cvRef} />
            <button
              id="print-button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Imprimir
            </button>
          </div>
        </div>
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
