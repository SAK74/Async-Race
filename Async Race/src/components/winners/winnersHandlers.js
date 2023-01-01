import { getCar } from '../../services/api/garage';
import { getWinners } from '../../services/api/winners';
import carRow from './carRow';
import { WINNERS_PER_PAGE } from '../../SETTINGS';

export default function renderTable({ page, sort, order } = { page: 1 }) {
  getWinners(sort, order, page).then((winners) => {
    const table = document.querySelector('tbody');
    table.innerHTML = '';
    winners.forEach(async ({ id, wins, time }, nr) => {
      const { name, color } = await getCar(id);
      table.appendChild(
        carRow(nr + 1 + (page - 1) * WINNERS_PER_PAGE, color, name, wins, time),
      );
    });
  });
}
