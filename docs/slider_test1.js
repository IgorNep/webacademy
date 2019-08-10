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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 11:
/*!************************************************!*\
  !*** multi ./src/slider_test1/slider_test1.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/slider_test1/slider_test1.js */"./src/slider_test1/slider_test1.js");


/***/ })

/******/ });
//# sourceMappingURL=slider_test1.js.map