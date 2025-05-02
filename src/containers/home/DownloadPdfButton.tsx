import { Button } from '@/components/Button';
import React, { useState } from 'react'
import { useHomeContext } from './HomeContext';
import { Download } from 'lucide-react';

export const DownloadPdfButton = () => {
  const { downloadPdf } = useHomeContext();
  const [loading, setLoading] = useState(false);

  const handleDownloadPdf = async () => {
    setLoading(true);
    try{
      const { blob, url } = await downloadPdf();
      const pdfUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = `${url}.pdf`;
      a.click();    
      URL.revokeObjectURL(pdfUrl);
    } catch {
      // error handled
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button 
      onClick={handleDownloadPdf}
      variant="outline"
      className="flex items-center gap-2"
      disabled={loading}
    >
      <Download size={16} />
      <span>Download</span>
    </Button>
  )
}
