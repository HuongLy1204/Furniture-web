"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/header/Header-mobile.jsx":
/*!****************************************************!*\
  !*** ./components/common/header/Header-mobile.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nhly1204_Documents_LEARNJS_Project_Furniture_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/logo.svg */ \"./public/logo.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/components/common/header/Header-mobile.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_nhly1204_Documents_LEARNJS_Project_Furniture_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar drawerWidth = 240;\nvar Main = styled('main', {\n  shouldForwardProp: function shouldForwardProp(prop) {\n    return prop !== 'open';\n  }\n})(function (_ref) {\n  var theme = _ref.theme,\n      open = _ref.open;\n  return _objectSpread({\n    flexGrow: 1,\n    padding: theme.spacing(3),\n    transition: theme.transitions.create('margin', {\n      easing: theme.transitions.easing.sharp,\n      duration: theme.transitions.duration.leavingScreen\n    }),\n    marginLeft: \"-\".concat(drawerWidth, \"px\")\n  }, open && {\n    transition: theme.transitions.create('margin', {\n      easing: theme.transitions.easing.easeOut,\n      duration: theme.transitions.duration.enteringScreen\n    }),\n    marginLeft: 0\n  });\n});\n\nfunction HeaderMobile() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {\n    width: '100%',\n    bgcolor: 'white',\n    zIndex: 100,\n    position: 'fixed',\n    minHeight: 50,\n    display: {\n      xs: 'block',\n      lg: 'none'\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n      minHeight: 50,\n      justifyContent: 'space-between',\n      direction: \"row\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n          width: 300\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          sx: {\n            pt: 20\n          },\n          src: _public_logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n          alt: \"logo\",\n          height: 90,\n          objectFit: \"scale-down\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_4__.Box, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, this);\n}\n\n_c = HeaderMobile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMobile);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeaderMobile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvSGVhZGVyLW1vYmlsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1JLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDLE1BQUQsRUFBUztBQUFFQyxFQUFBQSxpQkFBaUIsRUFBRSwyQkFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksS0FBSyxNQUFuQjtBQUFBO0FBQXJCLENBQVQsQ0FBTixDQUNYO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUE7QUFDRUMsSUFBQUEsUUFBUSxFQUFFLENBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBRlg7QUFHRUMsSUFBQUEsVUFBVSxFQUFFTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCLEVBQW1DO0FBQzdDQyxNQUFBQSxNQUFNLEVBQUVSLEtBQUssQ0FBQ00sV0FBTixDQUFrQkUsTUFBbEIsQ0FBeUJDLEtBRFk7QUFFN0NDLE1BQUFBLFFBQVEsRUFBRVYsS0FBSyxDQUFDTSxXQUFOLENBQWtCSSxRQUFsQixDQUEyQkM7QUFGUSxLQUFuQyxDQUhkO0FBT0VDLElBQUFBLFVBQVUsYUFBTWpCLFdBQU47QUFQWixLQVFNTSxJQUFJLElBQUk7QUFDVkksSUFBQUEsVUFBVSxFQUFFTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCLEVBQW1DO0FBQzdDQyxNQUFBQSxNQUFNLEVBQUVSLEtBQUssQ0FBQ00sV0FBTixDQUFrQkUsTUFBbEIsQ0FBeUJLLE9BRFk7QUFFN0NILE1BQUFBLFFBQVEsRUFBRVYsS0FBSyxDQUFDTSxXQUFOLENBQWtCSSxRQUFsQixDQUEyQkk7QUFGUSxLQUFuQyxDQURGO0FBS1ZGLElBQUFBLFVBQVUsRUFBRTtBQUxGLEdBUmQ7QUFBQSxDQURXLENBQWI7O0FBa0JBLFNBQVNHLFlBQVQsR0FBd0I7QUFHdkIsc0JBQ0MsOERBQUMsNENBQUQ7QUFDQyxTQUFLLEVBQUUsTUFEUjtBQUVDLFdBQU8sRUFBRSxPQUZWO0FBR0MsVUFBTSxFQUFFLEdBSFQ7QUFJQyxZQUFRLEVBQUUsT0FKWDtBQUtDLGFBQVMsRUFBRSxFQUxaO0FBTUMsV0FBTyxFQUFFO0FBQUVDLE1BQUFBLEVBQUUsRUFBRSxPQUFOO0FBQWVDLE1BQUFBLEVBQUUsRUFBRTtBQUFuQixLQU5WO0FBQUEsMkJBUUMsOERBQUMsZ0RBQUQ7QUFBTyxlQUFTLEVBQUUsRUFBbEI7QUFBc0Isb0JBQWMsRUFBRSxlQUF0QztBQUF1RCxlQUFTLEVBQUMsS0FBakU7QUFBQSw4QkFDQyw4REFBQyw0Q0FBRDtBQUFLLFVBQUUsRUFBRTtBQUFFQyxVQUFBQSxLQUFLLEVBQUU7QUFBVCxTQUFUO0FBQUEsK0JBQ0MsOERBQUMsbURBQUQ7QUFBTyxZQUFFLEVBQUU7QUFBRUMsWUFBQUEsRUFBRSxFQUFFO0FBQU4sV0FBWDtBQUF1QixhQUFHLEVBQUV6Qix3REFBNUI7QUFBa0MsYUFBRyxFQUFDLE1BQXRDO0FBQTZDLGdCQUFNLEVBQUUsRUFBckQ7QUFBeUQsbUJBQVMsRUFBQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUMsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNCQTs7S0F6QlFxQjtBQTBCVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvSGVhZGVyLW1vYmlsZS5qc3g/ZWZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL3N5c3RlbSdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvZ28uc3ZnJ1xuXG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCBNYWluID0gc3R5bGVkKCdtYWluJywgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcbiAgICB9KSxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7ZHJhd2VyV2lkdGh9cHhgLFxuICAgIC4uLihvcGVuICYmIHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWFyZ2luJywge1xuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgICB9KSxcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgfSksXG4gIH0pLFxuKTtcbmZ1bmN0aW9uIEhlYWRlck1vYmlsZSgpIHtcblx0XG5cblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHR3aWR0aD17JzEwMCUnfVxuXHRcdFx0Ymdjb2xvcj17J3doaXRlJ31cblx0XHRcdHpJbmRleD17MTAwfVxuXHRcdFx0cG9zaXRpb249eydmaXhlZCd9XG5cdFx0XHRtaW5IZWlnaHQ9ezUwfVxuXHRcdFx0ZGlzcGxheT17eyB4czogJ2Jsb2NrJywgbGc6ICdub25lJyB9fVxuXHRcdD5cblx0XHRcdDxTdGFjayBtaW5IZWlnaHQ9ezUwfSBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfSBkaXJlY3Rpb249XCJyb3dcIj5cblx0XHRcdFx0PEJveCBzeD17eyB3aWR0aDogMzAwIH19PlxuXHRcdFx0XHRcdDxJbWFnZSBzeD17eyBwdDogMjAgfX0gc3JjPXtMb2dvfSBhbHQ9XCJsb2dvXCIgaGVpZ2h0PXs5MH0gb2JqZWN0Rml0PVwic2NhbGUtZG93blwiIC8+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8Qm94PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvQm94PlxuXHQpXG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJNb2JpbGVcbiJdLCJuYW1lcyI6WyJTdGFjayIsIkJveCIsIkltYWdlIiwiTG9nbyIsImRyYXdlcldpZHRoIiwiTWFpbiIsInN0eWxlZCIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsInRoZW1lIiwib3BlbiIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJIZWFkZXJNb2JpbGUiLCJ4cyIsImxnIiwid2lkdGgiLCJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/header/Header-mobile.jsx\n");

/***/ })

});