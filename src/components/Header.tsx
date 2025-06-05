import React, { useRef } from 'react';
import { useCVStore } from '../store/cvStore';
import { DownloadButton } from './DownloadButton';

interface HeaderProps {
  selectedTheme: string;
  toggleTheme: () => void;
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export const Header: React.FC<HeaderProps> = ({ selectedTheme, toggleTheme, cvRef }) => {
  return (
    <header className="w-full bg-white shadow-md print:hidden">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Curriculum Vitae</h1>
          </div>
          <div className="flex items-center gap-4">
            <DownloadButton cvRef={cvRef} />
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 print-button"
            >
              Imprimir
            </button>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-md font-medium transition-colors bg-gray-100 hover:bg-gray-200"
            >
              {selectedTheme === 'classic' ? 'Tema Moderno' : 'Tema Clásico'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
