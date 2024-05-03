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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n  font-family: \"Pixelify Sans\", sans-serif;\n  background-color: #38bdf8;\n}\n\n.board {\n  border: 1px solid black;\n  height: 73vh;\n  width: 42%;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  padding: 20px;\n  background-color: #1e3a8a;\n}\n\n.square {\n  border: 1px solid black;\n  background-color: #38bdf8;\n  margin: 2px;\n  font-size: 30px;\n}\n\n.all_boards {\n  display: flex;\n  min-height: 70vh;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.title_cont {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.board2 {\n  padding: 20px;\n  border: 1px solid black;\n  height: 73vh;\n  width: 42%;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin-left: 100px;\n  background-color: #1e3a8a;\n}\n\n.title {\n  font-size: 56px;\n}\n\n.text {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.btn_container {\n  margin-bottom: 40px;\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.rotate {\n  width: 150px;\n  height: 40px;\n  background-color: #f59e0b;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n}\n\n.winner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20vh;\n}\n\n.winner h1 {\n  font-size: 70px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   enemy_atack: () => (/* binding */ enemy_atack),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),\n/* harmony export */   isShipOverlap: () => (/* binding */ isShipOverlap),\n/* harmony export */   place_enemy_ships: () => (/* binding */ place_enemy_ships)\n/* harmony export */ });\n/* harmony import */ var _gamboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamboard */ \"./src/gamboard.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction isShipOverlap(ship, start, axis, board) {\n  for (let i = 0; i < ship.length; i++) {\n    const position = axis === \"x\" ? start + i : start + i * 10;\n    if (board.spaces[position]) {\n      return true; // Ship overlap detected\n    }\n  }\n  return false; // No overlap\n}\n\nfunction place_enemy_ships(ship, board, callback) {\n  let squares = document.querySelectorAll(\".board2 .square\");\n\n  const axis_options = [\"x\", \"y\"];\n  const random_axis = axis_options[getRandomInt(0, 1)];\n\n  let random_start = getRandomInt(0, 99);\n\n  let first_digit = random_start / 10;\n  let int_first_digit = parseInt(first_digit);\n  let row_end = int_first_digit * 10 + 9;\n\n  let second_digit = random_start % 10;\n  let column_end = second_digit + 90;\n\n  while (\n    (random_axis === \"x\" && random_start + ship.length > row_end) ||\n    (random_axis === \"y\" && random_start + ship.length * 10 > column_end) ||\n    isShipOverlap(ship, random_start, random_axis, board)\n  ) {\n    random_start = getRandomInt(0, 99);\n\n    first_digit = random_start / 10;\n    int_first_digit = parseInt(first_digit);\n    row_end = int_first_digit * 10 + 9;\n\n    second_digit = random_start % 10;\n    column_end = second_digit + 90;\n  }\n\n  for (let i = 0; i < ship.length; i++) {\n    const position =\n      random_axis === \"x\" ? random_start + i : random_start + i * 10;\n    board.spaces[position] = ship;\n  }\n  callback();\n}\n\nlet attacks = [];\n\nfunction enemy_atack(player, callback) {\n  let random_atack = getRandomInt(0, 99);\n\n  while (attacks.includes(random_atack)) {\n    random_atack = getRandomInt(0, 99);\n  }\n  attacks.push(random_atack);\n\n  ___WEBPACK_IMPORTED_MODULE_1__.gameboard1_new.recive_atack(random_atack, player);\n\n  callback();\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/enemy.js?");

/***/ }),

/***/ "./src/gamboard.js":
/*!*************************!*\
  !*** ./src/gamboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create_board: () => (/* binding */ create_board),\n/* harmony export */   create_board2: () => (/* binding */ create_board2),\n/* harmony export */   gameboard: () => (/* binding */ gameboard),\n/* harmony export */   visualize_ships: () => (/* binding */ visualize_ships)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nclass gameboard {\n  constructor() {\n    this.spaces = Array(100).fill(null);\n  }\n\n  place_ship(ship, axis, callback) {\n    let squares = document.querySelectorAll(\".board .square\");\n\n    const rotate = document.querySelector(\".rotate\");\n    rotate.addEventListener(\"click\", () => {\n      axis = axis === \"x\" ? \"y\" : \"x\";\n      let btn = document.querySelector(\".rotate\");\n\n      if (axis === \"x\") {\n        btn.textContent = \"rotate to y\";\n      } else {\n        btn.textContent = \"rotate to x\";\n      }\n    });\n\n    const clickHandler = (event) => {\n      let number = parseInt(event.target.dataset.position);\n\n      let first_digit = number / 10;\n      let int_first_digit = parseInt(first_digit);\n      let row_end = int_first_digit * 10 + 9;\n\n      let second_digit = number % 10;\n      let column_end = second_digit + 90;\n\n      if (axis === \"x\") {\n        let canPlaceShip = true;\n\n        for (let i = 0; i < ship.length; i++) {\n          if (this.spaces[number + i]) {\n            canPlaceShip = false;\n            break;\n          } else if (number + i > row_end) {\n            canPlaceShip = false;\n            break;\n          }\n        }\n\n        if (canPlaceShip) {\n          for (let i = 0; i < ship.length; i++) {\n            this.spaces[number + i] = ship;\n            squares[number + i].style.backgroundColor = \"orange\"; // Change color\n          }\n\n          squares.forEach((square) =>\n            square.removeEventListener(\"click\", clickHandler)\n          );\n          callback();\n        }\n      }\n\n      if (axis === \"y\") {\n        let canPlaceShip = true;\n\n        for (let i = 0; i < ship.length; i++) {\n          if (this.spaces[number + i * 10]) {\n            canPlaceShip = false;\n            break;\n          } else if (number + i * 10 > column_end) {\n            canPlaceShip = false;\n            break;\n          }\n        }\n\n        if (canPlaceShip) {\n          for (let i = 0; i < ship.length; i++) {\n            this.spaces[number + i * 10] = ship;\n            squares[number + i * 10].style.backgroundColor = \"orange\"; // Change color\n          }\n\n          squares.forEach((square) =>\n            square.removeEventListener(\"click\", clickHandler)\n          );\n          callback();\n        }\n      }\n    };\n\n    squares.forEach((square) => square.addEventListener(\"click\", clickHandler));\n  }\n\n  recive_atack(location, player) {\n    let squares;\n    if (player === 1) {\n      squares = document.querySelectorAll(\".board2 .square\");\n    } else {\n      squares = document.querySelectorAll(\".board .square\");\n    }\n\n    if (this.spaces[location]) {\n      let hit_ship = this.spaces[location];\n      hit_ship.hit();\n      hit_ship.is_sunk();\n      squares[location].style.backgroundColor = \"red\";\n    } else {\n      squares[location].style.backgroundColor = \"#1e3a8a\";\n      squares[location].style.border = \"none  \";\n    }\n  }\n\n  all_sunk(array) {\n    let count = 0;\n    for (let i = 0; i < array.length; i++) {\n      if (array[i].sunk === true) {\n        count++;\n      }\n    }\n    if (count === 5) {\n      return \"over\";\n    }\n  }\n}\n\nfunction create_board() {\n  const container = document.querySelector(\".board\");\n  let count = 0;\n\n  for (let i = 0; i < 100; i++) {\n    let div = document.createElement(\"div\");\n    div.classList.add(\"square\");\n    div.dataset.position = count;\n    container.appendChild(div);\n    count++;\n  }\n}\n\nfunction create_board2() {\n  const container = document.querySelector(\".board2\");\n  let count = 0;\n\n  for (let i = 0; i < 100; i++) {\n    let div = document.createElement(\"div\");\n    div.classList.add(\"square\");\n    div.dataset.position = count;\n    container.appendChild(div);\n    count++;\n  }\n}\n\nfunction visualize_ships(ship, axis, callback, aditional) {\n  console.log(ship.length);\n\n  const rotate = document.querySelector(\".rotate\");\n  const squares = document.querySelectorAll(\".board .square\");\n\n  // Remove existing event listeners\n  squares.forEach((square) => {\n    square.removeEventListener(\"click\", handleSquareClick);\n    square.removeEventListener(\"mouseover\", handleMouseOver);\n    square.removeEventListener(\"mouseout\", handleMouseOut);\n  });\n\n  rotate.addEventListener(\"click\", () => {\n    axis = axis === \"x\" ? \"y\" : \"x\";\n  });\n\n  function handleSquareClick(event) {\n    let data = parseInt(event.target.dataset.position);\n\n    let first_digit = data / 10;\n    let int_first_digit = parseInt(first_digit);\n    let row_end = int_first_digit * 10 + 9;\n\n    let second_digit = data % 10;\n    let column_end = second_digit + 90;\n\n    let can_callback = true;\n\n    for (let i = 0; i < ship.length; i++) {\n      if (axis === \"x\") {\n        if (\n          data + i > row_end ||\n          squares[data + i].style.backgroundColor === \"orange\"\n        ) {\n          can_callback = false;\n        }\n      } else if (axis === \"y\") {\n        if (\n          data + i * 10 > column_end ||\n          squares[data + i * 10].style.backgroundColor === \"orange\"\n        ) {\n          can_callback = false;\n        }\n      }\n    }\n\n    if (can_callback === true) {\n      callback();\n      squares.forEach((square) => {\n        square.removeEventListener(\"click\", handleSquareClick);\n        square.removeEventListener(\"mouseover\", handleMouseOver);\n        square.removeEventListener(\"mouseout\", handleMouseOut);\n      });\n    }\n    // Pass the event object to the callback\n  }\n\n  function handleMouseOver(event) {\n    let data = parseInt(event.target.dataset.position);\n\n    let first_digit = data / 10;\n    let int_first_digit = parseInt(first_digit);\n    let row_end = int_first_digit * 10 + 9;\n\n    let second_digit = data % 10;\n    let column_end = second_digit + 90;\n\n    for (let i = 0; i < ship.length; i++) {\n      if (axis === \"x\") {\n        if (\n          data + i > row_end ||\n          squares[data + i].style.backgroundColor === \"orange\"\n        ) {\n          break;\n        }\n        squares[data + i].style.backgroundColor = \"black\";\n      } else if (axis === \"y\") {\n        if (\n          data + i * 10 > column_end ||\n          squares[data + i * 10].style.backgroundColor === \"orange\"\n        ) {\n          break;\n        }\n        squares[data + i * 10].style.backgroundColor = \"black\";\n      }\n    }\n  }\n\n  function handleMouseOut(event) {\n    let data = parseInt(event.target.dataset.position);\n\n    for (let i = 0; i < ship.length; i++) {\n      if (\n        axis === \"x\" &&\n        squares[data + i].style.backgroundColor !== \"orange\"\n      ) {\n        squares[data + i].style.backgroundColor = \"\"; // Reset to default color\n      } else if (\n        axis === \"y\" &&\n        squares[data + i * 10].style.backgroundColor !== \"orange\"\n      ) {\n        if (squares[data + i * 10].style.backgroundColor === \"orange\") {\n          break;\n        }\n        squares[data + i * 10].style.backgroundColor = \"\";\n      }\n    }\n  }\n\n  // Add new event listeners\n  squares.forEach((square) => {\n    square.addEventListener(\"click\", handleSquareClick);\n    square.addEventListener(\"mouseover\", handleMouseOver);\n    square.addEventListener(\"mouseout\", handleMouseOut);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/gamboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_enemy_ships: () => (/* binding */ all_enemy_ships),\n/* harmony export */   all_ships: () => (/* binding */ all_ships),\n/* harmony export */   gameboard1_new: () => (/* binding */ gameboard1_new),\n/* harmony export */   gameboard2_new: () => (/* binding */ gameboard2_new)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _gamboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamboard */ \"./src/gamboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\n\n\n\n\nlet ship5 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(5);\nlet ship4 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(4);\nlet ship3 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(3);\nlet ship2 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(2);\nlet ship1 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(1);\nlet all_ships = [ship5, ship4, ship3, ship2, ship1];\n\nlet ship_enemy5 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(5);\nlet ship_enemy4 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(4);\nlet ship_enemy3 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(3);\nlet ship_enemy2 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(2);\nlet ship_enemy1 = new _ship__WEBPACK_IMPORTED_MODULE_2__.ship(1);\nlet all_enemy_ships = [\n  ship_enemy5,\n  ship_enemy4,\n  ship_enemy3,\n  ship_enemy2,\n  ship_enemy1,\n];\n\n(0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.create_board)();\n(0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.create_board2)();\n\nconst gameboard1_new = new _gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard();\nconst gameboard2_new = new _gamboard__WEBPACK_IMPORTED_MODULE_1__.gameboard();\n\n(0,_enemy__WEBPACK_IMPORTED_MODULE_4__.place_enemy_ships)(ship_enemy5, gameboard2_new, () => {\n  (0,_enemy__WEBPACK_IMPORTED_MODULE_4__.place_enemy_ships)(ship_enemy4, gameboard2_new, () => {\n    (0,_enemy__WEBPACK_IMPORTED_MODULE_4__.place_enemy_ships)(ship_enemy3, gameboard2_new, () => {\n      (0,_enemy__WEBPACK_IMPORTED_MODULE_4__.place_enemy_ships)(ship_enemy2, gameboard2_new, () => {\n        (0,_enemy__WEBPACK_IMPORTED_MODULE_4__.place_enemy_ships)(ship_enemy1, gameboard2_new, () => {});\n      });\n    });\n  });\n});\n\n(0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.visualize_ships)(ship5, ship5.axis, () => {\n  (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.visualize_ships)(ship4, ship4.axis, () => {\n    (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.visualize_ships)(ship3, ship3.axis, () => {\n      (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.visualize_ships)(ship2, ship2.axis, () => {\n        (0,_gamboard__WEBPACK_IMPORTED_MODULE_1__.visualize_ships)(ship1, ship1.axis, () => {});\n      });\n    });\n  });\n});\n\nlet current_ship = ship5;\n\ngameboard1_new.place_ship(ship5, ship5.axis, () => {\n  current_ship = ship4;\n  gameboard1_new.place_ship(ship4, ship4.axis, () => {\n    current_ship = ship3;\n    gameboard1_new.place_ship(ship3, ship3.axis, () => {\n      current_ship = ship2;\n      gameboard1_new.place_ship(ship2, ship2.axis, () => {\n        current_ship = ship1;\n        gameboard1_new.place_ship(ship1, ship1.axis, () => {\n          let btn = document.querySelector(\".rotate\");\n          btn.remove();\n\n          let text = document.querySelector(\"#text_content\");\n          text.textContent = \"Attack!\";\n          (0,_player__WEBPACK_IMPORTED_MODULE_3__.start_game)();\n        });\n      });\n    });\n  });\n});\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   current_player: () => (/* binding */ current_player),\n/* harmony export */   handle_click: () => (/* binding */ handle_click),\n/* harmony export */   player: () => (/* binding */ player),\n/* harmony export */   start_game: () => (/* binding */ start_game)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n\n\n\nclass player {\n  constructor(turn) {\n    this.turn = turn;\n  }\n}\n\nlet current_player;\ncurrent_player = new player(1);\nlet game_ended = false;\n\nconst player2_board = document.querySelector(\".board2\");\nplayer2_board.addEventListener(\"click\", (event) => {\n  if (current_player.turn === 1) {\n    handle_click(event);\n  }\n});\n\nfunction start_game() {\n  if (game_ended === true) {\n    return;\n  }\n\n  if (current_player.turn === 2) {\n    (0,_enemy__WEBPACK_IMPORTED_MODULE_1__.enemy_atack)(current_player.turn, () => {\n      // Continue the game after the enemy's attack\n      handle_enemy_turn();\n    });\n  }\n}\n\nlet shots1 = [];\n\nfunction handle_click(event) {\n  let location = parseInt(event.target.dataset.position);\n\n  if (current_player.turn === 1 && !shots1.includes(location)) {\n    shots1.push(location);\n    ___WEBPACK_IMPORTED_MODULE_0__.gameboard2_new.recive_atack(location, current_player.turn);\n  } else {\n    // Location has already been attacked, do nothing or show a message\n    return;\n  }\n\n  if (___WEBPACK_IMPORTED_MODULE_0__.gameboard2_new.all_sunk(___WEBPACK_IMPORTED_MODULE_0__.all_ships) === \"over\") {\n    alert(\"Player 2 wins!\");\n    game_ended = true;\n  } else {\n    current_player.turn = current_player.turn === 1 ? 2 : 1;\n    start_game();\n  }\n}\n\nfunction handle_enemy_turn() {\n  if (___WEBPACK_IMPORTED_MODULE_0__.gameboard1_new.all_sunk(___WEBPACK_IMPORTED_MODULE_0__.all_enemy_ships) === \"over\") {\n    let h1 = document.createElement(\"h1\");\n    h1.textContent = \"You Won!\";\n    let all_boards = document.querySelector(\".all_boards\");\n    all_boards.remove();\n\n    let title = document.querySelector(\".text\");\n    title.remove();\n\n    let winner = document.querySelector(\".winner\");\n    winner.appendChild(h1);\n    game_ended = true;\n  } else if (___WEBPACK_IMPORTED_MODULE_0__.gameboard2_new.all_sunk(___WEBPACK_IMPORTED_MODULE_0__.all_ships) === \"over\") {\n    let h1 = document.createElement(\"h1\");\n    h1.textContent = \"cpu Won!\";\n    let all_boards = document.querySelector(\".all_boards\");\n    all_boards.remove();\n\n    let title = document.querySelector(\".text\");\n    title.remove();\n\n    let winner = document.querySelector(\".winner\");\n    winner.appendChild(h1);\n  } else {\n    current_player.turn = 1;\n    start_game();\n  }\n}\n\n\n\n//# sourceURL=webpack://odin-todo/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nclass ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n    this.sunk = false;\n    this.axis = \"x\"\n    this.placed = false\n  }\n\n  hit() {\n    this.hits++;\n  }\n\n  is_sunk() {\n    if (this.hits === this.length) {\n      this.sunk = true;\n    } else {\n      return;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/ship.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;