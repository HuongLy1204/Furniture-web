"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/du-an",{

/***/ "./components/works/ProjectItem.jsx":
/*!******************************************!*\
  !*** ./components/works/ProjectItem.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/components/works/ProjectItem.jsx\";\n\n\n\n\nfunction ProjectItem(props) {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n      direction: 'column',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n        variant: \"h6\",\n        children: [\"1. \", props.getProject.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n        variant: \"body1\",\n        m: 2,\n        children: props.getProject.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ImageList, {\n        variant: \"masonry\",\n        cols: 3,\n        gap: 8,\n        children: props.getProject.avatars.map(function (ava) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ImageListItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n              src: \"\".concat(ava.image_url, \"?w=248&fit=crop&auto=format\"),\n              srcSet: \"\".concat(ava.image_url, \"?w=248&fit=crop&auto=format&dpr=2 2x\"),\n              alt: ava.title,\n              loading: \"lazy\",\n              layout: \"fixed\",\n              height: 200,\n              width: 200\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 8\n            }, _this)\n          }, ava.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 7\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, this);\n}\n\n_c = ProjectItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dvcmtzL1Byb2plY3RJdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU00sV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDM0Isc0JBQ0MsOERBQUMsOENBQUQ7QUFBQSwyQkFDQyw4REFBQyxnREFBRDtBQUFPLGVBQVMsRUFBRSxRQUFsQjtBQUFBLDhCQUNDLDhEQUFDLHFEQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQUEsMEJBQTZCQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUMsOERBQUMscURBQUQ7QUFBWSxlQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBQyxFQUFFLENBQS9CO0FBQUEsa0JBQ0VGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkU7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBS0MsOERBQUMsb0RBQUQ7QUFBVyxlQUFPLEVBQUMsU0FBbkI7QUFBNkIsWUFBSSxFQUFFLENBQW5DO0FBQXNDLFdBQUcsRUFBRSxDQUEzQztBQUFBLGtCQUNFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLE9BQWpCLENBQXlCQyxHQUF6QixDQUE2QixVQUFDQyxHQUFEO0FBQUEsOEJBQzdCLDhEQUFDLHdEQUFEO0FBQUEsbUNBQ0MsOERBQUMsbURBQUQ7QUFDQyxpQkFBRyxZQUFLQSxHQUFHLENBQUNDLFNBQVQsZ0NBREo7QUFFQyxvQkFBTSxZQUFLRCxHQUFHLENBQUNDLFNBQVQseUNBRlA7QUFHQyxpQkFBRyxFQUFFRCxHQUFHLENBQUNKLEtBSFY7QUFJQyxxQkFBTyxFQUFDLE1BSlQ7QUFLQyxvQkFBTSxFQUFDLE9BTFI7QUFNQyxvQkFBTSxFQUFFLEdBTlQ7QUFPQyxtQkFBSyxFQUFFO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGFBQW9CSSxHQUFHLENBQUNFLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDZCO0FBQUEsU0FBN0I7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBeUJBOztLQTFCUVQ7QUEyQlQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93b3Jrcy9Qcm9qZWN0SXRlbS5qc3g/ZjA3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEltYWdlTGlzdCwgSW1hZ2VMaXN0SXRlbSwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIFByb2plY3RJdGVtKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PEJveD5cblx0XHRcdDxTdGFjayBkaXJlY3Rpb249eydjb2x1bW4nfT5cblx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+MS4ge3Byb3BzLmdldFByb2plY3QudGl0bGV9PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBtPXsyfT5cblx0XHRcdFx0XHR7cHJvcHMuZ2V0UHJvamVjdC5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8SW1hZ2VMaXN0IHZhcmlhbnQ9XCJtYXNvbnJ5XCIgY29scz17M30gZ2FwPXs4fT5cblx0XHRcdFx0XHR7cHJvcHMuZ2V0UHJvamVjdC5hdmF0YXJzLm1hcCgoYXZhKSA9PiAoXG5cdFx0XHRcdFx0XHQ8SW1hZ2VMaXN0SXRlbSBrZXk9e2F2YS5pZH0+XG5cdFx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdHNyYz17YCR7YXZhLmltYWdlX3VybH0/dz0yNDgmZml0PWNyb3AmYXV0bz1mb3JtYXRgfVxuXHRcdFx0XHRcdFx0XHRcdHNyY1NldD17YCR7YXZhLmltYWdlX3VybH0/dz0yNDgmZml0PWNyb3AmYXV0bz1mb3JtYXQmZHByPTIgMnhgfVxuXHRcdFx0XHRcdFx0XHRcdGFsdD17YXZhLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9XCJsYXp5XCJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ9J2ZpeGVkJ1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsyMDB9XG5cdFx0XHRcdFx0XHRcdD48L0ltYWdlPlxuXHRcdFx0XHRcdFx0PC9JbWFnZUxpc3RJdGVtPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L0ltYWdlTGlzdD5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9Cb3g+XG5cdClcbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJdGVtXG4iXSwibmFtZXMiOlsiQm94IiwiSW1hZ2VMaXN0IiwiSW1hZ2VMaXN0SXRlbSIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIkltYWdlIiwiUHJvamVjdEl0ZW0iLCJwcm9wcyIsImdldFByb2plY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXZhdGFycyIsIm1hcCIsImF2YSIsImltYWdlX3VybCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/works/ProjectItem.jsx\n");

/***/ })

});