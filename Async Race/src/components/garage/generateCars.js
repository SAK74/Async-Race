import { addCar } from '../../services/api/garage';

const producer = [
  'Ford',
  'Aston Martin',
  'BMW',
  'Mercedes',
  'Toyota',
  'Chevrolet',
  'Bentley',
  'Porsche',
  'Ferrari',
  'Lamborghini',
];
const model = [
  'Mustang',
  '911',
  'DB1',
  'M8',
  'GLE',
  'Supra',
  'Camaro',
  'F40',
  'Aventador',
  'Continental',
];
class Car {
  constructor() {
    this.name = `${producer[Math.round(Math.random() * 9)]} ${
      model[Math.round(Math.random() * 9)]
    }`;
    this.color = `#${Math.round(Math.random() * 16777215).toString(16)}`;
  }
}
export default function generate(items = 100) {
  const arr = [];
  for (let i = 0; i < items; i += 1) {
    const { name, color } = new Car();
    arr.push({ name, color });
  }
  arr.map((car) => addCar(car.name, car.color).then(() => {}));
  return Promise.all(arr);
}
