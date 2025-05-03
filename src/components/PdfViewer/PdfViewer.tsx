import { Viewer, ViewMode } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

interface  PDFViewerProps {
  url: string;
  onLoad?: () => void;
  loading?: boolean;
}

export function PDFViewer({
  onLoad,
  url,
  loading,
}: PDFViewerProps) {
  return (
    <div className={`${(loading) ? "hidden" : "block"}`}>
      <Viewer
        viewMode={ViewMode.SinglePage}
        fileUrl={url} 
        onDocumentLoad={onLoad}
      />
    </div>
  );
}