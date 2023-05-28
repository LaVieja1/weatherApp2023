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
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=68c6d26bf9ff4e4b97013316232705&q=${location}`, {mode: 'cors'});
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");


function displayWeather(data) {
    console.log(data.current.condition.text);

    switch(data.current.condition.text) {
        case 'Clear':
            document.body.style.background = 'url("clear.jpg") 10% 50%';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = 'Despejado';
            break;
        case 'Partly cloudy':
            document.body.style.background = 'url("partly-cloudy.png")';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = 'Parcialmente nublado';
            break;
        case 'Cloudy':
            document.body.style.background = 'url("cloudy.jpg")';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = 'Nublado';
            break;
        case 'Overcast':
            document.body.style.background = 'url("cloudy.jpg")';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = 'Nublado';
            break;
        case 'Mist':
            document.body.style.background = 'url("mist.jpg")';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = 'Niebla';
            break;
        case 'Light rain':
            document.body.style.background = 'url("rain.jpg")';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = 'Lluvia';
            break;
        default:
            document.body.style.background = 'url("default.jpg")';
            _dom__WEBPACK_IMPORTED_MODULE_0__.tempDescription.innerHTML = '';
            break;
    }

    _dom__WEBPACK_IMPORTED_MODULE_0__.cityName.innerHTML = `${data.location.name}, ${data.location.country}`;
    _dom__WEBPACK_IMPORTED_MODULE_0__.hour.innerHTML = `${data.location.localtime}`;

    _dom__WEBPACK_IMPORTED_MODULE_0__.temp.innerHTML = `${data.current.temp_c} C° o ${data.current.temp_f} F°`;
    _dom__WEBPACK_IMPORTED_MODULE_0__.tempIcon.src = `https:${data.current.condition.icon}`;

    _dom__WEBPACK_IMPORTED_MODULE_0__.feelsLike.innerHTML = `Se siente como: ${data.current.feelslike_c} C° o ${data.current.feelslike_f} F°`;
    _dom__WEBPACK_IMPORTED_MODULE_0__.humidity.innerHTML = `Nivel de humedad: ${data.current.humidity}%`;

    _dom__WEBPACK_IMPORTED_MODULE_0__.wind.innerHTML = `Viento: ${data.current.wind_kph}km/h`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRS9CO0FBQ2Y7QUFDQSx3SEFBd0gsU0FBUyxJQUFJLGFBQWE7QUFDbEo7QUFDQTtBQUNBLFFBQVEsMkRBQWM7QUFDdEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaMkk7O0FBRTNJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTs7QUFFQSxJQUFJLG9EQUFrQixNQUFNLG1CQUFtQixJQUFJLHNCQUFzQjtBQUN6RSxJQUFJLGdEQUFjLE1BQU0sd0JBQXdCOztBQUVoRCxJQUFJLGdEQUFjLE1BQU0scUJBQXFCLE9BQU8scUJBQXFCO0FBQ3pFLElBQUksOENBQVksWUFBWSw0QkFBNEI7O0FBRXhELElBQUkscURBQW1CLHNCQUFzQiwwQkFBMEIsT0FBTywwQkFBMEI7QUFDeEcsSUFBSSxvREFBa0Isd0JBQXdCLHNCQUFzQjs7QUFFcEUsSUFBSSxnREFBYyxjQUFjLHNCQUFzQjtBQUN0RDs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRDdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ2dDOztBQUV2RTs7QUFFQSw4Q0FBOEMsd0RBQVU7O0FBRXhELHdFQUE4QjtBQUM5QjtBQUNBLFlBQVkseURBQWU7QUFDM0IsSUFBSSx3REFBVTtBQUNkLElBQUkseURBQWU7QUFDbkIsQ0FBQzs7QUFFRCx1RUFBNkI7QUFDN0I7QUFDQSxZQUFZLHlEQUFlO0FBQzNCLElBQUksd0RBQVU7QUFDZCxJQUFJLHlEQUFlO0FBQ25CLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvZGlzcGxheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwMjAyMy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheVdlYXRoZXIgZnJvbSBcIi4vZGlzcGxheVdlYXRoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NjhjNmQyNmJmOWZmNGU0Yjk3MDEzMzE2MjMyNzA1JnE9JHtsb2NhdGlvbn1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbnRhaW5lckZvcm0sIHVzZXJFbnRyeSwgY29udGFpbmVyQnRuLCBjaXR5TmFtZSwgaG91ciwgdGVtcCwgdGVtcEljb24sIHRlbXBEZXNjcmlwdGlvbiwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZCB9IGZyb20gXCIuL2RvbVwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcblxuICAgIHN3aXRjaChkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpIHtcbiAgICAgICAgY2FzZSAnQ2xlYXInOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcImNsZWFyLmpwZ1wiKSAxMCUgNTAlJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnRGVzcGVqYWRvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQYXJ0bHkgY2xvdWR5JzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCJwYXJ0bHktY2xvdWR5LnBuZ1wiKSc7XG4gICAgICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ1BhcmNpYWxtZW50ZSBudWJsYWRvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDbG91ZHknOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcImNsb3VkeS5qcGdcIiknO1xuICAgICAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdOdWJsYWRvJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdPdmVyY2FzdCc6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwiY2xvdWR5LmpwZ1wiKSc7XG4gICAgICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ051YmxhZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01pc3QnOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcIm1pc3QuanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTmllYmxhJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMaWdodCByYWluJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCJyYWluLmpwZ1wiKSc7XG4gICAgICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0xsdXZpYSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCJkZWZhdWx0LmpwZ1wiKSc7XG4gICAgICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaXR5TmFtZS5pbm5lckhUTUwgPSBgJHtkYXRhLmxvY2F0aW9uLm5hbWV9LCAke2RhdGEubG9jYXRpb24uY291bnRyeX1gO1xuICAgIGhvdXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWV9YDtcblxuICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfY30gQ8KwIG8gJHtkYXRhLmN1cnJlbnQudGVtcF9mfSBGwrBgO1xuICAgIHRlbXBJY29uLnNyYyA9IGBodHRwczoke2RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gO1xuXG4gICAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGBTZSBzaWVudGUgY29tbzogJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9IEPCsCBvICR7ZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mfSBGwrBgO1xuICAgIGh1bWlkaXR5LmlubmVySFRNTCA9IGBOaXZlbCBkZSBodW1lZGFkOiAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcblxuICAgIHdpbmQuaW5uZXJIVE1MID0gYFZpZW50bzogJHtkYXRhLmN1cnJlbnQud2luZF9rcGh9a20vaGA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWF0aGVyOyIsImNvbnN0IGNvbnRhaW5lckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWZvcm0nKTtcbmNvbnN0IGNvbnRhaW5lckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJylcbmNvbnN0IHVzZXJFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XG5jb25zdCBob3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaG91cicpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRlbXAnKTtcbmNvbnN0IHRlbXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbi1pY29uJyk7XG5jb25zdCB0ZW1wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uLWRlc2NyaXB0aW9uJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuXG5leHBvcnQge2NvbnRhaW5lckZvcm0sIHVzZXJFbnRyeSwgY29udGFpbmVyQnRuLCBjaXR5TmFtZSwgaG91ciwgdGVtcCwgdGVtcEljb24sIHRlbXBEZXNjcmlwdGlvbiwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy9hcGlcIjtcbmltcG9ydCB7IGNvbnRhaW5lckZvcm0sIHVzZXJFbnRyeSwgY29udGFpbmVyQnRuIH0gZnJvbSBcIi4vbW9kdWxlcy9kb21cIjtcblxubGV0IGlucHV0ID0gJ0J1ZW5vcyBBaXJlcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGdldFdlYXRoZXIoaW5wdXQpKTtcblxuY29udGFpbmVyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbnB1dCA9IHVzZXJFbnRyeS52YWx1ZTtcbiAgICBnZXRXZWF0aGVyKGlucHV0KTtcbiAgICB1c2VyRW50cnkudmFsdWUgPSAnJztcbn0pO1xuXG5jb250YWluZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaW5wdXQgPSB1c2VyRW50cnkudmFsdWU7XG4gICAgZ2V0V2VhdGhlcihpbnB1dCk7XG4gICAgdXNlckVudHJ5LnZhbHVlID0gJyc7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=