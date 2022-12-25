import '../styles/garage.css';
import {
  handleCreate,
  handleGenerate,
  handlePage,
  handleUpdate,
} from '../services/handlers';
import { getPage, setPage } from '../services/storage';

export default function handleGarage() {
  const createForm = document.forms.create;
  const updateForm = document.forms.update;
  const container = document.querySelector('.cars-container');
  createForm.addEventListener('submit', function handler(ev) {
    handleCreate(ev, this, container);
  });
  updateForm.addEventListener('submit', function updateHandler(ev) {
    handleUpdate(ev, this, container);
  });
  // fetchToView();
  handlePage();
  const generateBtn = document.getElementById('generate');
  generateBtn.onclick = () => {
    handleGenerate();
  };
  const paginContainer = document.getElementById('pagination');
  const prevBtn = paginContainer.querySelector('button:first-of-type');
  const nextBtn = paginContainer.querySelector('button:last-of-type');
  nextBtn.onclick = () => {
    setPage(getPage() + 1);
    handlePage();
  };
  prevBtn.onclick = () => {
    setPage(getPage() - 1);
    handlePage();
  };
}
