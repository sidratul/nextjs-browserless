import { TextInput } from '@/components/TextInput'
import React from 'react'
import { useHomeContext } from '../HomeContext';
import { DownloadPdfButton } from './DownloadPdfButton';
import { PreviewPdfButton } from './PreviewPdfButton';

export const HomeForm = () => {
  const { inputRef } = useHomeContext();
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
      <TextInput
        inputRef={inputRef}
        type="url"
        name="url"
        placeholder="Enter URL (e.g., https://example.com)"
        className="flex-grow"
      />
      </div>
      <div className="flex gap-2 justify-around">
        <DownloadPdfButton/>
        <PreviewPdfButton/>
      </div>
    </div>
  )
}
