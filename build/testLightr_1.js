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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/testLightr_1/scripts/controller.js":
/*!************************************************!*\
  !*** ./src/testLightr_1/scripts/controller.js ***!
  \************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _trafficLighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trafficLighter */ "./src/testLightr_1/scripts/trafficLighter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Controller =
/*#__PURE__*/
function () {
  function Controller(targetElement) {
    _classCallCheck(this, Controller);

    this.targetElement = targetElement;
    this.render();
    this.renderButtons();
  }

  _createClass(Controller, [{
    key: "render",
    value: function render() {
      var container = document.createElement('div');
      this.header = document.createElement('header');
      this.content = document.createElement('div');
      this.content.classList.add('flexBlock');
      container.appendChild(this.header);
      container.appendChild(this.content);
      this.targetElement.appendChild(container);
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this = this;

      var addButton = document.createElement('button');
      addButton.textContent = '+';
      this.header.appendChild(addButton);

      addButton.onclick = function () {
        _this.addNewLighter();
      };
    }
  }, {
    key: "addNewLighter",
    value: function addNewLighter() {
      var lighter = new _trafficLighter__WEBPACK_IMPORTED_MODULE_0__["TrafficLighter"](this.content);
    }
  }]);

  return Controller;
}();

/***/ }),

/***/ "./src/testLightr_1/scripts/trafficLighter.js":
/*!****************************************************!*\
  !*** ./src/testLightr_1/scripts/trafficLighter.js ***!
  \****************************************************/
/*! exports provided: TrafficLighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighter", function() { return TrafficLighter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TrafficLighter =
/*#__PURE__*/
function () {
  function TrafficLighter(target) {
    _classCallCheck(this, TrafficLighter);

    this.target = target;
    this.colors = ['red', 'yellow', 'green'];
    this.lights = [];
    this.render();
    this.renderLights();
    this.index = 0;
    this.startAutoSwitch();
  }

  _createClass(TrafficLighter, [{
    key: "startAutoSwitch",
    value: function startAutoSwitch() {
      var _this = this;

      this.intId = setInterval(function () {
        _this.toggleOff();

        _this.lights[_this.changeIndex()].classList.add('active');
      }, 1000);
    }
  }, {
    key: "changeIndex",
    value: function changeIndex() {
      var result = this.index < 3 ? this.index : this.index = 0;
      this.index++;
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.lighter = document.createElement('div');
      this.lighter.classList.add('lighter');
      this.target.appendChild(this.lighter);
      this.lighter.addEventListener('mouseenter', function () {
        clearInterval(_this2.intId);
      });
      this.lighter.addEventListener('mouseleave', function () {
        _this2.startAutoSwitch();
      });
    }
  }, {
    key: "renderLights",
    value: function renderLights() {
      var _this3 = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var color = _step.value;
          var light = document.createElement('button');
          light.classList.add('light', "light_".concat(color));

          _this3.lights.push(light);

          _this3.lighter.appendChild(light);

          light.onclick = function () {
            _this3.toggleOff();

            light.classList.add('active');
          };
        };

        for (var _iterator = this.colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.lights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var light = _step2.value;
          light.classList.remove('active');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return TrafficLighter;
}();

/***/ }),

/***/ "./src/testLightr_1/testLightr_1.js":
/*!******************************************!*\
  !*** ./src/testLightr_1/testLightr_1.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testLightr_1_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testLightr_1.scss */ "./src/testLightr_1/testLightr_1.scss");
/* harmony import */ var _testLightr_1_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_testLightr_1_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/controller */ "./src/testLightr_1/scripts/controller.js");
/* harmony import */ var _scripts_trafficLighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/trafficLighter */ "./src/testLightr_1/scripts/trafficLighter.js");



var controller1 = new _scripts_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"](document.querySelector('body'));

/***/ }),

/***/ "./src/testLightr_1/testLightr_1.scss":
/*!********************************************!*\
  !*** ./src/testLightr_1/testLightr_1.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/*!************************************************!*\
  !*** multi ./src/testLightr_1/testLightr_1.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/testLightr_1/testLightr_1.js */"./src/testLightr_1/testLightr_1.js");


/***/ })

/******/ });
//# sourceMappingURL=testLightr_1.js.map