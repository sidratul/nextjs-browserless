import { Viewer, ViewMode } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
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
  
  const defaultLayoutPluginInstance = defaultLayoutPlugin({

  });
  return (
    <div className={`${(loading) ? "hidden" : "block"}`}>
      <Viewer
        viewMode={ViewMode.SinglePage}
        fileUrl={url}
        plugins={[defaultLayoutPluginInstance]}
        onDocumentLoad={onLoad}
      />
    </div>
  );
}