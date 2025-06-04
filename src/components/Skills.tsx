import React from 'react';
import { HabilidadesTecnicas } from '../types/cv';

interface SkillsProps {
  habilidades: HabilidadesTecnicas[];
}

export const Skills: React.FC<SkillsProps> = ({ habilidades }) => {
  if (!habilidades || habilidades.length === 0) {
    return null;
  }

  return (
    <div className="skills-section">
      <h3 className="section-title">Habilidades Técnicas</h3>
      {habilidades.map((habilidad, index) => (
        <div key={index} className="skill-item">
          <div className="space-y-2">
            <p className="text-gray-600">Lenguajes de Programación: {habilidad['lenguaje programación']}</p>
            <p className="text-gray-600">Herramientas: {habilidad.herramientas}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
