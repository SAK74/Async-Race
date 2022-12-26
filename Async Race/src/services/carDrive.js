import { setStatus } from './api';

export class AnimatedCar {
  constructor(id, car) {
    this.id = id;
    this.interval = null;
    this.pos = 0;
    this.car = car;
  }

  move() {
    if (this.pos >= 90) {
      window.clearInterval(this.interval);
    } else {
      this.car.style.left = `${this.pos}%`;
      this.pos += 0.75;
    }
  }

  start() {
    this.move();
    const distance = 5000;
    this.interval = window.setInterval(
      () => this.move(),
      distance / this.velocity,
    );
  }

  damage() {
    window.clearInterval(this.interval);
  }

  stop() {
    this.damage();
    setStatus(this.id, 'stopped').then(() => {
      this.pos = 0;
      this.car.style.left = 0;
    });
  }
}

export const startHandler = (id, _animCar) => {
  setStatus(id, 'started').then((data) => {
    const animCar = _animCar;
    animCar.velocity = data.velocity;
    animCar.start();
    setStatus(id, 'drive')
      .then(() => {})
      .catch(() => {
        animCar.damage();
      });
  });
};
