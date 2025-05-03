// import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useHomeContext } from '../HomeContext';

export const PdfViewer = () => {
  const previewRef = useRef<HTMLIFrameElement>({} as HTMLIFrameElement);
  const { previewUrl, setError, downloadPdf, setPreviewUrl} = useHomeContext();
  const [loading, setLoading] = useState(false);
  
  const handleError = () => {
    setLoading(false);
    setPreviewUrl('');
    setError("Error displaying PDF");
  };

  useEffect(()=>{
    if (!previewUrl) {
      return;
    }
    setLoading(true);
    downloadPdf(previewUrl).then(blob => {
      const pdfUrl = window.URL.createObjectURL(blob);
      previewRef.current.src = pdfUrl;
    }).catch(()=>{
      //handled
    });
  }, [previewUrl, downloadPdf]);


  return (
    <div className="w-full">
      {loading && (
        <div className="flex animate-pulse space-x-4 h-[500px] bg-gray-200 rounded"></div>
      )}
      
      <iframe
        ref={previewRef}
        className={`w-full h-[500px] border rounded-lg ${(loading || !previewUrl) ? "hidden" : "block"}`}
        title="PDF Viewer"
        onError={handleError}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
