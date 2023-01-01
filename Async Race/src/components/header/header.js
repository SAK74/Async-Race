import html from '../../views/header.html';

export default function renderHeader({ garageRoute, winnersRoute }) {
  const header = document.createElement('header');
  header.innerHTML = html;
  const winnersBtn = header.querySelector('.to-winners');
  const garageBtn = header.querySelector('.to-garage');
  winnersBtn.disabled = winnersRoute.isActive();
  garageBtn.disabled = garageRoute.isActive();
  window.addEventListener('hashchange', () => {
    winnersBtn.disabled = winnersRoute.isActive();
    garageBtn.disabled = garageRoute.isActive();
  });
  return header;
}
