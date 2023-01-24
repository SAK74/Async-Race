import { CARS_PER_PAGE, WINNERS_PER_PAGE } from '../SETTINGS';

export default function setPagination(total, url) {
  const page = +new URL(url).searchParams.get('_page');
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
