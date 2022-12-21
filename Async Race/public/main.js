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

eval("var __dirname = \"/\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _router_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/route */ \"./src/router/route.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/router */ \"./src/router/router.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n\n\n\n\nconst garageRoute = new _router_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"garage\", \"garage.html\", null, true);\nconst winnersRoute = new _router_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"winners\", \"winners.html\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _router_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([garageRoute, winnersRoute]));\nfetch(`${__dirname}src/views/header.html`)\n  .then((resp) => resp.text())\n  .then((html) => {\n    const header = document.createElement(\"header\");\n    header.innerHTML = html;\n    document.body.insertBefore(header, document.getElementById(\"root\"));\n    (0,_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ garageRoute, winnersRoute });\n  });\n\n\n//# sourceURL=webpack://async-race/./src/index.js?");

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