(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider_test2~slider_test2"],{

/***/ "./src/slider_test2/scripts/controller.js":
/*!************************************************!*\
  !*** ./src/slider_test2/scripts/controller.js ***!
  \************************************************/
/*! exports provided: SliderBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderBlock", function() { return SliderBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderBlock", function() { return SliderBlock; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider_test2/scripts/slider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderBlock", function() { return SliderBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderBlock", function() { return SliderBlock; });
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
    this.intervalId;
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

      setInterval(function () {
        _this.changeSlide();
      }, 2000);
    }
  }, {
    key: "changeSlide",
    value: function changeSlide() {
      this.slideIndex++;

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
      var mainBlock = document.createElement('div');
      mainBlock.classList.add('main-block');
      this.targetElement.appendChild(mainBlock);
      this.header = document.createElement('header');
      this.content = document.createElement('div');
      this.header.classList.add('header');
      this.content.classList.add('content');
      mainBlock.appendChild(this.header);
      mainBlock.appendChild(this.content);
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this2 = this;

      var btn1 = document.createElement('div');
      btn1.classList.add('btn1');
      btn1.textContent = '<';
      var btn2 = document.createElement('div');
      btn2.classList.add('btn2');
      btn2.textContent = '>';
      this.content.appendChild(btn1);
      this.content.appendChild(btn2);

      btn1.onclick = function () {
        _this2.prevSlide();
      };

      btn2.onclick = function () {
        _this2.nextSlide();
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
    }
  }, {
    key: "renderPoints",
    value: function renderPoints() {
      var _this3 = this;

      this.pointBlock = document.createElement('div');
      this.pointBlock.classList.add('point-block');
      this.content.appendChild(this.pointBlock);

      var _loop = function _loop(i) {
        var point = document.createElement('div');
        point.classList.add('point');

        _this3.pointBlock.appendChild(point);

        _this3.points.push(point);

        point.onclick = function () {
          _this3.toggleOff();

          point.classList.add('active');
          _this3.slideIndex = _this3.points.indexOf(point);
          console.log(_this3.slideIndex);

          _this3.pointChanger();
        };
      };

      for (var i = 0; i < this.howMany; i++) {
        _loop(i);
      }
    }
  }, {
    key: "addNewSlide",
    value: function addNewSlide() {
      for (var i = 0; i < this.howMany; i++) {
        var slider = new _slider__WEBPACK_IMPORTED_MODULE_0__["Slider"]_slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](this.header, this.colors(), this.number());
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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
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



var slider1 = new _scripts_controller__WEBPACK_IMPORTED_MODULE_1__["SliderBlock"](document.querySelector('body'), 50);

/***/ }),

/***/ "./src/slider_test2/slider_test2.scss":
/*!********************************************!*\
  !*** ./src/slider_test2/slider_test2.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\sass-loader\\lib\\loader.js!C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\src\\slider_test2\\slider_test2.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:83:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at childCompiler.runAsChild (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14)\n    at compile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:306:11)\n    at hooks.afterCompile.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:630:14)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at compilation.seal.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:627:30)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1325:35)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeChunkAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1316:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.additionalAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1311:36)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeTree.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1307:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at hooks.make.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:624:17)\n    at _err0 (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at _addModuleChain (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1095:12)\n    at processModuleDependencies.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1007:9)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 12:
/*!************************************************!*\
  !*** multi ./src/slider_test2/slider_test2.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/slider_test2/slider_test2.js */"./src/slider_test2/slider_test2.js");


/***/ })

}]);
//# sourceMappingURL=slider_test2~slider_test2.js.map