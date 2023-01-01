import setStatus from '../../services/api/engine';

export const animationStart = async (id, carElement) => {
  const containerWidth = carElement.parentElement.clientWidth;
  const carWidth = carElement.width.baseVal.value;
  const { distance, velocity } = await setStatus(id, 'started');
  const carAnimation = carElement.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(${containerWidth - carWidth}px)` },
    ],
    {
      duration: distance / velocity,
      fill: 'forwards',
    },
  );
  carAnimation.id = id;
};

export const handleStart = (id, car) => {
  animationStart(id, car).then(() => {
    setStatus(id, 'drive').catch(() => {
      car.getAnimations()[0].pause();
    });
  });
};

export const animationEnd = (id, car) => {
  const animation = car.getAnimations()[0];
  animation.pause();
  setStatus(id, 'stopped').then(() => {
    animation.cancel();
  });
};
