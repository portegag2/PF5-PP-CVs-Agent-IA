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
    <div className="experience-section">
      <h3 className="section-title">Experiencia Laboral</h3>
      {experiencias.map((experiencia, index) => (
        <div key={index} className="experience-item">
          <h4 className="text-lg font-semibold mb-2">{experiencia.titulo}</h4>
          <p className="text-gray-600 mb-2">{experiencia.entidad}</p>
          <p className="date">{experiencia.fecha}</p>
          <p className="description">{experiencia.descripcion}</p>
        </div>
      ))}
    </div>
  );
};
