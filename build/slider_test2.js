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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/slider_test2/scripts/controller.js":
/*!************************************************!*\
  !*** ./src/slider_test2/scripts/controller.js ***!
  \************************************************/
/*! exports provided: SliderBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderBlock", function() { return SliderBlock; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider_test2/scripts/slider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SliderBlock =
/*#__PURE__*/
function () {
  function SliderBlock(targetElement) {
    var howMany = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, SliderBlock);

    // куда вставить и сколько слайдов
    this.targetElement = targetElement;
    this.howMany = howMany;
    this.sliders = [];
    this.points = [];
    this.slideIndex = 0;
    this.index = 0;
    this.render();
    this.renderButtons();
    this.renderPoints();
    this.addNewSlide();
    this.autoSwitch();
  }

  _createClass(SliderBlock, [{
    key: "autoSwitch",
    value: function autoSwitch() {
      var _this = this;

      this.intervalId = setInterval(function () {
        _this.changeSlide();
      }, 2000);
    }
  }, {
    key: "stopAutoSwitch",
    value: function stopAutoSwitch() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "changeSlide",
    value: function changeSlide() {
      this.slideIndex++;

      if (this.slideIndex === this.sliders.length) {
        this.slideIndex = 0;
      }

      for (var i = 0; i < this.sliders.length; i++) {
        this.sliders[i].slides[0].style.transform = 'translateX(' + -600 * this.slideIndex + 'px)';
      }

      this.toggleOff();
      this.points[this.slideIndex].classList.add('active');
    }
  }, {
    key: "pointChanger",
    value: function pointChanger() {
      for (var i = 0; i < this.sliders.length; i++) {
        this.sliders[i].slides[0].style.transform = 'translateX(' + -600 * this.slideIndex + 'px)';
      }
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var point = _step.value;
          point.classList.remove('active');
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
    key: "number",
    value: function number() {
      this.index++;

      while (this.index <= this.howMany) {
        return this.index;
      }
    }
  }, {
    key: "colors",
    value: function colors() {
      var color;
      var result = [];

      for (var i = 0; i < 3; i++) {
        result[i] = Math.round(Math.random() * 255);
      }

      color = "rgb(".concat(result[0], ",").concat(result[1], ",").concat(result[2], ")");
      return color;
      console.log(color);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mainBlock = document.createElement('div');
      mainBlock.classList.add('main-block');
      this.targetElement.appendChild(mainBlock);
      this.header = document.createElement('header');
      this.content = document.createElement('div');
      this.header.classList.add('header');
      this.content.classList.add('content');
      mainBlock.appendChild(this.header);
      mainBlock.appendChild(this.content);

      this.header.onmouseenter = function () {
        _this2.stopAutoSwitch();
      };

      this.header.onmouseleave = function () {
        _this2.autoSwitch();
      };
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this3 = this;

      var btn1 = document.createElement('div');
      btn1.classList.add('btn1');
      btn1.textContent = '<';
      var btn2 = document.createElement('div');
      btn2.classList.add('btn2');
      btn2.textContent = '>';
      this.content.appendChild(btn1);
      this.content.appendChild(btn2);

      btn1.onclick = function () {
        _this3.prevSlide();
      };

      btn2.onclick = function () {
        _this3.nextSlide();
      };

      btn1.onmouseenter = function () {
        _this3.stopAutoSwitch();
      };

      btn1.onmouseleave = function () {
        _this3.autoSwitch();
      };

      btn2.onmouseenter = function () {
        _this3.stopAutoSwitch();
      };

      btn2.onmouseleave = function () {
        _this3.autoSwitch();
      };
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      this.slideIndex++;

      if (this.slideIndex === this.sliders.length) {
        this.slideIndex = 0;
      }

      for (var i = 0; i < this.sliders.length; i++) {
        this.sliders[i].slides[0].style.transform = 'translateX(' + -600 * this.slideIndex + 'px)';
      }

      this.toggleOff();
      this.points[this.slideIndex].classList.add('active');
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      this.slideIndex--;

      if (this.slideIndex === -1) {
        this.slideIndex = this.sliders.length - 1;
      }

      for (var i = 0; i < this.sliders.length; i++) {
        this.sliders[i].slides[0].style.transform = 'translateX(' + -600 * this.slideIndex + 'px)';
      }

      this.toggleOff();
      this.points[this.slideIndex].classList.add('active');
    }
  }, {
    key: "renderPoints",
    value: function renderPoints() {
      var _this4 = this;

      this.pointBlock = document.createElement('div');
      this.pointBlock.classList.add('point-block');
      this.content.appendChild(this.pointBlock);

      var _loop = function _loop(i) {
        var point = document.createElement('div');
        point.classList.add('point');

        _this4.pointBlock.appendChild(point);

        _this4.points.push(point);

        point.onclick = function () {
          _this4.toggleOff();

          point.classList.add('active');
          _this4.slideIndex = _this4.points.indexOf(point);
          console.log(_this4.slideIndex);

          _this4.pointChanger();
        };

        point.onmouseenter = function () {
          _this4.stopAutoSwitch();
        };

        point.onmouseleave = function () {
          _this4.autoSwitch();
        };
      };

      for (var i = 0; i < this.howMany; i++) {
        _loop(i);
      }

      this.points[0].classList.add('active');
    }
  }, {
    key: "addNewSlide",
    value: function addNewSlide() {
      for (var i = 0; i < this.howMany; i++) {
        var slider = new _slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](this.header, this.colors(), this.number());
        this.sliders.push(slider);
      }

      console.log(this.sliders);
    }
  }]);

  return SliderBlock;
}();

/***/ }),

/***/ "./src/slider_test2/scripts/slider.js":
/*!********************************************!*\
  !*** ./src/slider_test2/scripts/slider.js ***!
  \********************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(targetElement) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pink';
    var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

    _classCallCheck(this, Slider);

    this.targetElement = targetElement;
    this.color = color;
    this.number = number;
    this.slides = [];
    this.renderSlide();
  }

  _createClass(Slider, [{
    key: "renderSlide",
    value: function renderSlide() {
      var slide = document.createElement('div');
      slide.classList.add('slide');
      slide.textContent = this.number;
      slide.style.background = this.color;
      this.targetElement.appendChild(slide);
      this.slides.push(slide);
    }
  }, {
    key: "moveSLide",
    value: function moveSLide() {
      console.log(this.slides);
    }
  }]);

  return Slider;
}();

/***/ }),

/***/ "./src/slider_test2/slider_test2.js":
/*!******************************************!*\
  !*** ./src/slider_test2/slider_test2.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_test2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider_test2.scss */ "./src/slider_test2/slider_test2.scss");
/* harmony import */ var _slider_test2_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_test2_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/controller */ "./src/slider_test2/scripts/controller.js");
/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/slider */ "./src/slider_test2/scripts/slider.js");



var addSlider = document.createElement('button');
document.querySelector('body').appendChild(addSlider);
addSlider.textContent = 'Add new slider';

addSlider.onclick = function addNewSlider() {
  var numberOfSlides = prompt('How many slides do you want?');
  var slider1 = new _scripts_controller__WEBPACK_IMPORTED_MODULE_1__["SliderBlock"](document.querySelector('body'), parseInt(numberOfSlides));
};

/***/ }),

/***/ "./src/slider_test2/slider_test2.scss":
/*!********************************************!*\
  !*** ./src/slider_test2/slider_test2.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 12:
/*!************************************************!*\
  !*** multi ./src/slider_test2/slider_test2.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/slider_test2/slider_test2.js */"./src/slider_test2/slider_test2.js");


/***/ })

/******/ });
//# sourceMappingURL=slider_test2.js.map