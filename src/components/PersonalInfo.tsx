import React from 'react';
import { DatosPersonales } from '../types/cv';

interface PersonalInfoProps {
  info: DatosPersonales;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ info }) => {
  return (
    <div className="personal-info">
      <div className="flex flex-col items-center mb-6">
        <div className="personal-photo">
          {info.foto && <img src={info.foto} alt="Foto de perfil" />}
        </div>
        <h2 className="personal-name">{info.nombre}</h2>
        <p className="text-gray-600">{info.ciudad}</p>
      </div>
      <div className="contact-info space-y-4">
        <p className="flex items-center">
          <span className="mr-2">Email:</span>
          <a href={`mailto:${info.email}`} className="contact-link">
            {info.email}
          </a>
        </p>
        <p className="flex items-center">
          <span className="mr-2">Teléfono:</span>
          <a href={`tel:${info.telefono}`} className="contact-link">
            {info.telefono}
          </a>
        </p>
        <p className="flex items-center">
          <span className="mr-2">Fecha de nacimiento:</span>
          <span className="text-gray-600">{info.fecha_nacimiento}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-2">Rol profesional:</span>
          <span className="text-gray-600">{info.rol_profesional}</span>
        </p>
      </div>
    </div>
  );
};
