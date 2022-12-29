import '../styles/winners.css';
import { renderTable } from '../services/winnersHandlers';

export default function handleWinnersPage() {
  renderTable();
  const winsBtn = document.querySelector(' thead .header-clickable');
  const timesBtn = document.querySelector(' thead .time');
  let isWinAsc;
  let isTimeAsc;
  winsBtn.onclick = function click() {
    renderTable({
      sort: 'wins',
      order: isWinAsc ? 'DESC' : 'ASC',
    });
    isWinAsc = !isWinAsc;
    this.lastChild.innerText = isWinAsc ? '▲' : '▼';
    isTimeAsc = undefined;
    timesBtn.lastChild.innerText = '';
  };
  timesBtn.onclick = function click() {
    renderTable({
      sort: 'time',
      order: isTimeAsc ? 'DESC' : 'ASC',
    });
    isTimeAsc = !isTimeAsc;
    this.lastChild.innerText = isWinAsc ? '▲' : '▼';
    isWinAsc = undefined;
    winsBtn.lastChild.innerText = '';
  };
}
