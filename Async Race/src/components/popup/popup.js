import './popup.css';
import wav from './tadam.wav';

export default function popUp(name, time) {
  const wave = new Audio(wav);
  wave.play();
  const popup = document.createElement('div');
  popup.className = 'popup';
  const carName = document.createElement('div');
  carName.innerText = `WINNER: ${name}`;
  const carTime = document.createElement('div');
  carTime.innerText = `with time ${time}`;
  const cup = document.createElement('div');
  cup.innerHTML = '&#127942;';
  cup.className = 'cup';
  const cross = document.createElement('div');
  cross.className = 'cross';
  cross.innerHTML = '&#10060;';
  cross.onclick = () => popup.remove();
  [cup, carName, carTime, cross].forEach((elem) => {
    popup.appendChild(elem);
  });
  const timer = window.setTimeout(() => {
    popup.remove();
    window.clearTimeout(timer);
  }, 4000);
  document.body.appendChild(popup);
}
