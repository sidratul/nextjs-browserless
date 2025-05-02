export function post<T=Record<string, unknown>>(url: string, data: T) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then( res => {
    if(res.ok) {
      return res;
    }

    return res.json().then(error => {
      throw new Error(error.message) 
    });
  });
}