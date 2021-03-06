/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Lesson_12/Lesson_12.js":
/*!************************************!*\
  !*** ./src/Lesson_12/Lesson_12.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12.scss */ "./src/Lesson_12/lesson_12.scss");
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_treafficLighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/treafficLighter */ "./src/Lesson_12/scripts/treafficLighter.js");


var test = [];
var lighter = new _scripts_treafficLighter__WEBPACK_IMPORTED_MODULE_1__["TraficLighter"](document.querySelector('.container'));
var lighter2 = new _scripts_treafficLighter__WEBPACK_IMPORTED_MODULE_1__["TraficLighter"](document.querySelector('.container'));
console.log(lighter);
window.lighter = lighter;

/***/ }),

/***/ "./src/Lesson_12/lesson_12.scss":
/*!**************************************!*\
  !*** ./src/Lesson_12/lesson_12.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Lesson_12/scripts/treafficLighter.js":
/*!**************************************************!*\
  !*** ./src/Lesson_12/scripts/treafficLighter.js ***!
  \**************************************************/
/*! exports provided: TraficLighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraficLighter", function() { return TraficLighter; });
function TraficLighter(targetElement) {
  var colors = ['red', 'yellow', 'green'];
  var lights = [];
  var lighter;

  function render() {
    lighter = document.createElement('div');
    lighter.classList.add('traffic-lighter');
    lighter.id = 'lighter1';
    targetElement.appendChild(lighter);
  }

  function renderLights() {
    for (var _i = 0, _colors = colors; _i < _colors.length; _i++) {
      var color = _colors[_i];
      var light = document.createElement('button');
      light.classList.add('traffic-lighter__light', "traffic-lighter__light_".concat(color));
      light.onclick = toggle;
      lights.push(light);
      lighter.appendChild(light);
    }
  }

  function toggleOffAll() {
    for (var _i2 = 0, _lights = lights; _i2 < _lights.length; _i2++) {
      var light = _lights[_i2];
      light.classList.remove('active');
    }
  }

  function toggle() {
    toggleOffAll();
    console.log(this);
    this.classList.add('active');
  }

  this.disable = function () {
    toggleOffAll();
  };

  render();
  renderLights();
}



/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./src/Lesson_12/Lesson_12.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Lesson_12/Lesson_12.js */"./src/Lesson_12/Lesson_12.js");


/***/ })

/******/ });
//# sourceMappingURL=Lesson_12.js.map