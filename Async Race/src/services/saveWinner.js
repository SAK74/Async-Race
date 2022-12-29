import { addWinner, getWinner, updateWinner } from './api/winners';

export default function saveWinner(id, currentTime) {
  getWinner(id)
    .then(({ wins, time }) => {
      updateWinner(id, wins + 1, Math.min(time, currentTime));
    })
    .catch(() => {
      addWinner(id, 1, currentTime);
    });
}
