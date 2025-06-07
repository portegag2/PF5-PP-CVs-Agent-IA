import React from 'react';
import { ExperienciaLaboral } from '../types/cv';

interface ExperienceProps {
  experiencias: ExperienciaLaboral[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiencias }) => {
  if (!experiencias || experiencias.length === 0) {
    return null;
  }

  return (
    <div className="w-full pt-2 border-t-4 border-blue-500 text-left">
      <p className="text-lg font-semibold text-gray-800 mb-4">Experiencia Laboral</p>
      <div className="space-y-4">
        {experiencias.map((experiencia, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="font-semibold text-gray-800">{experiencia.titulo}</p>
                <p className="text-sm text-gray-500 italic">{experiencia.fecha}</p>
              </div>
              <p className="text-gray-600 text-sm italic text-right">{experiencia.entidad}</p>
            </div>
            <p className="text-gray-600 w-full text-justify leading-normal">{experiencia.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
