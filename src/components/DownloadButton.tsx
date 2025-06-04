import React from 'react';
import { useCVStore } from '../store/cvStore';
import { generatePDF } from '../utils/pdfGenerator';

interface DownloadButtonProps {
  cvElement: HTMLElement;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ cvElement }) => {
  const { selectedTheme } = useCVStore();

  const handleDownload = async () => {
    try {
      await generatePDF({
        element: cvElement,
        filename: `curriculum-${selectedTheme}.pdf`,
        quality: 0.92
      });
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`
        px-4 py-2 rounded-md font-medium transition-colors
        ${selectedTheme === 'classic' 
          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'
        }
      `}
    >
      Download PDF
    </button>
  );
};
