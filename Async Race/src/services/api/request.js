import setPagination from '../setPagination';

export default function request(url, options) {
  return fetch(url, options).then((resp) => {
    if (!resp.ok) {
      throw Error(resp.status + resp.statusText);
    }
    if (
      (url.pathname === '/garage' || url.pathname === '/winners')
      && !options?.method
    ) {
      setPagination(+resp.headers.get('X-total-Count'), url);
    }
    return resp.json();
  });
}
