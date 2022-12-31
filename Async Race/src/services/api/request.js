import { CARS_PER_PAGE, WINNERS_PER_PAGE } from '../../SETTINGS';

export default function request(url, options) {
  return fetch(url, options).then((resp) => {
    if (!resp.ok) {
      throw Error(resp.status + resp.statusText);
    }
    if (
      (url.pathname === '/garage' || url.pathname === '/winners')
      && !options?.method
    ) {
      const page = Number(new URL(url).searchParams.get('_page'));
      const total = resp.headers.get('X-total-Count');
      document.getElementById('total').innerText = total;
      document.getElementById('page').innerText = page;
      const pages = Math.ceil(
        total / (url.pathname === '/garage' ? CARS_PER_PAGE : WINNERS_PER_PAGE),
      );
      document.getElementById('total-pages').innerText = pages;
      document
        .querySelector('.pagination button:last-of-type')
        .toggleAttribute('disabled', page === pages);
    }
    return resp.json();
  });
}
