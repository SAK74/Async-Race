import { SERVER } from '../../SETTINGS';
import request from './request';

const engineURL = new URL('/engine', SERVER);
export default function setStatus(id, status) {
  const queryParam = new URLSearchParams({
    id,
    status,
  });
  engineURL.search = queryParam.toString();
  return request(engineURL, {
    method: 'PATCH',
  });
}
