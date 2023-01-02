import {
  fetchToView,
  handleCreate,
  handleGenerate,
  handleUpdate,
} from './garageHandlers';
import { resetRace, startRace } from './race';
import renderPagination from '../pagination/pagination';
import * as storage from '../../services/storage';
import './garage.css';
import html from '../../views/garage.html';

export default function handleGarage() {
  const root = document.getElementById('root');
  root.innerHTML = html;
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
  root.appendChild(paginContainer);
  fetchToView();
  const raceBtn = document.getElementById('race');
  const resetBtn = document.getElementById('reset');
  raceBtn.onclick = function race() {
    this.disabled = true;
    resetBtn.disabled = false;
    startRace();
  };
  resetBtn.onclick = function reset() {
    this.disabled = true;
    raceBtn.disabled = false;
    resetRace();
  };
}
