export default function pagination(renderPage, { getPage, setPage }) {
  const paginContainer = document.createElement('div');
  paginContainer.className = 'pagination';
  paginContainer.innerHTML = `
    <button class="button">Prev</button>
    <span id="page">1</span>
    of
    <span id="total-pages">?</span>
    <button class="button">Next</button>
    `;
  const prevBtn = paginContainer.querySelector('button:first-of-type');
  const nextBtn = paginContainer.querySelector('button:last-of-type');
  prevBtn.toggleAttribute('disabled', getPage() === 1);
  nextBtn.onclick = () => {
    prevBtn.disabled = false;
    setPage(getPage() + 1);
    renderPage(getPage());
  };
  prevBtn.onclick = function handler() {
    const page = getPage();
    this.toggleAttribute('disabled', page === 2);
    nextBtn.disabled = false;
    setPage(page - 1);
    renderPage(page - 1);
  };

  return paginContainer;
}
