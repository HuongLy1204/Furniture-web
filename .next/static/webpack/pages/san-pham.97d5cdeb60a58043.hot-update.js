"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/san-pham",{

/***/ "./pages/san-pham/index.js":
/*!*********************************!*\
  !*** ./pages/san-pham/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductPage; }\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_common_productlist_product_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/common/productlist/product-list */ \"./components/common/productlist/product-list.js\");\n/* harmony import */ var _components_common_productlist_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/productlist/ProductItem */ \"./components/common/productlist/ProductItem.jsx\");\n/* harmony import */ var _components_filter_bar_filterBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/filter-bar/filterBar */ \"./components/filter-bar/filterBar.js\");\n/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/main */ \"./components/layout/main.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/pages/san-pham/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ProductPage() {\n  _s();\n\n  var _this = this;\n\n  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {\n    return state.products.current;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n      direction: 'row',\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        bgcolor: \"yellow\",\n        ml: 5,\n        mr: 5,\n        width: \"100%\",\n        my: {\n          sx: 0,\n          lg: 20\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n          direction: \"column\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n            mb: 3,\n            fontSize: 24,\n            fontWeight: 'bolder',\n            children: \"DANH M\\u1EE4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 7\n          }, this), data.map(function (category) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n              width: \"100%\",\n              bgcolor: \"red\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_filter_bar_filterBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                dataCategory: category\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 9\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                display: \"inline\",\n                mt: 1,\n                ml: 1\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 9\n              }, _this)]\n            }, category.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 8\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, this);\n}\n\n_s(ProductPage, \"0jBbmNjfXnGYIThfZPLXiFYV2+k=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector];\n});\n\n_c = ProductPage;\n{\n  /* <Grid\n  \t\t\t\t\t\t\t\t\tcontainer\n  \t\t\t\t\t\t\t\t\talignItems=\"center\"\n  \t\t\t\t\t\t\t\t\tspacing={{ xs: 2, md: 1 }}\n  \t\t\t\t\t\t\t\t\tcolumns={{ xs: 4, sm: 8, md: 12 }}\n  \t\t\t\t\t\t\t\t>\n  \t\t\t\t\t\t\t\t\t{category.products.map((product) => \n  \t\t\t\t\t\t\t\t\t\t// <Grid my={2} item xs={2} sm={4} md={4} key={product.id}>\n  \t\t\t\t\t\t\t\t\t\t<Box key={product.id}> \n  \t\t\t\t\t\t\t\t\t\t\t <ProductItem dataItem={product}></ProductItem> \n  \t\t\t\t\t\t\t\t\t\t</Box>\n  \t\t\t\t\t\t\t\t\t\t// </Grid>\n  \t\t\t\t\t\t\t\t\t\t)}\n  \t\t\t\t\t\t\t\t</Grid> */\n}\nProductPage.Layout = _components_layout_main__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zYW4tcGhhbS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU1MsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUNyQyxNQUFNQyxJQUFJLEdBQUdOLHdEQUFXLENBQUMsVUFBQ08sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUExQjtBQUFBLEdBQUQsQ0FBeEI7QUFFQSxzQkFDQyw4REFBQyw0Q0FBRDtBQUFBLDJCQUNDLDhEQUFDLGdEQUFEO0FBQU8sZUFBUyxFQUFFLEtBQWxCO0FBQUEsNkJBQ0MsOERBQUMsNENBQUQ7QUFBSyxlQUFPLEVBQUUsUUFBZDtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBK0IsVUFBRSxFQUFFLENBQW5DO0FBQXNDLGFBQUssRUFBQyxNQUE1QztBQUFtRCxVQUFFLEVBQUU7QUFBRUMsVUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsVUFBQUEsRUFBRSxFQUFFO0FBQWIsU0FBdkQ7QUFBQSwrQkFDQyw4REFBQyxnREFBRDtBQUFPLG1CQUFTLEVBQUMsUUFBakI7QUFBQSxrQ0FDQyw4REFBQyxxREFBRDtBQUFZLGNBQUUsRUFBRSxDQUFoQjtBQUFtQixvQkFBUSxFQUFFLEVBQTdCO0FBQWlDLHNCQUFVLEVBQUUsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsRUFJRUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsUUFBRDtBQUFBLGdDQUNULDhEQUFDLDRDQUFEO0FBQUssbUJBQUssRUFBQyxNQUFYO0FBQWtCLHFCQUFPLEVBQUUsS0FBM0I7QUFBQSxzQ0FDQyw4REFBQyx3RUFBRDtBQUFXLDRCQUFZLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFFQyw4REFBQyw0Q0FBRDtBQUFLLHVCQUFPLEVBQUMsUUFBYjtBQUFzQixrQkFBRSxFQUFFLENBQTFCO0FBQTZCLGtCQUFFLEVBQUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRDtBQUFBLGVBQXVDQSxRQUFRLENBQUNDLEVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFULENBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFzQkE7O0dBekJ1QlQ7VUFDVkw7OztLQURVSztBQTBCeEI7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFFREEsV0FBVyxDQUFDVSxNQUFaLEdBQXFCWCwrREFBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FuLXBoYW0vaW5kZXguanM/NGMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBQUk9EVUNUX0xJU1QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0bGlzdC9wcm9kdWN0LWxpc3QnXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vcHJvZHVjdGxpc3QvUHJvZHVjdEl0ZW0nXG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsdGVyLWJhci9maWx0ZXJCYXInXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9tYWluJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSgpIHtcblx0Y29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMuY3VycmVudClcblxuXHRyZXR1cm4gKFxuXHRcdDxCb3g+XG5cdFx0XHQ8U3RhY2sgZGlyZWN0aW9uPXsncm93J30+XG5cdFx0XHRcdDxCb3ggYmdjb2xvcj17XCJ5ZWxsb3dcIn0gbWw9ezV9IG1yPXs1fSB3aWR0aD1cIjEwMCVcIiBteT17eyBzeDogMCwgbGc6IDIwIH19PlxuXHRcdFx0XHRcdDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IG1iPXszfSBmb250U2l6ZT17MjR9IGZvbnRXZWlnaHQ9eydib2xkZXInfT5cblx0XHRcdFx0XHRcdFx0REFOSCBN4bukQ1xuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdFx0e2RhdGEubWFwKChjYXRlZ29yeSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Qm94IHdpZHRoPVwiMTAwJVwiIGJnY29sb3I9e1wicmVkXCJ9IGtleT17Y2F0ZWdvcnkuaWR9PlxuXHRcdFx0XHRcdFx0XHRcdDxGaWx0ZXJCYXIgZGF0YUNhdGVnb3J5PXtjYXRlZ29yeX0+PC9GaWx0ZXJCYXI+XG5cdFx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiaW5saW5lXCIgbXQ9ezF9IG1sPXsxfT48L0JveD5cblx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHQpKX1cblxuXG5cdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFxuXHRcdFx0PC9TdGFjaz5cblx0XHQ8L0JveD5cblx0KVxufVxue1xuXHQvKiA8R3JpZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAxIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbHVtbnM9e3sgeHM6IDQsIHNtOiA4LCBtZDogMTIgfX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5LnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gPEdyaWQgbXk9ezJ9IGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0ga2V5PXtwcm9kdWN0LmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGtleT17cHJvZHVjdC5pZH0+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxQcm9kdWN0SXRlbSBkYXRhSXRlbT17cHJvZHVjdH0+PC9Qcm9kdWN0SXRlbT4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gPC9HcmlkPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+ICovXG59XG5cblByb2R1Y3RQYWdlLkxheW91dCA9IE1haW5MYXlvdXRcbiJdLCJuYW1lcyI6WyJHcmlkIiwiU3RhY2siLCJUeXBvZ3JhcGh5IiwiQm94IiwidXNlU2VsZWN0b3IiLCJQUk9EVUNUX0xJU1QiLCJQcm9kdWN0SXRlbSIsIkZpbHRlckJhciIsIk1haW5MYXlvdXQiLCJQcm9kdWN0UGFnZSIsImRhdGEiLCJzdGF0ZSIsInByb2R1Y3RzIiwiY3VycmVudCIsInN4IiwibGciLCJtYXAiLCJjYXRlZ29yeSIsImlkIiwiTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/san-pham/index.js\n");

/***/ })

});