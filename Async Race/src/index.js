import Route from './router/route';
import Router from './router/router';
import renderHeader from './components/header/header';
import handleGarage from './components/garage/garage';
import handleWinnersPage from './components/winners/winners';
import footer from './components/footer/footer';
import './root.css';

const garageRoute = new Route('garage', handleGarage, true);
const winnersRoute = new Route('winners', handleWinnersPage);
window.sessionStorage.removeItem('garage-page');
export default new Router([garageRoute, winnersRoute]);
const header = renderHeader({ garageRoute, winnersRoute });
document.body.insertBefore(header, document.getElementById('root'));
document.body.appendChild(footer);
