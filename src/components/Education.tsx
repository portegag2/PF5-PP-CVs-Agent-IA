import React from 'react';
import { Formacion } from '../types/cv';

interface EducationProps {
  formacion: Formacion;
}

export const Education: React.FC<EducationProps> = ({ formacion }) => {
  return (
    <div className="education-item">
      <h3 className="section-title">{formacion.titulo}</h3>
      <p className="section-content">
        <span className="font-bold">{formacion.entidad}</span> - {formacion.fecha}
      </p>
      <p className="section-content">{formacion.descripcion}</p>
    </div>
  );
};
