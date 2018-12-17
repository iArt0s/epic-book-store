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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/addToPage.js":
/*!*************************************!*\
  !*** ./src/js/modules/addToPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n\n\nfunction addToPage(array, template) {\n  array.forEach(function (item) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, template);\n    document.querySelector(template.wrap).appendChild(card);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addToPage);\n\n//# sourceURL=webpack:///./src/js/modules/addToPage.js?");

/***/ }),

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.j-catalog__list',\n  tag: 'div',\n  tagClass: 'product-card-mini',\n  setContent: function setContent(item) {\n    return \"<article class=\\\"j-product-card-mini\\\">\\n          <a href=\\\"\\\" class=\\\"product-card-mini__img-wrap\\\">\\n          \\t<img src=\\\"img/books/\".concat(item.uri, \".png\\\" alt=\\\"\\\" class=\\\"product-card-mini__img\\\">\\n          </a>\\n          <h2 class=\\\"product-card-mini__title\\\"><a href=\\\"\\\">\").concat(item.name, \"</a></h2>\\n          <p class=\\\"product-card-mini__descr\\\">\").concat(item.desc, \"</p>\\n          <div class=\\\"product-card-mini__price\\\">\").concat(item.price, \"</div>\\n        </article>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(item, template) {\n  var card = document.createElement(template.tag);\n  card.classList.add(template.tagClass);\n  card.innerHTML = template.setContent(item);\n  return card;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/sendRequest.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sendRequest(data, onSuccess) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var responseObj = JSON.parse(xhr.responseText);\n      onSuccess(responseObj); // const request = JSON.parse(xhr.responseText);\n      // console.log(request);\n      // const wrap = document.querySelector(bookCardTemplate.wrap);\n      // if (wrap.children) {\n      // \twrap.innerHTML = '';\n      // }\n      // if (document.querySelector(bookCardTemplate.wrap)) {\n      // \taddToPage(request.items, bookCardTemplate)\n      // }\n    } else {\n      console.log(xhr.responseText);\n      console.log('ответ: ${xhr.readyState}');\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/modules/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addToPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addToPage.js */ \"./src/js/modules/addToPage.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/js/modules/sendRequest.js\");\n // import data from './modules/booksData.js';\n\n\n\nvar mySwiper = new Swiper('.swiper-container', {\n  // Optional parameters\n  direction: 'vertical',\n  loop: true,\n  // If we need pagination\n  pagination: {\n    el: '.swiper-pagination'\n  },\n  // Navigation arrows\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  },\n  // And if we need scrollbar\n  scrollbar: {\n    el: '.swiper-scrollbar'\n  }\n});\n\nfunction ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n}\n\n; //ajax obj\n\nvar data1 = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nvar wrap = document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\nif (wrap) {\n  var dataAjax = createDataAjax();\n  Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseObj) {\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    Object(_modules_addToPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  });\n} //listener\n\n\nvar tabsWrap = document.querySelector('.j-catalog__tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data1.type = event.target.dataset.type;\n    var dataAjax = createDataAjax();\n    Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseObj) {\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      Object(_modules_addToPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    });\n  });\n}); // create url get\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    data1.perPage = 8;\n  } else {\n    data1.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data1.page, \"/\").concat(data1.perPage, \"/\").concat(data1.type);\n}\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });