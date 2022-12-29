import { getCar } from './api/garage';
import { getWinners } from './api/winners';
import carRow from '../components/carRow';

export const renderTable = ({ page, sort, order } = {}) => {
  getWinners(sort, order, page).then((winners) => {
    const table = document.querySelector('tbody');
    table.innerHTML = '';
    winners.forEach(async ({ id, wins, time }, nr) => {
      const { name, color } = await getCar(id);
      table.appendChild(carRow(nr + 1, color, name, wins, time));
    });
  });
};
