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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Lesson_12_lighter/Lesson_12_lighter.js":
/*!****************************************************!*\
  !*** ./src/Lesson_12_lighter/Lesson_12_lighter.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lesson_12_lighter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lesson_12_lighter.scss */ "./src/Lesson_12_lighter/Lesson_12_lighter.scss");
/* harmony import */ var _Lesson_12_lighter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Lesson_12_lighter_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/traffic_lighter */ "./src/Lesson_12_lighter/scripts/traffic_lighter.js");
/* harmony import */ var _scripts_lighterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/lighterController */ "./src/Lesson_12_lighter/scripts/lighterController.js");
/* harmony import */ var _scripts_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/light */ "./src/Lesson_12_lighter/scripts/light.js");




var control = new _scripts_lighterController__WEBPACK_IMPORTED_MODULE_2__["LighterControler"](document.querySelector('body'));
var somelight = new _scripts_light__WEBPACK_IMPORTED_MODULE_3__["Light"](document.querySelector('body'), 'pink');
var somelight1 = new _scripts_light__WEBPACK_IMPORTED_MODULE_3__["Light"](document.querySelector('.footer'), 'red'); // const somelight2 = new Light(document.querySelector('body'),'yellow');
// const somelight3 = new Light(document.querySelector('body'),'green');

console.log(somelight);
console.log(somelight1);

/***/ }),

/***/ "./src/Lesson_12_lighter/Lesson_12_lighter.scss":
/*!******************************************************!*\
  !*** ./src/Lesson_12_lighter/Lesson_12_lighter.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Lesson_12_lighter/scripts/light.js":
/*!************************************************!*\
  !*** ./src/Lesson_12_lighter/scripts/light.js ***!
  \************************************************/
/*! exports provided: Light */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Light =
/*#__PURE__*/
function () {
  function Light(target) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'aqua';
    var onClick = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Light);

    this.target = target;
    this.color = color;
    this.isActive = false;
    this.render();
    this.onClick = onClick;
  }

  _createClass(Light, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.element = document.createElement('button');
      this.element.classList.add('traffic-lighter__light');

      this.element.onclick = function () {
        if (_this.onClick) {
          _this.onClick();
        }

        _this.toggle();
      };

      this.target.appendChild(this.element);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.toggleOff();
      } else {
        this.toggleOn();
      }
    }
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      this.element.style.backgroundColor = this.color;
      this.isActive = true;
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      this.element.style.backgroundColor = '';
      this.isActive = false;
    }
  }]);

  return Light;
}();

/***/ }),

/***/ "./src/Lesson_12_lighter/scripts/lighterController.js":
/*!************************************************************!*\
  !*** ./src/Lesson_12_lighter/scripts/lighterController.js ***!
  \************************************************************/
/*! exports provided: LighterControler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LighterControler", function() { return LighterControler; });
/* harmony import */ var _traffic_lighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traffic_lighter */ "./src/Lesson_12_lighter/scripts/traffic_lighter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var LighterControler =
/*#__PURE__*/
function () {
  function LighterControler(targetElement) {
    _classCallCheck(this, LighterControler);

    this.targetElement = targetElement;
    this.lighters = [];
    this.render();
    this.renderButtons();
  }

  _createClass(LighterControler, [{
    key: "render",
    value: function render() {
      var container = document.createElement('div');
      this.header = document.createElement('header');
      this.content = document.createElement('div');
      this.content.style.border = '5px solid yellow';
      this.content.style.display = 'flex';
      container.appendChild(this.header);
      container.appendChild(this.content);
      this.targetElement.appendChild(container);
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this = this;

      var addButton = document.createElement('button');
      var toggleOnButton = document.createElement('button');
      var toggleOffButton = document.createElement('button');
      addButton.textContent = '+';
      toggleOnButton.textContent = 'on';
      toggleOffButton.textContent = 'off';

      addButton.onclick = function () {
        _this.addLighter();
      };

      toggleOffButton.onclick = function () {
        _this.toggleOffAllLighters();
      };

      toggleOnButton.onclick = function () {
        _this.toggleOnAllLighters();
      };

      this.header.appendChild(addButton);
      this.header.appendChild(toggleOnButton);
      this.header.appendChild(toggleOffButton);
    }
  }, {
    key: "toggleOffAllLighters",
    value: function toggleOffAllLighters() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.lighters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var lighter = _step.value;
          lighter.toggleOff();
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
    key: "toggleOnAllLighters",
    value: function toggleOnAllLighters() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.lighters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var lighter = _step2.value;
          lighter.toggleOn();
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
  }, {
    key: "addLighter",
    value: function addLighter() {
      var lighter = new _traffic_lighter__WEBPACK_IMPORTED_MODULE_0__["TrafficLighterES6"](this.content);
      this.lighters.push(lighter);
    }
  }]);

  return LighterControler;
}();

/***/ }),

/***/ "./src/Lesson_12_lighter/scripts/traffic_lighter.js":
/*!**********************************************************!*\
  !*** ./src/Lesson_12_lighter/scripts/traffic_lighter.js ***!
  \**********************************************************/
/*! exports provided: TrafficLighterES6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighterES6", function() { return TrafficLighterES6; });
/* harmony import */ var _Lesson_12_lighter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Lesson_12_lighter.scss */ "./src/Lesson_12_lighter/Lesson_12_lighter.scss");
/* harmony import */ var _Lesson_12_lighter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Lesson_12_lighter_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light */ "./src/Lesson_12_lighter/scripts/light.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var TrafficLighterES6 =
/*#__PURE__*/
function () {
  function TrafficLighterES6(targetElement, id) {
    _classCallCheck(this, TrafficLighterES6);

    this.targetElement = targetElement;
    this.colors = ['red', 'yellow', 'green'];
    this.lights = [];
    this.lighter = 'asdas';
    this.id = id;
    this.activeIndex = 0;
    this.render();
    this.renderLights();
    this.startAutoSwitch();
  }

  _createClass(TrafficLighterES6, [{
    key: "validateNextIndex",
    value: function validateNextIndex() {
      return this.activeIndex + 1 < this.colors.length;
    }
  }, {
    key: "enableLight",
    value: function enableLight() {
      this.toggleOff();
      this.lights[this.activeIndex].toggleOn();
    }
  }, {
    key: "nextLight",
    value: function nextLight() {
      this.activeIndex = this.validateNextIndex() ? this.activeIndex + 1 : 0;
      this.enableLight();
    }
  }, {
    key: "stopAutoSwitch",
    value: function stopAutoSwitch() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "startAutoSwitch",
    value: function startAutoSwitch() {
      var _this = this;

      this.intervalId = setInterval(function () {
        _this.nextLight();
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.lighter = document.createElement('div');
      this.lighter.classList.add('traffic-lighter');
      this.lighter.id = 'lighter1';

      this.lighter.onmouseenter = function () {
        _this2.stopAutoSwitch();
      };

      this.lighter.onmouseleave = function () {
        _this2.startAutoSwitch();
      };

      this.targetElement.appendChild(this.lighter);
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
          var light = new _light__WEBPACK_IMPORTED_MODULE_1__["Light"](_this3.lighter, color, function () {
            _this3.toggleOff();

            var currentIndex = _this3.lights.indexOf(light);

            _this3.activeIndex = currentIndex;
            console.log(_this3.activeIndex);
          });

          _this3.lights.push(light);
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

      ;
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
          light.toggleOff();
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
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      this.lights[0].toggleOn();
    }
  }, {
    key: "disable",
    value: function disable() {
      this.toggleOff();
    }
  }]);

  return TrafficLighterES6;
}();

/***/ }),

/***/ 6:
/*!**********************************************************!*\
  !*** multi ./src/Lesson_12_lighter/Lesson_12_lighter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Lesson_12_lighter/Lesson_12_lighter.js */"./src/Lesson_12_lighter/Lesson_12_lighter.js");


/***/ })

/******/ });
//# sourceMappingURL=Lesson_12_lighter.js.map