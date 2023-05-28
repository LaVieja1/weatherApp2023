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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRS9CO0FBQ2Y7QUFDQSx1SEFBdUgsU0FBUyxJQUFJLGFBQWE7QUFDako7QUFDQTtBQUNBLFFBQVEsMkRBQWM7QUFDdEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaMkk7O0FBRTNJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBeUI7QUFDckM7QUFDQTs7QUFFQSxJQUFJLG9EQUFrQixNQUFNLG1CQUFtQixJQUFJLHNCQUFzQjtBQUN6RSxJQUFJLGdEQUFjLE1BQU0sd0JBQXdCOztBQUVoRCxJQUFJLGdEQUFjLE1BQU0scUJBQXFCLE9BQU8scUJBQXFCO0FBQ3pFLElBQUksOENBQVksWUFBWSw0QkFBNEI7O0FBRXhELElBQUkscURBQW1CLHNCQUFzQiwwQkFBMEIsT0FBTywwQkFBMEI7QUFDeEcsSUFBSSxvREFBa0Isd0JBQXdCLHNCQUFzQjs7QUFFcEUsSUFBSSxnREFBYyxjQUFjLHNCQUFzQjtBQUN0RDs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRDdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ2dDOztBQUV2RTs7QUFFQSw4Q0FBOEMsd0RBQVU7O0FBRXhELHdFQUE4QjtBQUM5QjtBQUNBLFlBQVkseURBQWU7QUFDM0IsSUFBSSx3REFBVTtBQUNkLElBQUkseURBQWU7QUFDbkIsQ0FBQzs7QUFFRCx1RUFBNkI7QUFDN0I7QUFDQSxZQUFZLHlEQUFlO0FBQzNCLElBQUksd0RBQVU7QUFDZCxJQUFJLHlEQUFlO0FBQ25CLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzLy4vc3JjL21vZHVsZXMvZGlzcGxheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAyMDIzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcDIwMjMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwMjAyMy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheVdlYXRoZXIgZnJvbSBcIi4vZGlzcGxheVdlYXRoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02OGM2ZDI2YmY5ZmY0ZTRiOTcwMTMzMTYyMzI3MDUmcT0ke2xvY2F0aW9ufWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29udGFpbmVyRm9ybSwgdXNlckVudHJ5LCBjb250YWluZXJCdG4sIGNpdHlOYW1lLCBob3VyLCB0ZW1wLCB0ZW1wSWNvbiwgdGVtcERlc2NyaXB0aW9uLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCB3aW5kIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuXG4gICAgc3dpdGNoKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkge1xuICAgICAgICBjYXNlICdDbGVhcic6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwiY2xlYXIuanBnXCIpIDEwJSA1MCUnO1xuICAgICAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdEZXNwZWphZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BhcnRseSBjbG91ZHknOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcInBhcnRseS1jbG91ZHkucG5nXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnUGFyY2lhbG1lbnRlIG51YmxhZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Nsb3VkeSc6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwiY2xvdWR5LmpwZ1wiKSc7XG4gICAgICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ051YmxhZG8nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ092ZXJjYXN0JzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCJjbG91ZHkuanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTnVibGFkbyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWlzdCc6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKFwibWlzdC5qcGdcIiknO1xuICAgICAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdOaWVibGEnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xpZ2h0IHJhaW4nOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcInJhaW4uanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnTGx1dmlhJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcImRlZmF1bHQuanBnXCIpJztcbiAgICAgICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNpdHlOYW1lLmlubmVySFRNTCA9IGAke2RhdGEubG9jYXRpb24ubmFtZX0sICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgaG91ci5pbm5lckhUTUwgPSBgJHtkYXRhLmxvY2F0aW9uLmxvY2FsdGltZX1gO1xuXG4gICAgdGVtcC5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQudGVtcF9jfSBDwrAgbyAke2RhdGEuY3VycmVudC50ZW1wX2Z9IEbCsGA7XG4gICAgdGVtcEljb24uc3JjID0gYGh0dHBzOiR7ZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XG5cbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYFNlIHNpZW50ZSBjb21vOiAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfY30gQ8KwIG8gJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Z9IEbCsGA7XG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYE5pdmVsIGRlIGh1bWVkYWQ6ICR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuXG4gICAgd2luZC5pbm5lckhUTUwgPSBgVmllbnRvOiAke2RhdGEuY3VycmVudC53aW5kX2twaH1rbS9oYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXI7IiwiY29uc3QgY29udGFpbmVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZm9ybScpO1xuY29uc3QgY29udGFpbmVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKVxuY29uc3QgdXNlckVudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuXG5jb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcbmNvbnN0IGhvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1ob3VyJyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGVtcCcpO1xuY29uc3QgdGVtcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uLWljb24nKTtcbmNvbnN0IHRlbXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb24tZGVzY3JpcHRpb24nKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG5cbmV4cG9ydCB7Y29udGFpbmVyRm9ybSwgdXNlckVudHJ5LCBjb250YWluZXJCdG4sIGNpdHlOYW1lLCBob3VyLCB0ZW1wLCB0ZW1wSWNvbiwgdGVtcERlc2NyaXB0aW9uLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCB3aW5kIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2FwaVwiO1xuaW1wb3J0IHsgY29udGFpbmVyRm9ybSwgdXNlckVudHJ5LCBjb250YWluZXJCdG4gfSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuXG5sZXQgaW5wdXQgPSAnQnVlbm9zIEFpcmVzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZ2V0V2VhdGhlcihpbnB1dCkpO1xuXG5jb250YWluZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlucHV0ID0gdXNlckVudHJ5LnZhbHVlO1xuICAgIGdldFdlYXRoZXIoaW5wdXQpO1xuICAgIHVzZXJFbnRyeS52YWx1ZSA9ICcnO1xufSk7XG5cbmNvbnRhaW5lckJ0bi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbnB1dCA9IHVzZXJFbnRyeS52YWx1ZTtcbiAgICBnZXRXZWF0aGVyKGlucHV0KTtcbiAgICB1c2VyRW50cnkudmFsdWUgPSAnJztcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==