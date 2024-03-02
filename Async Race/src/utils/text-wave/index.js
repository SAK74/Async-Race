import './index.css';

export default function waveText(source) {
  const content = source.innerText;
  const element = source;
  element.innerHTML = '';
  content.split('').forEach((letter, n) => {
    element.innerHTML += `<span class="letter" style="--i:${n}">${letter}</span>`;
  });
}
