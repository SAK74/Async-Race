import html from '../../views/footer.html';
import './footer.css';
import rsLogo from './rs-logo.png';
import ghLogo from './gh-logo.png';

const footer = document.createElement('footer');
footer.innerHTML = html;
footer.querySelector('img[alt=logo]').src = rsLogo;
footer.querySelector('img[alt=gh-logo]').src = ghLogo;
export default footer;
