/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/garage.css":
/*!*******************************!*\
  !*** ./src/styles/garage.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://async-race/./src/styles/garage.css?");

/***/ }),

/***/ "./src/SETTINGS.js":
/*!*************************!*\
  !*** ./src/SETTINGS.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CARS_PER_PAGE\": () => (/* binding */ CARS_PER_PAGE),\n/* harmony export */   \"SERVER\": () => (/* binding */ SERVER)\n/* harmony export */ });\nconst SERVER = 'http://192.168.0.55:3000';\nconst CARS_PER_PAGE = 7;\n\n\n//# sourceURL=webpack://async-race/./src/SETTINGS.js?");

/***/ }),

/***/ "./src/components/car.js":
/*!*******************************!*\
  !*** ./src/components/car.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ car)\n/* harmony export */ });\nSVGSVGElement.prototype.setAttributes = function setAll(attrib) {\n  Object.keys(attrib).forEach((attribute) => {\n    this.setAttribute(attribute, attrib[attribute]);\n  });\n};\n\nfunction car(color = 'white') {\n  const carSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  carSVG.setAttributes({ width: '120', height: '80', viewBox: '0 50 260 120' });\n  carSVG.innerHTML = `<defs>\n  // </defs>\n  // <g style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;\" transform=\"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)\" >\n  // <path d=\"M 40.756 42.489 h -1.96 c -0.82 0 -1.484 -0.664 -1.484 -1.484 s 0.664 -1.484 1.484 -1.484 h 1.96 c 0.82 0 1.484 0.664 1.484 1.484 S 41.575 42.489 40.756 42.489 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n  // <path d=\"M 89.985 44.526 c -0.919 -6.254 -12.283 -9.606 -22.7 -9.646 c -15.461 -11.31 -34.615 -11.762 -56.938 -1.342 L 3.621 34.66 C 1.523 35.009 0 36.807 0 38.934 v 10.024 c 0 1.039 0.374 2.044 1.051 2.829 l 2.335 2.708 c 0.824 0.956 2.02 1.504 3.282 1.504 h 2.184 c 0.862 4.542 4.855 7.989 9.644 7.989 c 4.79 0 8.783 -3.447 9.645 -7.989 h 36.341 c 0.862 4.542 4.855 7.989 9.645 7.989 s 8.783 -3.447 9.645 -7.989 h 1.894 c 2.389 0 4.334 -1.944 4.334 -4.334 v -6.924 L 89.985 44.526 z M 85.717 42.746 h -1.323 l -0.858 -1.507 C 84.404 41.712 85.149 42.215 85.717 42.746 z M 61.921 34.881 H 31.404 l -2.397 -4.702 C 41.366 27.526 52.252 29.093 61.921 34.881 z M 18.497 61.021 c -3.78 0 -6.855 -3.075 -6.855 -6.854 c 0 -3.78 3.075 -6.855 6.855 -6.855 c 3.78 0 6.855 3.075 6.855 6.855 C 25.352 57.946 22.277 61.021 18.497 61.021 z M 74.128 61.021 c -3.78 0 -6.855 -3.075 -6.855 -6.854 c 0 -3.78 3.075 -6.855 6.855 -6.855 s 6.855 3.075 6.855 6.855 C 80.983 57.946 77.908 61.021 74.128 61.021 z M 85.666 53.032 h -1.787 c -0.565 -4.883 -4.719 -8.688 -9.751 -8.688 s -9.186 3.805 -9.751 8.688 H 28.248 c -0.565 -4.883 -4.719 -8.688 -9.751 -8.688 c -5.032 0 -9.186 3.805 -9.751 8.688 H 6.668 c -0.398 0 -0.775 -0.173 -1.035 -0.474 l -2.335 -2.709 c -0.213 -0.247 -0.331 -0.563 -0.331 -0.89 v -6.469 h 1.619 c 0.82 0 1.484 -0.664 1.484 -1.484 s -0.664 -1.484 -1.484 -1.484 H 2.967 v -0.588 c 0 -0.671 0.48 -1.238 1.142 -1.348 l 7.128 -1.188 l 0.185 -0.087 c 5.087 -2.387 9.954 -4.187 14.619 -5.417 l 3.122 6.125 l 5.664 11.628 c 0.257 0.527 0.785 0.834 1.335 0.834 c 0.218 0 0.439 -0.048 0.649 -0.15 c 0.737 -0.359 1.043 -1.247 0.684 -1.984 l -4.628 -9.499 h 33.437 l 0.004 0.003 l 0.498 -0.003 c 4.47 -0.04 8.798 0.582 12.301 1.616 l 3.134 5.5 c 0.265 0.463 0.756 0.749 1.289 0.749 h 3.502 v 5.952 C 87.033 52.419 86.42 53.032 85.666 53.032 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${color}; fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n  // <path d=\"M 74.128 49.449 c -2.602 0 -4.718 2.116 -4.718 4.718 c 0 2.601 2.116 4.717 4.718 4.717 s 4.718 -2.116 4.718 -4.717 C 78.846 51.565 76.729 49.449 74.128 49.449 z M 74.128 55.917 c -0.966 0 -1.751 -0.785 -1.751 -1.75 c 0 -0.966 0.785 -1.751 1.751 -1.751 s 1.751 0.785 1.751 1.751 C 75.879 55.132 75.093 55.917 74.128 55.917 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: yellow; fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n  // <path d=\"M 18.497 49.449 c -2.601 0 -4.718 2.116 -4.718 4.718 c 0 2.601 2.116 4.717 4.718 4.717 s 4.718 -2.116 4.718 -4.717 C 23.215 51.565 21.098 49.449 18.497 49.449 z M 18.497 55.917 c -0.965 0 -1.751 -0.785 -1.751 -1.75 c 0 -0.966 0.785 -1.751 1.751 -1.751 c 0.965 0 1.751 0.785 1.751 1.751 C 20.248 55.132 19.462 55.917 18.497 55.917 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: yellow; fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" />\n  </g>`;\n  carSVG.classList.add('car-svg');\n  return carSVG;\n}\n\n\n//# sourceURL=webpack://async-race/./src/components/car.js?");

/***/ }),

/***/ "./src/components/carContainer.js":
/*!****************************************!*\
  !*** ./src/components/carContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ carContainer)\n/* harmony export */ });\n/* harmony import */ var _services_carDrive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/carDrive */ \"./src/services/carDrive.js\");\n/* harmony import */ var _services_carHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/carHandlers */ \"./src/services/carHandlers.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car */ \"./src/components/car.js\");\n\n\n\n\nfunction carContainer(name, color, id) {\n  const selBtn = document.createElement('button');\n  selBtn.innerText = 'Select car';\n  const removeBtn = document.createElement('button');\n  removeBtn.innerText = 'Remove car';\n  const carName = document.createElement('span');\n  carName.innerText = name;\n  const rootCtn = document.createElement('div');\n  rootCtn.classList.add('car-container');\n  rootCtn.id = `car#${id}`;\n  const goBtn = document.createElement('button');\n  const stopBtn = document.createElement('button');\n  const car = (0,_car__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(color);\n  [selBtn, removeBtn, goBtn, stopBtn, carName, car].forEach((el) => {\n    rootCtn.appendChild(el);\n  });\n  const animCar = new _services_carDrive__WEBPACK_IMPORTED_MODULE_0__.AnimatedCar(id, car);\n  goBtn.className = 'go-btn button';\n  goBtn.onclick = () => (0,_services_carDrive__WEBPACK_IMPORTED_MODULE_0__.startHandler)(id, animCar);\n  goBtn.innerText = '\\u25B6';\n  stopBtn.className = 'stop-btn button';\n  stopBtn.innerText = '\\u25FC';\n  stopBtn.onclick = () => animCar.stop();\n  const updateForm = document.forms.update;\n  selBtn.onclick = () => {\n    (0,_services_carHandlers__WEBPACK_IMPORTED_MODULE_1__.handleSelect)(name, color, id, updateForm);\n  };\n  removeBtn.onclick = () => {\n    (0,_services_carHandlers__WEBPACK_IMPORTED_MODULE_1__.handleRemove)(id, carContainer);\n  };\n  return rootCtn;\n}\n\n\n//# sourceURL=webpack://async-race/./src/components/carContainer.js?");

/***/ }),

/***/ "./src/components/garage.js":
/*!**********************************!*\
  !*** ./src/components/garage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleGarage)\n/* harmony export */ });\n/* harmony import */ var _styles_garage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/garage.css */ \"./src/styles/garage.css\");\n/* harmony import */ var _services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/garageHandlers */ \"./src/services/garageHandlers.js\");\n/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage */ \"./src/services/storage.js\");\n\n\n\n\nfunction handleGarage() {\n  (0,_services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__.handlePage)();\n  const createForm = document.forms.create;\n  const updateForm = document.forms.update;\n  const container = document.querySelector(\".cars-container\");\n  createForm.addEventListener(\"submit\", function handler(ev) {\n    (0,_services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__.handleCreate)(ev, this, container);\n  });\n  updateForm.addEventListener(\"submit\", function updateHandler(ev) {\n    (0,_services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__.handleUpdate)(ev, this, container);\n  });\n  const generateBtn = document.getElementById(\"generate\");\n  generateBtn.onclick = () => {\n    (0,_services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__.handleGenerate)();\n  };\n  const paginContainer = document.getElementById(\"pagination\");\n  const prevBtn = paginContainer.querySelector(\"button:first-of-type\");\n  const nextBtn = paginContainer.querySelector(\"button:last-of-type\");\n  nextBtn.onclick = () => {\n    prevBtn.disabled = false;\n    (0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.setPage)((0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.getPage)() + 1);\n    (0,_services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__.handlePage)();\n  };\n  prevBtn.onclick = function handler() {\n    const page = (0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.getPage)();\n    // if (page === 2) {\n    //   this.disabled = true;\n    // }\n    this.toggleAttribute(\"disabled\", page === 2);\n    nextBtn.disabled = false;\n    (0,_services_storage__WEBPACK_IMPORTED_MODULE_2__.setPage)(page - 1);\n    (0,_services_garageHandlers__WEBPACK_IMPORTED_MODULE_1__.handlePage)();\n  };\n}\n\n\n//# sourceURL=webpack://async-race/./src/components/garage.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header({ garageRoute, winnersRoute }) {\n  const winnersBtn = document.getElementById('to-winners');\n  const garageBtn = document.getElementById('to-garage');\n  window.addEventListener('hashchange', () => {\n    winnersBtn.disabled = winnersRoute.isActive();\n    garageBtn.disabled = garageRoute.isActive();\n  });\n}\n\n\n//# sourceURL=webpack://async-race/./src/components/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"/\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _router_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/route */ \"./src/router/route.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/router */ \"./src/router/router.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_garage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/garage */ \"./src/components/garage.js\");\n\n\n\n\n\nconst garageRoute = new _router_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('garage', 'garage.html', _components_garage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], true);\nconst winnersRoute = new _router_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('winners', 'winners.html');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _router_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([garageRoute, winnersRoute]));\nfetch(`${__dirname}src/views/header.html`)\n  .then((resp) => resp.text())\n  .then((html) => {\n    const header = document.createElement('header');\n    header.innerHTML = html;\n    document.body.insertBefore(header, document.getElementById('root'));\n    (0,_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ garageRoute, winnersRoute });\n  });\n\n\n//# sourceURL=webpack://async-race/./src/index.js?");

/***/ }),

/***/ "./src/router/route.js":
/*!*****************************!*\
  !*** ./src/router/route.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Route)\n/* harmony export */ });\nclass Route {\n  constructor(name, element, script, index) {\n    this.name = name;\n    this.element = element;\n    this.index = index;\n    this.script = script;\n  }\n\n  isActive() {\n    const { hash } = window.location;\n    return hash.replace('#', '') === this.name;\n  }\n}\n\n\n//# sourceURL=webpack://async-race/./src/router/route.js?");

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"/\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\nfunction goTo(route, script) {\n  const rootElem = document.getElementById('root');\n  fetch(`${__dirname}src/views/${route}`)\n    .then((resp) => resp.text())\n    .then((html) => {\n      rootElem.innerHTML = html;\n      if (script) {\n        script();\n      }\n    });\n}\n\nclass Router {\n  constructor(routes) {\n    this.routes = routes;\n    this.init();\n  }\n\n  init() {\n    (function start(router) {\n      window.addEventListener('hashchange', router.hasChanged.bind(router));\n    }(this));\n    this.hasChanged();\n  }\n\n  hasChanged() {\n    const { hash } = window.location;\n    if (hash.length) {\n      for (let i = 0; i < this.routes.length; i += 1) {\n        if (this.routes[i].isActive()) {\n          goTo(this.routes[i].element, this.routes[i].script);\n        }\n      }\n    } else {\n      for (let i = 0; i < this.routes.length; i += 1) {\n        if (this.routes[i].index) {\n          goTo(this.routes[i].element, this.routes[i].script);\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://async-race/./src/router/router.js?");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCar\": () => (/* binding */ addCar),\n/* harmony export */   \"fetchCars\": () => (/* binding */ fetchCars),\n/* harmony export */   \"removeCar\": () => (/* binding */ removeCar),\n/* harmony export */   \"setStatus\": () => (/* binding */ setStatus),\n/* harmony export */   \"updateCar\": () => (/* binding */ updateCar)\n/* harmony export */ });\n/* harmony import */ var _SETTINGS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SETTINGS */ \"./src/SETTINGS.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/services/storage.js\");\n\n\n\nconst headers = new Headers({\n  'Content-Type': 'application/json',\n});\nconst request = (url, options) => fetch(url, options).then((resp) => {\n  if (!resp.ok) {\n    throw Error(resp.status + resp.statusText);\n  }\n  if (url.pathname === '/garage' && !options?.method) {\n    document.getElementById('total').innerText = resp.headers.get('X-total-Count');\n  }\n  return resp.json();\n});\n\nconst fetchCars = () => {\n  const garageURL = new URL('/garage', _SETTINGS__WEBPACK_IMPORTED_MODULE_0__.SERVER);\n  const queryParam = new URLSearchParams({\n    _page: (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getPage)(),\n    _limit: _SETTINGS__WEBPACK_IMPORTED_MODULE_0__.CARS_PER_PAGE,\n  });\n  garageURL.search = queryParam.toString();\n  return request(garageURL);\n};\n\nconst addCar = (name = 'new car', color = 'red') => {\n  const garageURL = new URL('/garage', _SETTINGS__WEBPACK_IMPORTED_MODULE_0__.SERVER);\n  return request(garageURL, {\n    headers,\n    method: 'POST',\n    body: JSON.stringify({ name, color }),\n  });\n};\n\nconst removeCar = (id) => {\n  const garageURL = new URL('/garage', _SETTINGS__WEBPACK_IMPORTED_MODULE_0__.SERVER);\n  garageURL.pathname = `${garageURL.pathname}/${id}`;\n  return request(garageURL, {\n    method: 'DELETE',\n  });\n};\n\nconst updateCar = (id, name, color) => {\n  const garageURL = new URL('/garage', _SETTINGS__WEBPACK_IMPORTED_MODULE_0__.SERVER);\n  garageURL.pathname = `${garageURL.pathname}/${id}`;\n  return request(garageURL, {\n    headers,\n    method: 'PUT',\n    body: JSON.stringify({ name, color }),\n  });\n};\nconst setStatus = (id, status) => {\n  const engineURL = new URL('/engine', _SETTINGS__WEBPACK_IMPORTED_MODULE_0__.SERVER);\n  const queryParam = new URLSearchParams({\n    id,\n    status,\n  });\n  engineURL.search = queryParam.toString();\n  return request(engineURL, {\n    method: 'PATCH',\n  });\n};\n\n\n//# sourceURL=webpack://async-race/./src/services/api.js?");

/***/ }),

/***/ "./src/services/carDrive.js":
/*!**********************************!*\
  !*** ./src/services/carDrive.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimatedCar\": () => (/* binding */ AnimatedCar),\n/* harmony export */   \"startHandler\": () => (/* binding */ startHandler)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.js\");\n\n\nclass AnimatedCar {\n  constructor(id, car) {\n    this.id = id;\n    this.interval = null;\n    this.pos = 0;\n    this.car = car;\n  }\n\n  move() {\n    if (this.pos >= 90) {\n      window.clearInterval(this.interval);\n    } else {\n      this.car.style.left = `${this.pos}%`;\n      this.pos += 0.75;\n    }\n  }\n\n  start() {\n    this.move();\n    const distance = 5000;\n    this.interval = window.setInterval(\n      () => this.move(),\n      distance / this.velocity,\n    );\n  }\n\n  damage() {\n    window.clearInterval(this.interval);\n  }\n\n  stop() {\n    this.damage();\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.setStatus)(this.id, 'stopped').then(() => {\n      this.pos = 0;\n      this.car.style.left = 0;\n    });\n  }\n}\n\nconst startHandler = (id, _animCar) => {\n  (0,_api__WEBPACK_IMPORTED_MODULE_0__.setStatus)(id, 'started').then((data) => {\n    const animCar = _animCar;\n    animCar.velocity = data.velocity;\n    animCar.start();\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.setStatus)(id, 'drive')\n      .then(() => {})\n      .catch(() => {\n        animCar.damage();\n      });\n  });\n};\n\n\n//# sourceURL=webpack://async-race/./src/services/carDrive.js?");

/***/ }),

/***/ "./src/services/carHandlers.js":
/*!*************************************!*\
  !*** ./src/services/carHandlers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleRemove\": () => (/* binding */ handleRemove),\n/* harmony export */   \"handleSelect\": () => (/* binding */ handleSelect)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.js\");\n\n\nconst handleSelect = (name, color, id, form) => {\n  const {\n    id: fId, name: fName, color: fColor, button: fBtn,\n  } = form;\n  fName.disabled = false;\n  fColor.disabled = false;\n  fBtn.disabled = false;\n  fId.value = id;\n  fName.value = name;\n  fColor.value = color;\n};\n\nconst handleRemove = (_id, carWrapper) => {\n  const container = document.querySelector('.cars-container');\n  (0,_api__WEBPACK_IMPORTED_MODULE_0__.removeCar)(_id).then(() => {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchCars)().then((data) => {\n      container.innerHTML = null;\n      data.forEach((eachCar) => {\n        const { name, color, id } = eachCar;\n        container.appendChild(carWrapper(name, color, id));\n      });\n    });\n    const updateForm = document.forms.update;\n    updateForm.reset();\n    updateForm.button.disabled = true;\n    updateForm.name.disabled = true;\n    updateForm.color.disabled = true;\n  });\n};\n\n\n//# sourceURL=webpack://async-race/./src/services/carHandlers.js?");

/***/ }),

/***/ "./src/services/garageHandlers.js":
/*!****************************************!*\
  !*** ./src/services/garageHandlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchToView\": () => (/* binding */ fetchToView),\n/* harmony export */   \"handleCreate\": () => (/* binding */ handleCreate),\n/* harmony export */   \"handleGenerate\": () => (/* binding */ handleGenerate),\n/* harmony export */   \"handlePage\": () => (/* binding */ handlePage),\n/* harmony export */   \"handleUpdate\": () => (/* binding */ handleUpdate)\n/* harmony export */ });\n/* harmony import */ var _components_carContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/carContainer */ \"./src/components/carContainer.js\");\n/* harmony import */ var _SETTINGS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SETTINGS */ \"./src/SETTINGS.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/services/api.js\");\n/* harmony import */ var _generateCars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateCars */ \"./src/services/generateCars.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ \"./src/services/storage.js\");\n\n\n\n\n\n\nconst fetchToView = () => {\n  const container = document.querySelector('.cars-container');\n  _api__WEBPACK_IMPORTED_MODULE_2__.fetchCars().then((data) => {\n    container.innerHTML = null;\n    data.forEach((car) => {\n      const { name, color, id } = car;\n      container.appendChild((0,_components_carContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, color, id));\n    });\n  });\n};\nconst handleCreate = (ev, form, container) => {\n  ev.preventDefault();\n  _api__WEBPACK_IMPORTED_MODULE_2__.addCar(form.name.value, form.color.value).then((car) => {\n    document.getElementById('total').innerText = parseInt(document.getElementById('total').innerText, 10) + 1;\n    if (container.children.length < _SETTINGS__WEBPACK_IMPORTED_MODULE_1__.CARS_PER_PAGE) {\n      const { name, color, id } = car;\n      container.appendChild((0,_components_carContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, color, id));\n    }\n  });\n};\nconst handleUpdate = (ev, form, container) => {\n  ev.preventDefault();\n  const {\n    id: formId, name: formName, color: formColor, button,\n  } = form;\n  _api__WEBPACK_IMPORTED_MODULE_2__.updateCar(formId.value, formName.value, formColor.value).then((data) => {\n    const { name, color, id } = data;\n    container.replaceChild(\n      (0,_components_carContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, color, id),\n      document.getElementById(`car#${id}`),\n    );\n    form.reset();\n    button.disabled = true;\n  });\n};\nconst handleGenerate = () => {\n  (0,_generateCars__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().then(() => {\n    fetchToView();\n  });\n};\nconst handlePage = () => {\n  document.getElementById('pagination').querySelector('span').innerText = (0,_storage__WEBPACK_IMPORTED_MODULE_4__.getPage)();\n  fetchToView();\n};\n\n\n//# sourceURL=webpack://async-race/./src/services/garageHandlers.js?");

/***/ }),

/***/ "./src/services/generateCars.js":
/*!**************************************!*\
  !*** ./src/services/generateCars.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generate)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.js\");\n\n\nconst producer = [\n  'Ford',\n  'Aston Martin',\n  'BMW',\n  'Marcedes',\n  'Toyota',\n  'Chevrolet',\n  'Bentley',\n  'Porsche',\n  'Ferrari',\n  'Lamborghini',\n];\nconst model = [\n  'Mustang',\n  '911',\n  'DB1',\n  'M8',\n  'GLE',\n  'Supra',\n  'Camaro',\n  'F40',\n  'Aventador',\n  'Continental',\n];\nclass Car {\n  constructor() {\n    this.name = `${producer[Math.round(Math.random() * 9)]} ${\n      model[Math.round(Math.random() * 9)]\n    }`;\n    this.color = `#${Math.round(Math.random() * 16777215).toString(16)}`;\n  }\n}\nfunction generate(items = 100) {\n  const arr = [];\n  for (let i = 0; i < items; i += 1) {\n    const { name, color } = new Car();\n    arr.push({ name, color });\n  }\n  arr.map((car) => (0,_api__WEBPACK_IMPORTED_MODULE_0__.addCar)(car.name, car.color).then(() => {}));\n  return Promise.all(arr);\n}\n\n\n//# sourceURL=webpack://async-race/./src/services/generateCars.js?");

/***/ }),

/***/ "./src/services/storage.js":
/*!*********************************!*\
  !*** ./src/services/storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPage\": () => (/* binding */ getPage),\n/* harmony export */   \"getTotal\": () => (/* binding */ getTotal),\n/* harmony export */   \"setPage\": () => (/* binding */ setPage)\n/* harmony export */ });\nconst getPage = () => {\n  const storage = window.sessionStorage.getItem('garage-page');\n  return storage ? parseInt(storage, 10) : 1;\n};\nconst setPage = (page) => {\n  window.sessionStorage.setItem('garage-page', page);\n};\nconst getTotal = () => {\n  const storage = window.sessionStorage.getItem('garage-total');\n  return storage || 0;\n};\n\n\n//# sourceURL=webpack://async-race/./src/services/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;