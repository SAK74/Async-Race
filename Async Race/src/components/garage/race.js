import setStatus from '../../services/api/engine';
import { animationStart } from '../car_container/carAnimation';
import popUp from '../popup/popup';
import saveWinner from './saveWinner';

const defineWinner = () => {
  const animations = document
    .getAnimations()
    .map((animation) => animation.finished);
  Promise.any(animations).then(({ currentTime, id }) => {
    const name = document
      .getElementById(`car#${id}`)
      .querySelector('span.name').innerText;
    const time = Math.round(currentTime) / 1000;
    popUp(name, time);
    saveWinner(id, time);
  });
};

export const startRace = async () => {
  const carsCtns = document.getElementsByClassName('car-container');
  const cars = Array.from(carsCtns).map((car) => {
    const carElem = car.querySelector('svg');
    const id = parseInt(car.id.replace('car#', ''), 10);
    const goBtn = car.querySelector('.go-btn');
    goBtn.disabled = true;
    const stopBtn = car.querySelector('.stop-btn');
    stopBtn.disabled = false;
    return { id, carElem };
  });
  await Promise.all(cars.map(({ id, carElem }) => animationStart(id, carElem)));
  defineWinner();
  cars.forEach(({ id, carElem }) => {
    setStatus(id, 'drive').catch(() => {
      carElem.getAnimations()[0].pause();
    });
  });
};

export const resetRace = () => {
  const carsStop = document.getElementsByClassName('stop-btn');
  for (let i = 0; i < carsStop.length; i += 1) {
    carsStop[i].click();
  }
};
