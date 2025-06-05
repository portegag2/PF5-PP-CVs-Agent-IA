import React from 'react';
import { DatosPersonales } from '../types/cv';

interface PersonalInfoProps {
  info: DatosPersonales;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ info }) => {
  return (
    <div className="personal-info">
      <div className="flex items-start">
        <div style={{
          width: '5.76rem',
          height: '7.92rem',
          borderRadius: '50%',
          overflow: 'hidden'
        }}>
          {info.foto && <img src={info.foto} alt={info.nombre} style={{ width: '100%', height: '100%' }} />}
        </div>
        <div className="ml-6 flex flex-col gap-1 text-left text-sm">
          <span className="font-semibold">{info.nombre}</span>
          <span>{info.fecha_nacimiento}</span>
          <span>{info.ciudad}</span>
          <a href={`tel:${info.telefono}`} className="hover:underline">
            {info.telefono}
          </a>
          <a href={`mailto:${info.email}`} className="hover:underline">
            {info.email}
          </a>
        </div>
      </div>
    </div>
  );
};
