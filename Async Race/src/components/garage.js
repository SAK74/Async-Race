import '../styles/garage.css';
import {
  fetchToView,
  handleCreate,
  handleGenerate,
  handleUpdate,
} from '../services/garageHandlers';
import { resetRace, startRace } from '../services/race';
import renderPagination from './pagination';
import * as storage from '../services/storage';

export default function handleGarage() {
  const createForm = document.forms.create;
  const updateForm = document.forms.update;
  const carsContainer = document.querySelector('.cars-container');
  createForm.addEventListener('submit', function handler(ev) {
    handleCreate(ev, this, carsContainer);
  });
  updateForm.addEventListener('submit', function updateHandler(ev) {
    handleUpdate(ev, this, carsContainer);
  });
  const generateBtn = document.getElementById('generate');
  generateBtn.onclick = () => {
    handleGenerate();
  };
  const paginContainer = renderPagination(fetchToView, storage);
  document.getElementById('root').appendChild(paginContainer);
  fetchToView();
  const raceBtn = document.getElementById('race');
  raceBtn.onclick = () => {
    startRace();
  };
  const resetBtn = document.getElementById('reset');
  resetBtn.onclick = () => {
    resetRace();
  };
}
