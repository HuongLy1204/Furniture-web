"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/san-pham/[name]",{

/***/ "./components/common/header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/common/header/Header.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _productlist_productSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productlist/productSlice */ \"./components/common/productlist/productSlice.js\");\n/* harmony import */ var _Header_desktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header-desktop */ \"./components/common/header/Header-desktop.jsx\");\n/* harmony import */ var _Header_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header-mobile */ \"./components/common/header/Header-mobile.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/components/common/header/Header.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log('llyyyy'); // productsApi.getAll().then((response) => setData(response))\n\n    var actionResult = dispatch((0,_productlist_productSlice__WEBPACK_IMPORTED_MODULE_2__.productsThunk)());\n    var currentProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.unwrapResult)(actionResult);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_desktop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_mobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Header, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvSGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTTSxNQUFULEdBQWtCO0FBQUE7O0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0wsd0RBQVcsRUFBNUI7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFEZSxDQUVmOztBQUNBLFFBQU1DLFlBQVksR0FBR0gsUUFBUSxDQUFDSix3RUFBYSxFQUFkLENBQTdCO0FBQ0EsUUFBTVEsY0FBYyxHQUFHWCw4REFBWSxDQUFDVSxZQUFELENBQW5DO0FBQ0EsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1BLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0MsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUEsa0JBREQ7QUFPQTs7R0FoQnVCSjtVQUNOSjs7O0tBRE1JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9IZWFkZXIuanN4PzM0ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW53cmFwUmVzdWx0IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHByb2R1Y3RzVGh1bmsgfSBmcm9tICcuLi9wcm9kdWN0bGlzdC9wcm9kdWN0U2xpY2UnXG5pbXBvcnQgSGVhZGVyRGVza3RvcCBmcm9tICcuL0hlYWRlci1kZXNrdG9wJ1xuaW1wb3J0IEhlYWRlck1vYmlsZSBmcm9tICcuL0hlYWRlci1tb2JpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZygnbGx5eXl5Jylcblx0XHQvLyBwcm9kdWN0c0FwaS5nZXRBbGwoKS50aGVuKChyZXNwb25zZSkgPT4gc2V0RGF0YShyZXNwb25zZSkpXG5cdFx0Y29uc3QgYWN0aW9uUmVzdWx0ID0gZGlzcGF0Y2gocHJvZHVjdHNUaHVuaygpKVxuXHRcdGNvbnN0IGN1cnJlbnRQcm9kdWN0ID0gdW53cmFwUmVzdWx0KGFjdGlvblJlc3VsdClcblx0fSwgW10pXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXJEZXNrdG9wIC8+XG5cblx0XHRcdDxIZWFkZXJNb2JpbGUgLz5cblx0XHQ8Lz5cblx0KVxufVxuIl0sIm5hbWVzIjpbInVud3JhcFJlc3VsdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwicHJvZHVjdHNUaHVuayIsIkhlYWRlckRlc2t0b3AiLCJIZWFkZXJNb2JpbGUiLCJIZWFkZXIiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25SZXN1bHQiLCJjdXJyZW50UHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/header/Header.jsx\n");

/***/ })

});