(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testLightr_1~testLightr_1"],{

/***/ "./src/testLightr_1/scripts/controller.js":
/*!************************************************!*\
  !*** ./src/testLightr_1/scripts/controller.js ***!
  \************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _trafficLighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trafficLighter */ "./src/testLightr_1/scripts/trafficLighter.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
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
      var lighter = new _trafficLighter__WEBPACK_IMPORTED_MODULE_0__["TrafficLighter"]_trafficLighter__WEBPACK_IMPORTED_MODULE_0__["TrafficLighter"](this.content);
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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighter", function() { return TrafficLighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighter", function() { return TrafficLighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighter", function() { return TrafficLighter; });
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\sass-loader\\lib\\loader.js!C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\src\\testLightr_1\\testLightr_1.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:83:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at childCompiler.runAsChild (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14)\n    at compile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:306:11)\n    at hooks.afterCompile.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:630:14)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at compilation.seal.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:627:30)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1325:35)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeChunkAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1316:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.additionalAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1311:36)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeTree.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1307:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at hooks.make.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:624:17)\n    at _err0 (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at _addModuleChain (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1095:12)\n    at processModuleDependencies.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1007:9)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 9:
/*!************************************************!*\
  !*** multi ./src/testLightr_1/testLightr_1.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/testLightr_1/testLightr_1.js */"./src/testLightr_1/testLightr_1.js");


/***/ })

}]);
//# sourceMappingURL=testLightr_1~testLightr_1.js.map