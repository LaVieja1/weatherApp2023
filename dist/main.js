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

    _dom__WEBPACK_IMPORTED_MODULE_0__.wind.innerHTML = `Viento: ${data.current.wind_kph}kph`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRS9CO0FBQ2Y7QUFDQSx1SEFBdUgsU0FBUyxJQUFJLGFBQWE7QUFDako7QUFDQTtBQUNBLFFBQVEsMkRBQWM7QUFDdEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaMkk7O0FBRTNJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTs7QUFFQSxJQUFJLG9EQUFrQixNQUFNLG1CQUFtQixJQUFJLHNCQUFzQjtBQUN6RSxJQUFJLGdEQUFjLE1BQU0sd0JBQXdCOztBQUVoRCxJQUFJLGdEQUFjLE1BQU0scUJBQXFCLE9BQU8scUJBQXFCO0FBQ3pFLElBQUksOENBQVksWUFBWSw0QkFBNEI7O0FBRXhELElBQUkscURBQW1CLHNCQUFzQiwwQkFBMEIsT0FBTywwQkFBMEI7QUFDeEcsSUFBSSxvREFBa0Isd0JBQXdCLHNCQUFzQjs7QUFFcEUsSUFBSSxnREFBYyxjQUFjLHNCQUFzQjtBQUN0RDs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRDdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ2dDOztBQUV2RTs7QUFFQSw4Q0FBOEMsd0RBQVU7O0FBRXhELHdFQUE4QjtBQUM5QjtBQUNBLFlBQVkseURBQWU7QUFDM0IsSUFBSSx3REFBVTtBQUNkLElBQUkseURBQWU7QUFDbkIsQ0FBQzs7QUFFRCx1RUFBNkI7QUFDN0I7QUFDQSxZQUFZLHlEQUFlO0FBQzNCLElBQUksd0RBQVU7QUFDZCxJQUFJLHlEQUFlO0FBQ25CLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvZGlzcGxheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwMjAyMy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheVdlYXRoZXIgZnJvbSBcIi4vZGlzcGxheVdlYXRoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02OGM2ZDI2YmY5ZmY0ZTRiOTcwMTMzMTYyMzI3MDUmcT0ke2xvY2F0aW9ufWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGFpbmVyRm9ybSwgdXNlckVudHJ5LCBjb250YWluZXJCdG4sIGNpdHlOYW1lLCBob3VyLCB0ZW1wLCB0ZW1wSWNvbiwgdGVtcERlc2NyaXB0aW9uLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCB3aW5kIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuXG4gICAgc3dpdGNoKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkge1xuICAgICAgICBjYXNlICdDbGVhcic6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwiY2xlYXIuanBnXCIpIDEwJSA1MCUnO1xuICAgICAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdEZXNwZWphZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BhcnRseSBjbG91ZHknOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcInBhcnRseS1jbG91ZHkucG5nXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnUGFyY2lhbG1lbnRlIG51YmxhZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Nsb3VkeSc6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwiY2xvdWR5LmpwZ1wiKSc7XG4gICAgICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ051YmxhZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ092ZXJjYXN0JzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCJjbG91ZHkuanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTnVibGFkbyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWlzdCc6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwibWlzdC5qcGdcIiknO1xuICAgICAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdOaWVibGEnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xpZ2h0IHJhaW4nOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcInJhaW4uanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTGx1dmlhJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcImRlZmF1bHQuanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNpdHlOYW1lLmlubmVySFRNTCA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0sICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgaG91ci5pbm5lckhUTUwgPSBgJHtkYXRhLmxvY2F0aW9uLmxvY2FsdGltZX1gO1xuXG4gICAgdGVtcC5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQudGVtcF9jfSBDwrAgbyAke2RhdGEuY3VycmVudC50ZW1wX2Z9IEbCsGA7XG4gICAgdGVtcEljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XG5cbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYFNlIHNpZW50ZSBjb21vOiAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfY30gQ8KwIG8gJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Z9IEbCsGA7XG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYE5pdmVsIGRlIGh1bWVkYWQ6ICR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuXG4gICAgd2luZC5pbm5lckhUTUwgPSBgVmllbnRvOiAke2RhdGEuY3VycmVudC53aW5kX2twaH1rcGhgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlcjsiLCJjb25zdCBjb250YWluZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1mb3JtJyk7XG5jb25zdCBjb250YWluZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJ0bicpXG5jb25zdCB1c2VyRW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG5cbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xuY29uc3QgaG91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LWhvdXInKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS10ZW1wJyk7XG5jb25zdCB0ZW1wSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb24taWNvbicpO1xuY29uc3QgdGVtcERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbi1kZXNjcmlwdGlvbicpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcblxuZXhwb3J0IHtjb250YWluZXJGb3JtLCB1c2VyRW50cnksIGNvbnRhaW5lckJ0biwgY2l0eU5hbWUsIGhvdXIsIHRlbXAsIHRlbXBJY29uLCB0ZW1wRGVzY3JpcHRpb24sIGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvYXBpXCI7XG5pbXBvcnQgeyBjb250YWluZXJGb3JtLCB1c2VyRW50cnksIGNvbnRhaW5lckJ0biB9IGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5cbmxldCBpbnB1dCA9ICdCdWVub3MgQWlyZXMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBnZXRXZWF0aGVyKGlucHV0KSk7XG5cbmNvbnRhaW5lckZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaW5wdXQgPSB1c2VyRW50cnkudmFsdWU7XG4gICAgZ2V0V2VhdGhlcihpbnB1dCk7XG4gICAgdXNlckVudHJ5LnZhbHVlID0gJyc7XG59KTtcblxuY29udGFpbmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlucHV0ID0gdXNlckVudHJ5LnZhbHVlO1xuICAgIGdldFdlYXRoZXIoaW5wdXQpO1xuICAgIHVzZXJFbnRyeS52YWx1ZSA9ICcnO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9