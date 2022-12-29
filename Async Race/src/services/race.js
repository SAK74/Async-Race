import setStatus from './api/engine';
import { animationStart } from './carAnimation';
import saveWinner from './saveWinner';

const defineWinner = () => {
  const animations = document
    .getAnimations()
    .map((animation) => animation.finished);
  Promise.any(animations).then(({ currentTime, id }) => {
    const name = document
      .getElementById(`car#${id}`)
      .querySelector('span').innerText;
    const time = Math.round(currentTime) / 1000;
    console.log(name, `${time}s`);
    // todo add popup!
    saveWinner(id, time);
  });
};

export const startRace = async () => {
  const carsCtns = document.getElementsByClassName('car-container');
  const cars = Array.from(carsCtns).map((car) => {
    const carElem = car.querySelector('svg');
    const id = parseInt(car.id.replace('car#', ''), 10);
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
