import content from './content.html';

SVGSVGElement.prototype.setAttributes = function setAll(attrib) {
  Object.keys(attrib).forEach((attribute) => {
    this.setAttribute(attribute, attrib[attribute]);
  });
};

export default function car(color, size = 'normal') {
  const carSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  carSVG.setAttributes({
    viewBox: '0 0 1000 1000',
    width: `${size === 'normal' ? '100' : '60'}`,
  });
  carSVG.innerHTML = content;
  carSVG.querySelector('path:first-of-type').style.fill = color;
  return carSVG;
}
