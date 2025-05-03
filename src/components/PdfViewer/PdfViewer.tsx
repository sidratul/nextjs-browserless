import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function PDFViewer({ url }: {url: string}) {
  return (
    <div className="overflow-auto rounded border border-gray-200 shadow">
      <Document file={url}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
}