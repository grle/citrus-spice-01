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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n\n  const cont = document.createElement(\"div\");\n  cont.setAttribute(\"id\", \"cont\");\n  cont.innerHTML = `<div class=\"width\">\n    <h1>Contact Us.</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n  </div>\n  <div class=\"width center-text space-bottom\">\n    <h1>Let's Talk!</h1>\n    <p>If you would like to work with us, contact us at\n    <a href=\"\">citrusandspice@gmail.com</a>\n    </p>\n  </div>`;\n\n  const main = document.getElementById(\"main\");\n  main.innerHTML = ``;\n  main.appendChild(cont);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://citrus-spice/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n\n  const home = document.createElement(\"div\");\n  home.setAttribute(\"id\", \"home\");\n  home.innerHTML = `<div class=\"width\">\n    <h1>Welcome!</h1>\n    <p>We are a website design studio dedicated to creating beautiful websites that are simple and easy-to-use for startups, private practices, and small businesses.</p>\n    </div>\n\n    <div class=\"width\">\n    <h1>Our Process.</h1>\n    <p>We are a website design studio dedicated to creating beautiful websites that are simple and easy-to-use for startups, private practices, and small businesses.</p>\n    </div>\n\n    <div class=\"width center-text space-bottom\">\n    <h1>Let's Talk!</h1>\n    <p>If you would like to work with us, contact us at\n      <a href=\"\">citrusandspice@gmail.com</a>\n    </p>\n  </div>`;\n\n  const main = document.getElementById(\"main\");\n  main.innerHTML = ``;\n  main.appendChild(home);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://citrus-spice/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://citrus-spice/./src/index.js?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadService() {\n\n  const service = document.createElement(\"div\");\n  service.setAttribute(\"id\", \"service\");\n  service.innerHTML = `<div class=\"width\">\n    <h1>What We Do.</h1>\n    <h2>Digital Strategy</h2>\n    <p>a</p>\n    <h2>UI/UX Design</h2>\n    <p>a</p>\n    <h2>Content</h2>\n    <p>a</p>\n    <h2>Website</h2>\n    <p>a</p>\n    <h2>Branding</h2>\n    <p>a</p>\n    \n    <div class=\"width center-text space-bottom\">\n      <h1>Let's Talk!</h1>\n      <p>If you would like to work with us, contact us at\n        <a href=\"\">citrusandspice@gmail.com</a>\n      </p>\n    </div>`;\n\n  const main = document.getElementById(\"main\");\n  main.innerHTML = ``;\n  main.appendChild(service);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadService);\n\n//# sourceURL=webpack://citrus-spice/./src/service.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ \"./src/service.js\");\n/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work */ \"./src/work.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"div\");\n\n    const img = document.createElement(\"img\");\n    img.classList.add(\"header-img\");\n    img.src = \"img/header.png\";\n    img.alt = \"Citrus & Spice\";\n    header.appendChild(img);\n\n    const nav = document.createElement(\"nav\");\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.classList.add(\"button-nav\");\n    homeButton.textContent = \"HOME\";\n    homeButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const serviceButton = document.createElement(\"button\");\n    serviceButton.classList.add(\"button-nav\");\n    serviceButton.textContent = \"SERVICE\";\n    serviceButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(serviceButton);\n        (0,_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const workButton = document.createElement(\"button\");\n    workButton.classList.add(\"button-nav\");\n    workButton.textContent = \"WORK\";\n    workButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(workButton);\n        (0,_work__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    const contactButton = document.createElement(\"button\");\n    contactButton.classList.add(\"button-nav\");\n    contactButton.textContent = \"CONTACT\";\n    contactButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n\n    setActiveButton(homeButton);\n    nav.appendChild(homeButton);\n    nav.appendChild(serviceButton);\n    nav.appendChild(workButton);\n    nav.appendChild(contactButton);\n\n    header.appendChild(nav);\n    return header;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n\n    button.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    // main.classList.add(\"main\");\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyright = document.createElement(\"div\");\n    copyright.textContent = `${new Date().getFullYear()} © Citrus & Spice`;\n\n    const signature = document.createElement(\"div\");\n    signature.innerHTML = `Website by <a target=\"_blank\" href=\"https://graceavocado.com/\">\n    graceavocado</a>`;\n\n    footer.appendChild(copyright);\n    footer.appendChild(signature);\n\n    return footer;\n}\n\nfunction initializeWeb() {\n    const web = document.getElementById(\"content\");\n\n    web.appendChild(createHeader());\n    web.appendChild(createMain());\n    web.appendChild(createFooter());\n\n    // setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWeb);\n\n//# sourceURL=webpack://citrus-spice/./src/webpage.js?");

/***/ }),

/***/ "./src/work.js":
/*!*********************!*\
  !*** ./src/work.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadWork() {\n\n  const work = document.createElement(\"div\");\n  work.setAttribute(\"id\", \"work\");\n  work.innerHTML = `<div class=\"width\">\n    <h1>Our Work.</h1>\n    <p>Here are some of our past works with previous clients, with our customer’s satisfaction guaranteed. \n      You can get a free quote and consultation if you reach out at \n      <a href=\"\">citrusandspice@gmail.com</a>\n    </p>\n    <h3>—\n      <a href=\"https://pelzelsauto.com\" target=\"_blank\">Pelzel's Auto Repair</a>\n    </h3>\n    <h3>—\n      <a href=\"https://grle.github.io/dhgm/\" target=\"_blank\">Dunamis Harvest Global Ministry</a>\n    </h3>\n    <h3>—\n      <a href=\"https://www.polariseye.com/\" target=\"_blank\">Polaris Eye & Laser</a>\n    </h3>\n    </div>\n\n    <div class=\"width center-text space-bottom\">\n      <h1>Let's Talk!</h1>\n      <p>If you would like to work with us, contact us at\n      <a href=\"\">citrusandspice@gmail.com</a>\n      </p>\n    </div>`;\n\n  const main = document.getElementById(\"main\");\n  main.innerHTML = ``;\n  main.appendChild(work);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWork);\n\n//# sourceURL=webpack://citrus-spice/./src/work.js?");

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