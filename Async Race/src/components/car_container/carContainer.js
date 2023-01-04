import { animationEnd, handleStart } from './carAnimation';
import { handleRemove, handleSelect } from './carHandlers';
import html from './view.html';
import carSVG from '../car/car';

export default function carContainer(name, color, id) {
  const rootCtn = document.createElement('div');
  rootCtn.classList.add('car-container');
  rootCtn.id = `car#${id}`;
  rootCtn.innerHTML = html;
  const selBtn = rootCtn.querySelector('.select-btn');
  const removeBtn = rootCtn.querySelector('.remove-btn');
  const carName = rootCtn.querySelector('.name');
  carName.innerText = name;
  const goBtn = rootCtn.querySelector('.go-btn');
  const stopBtn = rootCtn.querySelector('.stop-btn');

  const car = carSVG(color);
  rootCtn.appendChild(car);

  goBtn.onclick = function go() {
    this.disabled = true;
    stopBtn.disabled = false;
    handleStart(id, car);
  };
  stopBtn.onclick = function stop() {
    this.disabled = true;
    goBtn.disabled = false;
    animationEnd(id, car);
  };

  const updateForm = document.forms.update;
  selBtn.onclick = () => {
    handleSelect(name, color, id, updateForm);
  };
  removeBtn.onclick = () => {
    handleRemove(id, carContainer);
  };

  return rootCtn;
}
