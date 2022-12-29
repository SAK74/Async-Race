import car from './car';

export default function tabRow(nr, color, name, wins, time) {
  const content = `
    <th>${nr}</th>
    <td class="car-icon"></td>
    <td>${name}</td>
    <td>${wins}</td>
    <td>${time}</td>
  `;
  const row = document.createElement('tr');
  row.innerHTML = content;
  row.querySelector('.car-icon').appendChild(car(color, 'small'));
  return row;
}
