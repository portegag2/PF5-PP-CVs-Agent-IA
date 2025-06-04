import React from 'react';
import { HabilidadesTecnicas } from '../types/cv';

interface SkillsProps {
  habilidades: HabilidadesTecnicas;
}

export const Skills: React.FC<SkillsProps> = ({ habilidades }) => {
  if (!habilidades) {
    return null;
  }

  return (
    <div className="skills-section">
      <h3 className="section-title">Habilidades Técnicas</h3>
      <div className="skills-list">
        <div className="skill-tag">{habilidades['lenguaje programación']}</div>
        <div className="skill-tag">{habilidades.herramientas}</div>
      </div>
    </div>
  );
};
