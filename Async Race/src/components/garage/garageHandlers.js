import carContainer from '../car_container/carContainer';
import { CARS_PER_PAGE } from '../../SETTINGS';
import * as api from '../../services/api/garage';
import carsGenerate from './generateCars';

export const fetchToView = () => {
  const container = document.querySelector('.cars-container');
  api.fetchCars().then((data) => {
    container.innerHTML = null;
    data.forEach((car) => {
      const { name, color, id } = car;
      container.appendChild(carContainer(name, color, id));
    });
  });
};
export const handleCreate = (ev, form, container) => {
  ev.preventDefault();
  api.addCar(form.name.value, form.color.value).then((car) => {
    document.getElementById('total').innerText = +document.getElementById('total').innerText + 1;
    if (container.children.length < CARS_PER_PAGE) {
      const { name, color, id } = car;
      container.appendChild(carContainer(name, color, id));
    }
  });
};
export const handleUpdate = (ev, form, container) => {
  ev.preventDefault();
  const {
    id: formId, name: formName, color: formColor, button,
  } = form;
  api.updateCar(formId.value, formName.value, formColor.value).then((data) => {
    const { name, color, id } = data;
    container.replaceChild(
      carContainer(name, color, id),
      document.getElementById(`car#${id}`),
    );
    form.reset();
    button.disabled = true;
    formName.disabled = true;
    formColor.disabled = true;
  });
};
export const handleGenerate = () => {
  carsGenerate().then(() => {
    fetchToView();
  });
};
