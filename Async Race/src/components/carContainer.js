import { fetchCars, removeCar } from '../services/api';
import car from './car';

export default function carContainer(name, color, id) {
  const selBtn = document.createElement('button');
  selBtn.innerText = 'Select car';
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove car';
  const goBtn = document.createElement('button');
  goBtn.className = 'go-btn';
  const stopBtn = document.createElement('button');
  stopBtn.className = 'stop-btn';
  const carName = document.createElement('span');
  carName.innerText = name;
  const rootCtn = document.createElement('div');
  rootCtn.id = `car#${id}`;
  [selBtn, removeBtn, goBtn, stopBtn, carName, car(color)].forEach((el) => {
    rootCtn.appendChild(el);
  });
  const updateForm = document.forms.update;
  selBtn.onclick = () => {
    updateForm.id.value = id;
    updateForm.name.value = name;
    updateForm.color.value = color;
  };
  removeBtn.onclick = () => {
    const container = rootCtn.parentElement;
    removeCar(id).then(() => {
      fetchCars().then((data) => {
        container.innerHTML = null;
        data.forEach((eachCar) => {
          const { name: _name, color: _color, id: _id } = eachCar;
          container.appendChild(carContainer(_name, _color, _id));
        });
      });
      updateForm.reset();
    });
  };
  return rootCtn;
}
