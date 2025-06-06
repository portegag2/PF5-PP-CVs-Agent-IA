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
            <p className="font-semibold text-gray-800 mb-1">{experiencia.titulo}</p>
            <p className="text-gray-600 mb-1">{experiencia.entidad}</p>
            <p className="text-sm text-gray-500 mb-2">{experiencia.fecha}</p>
            <p className="text-gray-600">{experiencia.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
