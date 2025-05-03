import React from 'react'
import { FileIcon } from 'lucide-react';
import { useHomeContext } from '../HomeContext';

export const NoDisplay = () => {
  const {} = useHomeContext();

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 h-[500px] flex flex-col items-center justify-center">
      <div className="text-center">
        <FileIcon size={64} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No PDF Selected</h3>
        <p className="text-gray-500 max-w-md">
          Enter a URL in the field above and click &quot;View PDF&quot; to display the document here.
        </p>
      </div>
    </div>
  )
}
