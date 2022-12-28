export default function request(url, options) {
  return fetch(url, options).then((resp) => {
    if (!resp.ok) {
      throw Error(resp.status + resp.statusText);
    }
    if (url.pathname === '/garage' && !options?.method) {
      document.getElementById('total').innerText = resp.headers.get('X-total-Count');
    }
    return resp.json();
  });
}
