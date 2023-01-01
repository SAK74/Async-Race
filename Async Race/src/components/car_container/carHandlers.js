import { fetchCars, removeCar } from '../../services/api/garage';
import { removeWinner } from '../../services/api/winners';
import { getPage, setPage } from '../../services/storage';

export const handleSelect = (name, color, id, form) => {
  const {
    id: fId, name: fName, color: fColor, button: fBtn,
  } = form;
  fName.disabled = false;
  fColor.disabled = false;
  fBtn.disabled = false;
  fId.value = id;
  fName.value = name;
  fColor.value = color;
};

export const handleRemove = (_id, carWrapper) => {
  const container = document.querySelector('.cars-container');
  removeCar(_id).then(() => {
    removeWinner(_id);
    if (container.children.length === 1) {
      setPage(getPage() - 1);
    }
    fetchCars().then((data) => {
      container.innerHTML = null;
      data.forEach((eachCar) => {
        const { name, color, id } = eachCar;
        container.appendChild(carWrapper(name, color, id));
      });
    });
    const updateForm = document.forms.update;
    updateForm.reset();
    updateForm.button.disabled = true;
    updateForm.name.disabled = true;
    updateForm.color.disabled = true;
  });
};
