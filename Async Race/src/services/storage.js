export const getPage = () => {
  const storage = window.sessionStorage.getItem('garage-page');
  return storage ? parseInt(storage, 10) : 1;
};
export const setPage = (page) => {
  window.sessionStorage.setItem('garage-page', page);
};
export const getTotal = () => {
  const storage = window.sessionStorage.getItem('garage-total');
  return storage || 0;
};
