export const getPage = () => {
  const storage = window.sessionStorage.getItem('garage-page');
  return storage ? parseInt(storage, 10) : 1;
};
export const setPage = (page) => {
  document.getElementById('page').innerHTML = page;
  window.sessionStorage.setItem('garage-page', page);
};
