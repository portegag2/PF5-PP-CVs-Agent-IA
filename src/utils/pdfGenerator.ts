import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';

interface GeneratePDFOptions {
  element: HTMLElement;
  filename: string;
  quality?: number;
}

export const generatePDF = async ({ element, filename = 'curriculum.pdf' }: GeneratePDFOptions) => {
  try {
    // Create a temporary container
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '0';
    container.style.top = '0';
    container.style.width = '210mm';
    container.style.padding = '20mm';
    container.style.background = 'white';
    container.style.zIndex = '10000';
    
    // Clone the element and append to container
    const clone = element.cloneNode(true) as HTMLElement;
    container.appendChild(clone);
    document.body.appendChild(container);
    
    // Generate the image
    const image = await htmlToImage.toPng(container, {
      quality: 1,
      backgroundColor: '#ffffff',
      pixelRatio: 2
    });
    
    // Clean up
    document.body.removeChild(container);
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Add image to PDF
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
