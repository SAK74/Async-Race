import { setStatus } from './api';
import { animationStart } from './carAnimation';

const defineWinner = () => {
  const animations = document
    .getAnimations()
    .map((animation) => animation.finished);
  Promise.any(animations).then(({ currentTime, id }) => {
    // const { currentTime, id } = data;
    const name = document
      .getElementById(`car#${id}`)
      .querySelector('span').innerText;
    console.log(name, `${Math.round(currentTime) / 1000}s`);
    // todo add popup!
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
