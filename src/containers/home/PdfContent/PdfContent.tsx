import React from 'react'
import { useHomeContext } from '../HomeContext';
import { NoDisplay } from './NoDisplay';
import { PdfViewer } from './PdfViewer';

export const PdfContent = () => {
  const { previewUrl } = useHomeContext();

  return (
    <>
      {
        !previewUrl && <NoDisplay/>
      }
      <PdfViewer/>
    </>
  )
}
