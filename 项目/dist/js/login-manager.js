/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.container {\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 768px;\r\n    max-width: 100%;\r\n    min-height: 480px;\r\n}\r\n\r\n.container .data-container {\r\n    background: #fff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* padding: 0 50px; */\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-self: center;\r\n    text-align: center;\r\n    transition: all .5s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 50%;\r\n    z-index: 3;\r\n    height: 100%;\r\n}\r\n\r\n.sign-up-container {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 50%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n}\r\n\r\n.container .data-container .sign {\r\n    /* position: relative; */\r\n    padding: 0 50px;\r\n}\r\n\r\n.txtb {\r\n    position: relative;\r\n    border-bottom: 2px solid #adadad;\r\n    margin: 16px 0;\r\n}\r\n\r\n.txtb input {\r\n    font-size: 15px;\r\n    color: #333;\r\n    border: none;\r\n    width: 100%;\r\n    outline: none;\r\n    background: none;\r\n    padding: 0 3px;\r\n    height: 35px;\r\n}\r\n\r\n.txtb span:before {\r\n    content: attr(data-user);\r\n    font-size: 14px;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 35%;\r\n    transition: .5s;\r\n    color: #adadad;\r\n}\r\n\r\n.txtb span:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0%;\r\n    top: 100%;\r\n    width: 0%;\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n    height: 2px;\r\n    transition: .5s;\r\n}\r\n\r\n.focus+span::before {\r\n    top: -10px;\r\n}\r\n\r\n.focus+span::after {\r\n    width: 100%;\r\n}\r\n\r\n.prompt {\r\n    margin: 15px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.data-container button {\r\n    background: linear-gradient(120deg, #3498db, #8e44ad);\r\n    font-size: 12px;\r\n    margin-top: 15px;\r\n    padding: 12px 125px;\r\n    border-radius: 20px;\r\n    border: none;\r\n    background-size: 200%;\r\n    color: #fff;\r\n    transition: .5s;\r\n}\r\n\r\n.data-container button:hover {\r\n    background-size: 100%;\r\n}\r\n\r\n.overlay {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n    color: #fff;\r\n}\r\n\r\n.over-panel {\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 2;\r\n    transition: all .5s ease-in-out;\r\n}\r\n\r\n.over-left {\r\n    transform: translateY(-20%);\r\n    opacity: 0;\r\n}\r\n\r\n.over-right {\r\n    opacity: 1;\r\n    right: 0;\r\n    transform: translateY(0);\r\n}\r\n\r\n.ghost {\r\n    color: #fff;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    border: 1px solid #fff;\r\n    border-radius: 20px;\r\n    font-size: 12px;\r\n    padding: 12px 45px;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n}\r\n\r\np {\r\n    margin: 20px 0 35px;\r\n    font-size: 14px;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n\r\n\r\n.change .sign-in-container {\r\n    transform: translateX(100%);\r\n    z-index: 1;\r\n    opacity: 0;\r\n}\r\n\r\n.change .sign-up-container {\r\n    transform: translateX(100%);\r\n    opacity: 1;\r\n    z-index: 3;\r\n}\r\n\r\n.change .over-left {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n.change .over-right {\r\n    transform: translateY(20%);\r\n    opacity: 0;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/login.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/login.css":
/*!***************************!*\
  !*** ./src/css/login.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./login.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/login.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/css/login.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/login-manager.js":
/*!*********************************!*\
  !*** ./src/js/login-manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/login.css */ \"./src/css/login.css\");\n\r\nlet manager = ''\r\nlet password = ''\r\nlet input = document.querySelectorAll(\"input\")\r\nfor (let i = 0; i < input.length; i++) {\r\n    input[i].addEventListener(\"mouseenter\", () => {\r\n        input[i].classList.add(\"focus\")\r\n    })\r\n    input[i].addEventListener(\"mouseleave\", (e) => {\r\n        if (e.target.value === '')\r\n            input[i].classList.remove(\"focus\")\r\n    })\r\n}\r\n\r\nlet signup = document.querySelector('#signUp')\r\nsignup.addEventListener(\"click\", () => {\r\n    // console.log(11);\r\n    document.querySelector(\".container\").classList.add('change')\r\n})\r\n\r\nlet signin = document.querySelector(\"#signIn\")\r\nsignin.addEventListener(\"click\", () => {\r\n    // console.log(12);\r\n    document.querySelector(\".container\").classList.remove(\"change\")\r\n})\r\n\r\nlet input1 = document.querySelector(\"#manager\")\r\ninput1.addEventListener(\"mouseleave\", (e) => {\r\n    // console.log(e.target.value);\r\n    manager = e.target.value\r\n})\r\nlet input2 = document.querySelector(\"#password\")\r\ninput2.addEventListener(\"mouseleave\", (e) => {\r\n    // console.log(e.target.value);\r\n    password = e.target.value\r\n})\r\n// let signIn = document.querySelector(\".signin\")\r\n// signIn.addEventListener(\"click\", (e) => {\r\n//     let xhr = new XMLHttpRequest()\r\n//     xhr.open(\"POST\", \"http://119.91.210.79:3000/login\")\r\n//     xhr.addEventListener(\"loadend\", () => {\r\n//         const { msg, status } = JSON.parse(xhr.response)\r\n//         console.log(xhr.response);\r\n//         // console.log({ msg, status });\r\n//         if (msg === \"登录成功！\" && status === 1) {\r\n//             // alert('QGoffer等你来领喂');\r\n//             window.location.href = '../dist/users.html';\r\n//         }\r\n//         else\r\n//             alert('输个对的帐号密码？');\r\n//         // console.log(xhr.response);\r\n//     })\r\n//     xhr.setRequestHeader('Content-Type', 'application/json')\r\n//     const user = {\r\n//         username: username,\r\n//         password: password\r\n//     }\r\n//     const User = JSON.stringify(user)\r\n//     username = password = '1'\r\n//     console.log(username);\r\n//     console.log(password);\r\n//     input1.value = ''\r\n//     input2.value = ''\r\n//     xhr.send(User)\r\n// })\r\n// let input3 = document.querySelector(\"#manager1\")\r\n// input3.addEventListener(\"mouseleave\", (e) => {\r\n//     username = e.target.value\r\n// })\r\n// let input4 = document.querySelector(\"#password\")\r\n// input4.addEventListener(\"mouseleave\", (e) => {\r\n//     password = e.target.value\r\n// })\r\n// let signUp = document.querySelector(\".signup\")\r\n// signUp.addEventListener(\"click\", (e) => {\r\n//     console.log(username);\r\n//     console.log(password);\r\n//     console.log(username == password == '1');\r\n//     if (!username == '1' && !password == '1')\r\n//         alert('注册一下呗~');\r\n//     else\r\n//         alert('注册成功！');\r\n//     input3.value = ''\r\n//     input4.value = ''\r\n// })\r\n\r\n\r\nlet signIn = document.querySelector(\".signin\")\r\nsignIn.addEventListener(\"click\", (e) => {\r\n    let xhr = new XMLHttpRequest()\r\n    xhr.open(\"POST\", \"http://127.0.0.1:3456/dist/home-manager.html\")\r\n    xhr.addEventListener(\"loadend\", () => {\r\n        console.log(JSON.parse(xhr.response));\r\n        const { msg, status } = JSON.parse(xhr.response);\r\n        console.log(msg === 0 && status === 0);\r\n        console.log(msg === 1 && status === 200);\r\n        if (msg === 1 && status === 200) {\r\n            // alert(\"1\")\r\n            window.location.href = '../dist/home-manager.html';\r\n            login();\r\n        }\r\n        else {\r\n            manager = password = '1'\r\n            alert('输个对的帐号密码？');\r\n            input1.value = ''\r\n            input2.value = ''\r\n        }\r\n    })\r\n    xhr.setRequestHeader('Content-Type', 'application/json')\r\n    const user = {\r\n        manager: encodeURI(manager),\r\n        password: encodeURI(password)\r\n    }\r\n    const User = JSON.stringify(user)\r\n    xhr.send(User)\r\n})\r\nlogin();\r\nfunction login() {\r\n    //勾上就是用cookie进行记录用户名和密码\r\n    //要使用cookie\r\n    // console.log(document.getElementById(\"username\").value);\r\n    document.cookie = \"manager=\" + document.getElementById(\"manager\").value;\r\n    document.cookie = \"password=\" + document.getElementById(\"password\").value;\r\n    manager = password = '1'\r\n    input1.value = ''\r\n    input2.value = ''\r\n}\r\n\r\nlet input3 = document.querySelector(\"#manager1\")\r\ninput3.addEventListener(\"mouseleave\", (e) => {\r\n    manager = e.target.value\r\n})\r\nlet input4 = document.querySelector(\"#password1\")\r\ninput4.addEventListener(\"mouseleave\", (e) => {\r\n    password = e.target.value\r\n})\r\nlet signUp = document.querySelector(\".signup\")\r\nsignUp.addEventListener(\"click\", (e) => {\r\n    let xhr = new XMLHttpRequest()\r\n    xhr.open(\"POST\", \"http://127.0.0.1:3456/dist/home-manager.html\")\r\n    xhr.addEventListener(\"loadend\", () => {\r\n        // console.log(JSON.parse(xhr.response));\r\n        const { msg, status } = JSON.parse(xhr.response);\r\n        console.log(msg === 1 && status === 200);\r\n        if (msg === -1 && status === -1) {\r\n            alert(\"该用户名已存在！\");\r\n            input1.value = ''\r\n            input2.value = ''\r\n        }\r\n        else if (msg === 1 && status === 200) {\r\n            alert(\"欢迎加入QG大家庭~\")\r\n            window.location.href = '../dist/login-manager.html';\r\n            input1.value = ''\r\n            input2.value = ''\r\n        }\r\n    })\r\n    xhr.setRequestHeader('Content-Type', 'application/json')\r\n    const manage = {\r\n        manager: encodeURI(manager),\r\n        password: encodeURI(password)\r\n    }\r\n    const Manager = JSON.stringify(manage)\r\n    // xhr.send(User)\r\n    xhr.send(Manager);\r\n})\r\nlet prompt = document.querySelector(\".prompt\")\r\nprompt.addEventListener(\"click\", () => {\r\n    alert(\"用户名: qgqd     密码: qgqd\")\r\n})\n\n//# sourceURL=webpack:///./src/js/login-manager.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/login-manager.js");
/******/ 	
/******/ })()
;