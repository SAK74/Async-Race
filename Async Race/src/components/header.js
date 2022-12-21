export default function header({ garageRoute, winnersRoute }) {
  const winnersBtn = document.getElementById('to-winners');
  const garageBtn = document.getElementById('to-garage');
  window.addEventListener('hashchange', () => {
    winnersBtn.disabled = winnersRoute.isActive();
    garageBtn.disabled = garageRoute.isActive();
  });
}
