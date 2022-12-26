import { CARS_PER_PAGE, SERVER } from '../SETTINGS';
import { getPage } from './storage';

const headers = new Headers({
  'Content-Type': 'application/json',
});
const request = (url, options) => fetch(url, options).then((resp) => {
  if (!resp.ok) {
    throw Error(resp.status + resp.statusText);
  }
  if (url.pathname === '/garage' && !options?.method) {
    document.getElementById('total').innerText = resp.headers.get('X-total-Count');
  }
  return resp.json();
});

export const fetchCars = () => {
  const garageURL = new URL('/garage', SERVER);
  const queryParam = new URLSearchParams({
    _page: getPage(),
    _limit: CARS_PER_PAGE,
  });
  garageURL.search = queryParam.toString();
  return request(garageURL);
};

export const addCar = (name = 'new car', color = 'red') => {
  const garageURL = new URL('/garage', SERVER);
  return request(garageURL, {
    headers,
    method: 'POST',
    body: JSON.stringify({ name, color }),
  });
};

export const removeCar = (id) => {
  const garageURL = new URL('/garage', SERVER);
  garageURL.pathname = `${garageURL.pathname}/${id}`;
  return request(garageURL, {
    method: 'DELETE',
  });
};

export const updateCar = (id, name, color) => {
  const garageURL = new URL('/garage', SERVER);
  garageURL.pathname = `${garageURL.pathname}/${id}`;
  return request(garageURL, {
    headers,
    method: 'PUT',
    body: JSON.stringify({ name, color }),
  });
};
export const setStatus = (id, status) => {
  const engineURL = new URL('/engine', SERVER);
  const queryParam = new URLSearchParams({
    id,
    status,
  });
  engineURL.search = queryParam.toString();
  return request(engineURL, {
    method: 'PATCH',
  });
};
