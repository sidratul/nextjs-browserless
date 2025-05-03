import { Card } from '@/components/Card'
import React, { useRef, useState } from 'react'
import { HomeForm } from './HomeForm'
import { HomeContext } from './HomeContext';
import { getPdfBlob } from '@/services';
import { z } from 'zod';
import { PdfContent } from './PdfContent';

export const HomeContainer = () => {
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const downloadedFile = {
    url: '',
    blob: new Blob(),
  }

  const getUrl = () => {
    setError('');
    
    // validate
    const url = inputRef.current?.value.toString();
    const { data, error } = z.string({ message: "url cannot be empty"}).url({message: "Invalid url"}).safeParse(url);
    if (error) {
      setError(error.issues[0].message);
      throw new Error(error.issues[0].message);
    }

    return data;
  }

  const downloadPdf = (url: string) => {
    setError('');
    // if similar to prev url, return prev blob
    if(url === downloadedFile.url) {
      return Promise.resolve(downloadedFile.blob);
    }

    // request pdf
    return getPdfBlob(url)
      .then( blob => {
        downloadedFile.url = url;
        downloadedFile.blob = blob;
        return blob;
      })
      .catch(err => {
        setError(err.message);
        throw err;
      });
  }

  return (
    <HomeContext.Provider
      value={{
        setError,
        getUrl,
        downloadPdf,
        inputRef,
        previewUrl,
        setPreviewUrl
      }}
    >
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">PDF Viewer</h1>
            <p className="text-gray-500 mt-2">Enter a URL to view and download PDF documents</p>
          </header>
          
          <Card className="p-6 bg">
            <HomeForm/>
          </Card>
          
          {
            error && (
              <div className="shadow-sm rounded-lg border border-gray-200 p-2 text-center text-red-500 capitalize bg-background">{error}</div>
            )
          }
          
          <PdfContent/>
        </div>
      </div>
    </HomeContext.Provider>
  )
}
