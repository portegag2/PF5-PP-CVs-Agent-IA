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
    <div className="space-y-6">
      {experiencias.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3 className="section-title">{exp.titulo}</h3>
          <p className="section-content">
            <span className="font-bold">{exp.entidad}</span> - {exp.fecha}
          </p>
          <p className="section-content">{exp.descripcion}</p>
        </div>
      ))}
    </div>
  );
};
