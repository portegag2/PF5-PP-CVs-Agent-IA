import htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';

interface GeneratePDFOptions {
  element: HTMLElement;
  filename: string;
  quality?: number;
}

export const generatePDF = async ({ element, filename = 'curriculum.pdf', quality = 0.95 }: GeneratePDFOptions) => {
  try {
    const image = await htmlToImage.toPng(element, {
      quality,
      backgroundColor: '#ffffff'
    });

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgProps = pdf.getImageProperties(image);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
