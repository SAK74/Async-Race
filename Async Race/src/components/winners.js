import '../styles/winners.css';
import renderTable from '../services/winnersHandlers';
import renderPagination from './pagination';

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
  thisBtn.lastChild.innerText = sort === 'wins' && order === 'ASC' ? '▲' : '▼';
  anotherBtn.lastChild.innerText = '';
};

export default function handleWinnersPage() {
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
  document.getElementById('root').appendChild(paginContainer);
}
