import React, { useState, useEffect } from 'react';
import { useCVStore } from '../store/cvStore';
import { generatePDF } from '../utils/pdfGenerator';

interface DownloadButtonProps {
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ cvRef }) => {
  const { selectedTheme } = useCVStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cvRef.current) {
      setIsLoading(false);
    }
  }, [cvRef]);

  const handleDownload = async () => {
    if (!cvRef.current) {
      console.error('CV element not found');
      return;
    }

    setIsLoading(true);
    try {
      await generatePDF({
        element: cvRef.current,
        filename: `curriculum-${selectedTheme}.pdf`,
        quality: 0.92
      });
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setIsLoading(false);
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
