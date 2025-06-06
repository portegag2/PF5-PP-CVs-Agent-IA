import React from 'react';

interface ProfileSectionProps {
  perfil: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ perfil }) => {
  return (
    <div className="w-full pt-2 border-t-4 border-blue-500">
      <p className="text-gray-600 text-left">Perfil Profesional: {perfil}</p>
    </div>
  );
};
