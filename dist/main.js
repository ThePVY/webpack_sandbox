/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function Stack() {\r\n  const stack = []\r\n  let last = 0\r\n\r\n  this.push = function(item) {\r\n    return stack[last++] = item\r\n  }\r\n\r\n  this.pop = function() {\r\n    return stack.splice(--last, 1)\r\n  }\r\n\r\n  this.peek = function() {\r\n    return stack[last]\r\n  }\r\n\r\n  this.getStack = () => stack\r\n}\r\n\r\nlet st = new Stack()\r\n\r\nconsole.log('-----')\r\n\r\nconsole.log('peek:', st.peek())\r\n\r\nconsole.log(st.push('0'))\r\nconsole.log(st.push('1'))\r\nconsole.log(st.push('2'))\r\n\r\nconsole.log('stack:', st.getStack())\r\nconsole.log('peek:', st.peek())\r\n\r\nconsole.log(st.pop())\r\nconsole.log(st.pop())\r\nconsole.log(st.pop())\r\nconsole.log(st.pop())\r\nconsole.log(st.pop())\r\n\r\nconsole.log('stack:', st.getStack())\r\nconsole.log('peek:', st.peek())\r\n\r\n\r\n\n\n//# sourceURL=webpack://sandbox/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;