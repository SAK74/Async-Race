import Route from './router/route';
import Router from './router/router';
import headerScript from './components/header';
import handleGarage from './components/garage';
import './styles/root.css';

const garageRoute = new Route('garage', 'garage.html', handleGarage, true);
const winnersRoute = new Route('winners', 'winners.html');
export default new Router([garageRoute, winnersRoute]);
fetch(`${__dirname}src/views/header.html`)
  .then((resp) => resp.text())
  .then((html) => {
    const header = document.createElement('header');
    header.innerHTML = html;
    document.body.insertBefore(header, document.getElementById('root'));
    headerScript({ garageRoute, winnersRoute });
  });
