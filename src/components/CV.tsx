import React, { useRef } from 'react';
import { useCVStore } from '../store/cvStore';
import { PersonalInfo } from './PersonalInfo';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { DownloadButton } from './DownloadButton';
import { ProfileSection } from './ProfileSection';

interface CVProps {
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export const CV: React.FC<CVProps> = ({ cvRef }) => {
  const { cv, selectedTheme } = useCVStore();
  const themeClass = selectedTheme === 'classic' ? 'classic-theme' : 'modern-theme';

  return (
    <div className="flex justify-center items-start p-4 bg-gray-100 min-h-screen print:bg-white print:p-0">
      <div className="bg-white shadow-lg w-[210mm] min-h-[297mm] print:shadow-none relative">
        {/* Margin guides - visible only in development */}
        <div className="absolute inset-0 border-4 border-dashed border-gray-200 pointer-events-none print:hidden"></div>
        
        <div className={`${themeClass} h-full py-8 px-24`} ref={cvRef}>
          <div className="space-y-8">
            <PersonalInfo info={cv.datos_personales} />
            <ProfileSection perfil={cv.perfil_profesional} />
            <Experience experiencias={cv.experiencia_laboral} />
            <Education formacion={cv.formacion[0]} />
            <Skills habilidades={cv.habilidades_tecnicas} />
          </div>
        </div>
      </div>
    </div>
  );
};
