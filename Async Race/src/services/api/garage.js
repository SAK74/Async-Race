import { CARS_PER_PAGE, SERVER } from '../../SETTINGS';
import request from './request';
import { getPage } from '../storage';

const garageURL = new URL('/garage', SERVER);
export const headers = new Headers({
  'Content-Type': 'application/json',
});
export const urlWithID = (root, id) => {
  const url = new URL(root.toString());
  url.pathname += `/${id}`;
  return url;
};

export const fetchCars = () => {
  const queryParam = new URLSearchParams({
    _page: getPage(),
    _limit: CARS_PER_PAGE,
  });
  garageURL.search = queryParam.toString();
  return request(garageURL);
};

export const addCar = (name = 'new car', color = 'red') => {
  garageURL.search = '';
  return request(garageURL, {
    headers,
    method: 'POST',
    body: JSON.stringify({ name, color }),
  });
};

export const removeCar = (id) => {
  garageURL.search = '';
  return request(urlWithID(garageURL, id), {
    method: 'DELETE',
  });
};

export const updateCar = (id, name, color) => {
  garageURL.search = '';
  return request(urlWithID(garageURL, id), {
    headers,
    method: 'PUT',
    body: JSON.stringify({ name, color }),
  });
};

export const getCar = (id) => {
  garageURL.search = '';
  return request(urlWithID(garageURL, id));
};
