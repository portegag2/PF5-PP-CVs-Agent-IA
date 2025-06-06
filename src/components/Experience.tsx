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
    <div className="w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Experiencia Laboral</h3>
      <div className="space-y-4">
        {experiencias.map((experiencia, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-1">{experiencia.titulo}</h4>
            <p className="text-gray-600 mb-1">{experiencia.entidad}</p>
            <p className="text-sm text-gray-500">{experiencia.fecha}</p>
            <p className="text-gray-600 mt-1">{experiencia.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
