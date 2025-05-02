import { Skeleton } from '@/components/Skeleton';
import React, { useState } from 'react'
import { useHomeContext } from './HomeContext';

export const PdfViewer = () => {
  const { previewRef } = useHomeContext();
  const [loading, setLoading] = useState(true);
  const handleError = () => {
    setLoading(false);
  };

  return (
    <div className="w-full">
      {loading && (
        <div className="grid gap-2">
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>
      )}
      
      <iframe
        ref={previewRef}
        className={`w-full h-[500px] border rounded-lg ${loading ? "hidden" : "block"}`}
        title="PDF Viewer"
        onError={handleError}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
