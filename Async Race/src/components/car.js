SVGSVGElement.prototype.setAttributes = function setAll(attrib) {
  Object.keys(attrib).forEach((attribute) => {
    this.setAttribute(attribute, attrib[attribute]);
  });
};

export default function car(color = 'white', size = 'normal') {
  const carSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  carSVG.setAttributes({
    width: `${size === 'normal' ? '120' : '60'}`,
    height: '80',
    viewBox: '0 50 260 120',
  });
  carSVG.innerHTML = `<defs>
  // </defs>
  // <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
  // <path d="M 40.756 42.489 h -1.96 c -0.82 0 -1.484 -0.664 -1.484 -1.484 s 0.664 -1.484 1.484 -1.484 h 1.96 c 0.82 0 1.484 0.664 1.484 1.484 S 41.575 42.489 40.756 42.489 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  // <path d="M 89.985 44.526 c -0.919 -6.254 -12.283 -9.606 -22.7 -9.646 c -15.461 -11.31 -34.615 -11.762 -56.938 -1.342 L 3.621 34.66 C 1.523 35.009 0 36.807 0 38.934 v 10.024 c 0 1.039 0.374 2.044 1.051 2.829 l 2.335 2.708 c 0.824 0.956 2.02 1.504 3.282 1.504 h 2.184 c 0.862 4.542 4.855 7.989 9.644 7.989 c 4.79 0 8.783 -3.447 9.645 -7.989 h 36.341 c 0.862 4.542 4.855 7.989 9.645 7.989 s 8.783 -3.447 9.645 -7.989 h 1.894 c 2.389 0 4.334 -1.944 4.334 -4.334 v -6.924 L 89.985 44.526 z M 85.717 42.746 h -1.323 l -0.858 -1.507 C 84.404 41.712 85.149 42.215 85.717 42.746 z M 61.921 34.881 H 31.404 l -2.397 -4.702 C 41.366 27.526 52.252 29.093 61.921 34.881 z M 18.497 61.021 c -3.78 0 -6.855 -3.075 -6.855 -6.854 c 0 -3.78 3.075 -6.855 6.855 -6.855 c 3.78 0 6.855 3.075 6.855 6.855 C 25.352 57.946 22.277 61.021 18.497 61.021 z M 74.128 61.021 c -3.78 0 -6.855 -3.075 -6.855 -6.854 c 0 -3.78 3.075 -6.855 6.855 -6.855 s 6.855 3.075 6.855 6.855 C 80.983 57.946 77.908 61.021 74.128 61.021 z M 85.666 53.032 h -1.787 c -0.565 -4.883 -4.719 -8.688 -9.751 -8.688 s -9.186 3.805 -9.751 8.688 H 28.248 c -0.565 -4.883 -4.719 -8.688 -9.751 -8.688 c -5.032 0 -9.186 3.805 -9.751 8.688 H 6.668 c -0.398 0 -0.775 -0.173 -1.035 -0.474 l -2.335 -2.709 c -0.213 -0.247 -0.331 -0.563 -0.331 -0.89 v -6.469 h 1.619 c 0.82 0 1.484 -0.664 1.484 -1.484 s -0.664 -1.484 -1.484 -1.484 H 2.967 v -0.588 c 0 -0.671 0.48 -1.238 1.142 -1.348 l 7.128 -1.188 l 0.185 -0.087 c 5.087 -2.387 9.954 -4.187 14.619 -5.417 l 3.122 6.125 l 5.664 11.628 c 0.257 0.527 0.785 0.834 1.335 0.834 c 0.218 0 0.439 -0.048 0.649 -0.15 c 0.737 -0.359 1.043 -1.247 0.684 -1.984 l -4.628 -9.499 h 33.437 l 0.004 0.003 l 0.498 -0.003 c 4.47 -0.04 8.798 0.582 12.301 1.616 l 3.134 5.5 c 0.265 0.463 0.756 0.749 1.289 0.749 h 3.502 v 5.952 C 87.033 52.419 86.42 53.032 85.666 53.032 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  // <path d="M 74.128 49.449 c -2.602 0 -4.718 2.116 -4.718 4.718 c 0 2.601 2.116 4.717 4.718 4.717 s 4.718 -2.116 4.718 -4.717 C 78.846 51.565 76.729 49.449 74.128 49.449 z M 74.128 55.917 c -0.966 0 -1.751 -0.785 -1.751 -1.75 c 0 -0.966 0.785 -1.751 1.751 -1.751 s 1.751 0.785 1.751 1.751 C 75.879 55.132 75.093 55.917 74.128 55.917 z" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: yellow; stroke: black; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  // <path d="M 18.497 49.449 c -2.601 0 -4.718 2.116 -4.718 4.718 c 0 2.601 2.116 4.717 4.718 4.717 s 4.718 -2.116 4.718 -4.717 C 23.215 51.565 21.098 49.449 18.497 49.449 z M 18.497 55.917 c -0.965 0 -1.751 -0.785 -1.751 -1.75 c 0 -0.966 0.785 -1.751 1.751 -1.751 c 0.965 0 1.751 0.785 1.751 1.751 C 20.248 55.132 19.462 55.917 18.497 55.917 z" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: yellow; stroke: black; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
  </g>`;
  carSVG.classList.add('car-svg');
  return carSVG;
}
