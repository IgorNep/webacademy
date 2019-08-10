(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slider_test1~slider_test1"],{

/***/ "./src/slider_test1/slider_test1.js":
/*!******************************************!*\
  !*** ./src/slider_test1/slider_test1.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_test1_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider_test1.scss */ "./src/slider_test1/slider_test1.scss");
/* harmony import */ var _slider_test1_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_test1_scss__WEBPACK_IMPORTED_MODULE_0__);

var mainBlock = document.createElement('div');
mainBlock.classList.add('main-block');
document.querySelector('body').appendChild(mainBlock);
var header = document.createElement('div');
header.classList.add('header');
mainBlock.appendChild(header);
var buttons = document.createElement('div');
buttons.classList.add('buttons');
mainBlock.appendChild(buttons);
var section = document.createElement('div');
section.classList.add('section');
section.textContent = '1';
header.appendChild(section);
var section2 = document.createElement('div');
section2.classList.add('section2');
section2.textContent = '2';
header.appendChild(section2);
var section3 = document.createElement('div');
section3.classList.add('section3');
section3.textContent = '3';
header.appendChild(section3);
var section4 = document.createElement('div');
section4.classList.add('section4');
section4.textContent = '4';
header.appendChild(section4);
var section5 = document.createElement('div');
section5.classList.add('section5');
section5.textContent = '5';
header.appendChild(section5);
var button = document.createElement('button');
button.classList.add('btn');
button.textContent = '>';
buttons.appendChild(button);
var button2 = document.createElement('button');
button2.classList.add('btn2');
button2.textContent = '<';
buttons.appendChild(button2);
var checkPoints = document.createElement('div');
checkPoints.classList.add('checkpoints');
buttons.appendChild(checkPoints);
var checkPoint1 = document.createElement('div');
checkPoint1.classList.add('checkPoint');
checkPoint1.classList.add('active');
checkPoints.appendChild(checkPoint1);

checkPoint1.onclick = function () {
  var indexNumber = 0 + 'px';
  section.style.transform = "translateX(".concat(indexNumber, ")");
  section.style.transition = 'all 1s ease';
  section2.style.transform = "translateX(".concat(indexNumber, ")");
  section2.style.transition = 'all 1s ease';
  section3.style.transform = "translateX(".concat(indexNumber, ")");
  section3.style.transition = 'all 1s ease';
  section4.style.transform = "translateX(".concat(indexNumber, ")");
  section4.style.transition = 'all 1s ease';
  section5.style.transform = "translateX(".concat(indexNumber, ")");
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 0;
  checkPoint1.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint4.classList.remove('active');
  checkPoint5.classList.remove('active');
};

var checkPoint2 = document.createElement('div');
checkPoint2.classList.add('checkPoint');
checkPoints.appendChild(checkPoint2);

checkPoint2.onclick = function () {
  var indexNumber = -600 + 'px';
  section.style.transform = "translateX(".concat(indexNumber, ")");
  section.style.transition = 'all 1s ease';
  section2.style.transform = "translateX(".concat(indexNumber, ")");
  section2.style.transition = 'all 1s ease';
  section3.style.transform = "translateX(".concat(indexNumber, ")");
  section3.style.transition = 'all 1s ease';
  section4.style.transform = "translateX(".concat(indexNumber, ")");
  section4.style.transition = 'all 1s ease';
  section5.style.transform = "translateX(".concat(indexNumber, ")");
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 1;
  checkPoint2.classList.add('active');
  checkPoint1.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint4.classList.remove('active');
  checkPoint5.classList.remove('active');
};

var checkPoint3 = document.createElement('div');
checkPoint3.classList.add('checkPoint');
checkPoints.appendChild(checkPoint3);

checkPoint3.onclick = function () {
  var indexNumber = -1200 + 'px';
  section.style.transform = "translateX(".concat(indexNumber, ")");
  section.style.transition = 'all 1s ease';
  section2.style.transform = "translateX(".concat(indexNumber, ")");
  section2.style.transition = 'all 1s ease';
  section3.style.transform = "translateX(".concat(indexNumber, ")");
  section3.style.transition = 'all 1s ease';
  section4.style.transform = "translateX(".concat(indexNumber, ")");
  section4.style.transition = 'all 1s ease';
  section5.style.transform = "translateX(".concat(indexNumber, ")");
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 2;
  checkPoint3.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint1.classList.remove('active');
  checkPoint4.classList.remove('active');
  checkPoint5.classList.remove('active');
};

var checkPoint4 = document.createElement('div');
checkPoint4.classList.add('checkPoint');
checkPoints.appendChild(checkPoint4);

checkPoint4.onclick = function () {
  var indexNumber = -1800 + 'px';
  section.style.transform = "translateX(".concat(indexNumber, ")");
  section.style.transition = 'all 1s ease';
  section2.style.transform = "translateX(".concat(indexNumber, ")");
  section2.style.transition = 'all 1s ease';
  section3.style.transform = "translateX(".concat(indexNumber, ")");
  section3.style.transition = 'all 1s ease';
  section4.style.transform = "translateX(".concat(indexNumber, ")");
  section4.style.transition = 'all 1s ease';
  section5.style.transform = "translateX(".concat(indexNumber, ")");
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 3;
  checkPoint4.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint1.classList.remove('active');
  checkPoint5.classList.remove('active');
};

var checkPoint5 = document.createElement('div');
checkPoint5.classList.add('checkPoint');
checkPoints.appendChild(checkPoint5);

checkPoint5.onclick = function () {
  var indexNumber = -2400 + 'px';
  section.style.transform = "translateX(".concat(indexNumber, ")");
  section.style.transition = 'all 1s ease';
  section2.style.transform = "translateX(".concat(indexNumber, ")");
  section2.style.transition = 'all 1s ease';
  section3.style.transform = "translateX(".concat(indexNumber, ")");
  section3.style.transition = 'all 1s ease';
  section4.style.transform = "translateX(".concat(indexNumber, ")");
  section4.style.transition = 'all 1s ease';
  section5.style.transform = "translateX(".concat(indexNumber, ")");
  section5.style.transition = 'all 1s ease';
  console.log(indexNumber);
  index = 4;
  checkPoint5.classList.add('active');
  checkPoint2.classList.remove('active');
  checkPoint3.classList.remove('active');
  checkPoint4.classList.remove('active');
  checkPoint1.classList.remove('active');
};

var index = -1;
var y;
var x;

button.onclick = function () {
  if (index === 4) {
    index = -1;
  }

  if (index >= -1 && index <= 3) {
    y = -600 * ++index + 'px';
    section.style.transform = "translateX(".concat(y, ")");
    section.style.transition = 'all 1s ease';
    section2.style.transform = "translateX(".concat(y, ")");
    section2.style.transition = 'all 1s ease';
    section3.style.transform = "translateX(".concat(y, ")");
    section3.style.transition = 'all 1s ease';
    section4.style.transform = "translateX(".concat(y, ")");
    section4.style.transition = 'all 1s ease';
    section5.style.transform = "translateX(".concat(y, ")");
    section5.style.transition = 'all 1s ease';
  }

  if (index === 0) {
    checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 1) {
    checkPoint2.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 2) {
    checkPoint3.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 3) {
    checkPoint4.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 4) {
    checkPoint5.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
  }

  console.log(y);
  console.log(index);
};

button.onmouseenter = function () {
  clearInterval(intervalId);
};

button.onmouseleave = function () {
  intervalId = setInterval(autoSwitch, 3000);
};

button2.onclick = function () {
  if (index === 0) {
    index = 5;
  }

  if (index > 0 && index <= 5) {
    y = -600 * --index + 'px';
    section.style.transform = "translateX(".concat(y, ")");
    section.style.transition = 'all 1s ease';
    section2.style.transform = "translateX(".concat(y, ")");
    section2.style.transition = 'all 1s ease';
    section3.style.transform = "translateX(".concat(y, ")");
    section3.style.transition = 'all 1s ease';
    section4.style.transform = "translateX(".concat(y, ")");
    section4.style.transition = 'all 1s ease';
    section5.style.transform = "translateX(".concat(y, ")");
    section5.style.transition = 'all 1s ease';
  }

  if (index === 0) {
    checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 1) {
    checkPoint2.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 2) {
    checkPoint3.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 3) {
    checkPoint4.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 4) {
    checkPoint5.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
  }
};

button2.onmouseenter = function () {
  clearInterval(intervalId);
};

button2.onmouseleave = function () {
  intervalId = setInterval(autoSwitch, 3000);
};

var intervalId = setInterval(autoSwitch, 3000);

function autoSwitch() {
  index === 4 ? index = -1 : index;
  index++;

  if (index === 0) {
    checkPoint1.classList.add('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 1) {
    checkPoint2.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 2) {
    checkPoint3.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint4.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 3) {
    checkPoint4.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint5.classList.remove('active');
  } else if (index === 4) {
    checkPoint5.classList.add('active');
    checkPoint1.classList.remove('active');
    checkPoint2.classList.remove('active');
    checkPoint3.classList.remove('active');
    checkPoint4.classList.remove('active');
  }

  y = -600 * index + 'px';
  section.style.transform = "translateX(".concat(y, ")");
  section.style.transition = 'all 1s ease';
  section2.style.transform = "translateX(".concat(y, ")");
  section2.style.transition = 'all 1s ease';
  section3.style.transform = "translateX(".concat(y, ")");
  section3.style.transition = 'all 1s ease';
  section4.style.transform = "translateX(".concat(y, ")");
  section4.style.transition = 'all 1s ease';
  section5.style.transform = "translateX(".concat(y, ")");
  section5.style.transition = 'all 1s ease';
}

header.onmouseenter = function () {
  clearInterval(intervalId);
};

header.onmouseleave = function () {
  intervalId = setInterval(autoSwitch, 3000);
};

checkPoints.onmouseenter = function () {
  clearInterval(intervalId);
};

checkPoints.onmouseleave = function () {
  intervalId = setInterval(autoSwitch, 3000);
};

/***/ }),

/***/ "./src/slider_test1/slider_test1.scss":
/*!********************************************!*\
  !*** ./src/slider_test1/slider_test1.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nC:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\css-loader\\dist\\cjs.js!C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\sass-loader\\lib\\loader.js!C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\src\\slider_test1\\slider_test1.scss:97\nexports = module.exports = __webpack_require____webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\"/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n                                                                                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nSyntaxError: missing ) after argument list\n    at new Script (vm.js:83:7)\n    at NativeCompileCache._moduleCompile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\v8-compile-cache\\v8-compile-cache.js:226:18)\n    at Module._compile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\v8-compile-cache\\v8-compile-cache.js:172:36)\n    at exec (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:47:10)\n    at childCompiler.runAsChild (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\mini-css-extract-plugin\\dist\\loader.js:126:14)\n    at compile (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:306:11)\n    at hooks.afterCompile.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:630:14)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at compilation.seal.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:627:30)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1325:35)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeChunkAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1316:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.additionalAssets.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1311:36)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at hooks.optimizeTree.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1307:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at Compilation.seal (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1244:27)\n    at hooks.make.callAsync.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compiler.js:624:17)\n    at _err0 (eval at create (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\tapable\\lib\\HookCodeFactory.js:32:10), <anonymous>:11:1)\n    at _addModuleChain (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1095:12)\n    at processModuleDependencies.err (C:\\Users\\admin 1\\Desktop\\npm_environment_webacademy\\node_modules\\webpack\\lib\\Compilation.js:1007:9)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 11:
/*!************************************************!*\
  !*** multi ./src/slider_test1/slider_test1.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/slider_test1/slider_test1.js */"./src/slider_test1/slider_test1.js");


/***/ })

}]);
//# sourceMappingURL=slider_test1~slider_test1.js.map