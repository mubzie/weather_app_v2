/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUI": () => (/* binding */ createUI)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/modules/fetchData.js");



const createUI = async () => {

    // fetched the weather data from weatherapi and stored the response in a variable
    const weatherInfo = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)('london')
    const data = (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getWeatherinfo)(weatherInfo)

    console.log(data)

    // creating the application UI by targeting its respective DOM element //
 


}



/***/ }),

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
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");




(0,_modules_DOM__WEBPACK_IMPORTED_MODULE_1__.createUI)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0REFBZ0I7QUFDOUMsaUJBQWlCLDBEQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SCxLQUFLLDRCQUE0QixhQUFhO0FBQ3ZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNFO0FBQzlCO0FBQ3hDO0FBQ0E7QUFDQSxzREFBUTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHBfdjIvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHBfdjIvLi9zcmMvbW9kdWxlcy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHBfdjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHBfdjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwX3YyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHBfdjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcF92Mi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhLCBnZXRXZWF0aGVyaW5mbyB9IGZyb20gXCIuL2ZldGNoRGF0YVwiO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVVJID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIC8vIGZldGNoZWQgdGhlIHdlYXRoZXIgZGF0YSBmcm9tIHdlYXRoZXJhcGkgYW5kIHN0b3JlZCB0aGUgcmVzcG9uc2UgaW4gYSB2YXJpYWJsZVxyXG4gICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKCdsb25kb24nKVxyXG4gICAgY29uc3QgZGF0YSA9IGdldFdlYXRoZXJpbmZvKHdlYXRoZXJJbmZvKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgLy8gY3JlYXRpbmcgdGhlIGFwcGxpY2F0aW9uIFVJIGJ5IHRhcmdldGluZyBpdHMgcmVzcGVjdGl2ZSBET00gZWxlbWVudCAvL1xyXG4gXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVUkgfSIsImNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBhc3luYyAoY2l0eSkgPT4ge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02ZjViY2JkOGE1NGE0Mjc4ODlkMTIwMjE2MjMxOTAzJnE9JHtjaXR5fSZkYXlzPTQmYXFpPW5vJmFsZXJ0cz1ub2AsIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGdldFdlYXRoZXJpbmZvID0gKGRhdGEpID0+IHtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxyXG4gICAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeSxcclxuICAgICAgICB0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnQgPSB7XHJcbiAgICAgICAgY29uZGl0aW9uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgaWNvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRlbXA6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgICAgZmVlbHNsaWtlOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXHJcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgICAgICB3aW5kU3BlZWQ6IGRhdGEuY3VycmVudC53aW5kX2twaFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0ID0ge1xyXG5cclxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhIGZvciBkYXkgMVxyXG4gICAgICAgIGRheTFfZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlLFxyXG4gICAgICAgIGRheTFfdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGRheTFfdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgZGF5MV9pY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhIGZvciBkYXkgMlxyXG4gICAgICAgIGRheTJfZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlLFxyXG4gICAgICAgIGRheTJfdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGRheTJfdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgZGF5Ml9pY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhIGZvciBkYXkgM1xyXG4gICAgICAgIGRheTNfZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXRlLFxyXG4gICAgICAgIGRheTNfdGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGRheTNfdGV4dDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgZGF5M19pY29uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5jb25kaXRpb24uaWNvbixcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBsb2NhdGlvbiwgY3VycmVudCwgZm9yZWNhc3R9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIGdldFdlYXRoZXJpbmZvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZldGNoV2VhdGhlckRhdGEsIGdldFdlYXRoZXJpbmZvIH0gZnJvbSBcIi4vbW9kdWxlcy9mZXRjaERhdGFcIlxyXG5pbXBvcnQgeyBjcmVhdGVVSSB9IGZyb20gXCIuL21vZHVsZXMvRE9NXCJcclxuXHJcblxyXG5jcmVhdGVVSSgpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=