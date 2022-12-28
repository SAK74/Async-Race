import '../styles/garage.css';
import {
  handleCreate,
  handleGenerate,
  handlePage,
  handleUpdate,
} from '../services/garageHandlers';
import { getPage, setPage } from '../services/storage';
import { resetRace, startRace } from '../services/race';

export default function handleGarage() {
  handlePage();
  const createForm = document.forms.create;
  const updateForm = document.forms.update;
  const container = document.querySelector('.cars-container');
  createForm.addEventListener('submit', function handler(ev) {
    handleCreate(ev, this, container);
  });
  updateForm.addEventListener('submit', function updateHandler(ev) {
    handleUpdate(ev, this, container);
  });
  const generateBtn = document.getElementById('generate');
  generateBtn.onclick = () => {
    handleGenerate();
  };
  const paginContainer = document.getElementById('pagination');
  const prevBtn = paginContainer.querySelector('button:first-of-type');
  const nextBtn = paginContainer.querySelector('button:last-of-type');
  nextBtn.onclick = () => {
    prevBtn.disabled = false;
    setPage(getPage() + 1);
    handlePage();
  };
  prevBtn.onclick = function handler() {
    const page = getPage();
    this.toggleAttribute('disabled', page === 2);
    nextBtn.disabled = false;
    setPage(page - 1);
    handlePage();
  };
  const raceBtn = document.getElementById('race');
  raceBtn.onclick = () => {
    startRace();
  };
  const resetBtn = document.getElementById('reset');
  resetBtn.onclick = () => {
    resetRace();
  };
}
