/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Api/axiosClient.js":
/*!****************************!*\
  !*** ./Api/axiosClient.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"https://shopp-backend.herokuapp.com/api\",\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient);\naxiosClient.interceptors.request.use(function (config) {\n  return config;\n}, function (error) {\n  return Promise.reject(error);\n});\naxiosClient.interceptors.response.use(function (response) {\n  return response.data;\n}, function (error) {\n  return Promise.reject(error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvYXhpb3NDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxXQUFXLEdBQUdELG1EQUFBLENBQWE7QUFDaENHLEVBQUFBLE9BQU8sRUFBRSx5Q0FEdUI7QUFFaENDLEVBQUFBLE9BQU8sRUFBRTtBQUNSLG9CQUFnQjtBQURSO0FBRnVCLENBQWIsQ0FBcEI7QUFNQSxpRUFBZUgsV0FBZjtBQUNBQSxXQUFXLENBQUNJLFlBQVosQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUFqQyxDQUNDLFVBQVVDLE1BQVYsRUFBa0I7QUFDakIsU0FBT0EsTUFBUDtBQUNBLENBSEYsRUFJQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hCLFNBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDQSxDQU5GO0FBU0FSLFdBQVcsQ0FBQ0ksWUFBWixDQUF5Qk8sUUFBekIsQ0FBa0NMLEdBQWxDLENBQ0MsVUFBVUssUUFBVixFQUFvQjtBQUNuQixTQUFPQSxRQUFRLENBQUNDLElBQWhCO0FBQ0EsQ0FIRixFQUlDLFVBQVVKLEtBQVYsRUFBaUI7QUFDaEIsU0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNBLENBTkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9BcGkvYXhpb3NDbGllbnQuanM/NzBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGF4aW9zQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcblx0YmFzZVVSTDogXCJodHRwczovL3Nob3BwLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9hcGlcIixcblx0aGVhZGVyczoge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdH0sXG59KVxuZXhwb3J0IGRlZmF1bHQgYXhpb3NDbGllbnRcbmF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcblx0ZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdHJldHVybiBjb25maWdcblx0fSxcblx0ZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuXHR9XG4pXG5cbmF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG5cdGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdHJldHVybiByZXNwb25zZS5kYXRhXG5cdH0sXG5cdGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcblx0fVxuKVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXhpb3NDbGllbnQiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Api/axiosClient.js\n");

/***/ }),

/***/ "./Api/productsApi.js":
/*!****************************!*\
  !*** ./Api/productsApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosClient */ \"./Api/axiosClient.js\");\n\nconst productsApi = {\n  getAll() {\n    const url = '/products';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n  },\n\n  createCategory(body) {\n    const url = '/create-category';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  },\n\n  createProduct(body) {\n    const url = '/create-product';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvcHJvZHVjdHNBcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLFdBQVcsR0FBRztBQUNuQkMsRUFBQUEsTUFBTSxHQUFHO0FBQ1IsVUFBTUMsR0FBRyxHQUFHLFdBQVo7QUFDQSxXQUFPSCx3REFBQSxDQUFnQkcsR0FBaEIsQ0FBUDtBQUNBLEdBSmtCOztBQUtuQkUsRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQU87QUFDcEIsVUFBTUgsR0FBRyxHQUFHLGtCQUFaO0FBQ0EsV0FBT0gseURBQUEsQ0FBaUJHLEdBQWpCLEVBQXNCRyxJQUF0QixDQUFQO0FBQ0EsR0FSa0I7O0FBU25CRSxFQUFBQSxhQUFhLENBQUNGLElBQUQsRUFBTztBQUNuQixVQUFNSCxHQUFHLEdBQUcsaUJBQVo7QUFDQSxXQUFPSCx5REFBQSxDQUFpQkcsR0FBakIsRUFBc0JHLElBQXRCLENBQVA7QUFDQTs7QUFaa0IsQ0FBcEI7QUFjQSxpRUFBZUwsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL0FwaS9wcm9kdWN0c0FwaS5qcz9hYWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvc0NsaWVudCBmcm9tICcuL2F4aW9zQ2xpZW50J1xuXG5jb25zdCBwcm9kdWN0c0FwaSA9IHtcblx0Z2V0QWxsKCkge1xuXHRcdGNvbnN0IHVybCA9ICcvcHJvZHVjdHMnXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LmdldCh1cmwpXG5cdH0sXG5cdGNyZWF0ZUNhdGVnb3J5KGJvZHkpIHtcblx0XHRjb25zdCB1cmwgPSAnL2NyZWF0ZS1jYXRlZ29yeSdcblx0XHRyZXR1cm4gYXhpb3NDbGllbnQucG9zdCh1cmwsIGJvZHkpXG5cdH0sXG5cdGNyZWF0ZVByb2R1Y3QoYm9keSkge1xuXHRcdGNvbnN0IHVybCA9ICcvY3JlYXRlLXByb2R1Y3QnXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LnBvc3QodXJsLCBib2R5KVxuXHR9LFxufVxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNBcGlcbiJdLCJuYW1lcyI6WyJheGlvc0NsaWVudCIsInByb2R1Y3RzQXBpIiwiZ2V0QWxsIiwidXJsIiwiZ2V0IiwiY3JlYXRlQ2F0ZWdvcnkiLCJib2R5IiwicG9zdCIsImNyZWF0ZVByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Api/productsApi.js\n");

/***/ }),

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_productlist_productSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/productlist/productSlice */ \"./components/common/productlist/productSlice.js\");\n\n\nconst rootReducer = {\n  products: _components_common_productlist_productSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: rootReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFHQSxNQUFNRSxXQUFXLEdBQUM7QUFDZEMsRUFBQUEsUUFBUSxFQUFFRixtRkFBY0E7QUFEVixDQUFsQjtBQUlBLE1BQU1HLEtBQUssR0FBR0osZ0VBQWMsQ0FBQztBQUMzQkssRUFBQUEsT0FBTyxFQUFFSDtBQURrQixDQUFELENBQTVCO0FBSUEsaUVBQWVFLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9hcHAvc3RvcmUuanM/Y2FlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0bGlzdC9wcm9kdWN0U2xpY2UnXG5cblxuY29uc3Qgcm9vdFJlZHVjZXI9e1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0UmVkdWNlcixcblxufVxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJwcm9kdWN0UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwicHJvZHVjdHMiLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./components/Auth/Auth.js":
/*!*********************************!*\
  !*** ./components/Auth/Auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/components/Auth/Auth.js\";\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"thang123\");\n\n  const login = user => {\n    setUser(user);\n  };\n\n  console.log(user, \"auth\");\n\n  const logout = () => {\n    setLogin(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      user,\n      login,\n      logout\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, undefined);\n};\nconst useAuth = () => {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGgvQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0EsTUFBTUcsV0FBVyxnQkFBR0gsb0RBQWEsQ0FBQyxJQUFELENBQWpDO0FBQ08sTUFBTUksWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQzdDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkwsK0NBQVEsQ0FBQyxVQUFELENBQWhDOztBQUNBLFFBQU1NLEtBQUssR0FBSUYsSUFBRCxJQUFVO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBLEdBRkQ7O0FBR0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBQWlCLE1BQWpCOztBQUVBLFFBQU1LLE1BQU0sR0FBRyxNQUFNO0FBQ3BCQyxJQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0EsR0FGRDs7QUFHQSxzQkFBTyw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRU4sTUFBQUEsSUFBRjtBQUFRRSxNQUFBQSxLQUFSO0FBQWVHLE1BQUFBO0FBQWYsS0FBN0I7QUFBQSxjQUF1RE47QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsQ0FYTTtBQVlBLE1BQU1RLE9BQU8sR0FBRyxNQUFNO0FBQzVCLFNBQU9aLGlEQUFVLENBQUNFLFdBQUQsQ0FBakI7QUFDQSxDQUZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanM/MWZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcInRoYW5nMTIzXCIpXG5cdGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcblx0XHRzZXRVc2VyKHVzZXIpXG5cdH1cblx0Y29uc29sZS5sb2codXNlcixcImF1dGhcIik7XG5cblx0Y29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXHRcdHNldExvZ2luKG51bGwpXG5cdH1cblx0cmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgbG9nb3V0IH19PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxufVxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG5cdHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJzZXRMb2dpbiIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.js\n");

/***/ }),

/***/ "./components/Auth/NotAccess.js":
/*!**************************************!*\
  !*** ./components/Auth/NotAccess.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NotAccess)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/components/Auth/NotAccess.js\";\n\n\n\nfunction NotAccess() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  const handleClick = () => {\n    router.push('/login');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n      children: \"Vui l\\xF2ng \\u0110\\u0103ng nh\\u1EADp \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {\n      onClick: handleClick,\n      children: \"CLICK HERE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGgvTm90QWNjZXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTSSxTQUFULEdBQXFCO0FBQ25DLFFBQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEI7O0FBQ0EsUUFBTUcsV0FBVyxHQUFHLE1BQU07QUFDekJELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFFBQVo7QUFDQSxHQUZEOztBQUdBLHNCQUNDLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ0MsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLDhEQUFDLGlEQUFEO0FBQVEsYUFBTyxFQUFFRCxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9jb21wb25lbnRzL0F1dGgvTm90QWNjZXNzLmpzP2MwMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdEFjY2VzcygpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0cm91dGVyLnB1c2goJy9sb2dpbicpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8Qm94PlxuXHRcdFx0PFR5cG9ncmFwaHk+VnVpIGzDsm5nIMSQxINuZyBuaOG6rXAgPC9UeXBvZ3JhcGh5PlxuXHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Q0xJQ0sgSEVSRTwvQnV0dG9uPlxuXHRcdDwvQm94PlxuXHQpXG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsIk5vdEFjY2VzcyIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Auth/NotAccess.js\n");

/***/ }),

/***/ "./components/common/productlist/productSlice.js":
/*!*******************************************************!*\
  !*** ./components/common/productlist/productSlice.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsThunk\": () => (/* binding */ productsThunk),\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"updateProduct\": () => (/* binding */ updateProduct),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api_productsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Api/productsApi */ \"./Api/productsApi.js\");\n\n\n\nconst productsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)('category/getAll', async (params, thunkApi) => {\n  const response = await _Api_productsApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAll();\n  return response;\n});\nconst product = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: 'products',\n  initialState: {\n    current: [],\n    loading: false,\n    error: ''\n  },\n  reducers: {\n    addProduct: (state, action) => {\n      state.current.push(action.payload);\n    },\n    deleteProduct: (state, action) => {\n      const deleteProduct = action.payload;\n      return state.current.filter(product => product.id !== deleteProduct);\n    },\n    updateProduct: (state, action) => {\n      const newProduct = action.payload;\n      const productIndex = state.current.findIndex(product => product.id === newProduct.id);\n\n      if (productIndex >= 0) {\n        state[productIndex] = newProduct;\n      }\n    }\n  },\n  extraReducers: {\n    [productsThunk.pending]: state => {\n      state.loading = true;\n    },\n    [productsThunk.rejected]: (state, action) => {\n      ;\n      state.loading = false, state.error = action.error;\n    },\n    [productsThunk.fulfilled]: (state, action) => {\n      state.loading = false;\n      state.current = action.payload;\n    }\n  }\n});\nconst {\n  reducer,\n  actions\n} = product;\nconst {\n  addProduct,\n  deleteProduct,\n  updateProduct\n} = actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0bGlzdC9wcm9kdWN0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1JLGFBQWEsR0FBR0gsa0VBQWdCLENBQUMsaUJBQUQsRUFBb0IsT0FBT0ksTUFBUCxFQUFlQyxRQUFmLEtBQTRCO0FBQzVGLFFBQU1DLFFBQVEsR0FBRyxNQUFNSiwrREFBQSxFQUF2QjtBQUNBLFNBQU9JLFFBQVA7QUFDQSxDQUg0QyxDQUF0QztBQUlQLE1BQU1FLE9BQU8sR0FBR1AsNkRBQVcsQ0FBQztBQUMzQlEsRUFBQUEsSUFBSSxFQUFFLFVBRHFCO0FBRTNCQyxFQUFBQSxZQUFZLEVBQUU7QUFDYkMsSUFBQUEsT0FBTyxFQUFFLEVBREk7QUFFYkMsSUFBQUEsT0FBTyxFQUFFLEtBRkk7QUFHYkMsSUFBQUEsS0FBSyxFQUFFO0FBSE0sR0FGYTtBQU8zQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1RDLElBQUFBLFVBQVUsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDOUJELE1BQUFBLEtBQUssQ0FBQ0wsT0FBTixDQUFjTyxJQUFkLENBQW1CRCxNQUFNLENBQUNFLE9BQTFCO0FBRUEsS0FKUTtBQUtUQyxJQUFBQSxhQUFhLEVBQUUsQ0FBQ0osS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFlBQU1HLGFBQWEsR0FBR0gsTUFBTSxDQUFDRSxPQUE3QjtBQUNBLGFBQU9ILEtBQUssQ0FBQ0wsT0FBTixDQUFjVSxNQUFkLENBQXNCYixPQUFELElBQWFBLE9BQU8sQ0FBQ2MsRUFBUixLQUFlRixhQUFqRCxDQUFQO0FBQ0EsS0FSUTtBQVNURyxJQUFBQSxhQUFhLEVBQUUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFlBQU1PLFVBQVUsR0FBR1AsTUFBTSxDQUFDRSxPQUExQjtBQUNBLFlBQU1NLFlBQVksR0FBR1QsS0FBSyxDQUFDTCxPQUFOLENBQWNlLFNBQWQsQ0FBeUJsQixPQUFELElBQWFBLE9BQU8sQ0FBQ2MsRUFBUixLQUFlRSxVQUFVLENBQUNGLEVBQS9ELENBQXJCOztBQUNBLFVBQUlHLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUN0QlQsUUFBQUEsS0FBSyxDQUFDUyxZQUFELENBQUwsR0FBc0JELFVBQXRCO0FBQ0E7QUFDRDtBQWZRLEdBUGlCO0FBd0IzQkcsRUFBQUEsYUFBYSxFQUFFO0FBQ2QsS0FBQ3hCLGFBQWEsQ0FBQ3lCLE9BQWYsR0FBMEJaLEtBQUQsSUFBVztBQUNuQ0EsTUFBQUEsS0FBSyxDQUFDSixPQUFOLEdBQWdCLElBQWhCO0FBQ0EsS0FIYTtBQUlkLEtBQUNULGFBQWEsQ0FBQzBCLFFBQWYsR0FBMEIsQ0FBQ2IsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzVDO0FBQUVELE1BQUFBLEtBQUssQ0FBQ0osT0FBTixHQUFnQixLQUFqQixFQUEwQkksS0FBSyxDQUFDSCxLQUFOLEdBQWNJLE1BQU0sQ0FBQ0osS0FBL0M7QUFDRCxLQU5hO0FBT2QsS0FBQ1YsYUFBYSxDQUFDMkIsU0FBZixHQUEyQixDQUFDZCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDN0NELE1BQUFBLEtBQUssQ0FBQ0osT0FBTixHQUFnQixLQUFoQjtBQUNBSSxNQUFBQSxLQUFLLENBQUNMLE9BQU4sR0FBZ0JNLE1BQU0sQ0FBQ0UsT0FBdkI7QUFDQTtBQVZhO0FBeEJZLENBQUQsQ0FBM0I7QUFxQ0EsTUFBTTtBQUFFWSxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBO0FBQVgsSUFBdUJ4QixPQUE3QjtBQUNPLE1BQU07QUFBRU8sRUFBQUEsVUFBRjtBQUFjSyxFQUFBQSxhQUFkO0FBQTZCRyxFQUFBQTtBQUE3QixJQUErQ1MsT0FBckQ7QUFDUCxpRUFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL2NvbXBvbmVudHMvY29tbW9uL3Byb2R1Y3RsaXN0L3Byb2R1Y3RTbGljZS5qcz8zYzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjY29yZGlvbkFjdGlvbnNDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBwcm9kdWN0c0FwaSBmcm9tICcuLi8uLi8uLi9BcGkvcHJvZHVjdHNBcGknXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1RodW5rID0gY3JlYXRlQXN5bmNUaHVuaygnY2F0ZWdvcnkvZ2V0QWxsJywgYXN5bmMgKHBhcmFtcywgdGh1bmtBcGkpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9kdWN0c0FwaS5nZXRBbGwoKVxuXHRyZXR1cm4gcmVzcG9uc2Vcbn0pXG5jb25zdCBwcm9kdWN0ID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAncHJvZHVjdHMnLFxuXHRpbml0aWFsU3RhdGU6IHtcblx0XHRjdXJyZW50OiBbXSxcblx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRlcnJvcjogJycsXG5cdH0sXG5cdHJlZHVjZXJzOiB7XG5cdFx0YWRkUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmN1cnJlbnQucHVzaChhY3Rpb24ucGF5bG9hZClcblxuXHRcdH0sXG5cdFx0ZGVsZXRlUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnQuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBkZWxldGVQcm9kdWN0KVxuXHRcdH0sXG5cdFx0dXBkYXRlUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IG5ld1Byb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0Y29uc3QgcHJvZHVjdEluZGV4ID0gc3RhdGUuY3VycmVudC5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IG5ld1Byb2R1Y3QuaWQpXG5cdFx0XHRpZiAocHJvZHVjdEluZGV4ID49IDApIHtcblx0XHRcdFx0c3RhdGVbcHJvZHVjdEluZGV4XSA9IG5ld1Byb2R1Y3Rcblx0XHRcdH1cblx0XHR9LFxuXHR9LFxuXHRleHRyYVJlZHVjZXJzOiB7XG5cdFx0W3Byb2R1Y3RzVGh1bmsucGVuZGluZ106IChzdGF0ZSkgPT4ge1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWVcblx0XHR9LFxuXHRcdFtwcm9kdWN0c1RodW5rLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdDsoc3RhdGUubG9hZGluZyA9IGZhbHNlKSwgKHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yKVxuXHRcdH0sXG5cdFx0W3Byb2R1Y3RzVGh1bmsuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuXHRcdFx0c3RhdGUuY3VycmVudCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0fSxcbn0pXG5jb25zdCB7IHJlZHVjZXIsIGFjdGlvbnMgfSA9IHByb2R1Y3RcbmV4cG9ydCBjb25zdCB7IGFkZFByb2R1Y3QsIGRlbGV0ZVByb2R1Y3QsIHVwZGF0ZVByb2R1Y3QgfSA9IGFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdLCJuYW1lcyI6WyJhY2NvcmRpb25BY3Rpb25zQ2xhc3NlcyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsInByb2R1Y3RzQXBpIiwicHJvZHVjdHNUaHVuayIsInBhcmFtcyIsInRodW5rQXBpIiwicmVzcG9uc2UiLCJnZXRBbGwiLCJwcm9kdWN0IiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWR1Y2VycyIsImFkZFByb2R1Y3QiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwiZGVsZXRlUHJvZHVjdCIsImZpbHRlciIsImlkIiwidXBkYXRlUHJvZHVjdCIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsInJlamVjdGVkIiwiZnVsZmlsbGVkIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/productlist/productSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Auth/Auth */ \"./components/Auth/Auth.js\");\n/* harmony import */ var _utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/create-emotion-cache */ \"./utils/create-emotion-cache.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/theme */ \"./utils/theme.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Auth_NotAccess__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Auth/NotAccess */ \"./components/Auth/NotAccess.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Client-side cache, shared for the whole session of the user in the browser.\n\n\nconst clientSideEmotionCache = (0,_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nfunction MyApp(props) {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  const Layout = Component.Layout;\n  const auth = (0,_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n  const {\n    0: isLogin,\n    1: setIsLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);\n\n  if ((auth === null || auth === void 0 ? void 0 : auth.user) === 'minhkha123') {\n    setIsLogin(true);\n  }\n\n  console.log(auth, 'user');\n  console.log(isLogin, 'app');\n\n  if (pageProps.protected && isLogin == false) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Auth_NotAccess__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 10\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {\n    value: emotionCache,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: _utils_theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n          store: _app_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Layout, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, this);\n}\nMyApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired),\n  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),\n  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUNBLE1BQU1lLHNCQUFzQixHQUFHTCx1RUFBa0IsRUFBakQ7QUFFZSxTQUFTTSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEMsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLFlBQVksR0FBR0osc0JBQTVCO0FBQW9ESyxJQUFBQTtBQUFwRCxNQUFrRUgsS0FBeEU7QUFDQSxRQUFNSSxNQUFNLEdBQUdILFNBQVMsQ0FBQ0csTUFBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUdiLDhEQUFPLEVBQXBCO0FBQ0EsUUFBTTtBQUFBLE9BQUNjLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCVixnREFBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBR0MsTUFBSSxDQUFBUSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsSUFBTixNQUFlLFlBQW5CLEVBQWlDO0FBQ2hDRCxJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0E7O0FBRUZFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWtCLE1BQWxCO0FBQ0FJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaLEVBQXFCLEtBQXJCOztBQUVBLE1BQUlILFNBQVMsQ0FBQ1EsU0FBVixJQUF1QkwsT0FBTyxJQUFJLEtBQXRDLEVBQTZDO0FBQzVDLHdCQUFPLCtEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNBOztBQUNELHNCQUNDLCtEQUFDLHlEQUFEO0FBQWUsU0FBSyxFQUFFSixZQUF0QjtBQUFBLDRCQUNDLCtEQUFDLGtEQUFEO0FBQUEsNkJBQ0M7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUlDLCtEQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFUixvREFBdEI7QUFBQSw4QkFFQywrREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQywrREFBQywrREFBRDtBQUFBLCtCQUNDLCtEQUFDLGlEQUFEO0FBQVUsZUFBSyxFQUFFSixrREFBakI7QUFBQSxpQ0FDQywrREFBQyxNQUFEO0FBQUEsbUNBQ0MsK0RBQUMsU0FBRCxvQkFBZWEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrQkE7QUFFREosS0FBSyxDQUFDYSxTQUFOLEdBQWtCO0FBQ2pCWCxFQUFBQSxTQUFTLEVBQUVkLDBFQURNO0FBRWpCZSxFQUFBQSxZQUFZLEVBQUVmLDBEQUZHO0FBR2pCZ0IsRUFBQUEsU0FBUyxFQUFFaEIscUVBQTJCMkI7QUFIckIsQ0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9hcHAvc3RvcmUnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGggfSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGgvQXV0aCdcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vdXRpbHMvY3JlYXRlLWVtb3Rpb24tY2FjaGUnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdXRpbHMvdGhlbWUnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBOb3RBY2Nlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoL05vdEFjY2VzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuLy8gQ2xpZW50LXNpZGUgY2FjaGUsIHNoYXJlZCBmb3IgdGhlIHdob2xlIHNlc3Npb24gb2YgdGhlIHVzZXIgaW4gdGhlIGJyb3dzZXIuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcblx0Y29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHNcblx0Y29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dFxuXHRjb25zdCBhdXRoID0gdXNlQXV0aCgpXG5cdGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdFxuXHRcdGlmIChhdXRoPy51c2VyID09PSAnbWluaGtoYTEyMycpIHtcblx0XHRcdHNldElzTG9naW4odHJ1ZSlcblx0XHR9XG5cblx0Y29uc29sZS5sb2coYXV0aCwgJ3VzZXInKVxuXHRjb25zb2xlLmxvZyhpc0xvZ2luLCAnYXBwJylcblxuXHRpZiAocGFnZVByb3BzLnByb3RlY3RlZCAmJiBpc0xvZ2luID09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIDxOb3RBY2Nlc3MgLz5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtlbW90aW9uQ2FjaGV9PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHR7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxuXHRcdFx0XHQ8QXV0aFByb3ZpZGVyPlxuXHRcdFx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdFx0PC9MYXlvdXQ+XG5cdFx0XHRcdFx0PC9Qcm92aWRlcj5cblx0XHRcdFx0PC9BdXRoUHJvdmlkZXI+XG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XG5cdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHQpXG59XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcblx0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcblx0ZW1vdGlvbkNhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cbiJdLCJuYW1lcyI6WyJDYWNoZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJUaGVtZVByb3ZpZGVyIiwiSGVhZCIsIlByb3BUeXBlcyIsIlByb3ZpZGVyIiwidXNlRGlzcGF0Y2giLCJzdG9yZSIsIkF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJ0aGVtZSIsIk5vdEFjY2VzcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJMYXlvdXQiLCJhdXRoIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInByb3RlY3RlZCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/create-emotion-cache.js":
/*!***************************************!*\
  !*** ./utils/create-emotion-cache.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n // prepend: true moves MUI styles to the top of the <head> so they're loaded first.\n// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.\n\nfunction createEmotionCache() {\n  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: 'css',\n    prepend: true\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jcmVhdGUtZW1vdGlvbi1jYWNoZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Q0FFQTtBQUNBOztBQUNlLFNBQVNDLGtCQUFULEdBQThCO0FBQzNDLFNBQU9ELHFEQUFXLENBQUM7QUFBRUUsSUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBY0MsSUFBQUEsT0FBTyxFQUFFO0FBQXZCLEdBQUQsQ0FBbEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL3V0aWxzL2NyZWF0ZS1lbW90aW9uLWNhY2hlLmpzP2U3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuLy8gcHJlcGVuZDogdHJ1ZSBtb3ZlcyBNVUkgc3R5bGVzIHRvIHRoZSB0b3Agb2YgdGhlIDxoZWFkPiBzbyB0aGV5J3JlIGxvYWRlZCBmaXJzdC5cbi8vIEl0IGFsbG93cyBkZXZlbG9wZXJzIHRvIGVhc2lseSBvdmVycmlkZSBNVUkgc3R5bGVzIHdpdGggb3RoZXIgc3R5bGluZyBzb2x1dGlvbnMsIGxpa2UgQ1NTIG1vZHVsZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5IiwicHJlcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/create-emotion-cache.js\n");

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    primary: {\n      main: \"#556cd6\"\n    },\n    secondary: {\n      main: \"#c2bbb5\"\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n    }\n  },\n  components: {\n    // MuiIcon: {\n    //   styleOverrides: {\n    //     root: {\n    //       // Match 24px = 3 * 2 + 1.125 * 16\n    //       fontSize: '50rem',\n    //     },\n    //   },\n    // },\n    MuiLink: {\n      defaultProps: {\n        underline: \"none\"\n      },\n      styleOverrides: {\n        root: {\n          color: \"black\",\n          \"&:hover, &.active\": {\n            color: \"#A9A08D\"\n          }\n        }\n      }\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBSUE7O0FBQ0EsTUFBTUcsS0FBSyxHQUFHSCxpRUFBVyxDQUFDO0FBQ3hCSSxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RELE1BQUFBLElBQUksRUFBRTtBQURHLEtBSko7QUFPUEUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xGLE1BQUFBLElBQUksRUFBRUwsMERBQVFRO0FBRFQ7QUFQQSxHQURlO0FBWXhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxZQUFZLEVBQUU7QUFDWkMsUUFBQUEsU0FBUyxFQUFFO0FBREMsT0FEUDtBQUlQQyxNQUFBQSxjQUFjLEVBQUU7QUFDZEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRSxPQURIO0FBRUosK0JBQXFCO0FBQ25CQSxZQUFBQSxLQUFLLEVBQUU7QUFEWTtBQUZqQjtBQURRO0FBSlQ7QUFYQztBQVpZLENBQUQsQ0FBekI7QUF1Q0EsaUVBQWViLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi91dGlscy90aGVtZS5qcz80ZWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyByZWQsIHllbGxvdyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuXG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiM1NTZjZDZcIixcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogXCIjYzJiYmI1XCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIE11aUljb246IHtcbiAgICAvLyAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgLy8gICAgIHJvb3Q6IHtcbiAgICAvLyAgICAgICAvLyBNYXRjaCAyNHB4ID0gMyAqIDIgKyAxLjEyNSAqIDE2XG4gICAgICAgICBcbiAgICAvLyAgICAgICBmb250U2l6ZTogJzUwcmVtJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgICBcbiAgICBNdWlMaW5rOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5kZXJsaW5lOiBcIm5vbmVcIixcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICBcIiY6aG92ZXIsICYuYWN0aXZlXCI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNBOUEwOERcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJyZWQiLCJ5ZWxsb3ciLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCIsImNvbXBvbmVudHMiLCJNdWlMaW5rIiwiZGVmYXVsdFByb3BzIiwidW5kZXJsaW5lIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/theme.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();