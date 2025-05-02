import { createContext, RefObject, useContext } from "react";

interface HomeContext {
  downloadPdf: () => Promise<{url: string, blob: Blob;}>;
  inputRef: RefObject<HTMLInputElement>;
  previewRef: RefObject<HTMLIFrameElement>;
  setHasPreviewed: (isPreview: boolean) => void;
}

export const HomeContext = createContext<HomeContext>({} as HomeContext);
export const useHomeContext = () => useContext(HomeContext);

