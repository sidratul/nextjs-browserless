import { Card } from '@/components/Card'
import React, { useRef, useState } from 'react'
import { HomeForm } from './HomeForm'
import { FileIcon } from 'lucide-react';
import { HomeContext } from './HomeContext';
import { getPdfBlob } from '@/services';
import { z } from 'zod';
import { PdfViewer } from './PdfViewer';

export const HomeContainer = () => {
  const [error, setError] = useState('');
  const [hasPreviewed, setHasPreviewed] = useState(false);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const previewRef = useRef<HTMLIFrameElement>({} as HTMLIFrameElement);

  const downloadedFile = {
    url: '',
    blob: new Blob(),
  }

  const downloadPdf = () => {
    // validate
    const url = inputRef.current?.value.toString();
    const { data, error } = z.string({ message: "url cannot be empty"}).url({message: "Invalid url"}).safeParse(url);
    if (error) {
      setError(error.issues[0].message);
      throw new Error(error.issues[0].message);
    }

    // if similar to prev url, return prev blob
    if(url === downloadedFile.url) {
      return Promise.resolve({
        blob: downloadedFile.blob!,
        url: url!,
      });
    }

    const validUrl = data!;
    
    // request pdf
    return getPdfBlob(validUrl)
      .then( blob => {
        downloadedFile.url = validUrl;
        downloadedFile.blob = blob;
        return {
          blob,
          url: url!,
        };
      })
      .catch(err => {
        setError(err.message);
        throw err;
      });
  }

  return (
    <HomeContext.Provider
      value={{
        downloadPdf,
        inputRef,
        setHasPreviewed,
        previewRef,
      }}
    >
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">PDF Viewer</h1>
            <p className="text-gray-500 mt-2">Enter a URL to view and download PDF documents</p>
          </header>
          <Card className="p-6">
            <HomeForm/>
          </Card>
          {
            error && (
              <div className="rounded-lg border p-2 text-center text-red-500 capitalize">{error}</div>
            )
          }
          
          {hasPreviewed ? (
            <PdfViewer/>
          ) : (
            <div className="bg-white border rounded-lg shadow-sm p-4 h-[500px] flex flex-col items-center justify-center">
              <div className="text-center">
                <FileIcon size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No PDF Selected</h3>
                <p className="text-gray-500 max-w-md">
                  Enter a URL in the field above and click &quot;View PDF&quot; to display the document here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </HomeContext.Provider>
  )
}
