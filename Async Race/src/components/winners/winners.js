import renderTable from './winnersHandlers';
import renderPagination from '../pagination/pagination';
import './winners.css';
import html from '../../views/winners.html';

class SearchParams {
  constructor() {
    this.page = 1;
  }

  sort;

  order;

  getPage = () => this.page;

  setPage = (page) => {
    this.page = page;
  };
}
const searchParams = new SearchParams();

const handleClick = (param, btn, another) => {
  const { sort, order, page } = searchParams;
  searchParams.order = sort === param && order === 'ASC' ? 'DESC' : 'ASC';
  searchParams.sort = param;
  renderTable({
    sort: param,
    order: searchParams.order,
    page,
  });
  const thisBtn = btn;
  const anotherBtn = another;
  thisBtn.lastChild.innerText = sort === param && order === 'ASC' ? '▲' : '▼';
  anotherBtn.lastChild.innerText = '';
};

export default function handleWinnersPage() {
  const root = document.getElementById('root');
  root.innerHTML = html;
  renderTable();
  const winsBtn = document.querySelector(' thead .header-clickable');
  const timesBtn = document.querySelector(' thead .time');
  winsBtn.onclick = function click() {
    return handleClick('wins', this, timesBtn);
  };
  timesBtn.onclick = function click() {
    return handleClick('time', this, winsBtn);
  };
  const paginContainer = renderPagination(
    (page) => renderTable({
      page,
      sort: searchParams.sort,
      order: searchParams.order,
    }),
    {
      getPage: searchParams.getPage,
      setPage: searchParams.setPage,
    },
  );
  root.appendChild(paginContainer);
}
