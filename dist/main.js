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

/***/ "./modules/check-completed.js":
/*!************************************!*\
  !*** ./modules/check-completed.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n\r\n\r\n\r\nconst checkCompleted = (nod) => {\r\n  const checker = nod.querySelector(\"input\");\r\n\r\n  const indexHolder = Number(nod.dataset.index);\r\n  const descriptionHolder = nod.querySelector(\".description\");\r\n\r\n  if (checker.checked) {\r\n    nod.dataset.completed = true;\r\n    _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((e) => {\r\n      if (e.index === indexHolder) {\r\n        e.completed = true;\r\n      }\r\n    });\r\n    descriptionHolder.classList.add(\"cross-out\");\r\n  } else {\r\n    nod.dataset.completed = false;\r\n    _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((e) => {\r\n      if (e.index === indexHolder) {\r\n        e.completed = false;\r\n      }\r\n    });\r\n    descriptionHolder.classList.remove(\"cross-out\");\r\n  }\r\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCompleted);\r\n\n\n//# sourceURL=webpack://webpack/./modules/check-completed.js?");

/***/ }),

/***/ "./modules/create-task-node.js":
/*!*************************************!*\
  !*** ./modules/create-task-node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_task_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-task-node.js */ \"./modules/remove-task-node.js\");\n/* harmony import */ var _edit_existing_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-existing-task.js */ \"./modules/edit-existing-task.js\");\n/* harmony import */ var _check_completed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-completed.js */ \"./modules/check-completed.js\");\n\r\n\r\n\r\n\r\nconst taskNode = (obj) => {\r\n  const newTask = document.createElement(\"div\");\r\n  const newTaskContainer = document.createElement(\"div\");\r\n\r\n  const checkMarkInput = document.createElement(\"input\");\r\n  const objDescription = document.createElement(\"span\");\r\n  const taskController = document.createElement(\"i\");\r\n\r\n  checkMarkInput.type = \"checkbox\";\r\n  objDescription.innerText = `${obj.description}`;\r\n  taskController.classList.add(\r\n    \"fa-solid\",\r\n    \"fa-ellipsis-vertical\",\r\n    \"make-task-controller-accessible\"\r\n  );\r\n  objDescription.classList.add(\"description\");\r\n\r\n  taskController.onmouseover = () => {\r\n    taskController.classList.remove(\"fa-solid\", \"fa-ellipsis-vertical\");\r\n    taskController.classList.add(\"fa-solid\", \"fa-trash\");\r\n  };\r\n\r\n  taskController.onmouseout = () => {\r\n    taskController.classList.remove(\"fa-solid\", \"fa-trash\");\r\n    taskController.classList.add(\"fa-solid\", \"fa-ellipsis-vertical\");\r\n  };\r\n\r\n  newTaskContainer.appendChild(checkMarkInput);\r\n  newTaskContainer.appendChild(objDescription);\r\n\r\n  newTask.appendChild(newTaskContainer);\r\n  newTask.appendChild(taskController);\r\n\r\n  newTask.dataset.index = obj.index;\r\n  newTask.dataset.completed = obj.completed;\r\n  newTask.classList.add(\"make-flex\");\r\n\r\n  taskController.addEventListener(\"click\", () => {\r\n    (0,_remove_task_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj.index, newTask);\r\n  });\r\n\r\n  objDescription.addEventListener(\"click\", () => {\r\n    (0,_edit_existing_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(objDescription, newTask.dataset.index);\r\n  });\r\n\r\n  checkMarkInput.addEventListener(\"change\", () => {\r\n    (0,_check_completed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newTask);\r\n  });\r\n\r\n  if (obj.completed) {\r\n    checkMarkInput.checked = true;\r\n    objDescription.classList.add(\"cross-out\");\r\n  }\r\n\r\n  return newTask;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskNode);\r\n\n\n//# sourceURL=webpack://webpack/./modules/create-task-node.js?");

/***/ }),

/***/ "./modules/create-tasks-array.js":
/*!***************************************!*\
  !*** ./modules/create-tasks-array.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"populateAllTaskArray\": () => (/* binding */ populateAllTaskArray)\n/* harmony export */ });\n/* harmony import */ var _task_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-template.js */ \"./modules/task-template.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./re-order-tasks.js */ \"./modules/re-order-tasks.js\");\n/* harmony import */ var _display_task_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-task-node.js */ \"./modules/display-task-node.js\");\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst populateAllTaskArray = (describe) => {\r\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n  const newTaskObject = new _task_template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](describe);\r\n  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].push(newTaskObject);\r\n  (0,_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n  (0,_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newTaskObject);\r\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateAllTaskArray);\r\n\n\n//# sourceURL=webpack://webpack/./modules/create-tasks-array.js?");

/***/ }),

/***/ "./modules/display-task-node.js":
/*!**************************************!*\
  !*** ./modules/display-task-node.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _create_task_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task-node.js */ \"./modules/create-task-node.js\");\n\r\n\r\nconst toDoList = document.querySelector(\"#to-do-list\");\r\n\r\nconst displayTaskNode = (obj) => {\r\n  const separator = document.createElement(\"hr\");\r\n  const taskReturn = (0,_create_task_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\r\n  toDoList.appendChild(taskReturn);\r\n  taskReturn.after(separator);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTaskNode);\r\n\n\n//# sourceURL=webpack://webpack/./modules/display-task-node.js?");

/***/ }),

/***/ "./modules/dynamic-storage-update.js":
/*!*******************************************!*\
  !*** ./modules/dynamic-storage-update.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst localStorageUpdate = (storeArr) => {\r\n  localStorage.setItem(\"taskStorageArray\", JSON.stringify(storeArr));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageUpdate);\r\n\n\n//# sourceURL=webpack://webpack/./modules/dynamic-storage-update.js?");

/***/ }),

/***/ "./modules/edit-existing-task.js":
/*!***************************************!*\
  !*** ./modules/edit-existing-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n\r\n\r\n\r\nconst editTask = (obj, indx) => {\r\n  obj.contentEditable = \"true\";\r\n  obj.onkeydown = (event) => {\r\n    if (event.key === \"Enter\") {\r\n      obj.contentEditable = \"false\";\r\n      _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((e) => {\r\n        if (e.index === Number(indx)) {\r\n          e.description = obj.innerText;\r\n        }\r\n      });\r\n      (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    }\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\r\n\n\n//# sourceURL=webpack://webpack/./modules/edit-existing-task.js?");

/***/ }),

/***/ "./modules/re-order-tasks.js":
/*!***********************************!*\
  !*** ./modules/re-order-tasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reOrderTasks = (arr) => {\r\n  let indexer = 1;\r\n  arr.forEach((e) => {\r\n    e.index = indexer;\r\n    indexer += 1;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reOrderTasks);\r\n\n\n//# sourceURL=webpack://webpack/./modules/re-order-tasks.js?");

/***/ }),

/***/ "./modules/remove-task-node.js":
/*!*************************************!*\
  !*** ./modules/remove-task-node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./re-order-tasks.js */ \"./modules/re-order-tasks.js\");\n\r\n\r\n\r\n\r\nconst removeNode = (obj, currNode) => {\r\n  let flag = 0;\r\n  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((e) => {\r\n    if (e.index === obj) {\r\n      flag = _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOf(e);\r\n      currNode.parentNode.removeChild(currNode.nextSibling);\r\n      currNode.parentNode.removeChild(currNode);\r\n    }\r\n  });\r\n  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(flag, 1);\r\n  (0,_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeNode);\r\n\n\n//# sourceURL=webpack://webpack/./modules/remove-task-node.js?");

/***/ }),

/***/ "./modules/task-template.js":
/*!**********************************!*\
  !*** ./modules/task-template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewTaskTemplate {\r\n  constructor(str, boole = false, num = 0) {\r\n    this.description = str;\r\n    this.completed = boole;\r\n    this.index = num;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskTemplate);\r\n\n\n//# sourceURL=webpack://webpack/./modules/task-template.js?");

/***/ }),

/***/ "./modules/tasks-array-module.js":
/*!***************************************!*\
  !*** ./modules/tasks-array-module.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst allTask = JSON.parse(localStorage.getItem(\"taskStorageArray\")) || [];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTask);\r\n\n\n//# sourceURL=webpack://webpack/./modules/tasks-array-module.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: cursive;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.to-do-list-app-container {\\r\\n  border: 5px solid black;\\r\\n  width: 60vw;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: 3rem;\\r\\n}\\r\\n\\r\\n.make-flex {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  height: 3rem;\\r\\n  align-items: center;\\r\\n  padding-left: 1rem;\\r\\n  padding-right: 1rem;\\r\\n}\\r\\n\\r\\n#add-new-task {\\r\\n  height: 3rem;\\r\\n  width: 100%;\\r\\n  padding-left: 1rem;\\r\\n  padding-right: 1rem;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#app-label-tag {\\r\\n  height: 3rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding-left: 1rem;\\r\\n  padding-right: 1rem;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  margin-left: 1rem;\\r\\n  max-width: 40%;\\r\\n  padding-top: 0.5rem;\\r\\n  padding-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.cross-out {\\r\\n  text-decoration: line-through;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.make-task-controller-accessible {\\r\\n  width: 2rem;\\r\\n  height: 80%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#clear-all-completed {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  height: 3rem;\\r\\n  background-color: rgba(128, 128, 128, 0.521);\\r\\n}\\r\\n\\r\\n#clr-completed-btn {\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  background-color: rgba(128, 128, 128, 0);\\r\\n  border: none;\\r\\n  padding: 0.5rem;\\r\\n  font-weight: 550;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks-array-module.js */ \"./modules/tasks-array-module.js\");\n/* harmony import */ var _modules_create_tasks_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/create-tasks-array.js */ \"./modules/create-tasks-array.js\");\n/* harmony import */ var _modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/display-task-node.js */ \"./modules/display-task-node.js\");\n/* harmony import */ var _modules_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/dynamic-storage-update.js */ \"./modules/dynamic-storage-update.js\");\n/* harmony import */ var _modules_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/re-order-tasks.js */ \"./modules/re-order-tasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskInput = document.querySelector(\"#add-new-task\");\r\nconst resetBtn = document.querySelector(\"#reset-button\");\r\nconst clearCompleted = document.querySelector(\"#clr-completed-btn\");\r\n\r\n_modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((e) => {\r\n  (0,_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\r\n});\r\n\r\ntaskInput.addEventListener(\"keydown\", (event) => {\r\n  if (event.key === \"Enter\") {\r\n    if (taskInput.value.length <= 1) {\r\n      return;\r\n    }\r\n    (0,_modules_create_tasks_array_js__WEBPACK_IMPORTED_MODULE_2__.populateAllTaskArray)(taskInput.value);\r\n    taskInput.value = \"\";\r\n  }\r\n});\r\n\r\nresetBtn.addEventListener(\"click\", () => {\r\n  localStorage.clear();\r\n  _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(_modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0]);\r\n  while (_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.firstChild) {\r\n    _modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.removeChild(_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.lastChild);\r\n  }\r\n});\r\n\r\nclearCompleted.addEventListener(\"click\", () => {\r\n  const filterComplete = _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((e) => e.completed === false);\r\n  (0,_modules_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(filterComplete);\r\n  (0,_modules_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(filterComplete);\r\n\r\n  window.location.reload();\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;