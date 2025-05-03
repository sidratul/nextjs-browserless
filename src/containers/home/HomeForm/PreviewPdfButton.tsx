import { Button } from '@/components/Button'
import React, { useState } from 'react'
import { useHomeContext } from '../HomeContext';
import { Eye } from 'lucide-react';

export const PreviewPdfButton = () => {
  const { getUrl, setPreviewUrl } = useHomeContext();
  const [loading, setLoading] = useState(false);

  const handleDisplayPdf = async () => {
    setLoading(true);
    try{
      const url = getUrl();
      setPreviewUrl(url);
    } catch {
      // error handled
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button 
      onClick={handleDisplayPdf}
      variant="outline"
      className="flex items-center gap-2"
      disabled={loading}
    >
      <Eye size={16} />
      <span>View PDF</span>
    </Button>
  )
}
