/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "getWeatherinfo": () => (/* binding */ getWeatherinfo)
/* harmony export */ });
const fetchWeatherData = async (city) => {

    try {
        
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6f5bcbd8a54a427889d120216231903&q=${city}&days=4&aqi=no&alerts=no`, {mode: 'cors'})
        const data = await response.json()
    
        return data

    } catch (error) {

        console.log("failed to fetch data")
        
    }
    
}

const getWeatherinfo = (data) => {

    const location = {
        region: data.location.region,
        country: data.location.country,
        time: data.location.localtime
    }

    const current = {
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        temp: data.current.temp_c,
        feelslike: data.current.feelslike_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph
    }

    const forecast = {

        // forecast data for day 1
        day1_date: data.forecast.forecastday[1].date,
        day1_temp: data.forecast.forecastday[1].day.avgtemp_c,
        day1_text: data.forecast.forecastday[1].day.condition.text,
        day1_icon: data.forecast.forecastday[1].day.condition.icon,
        
        // forecast data for day 2
        day2_date: data.forecast.forecastday[2].date,
        day2_temp: data.forecast.forecastday[2].day.avgtemp_c,
        day2_text: data.forecast.forecastday[2].day.condition.text,
        day2_icon: data.forecast.forecastday[2].day.condition.icon,
        
        // forecast data for day 3
        day3_date: data.forecast.forecastday[3].date,
        day3_temp: data.forecast.forecastday[3].day.avgtemp_c,
        day3_text: data.forecast.forecastday[3].day.condition.text,
        day3_icon: data.forecast.forecastday[3].day.condition.icon,
    }

    return { location, current, forecast}
}



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
/* harmony import */ var _modules_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchData */ "./src/modules/fetchData.js");


const dataInfo = async () =>{
    
   const data = await (0,_modules_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)('london')

   const weatherInfo = (0,_modules_fetchData__WEBPACK_IMPORTED_MODULE_0__.getWeatherinfo)(data)

    console.log(weatherInfo)
}

dataInfo()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SCxLQUFLLDRCQUE0QixhQUFhO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9FQUFnQjtBQUN0QztBQUNBLHVCQUF1QixrRUFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcF92Mi8uL3NyYy9tb2R1bGVzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcF92Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcF92Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHBfdjIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcF92Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwX3YyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02ZjViY2JkOGE1NGE0Mjc4ODlkMTIwMjE2MjMxOTAzJnE9JHtjaXR5fSZkYXlzPTQmYXFpPW5vJmFsZXJ0cz1ub2AsIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGdldFdlYXRoZXJpbmZvID0gKGRhdGEpID0+IHtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxyXG4gICAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcclxuICAgICAgICB0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XHJcbiAgICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgaWNvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgICAgZmVlbHNsaWtlOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXHJcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgICB3aW5kU3BlZWQ6IGRhdGEuY3VycmVudC53aW5kX2twaFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0ID0ge1xyXG5cclxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhIGZvciBkYXkgMVxyXG4gICAgICAgIGRheTFfZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlLFxyXG4gICAgICAgIGRheTFfdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGRheTFfdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgZGF5MV9pY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhIGZvciBkYXkgMlxyXG4gICAgICAgIGRheTJfZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlLFxyXG4gICAgICAgIGRheTJfdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGRheTJfdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgZGF5Ml9pY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhIGZvciBkYXkgM1xyXG4gICAgICAgIGRheTNfZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXRlLFxyXG4gICAgICAgIGRheTNfdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGRheTNfdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgZGF5M19pY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBsb2NhdGlvbiwgY3VycmVudCwgZm9yZWNhc3R9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIGdldFdlYXRoZXJpbmZvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIGdldFdlYXRoZXJpbmZvIH0gZnJvbSBcIi4vbW9kdWxlcy9mZXRjaERhdGFcIlxyXG5cclxuY29uc3QgZGF0YUluZm8gPSBhc3luYyAoKSA9PntcclxuICAgIFxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YSgnbG9uZG9uJylcclxuXHJcbiAgIGNvbnN0IHdlYXRoZXJJbmZvID0gZ2V0V2VhdGhlcmluZm8oZGF0YSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mbylcclxufVxyXG5cclxuZGF0YUluZm8oKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9