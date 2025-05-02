import * as api from './api';

export function getPdfBlob(url: string) {
  return api.post<{url: string}>(`/api/pdf`, {url })
    .then( res => {
      return res.blob();
    });
}