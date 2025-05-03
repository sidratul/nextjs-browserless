// import React from 'react'
import { useEffect, useState } from 'react';
import { useHomeContext } from '../HomeContext';
import {PDFViewer } from '@/components/PdfViewer';

export const PdfViewer = () => {
  const { previewUrl, downloadPdf} = useHomeContext();
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>();

  useEffect(()=>{
    if (!previewUrl) {
      return;
    }
    setLoading(true);
    downloadPdf(previewUrl).then(blob => {
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
    }).catch(()=>{
      //handled
    }).finally(()=>{
      setLoading(false)
    })
  }, [previewUrl, downloadPdf]);


  return (
    <div className="w-full">
      {loading && (
        <div className="flex animate-pulse space-x-4 h-[500px] bg-gray-200 rounded"></div>
      )}

      {pdfUrl && (
        <div className='h-[500px] rounded overflow-auto border border-gray-200'>
          <PDFViewer
            url={pdfUrl!}
            loading={loading}
          />
        </div>
      )}
    </div>
  )
}
