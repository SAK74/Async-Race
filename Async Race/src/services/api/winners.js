import { SERVER, WINNERS_PER_PAGE } from '../../SETTINGS';
import { urlWithID, headers } from './garage';
import request from './request';

const winnersURL = new URL('/winners', SERVER);

export const getWinners = (_sort, _order, _page = 1) => {
  const queryParam = new URLSearchParams({
    _limit: WINNERS_PER_PAGE,
    _page,
    _sort,
    _order,
  });
  winnersURL.search = queryParam.toString();
  return request(winnersURL);
};

export const getWinner = (id) => {
  winnersURL.search = '';
  return request(urlWithID(winnersURL, id));
};

export const addWinner = (id, wins, time) => {
  winnersURL.search = '';
  return request(winnersURL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ id, wins, time }),
  });
};

export const updateWinner = (id, wins, time) => {
  winnersURL.search = '';
  return request(urlWithID(winnersURL, id), {
    method: 'PUT',
    headers,
    body: JSON.stringify({ wins, time }),
  });
};

export const removeWinner = (id) => {
  winnersURL.search = '';
  return request(urlWithID(winnersURL, id));
};
