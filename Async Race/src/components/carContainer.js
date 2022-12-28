import { animationEnd, handleStart } from '../services/carAnimation';
import { handleRemove, handleSelect } from '../services/carHandlers';
import carSVG from './car';

export default function carContainer(name, color, id) {
  const selBtn = document.createElement('button');
  selBtn.innerText = 'Select car';

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove car';

  const carName = document.createElement('span');
  carName.innerText = name;

  const rootCtn = document.createElement('div');
  rootCtn.classList.add('car-container');
  rootCtn.id = `car#${id}`;

  const goBtn = document.createElement('button');
  const stopBtn = document.createElement('button');

  const car = carSVG(color);
  [selBtn, removeBtn, goBtn, stopBtn, carName, car].forEach((el) => {
    rootCtn.appendChild(el);
  });

  goBtn.className = 'go-btn button';
  goBtn.onclick = () => handleStart(id, car);
  goBtn.innerText = '\u25B6';

  stopBtn.className = 'stop-btn button';
  stopBtn.innerText = '\u25FC';
  stopBtn.onclick = () => animationEnd(id, car);

  const updateForm = document.forms.update;
  selBtn.onclick = () => {
    handleSelect(name, color, id, updateForm);
  };
  removeBtn.onclick = () => {
    handleRemove(id, carContainer);
  };

  return rootCtn;
}
