import { createContext, RefObject, useContext } from "react";

interface HomeContext {
  getUrl: () => string;
  downloadPdf: (url: string) => Promise<Blob>;
  inputRef: RefObject<HTMLInputElement>;
  setError: (error: string) => void;
  previewUrl: string;
  setPreviewUrl: (url: string) => void;
}

export const HomeContext = createContext<HomeContext>({} as HomeContext);
export const useHomeContext = () => useContext(HomeContext);

