/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ "./src/modules/displayWeather.js");


async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=68c6d26bf9ff4e4b97013316232705&q=${location}`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
    } catch(error) {
        console.log(error);
        return null;
    }
}

/***/ }),

/***/ "./src/modules/displayWeather.js":
/*!***************************************!*\
  !*** ./src/modules/displayWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayWeather(data) {
    console.log(data.current.condition.text);
    switch(data.current.condition.text) {
        case 'Clear':
            document.body.style.background = 'url("clear.jpg") 10% 50%';
            break;
        default:
            break;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cityName: () => (/* binding */ cityName),
/* harmony export */   containerBtn: () => (/* binding */ containerBtn),
/* harmony export */   containerForm: () => (/* binding */ containerForm),
/* harmony export */   country: () => (/* binding */ country),
/* harmony export */   feelsLike: () => (/* binding */ feelsLike),
/* harmony export */   hour: () => (/* binding */ hour),
/* harmony export */   humidity: () => (/* binding */ humidity),
/* harmony export */   temp: () => (/* binding */ temp),
/* harmony export */   tempDescription: () => (/* binding */ tempDescription),
/* harmony export */   tempIcon: () => (/* binding */ tempIcon),
/* harmony export */   userEntry: () => (/* binding */ userEntry),
/* harmony export */   wind: () => (/* binding */ wind)
/* harmony export */ });
const containerForm = document.querySelector('.container-form');
const containerBtn = document.querySelector('#search-btn')
const userEntry = document.querySelector('#search');
const cityName = document.querySelector('.city-name');
const country = document.querySelector('.country');
const hour = document.querySelector('.city-hour');
const temp = document.querySelector('.city-temp');
const tempIcon = document.querySelector('.condition-icon');
const tempDescription = document.querySelector('.condition-description');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api */ "./src/modules/api.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");



let input = 'Buenos Aires'

document.addEventListener('DOMContentLoaded', (0,_modules_api__WEBPACK_IMPORTED_MODULE_0__["default"])(input));

_modules_dom__WEBPACK_IMPORTED_MODULE_1__.containerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    input = _modules_dom__WEBPACK_IMPORTED_MODULE_1__.userEntry.value;
    (0,_modules_api__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
    _modules_dom__WEBPACK_IMPORTED_MODULE_1__.userEntry.value = '';
});

_modules_dom__WEBPACK_IMPORTED_MODULE_1__.containerBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    input = _modules_dom__WEBPACK_IMPORTED_MODULE_1__.userEntry.value;
    (0,_modules_api__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
    _modules_dom__WEBPACK_IMPORTED_MODULE_1__.userEntry.value = '';
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRS9CO0FBQ2Y7QUFDQSx1SEFBdUgsU0FBUyxJQUFJLGFBQWE7QUFDako7QUFDQTtBQUNBLFFBQVEsMkRBQWM7QUFDdEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ3FIOztBQUU1Sjs7QUFFQSw4Q0FBOEMsd0RBQVU7O0FBRXhELHdFQUE4QjtBQUM5QjtBQUNBLFlBQVkseURBQWU7QUFDM0IsSUFBSSx3REFBVTtBQUNkLElBQUkseURBQWU7QUFDbkIsQ0FBQzs7QUFFRCx1RUFBNkI7QUFDN0I7QUFDQSxZQUFZLHlEQUFlO0FBQzNCLElBQUksd0RBQVU7QUFDZCxJQUFJLHlEQUFlO0FBQ25CLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvZGlzcGxheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwMjAyMy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheVdlYXRoZXIgZnJvbSBcIi4vZGlzcGxheVdlYXRoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02OGM2ZDI2YmY5ZmY0ZTRiOTcwMTMzMTYyMzI3MDUmcT0ke2xvY2F0aW9ufWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gICAgc3dpdGNoKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkge1xuICAgICAgICBjYXNlICdDbGVhcic6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwiY2xlYXIuanBnXCIpIDEwJSA1MCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVyOyIsImNvbnN0IGNvbnRhaW5lckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZvcm0nKTtcbmNvbnN0IGNvbnRhaW5lckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJylcbmNvbnN0IHVzZXJFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5Jyk7XG5jb25zdCBob3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaG91cicpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRlbXAnKTtcbmNvbnN0IHRlbXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbi1pY29uJyk7XG5jb25zdCB0ZW1wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uLWRlc2NyaXB0aW9uJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuXG5leHBvcnQge2NvbnRhaW5lckZvcm0sIHVzZXJFbnRyeSwgY29udGFpbmVyQnRuLCBjaXR5TmFtZSwgY291bnRyeSwgaG91ciwgdGVtcCwgdGVtcEljb24sXG4gICAgICAgIHRlbXBEZXNjcmlwdGlvbiwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2FwaVwiO1xuaW1wb3J0IHsgY29udGFpbmVyRm9ybSwgdXNlckVudHJ5LCBjb250YWluZXJCdG4sIGNpdHlOYW1lLCBjb3VudHJ5LCBob3VyLCB0ZW1wLCB0ZW1wSWNvbiwgdGVtcERlc2NyaXB0aW9uLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCB3aW5kIH0gZnJvbSBcIi4vbW9kdWxlcy9kb21cIjtcblxubGV0IGlucHV0ID0gJ0J1ZW5vcyBBaXJlcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGdldFdlYXRoZXIoaW5wdXQpKTtcblxuY29udGFpbmVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbnB1dCA9IHVzZXJFbnRyeS52YWx1ZTtcbiAgICBnZXRXZWF0aGVyKGlucHV0KTtcbiAgICB1c2VyRW50cnkudmFsdWUgPSAnJztcbn0pO1xuXG5jb250YWluZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaW5wdXQgPSB1c2VyRW50cnkudmFsdWU7XG4gICAgZ2V0V2VhdGhlcihpbnB1dCk7XG4gICAgdXNlckVudHJ5LnZhbHVlID0gJyc7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=