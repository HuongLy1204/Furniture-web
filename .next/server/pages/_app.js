"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"https://shopp-backend.herokuapp.com/api\",\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient);\naxiosClient.interceptors.request.use(function (config) {\n  return config;\n}, function (error) {\n  return Promise.reject(error);\n});\naxiosClient.interceptors.response.use(function (response) {\n  return response.data;\n}, function (error) {\n  return Promise.reject(error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvYXhpb3NDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxXQUFXLEdBQUdELG1EQUFBLENBQWE7QUFDaENHLEVBQUFBLE9BQU8sRUFBRSx5Q0FEdUI7QUFFaENDLEVBQUFBLE9BQU8sRUFBRTtBQUNSLG9CQUFnQjtBQURSO0FBRnVCLENBQWIsQ0FBcEI7QUFNQSxpRUFBZUgsV0FBZjtBQUNBQSxXQUFXLENBQUNJLFlBQVosQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUFqQyxDQUNDLFVBQVVDLE1BQVYsRUFBa0I7QUFDakIsU0FBT0EsTUFBUDtBQUNBLENBSEYsRUFJQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hCLFNBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDQSxDQU5GO0FBU0FSLFdBQVcsQ0FBQ0ksWUFBWixDQUF5Qk8sUUFBekIsQ0FBa0NMLEdBQWxDLENBQ0MsVUFBVUssUUFBVixFQUFvQjtBQUNuQixTQUFPQSxRQUFRLENBQUNDLElBQWhCO0FBQ0EsQ0FIRixFQUlDLFVBQVVKLEtBQVYsRUFBaUI7QUFDaEIsU0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNBLENBTkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9BcGkvYXhpb3NDbGllbnQuanM/NzBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGF4aW9zQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcblx0YmFzZVVSTDogXCJodHRwczovL3Nob3BwLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9hcGlcIixcblx0aGVhZGVyczoge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdH0sXG59KVxuZXhwb3J0IGRlZmF1bHQgYXhpb3NDbGllbnRcbmF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcblx0ZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdHJldHVybiBjb25maWdcblx0fSxcblx0ZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuXHR9XG4pXG5cbmF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG5cdGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdHJldHVybiByZXNwb25zZS5kYXRhXG5cdH0sXG5cdGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcblx0fVxuKVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXhpb3NDbGllbnQiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Api/axiosClient.js\n");

/***/ }),

/***/ "./Api/productsApi.js":
/*!****************************!*\
  !*** ./Api/productsApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosClient */ \"./Api/axiosClient.js\");\n\nconst productsApi = {\n  getAll() {\n    const url = '/products';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n  },\n\n  createCategory(body) {\n    const url = '/create-category';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  },\n\n  createProduct(body) {\n    const url = '/create-product';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvcHJvZHVjdHNBcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLFdBQVcsR0FBRztBQUNuQkMsRUFBQUEsTUFBTSxHQUFHO0FBQ1IsVUFBTUMsR0FBRyxHQUFHLFdBQVo7QUFDQSxXQUFPSCx3REFBQSxDQUFnQkcsR0FBaEIsQ0FBUDtBQUNBLEdBSmtCOztBQUtuQkUsRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQU87QUFDcEIsVUFBTUgsR0FBRyxHQUFHLGtCQUFaO0FBQ0EsV0FBT0gseURBQUEsQ0FBaUJHLEdBQWpCLEVBQXNCRyxJQUF0QixDQUFQO0FBQ0EsR0FSa0I7O0FBU25CRSxFQUFBQSxhQUFhLENBQUNGLElBQUQsRUFBTztBQUNuQixVQUFNSCxHQUFHLEdBQUcsaUJBQVo7QUFDQSxXQUFPSCx5REFBQSxDQUFpQkcsR0FBakIsRUFBc0JHLElBQXRCLENBQVA7QUFDQTs7QUFaa0IsQ0FBcEI7QUFjQSxpRUFBZUwsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL0FwaS9wcm9kdWN0c0FwaS5qcz9hYWVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvc0NsaWVudCBmcm9tICcuL2F4aW9zQ2xpZW50J1xuXG5jb25zdCBwcm9kdWN0c0FwaSA9IHtcblx0Z2V0QWxsKCkge1xuXHRcdGNvbnN0IHVybCA9ICcvcHJvZHVjdHMnXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LmdldCh1cmwpXG5cdH0sXG5cdGNyZWF0ZUNhdGVnb3J5KGJvZHkpIHtcblx0XHRjb25zdCB1cmwgPSAnL2NyZWF0ZS1jYXRlZ29yeSdcblx0XHRyZXR1cm4gYXhpb3NDbGllbnQucG9zdCh1cmwsIGJvZHkpXG5cdH0sXG5cdGNyZWF0ZVByb2R1Y3QoYm9keSkge1xuXHRcdGNvbnN0IHVybCA9ICcvY3JlYXRlLXByb2R1Y3QnXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LnBvc3QodXJsLCBib2R5KVxuXHR9LFxufVxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNBcGlcbiJdLCJuYW1lcyI6WyJheGlvc0NsaWVudCIsInByb2R1Y3RzQXBpIiwiZ2V0QWxsIiwidXJsIiwiZ2V0IiwiY3JlYXRlQ2F0ZWdvcnkiLCJib2R5IiwicG9zdCIsImNyZWF0ZVByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Api/productsApi.js\n");

/***/ }),

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_productlist_productSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/productlist/productSlice */ \"./components/common/productlist/productSlice.js\");\n\n\nconst rootReducer = {\n  products: _components_common_productlist_productSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: rootReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFHQSxNQUFNRSxXQUFXLEdBQUM7QUFDZEMsRUFBQUEsUUFBUSxFQUFFRixtRkFBY0E7QUFEVixDQUFsQjtBQUlBLE1BQU1HLEtBQUssR0FBR0osZ0VBQWMsQ0FBQztBQUMzQkssRUFBQUEsT0FBTyxFQUFFSDtBQURrQixDQUFELENBQTVCO0FBSUEsaUVBQWVFLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9hcHAvc3RvcmUuanM/Y2FlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0bGlzdC9wcm9kdWN0U2xpY2UnXG5cblxuY29uc3Qgcm9vdFJlZHVjZXI9e1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0UmVkdWNlcixcblxufVxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJwcm9kdWN0UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwicHJvZHVjdHMiLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./components/Auth/Auth.js":
/*!*********************************!*\
  !*** ./components/Auth/Auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/components/Auth/Auth.js\";\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: isLogin,\n    1: setLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const login = user => {\n    console.log(user, \"user\");\n    setLogin(user);\n  };\n\n  const logout = () => {\n    setLogin(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      isLogin,\n      login,\n      logout\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, undefined);\n};\nconst useAuth = () => {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGgvQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0EsTUFBTUcsV0FBVyxnQkFBR0gsb0RBQWEsQ0FBQyxLQUFELENBQWpDO0FBQ08sTUFBTUksWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQzdDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFzQkwsK0NBQVEsQ0FBQyxLQUFELENBQXBDOztBQUNBLFFBQU1NLEtBQUssR0FBSUMsSUFBRCxJQUFVO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUFrQixNQUFsQjtBQUNBRixJQUFBQSxRQUFRLENBQUNFLElBQUQsQ0FBUjtBQUNBLEdBSEQ7O0FBS0EsUUFBTUcsTUFBTSxHQUFHLE1BQU07QUFDcEJMLElBQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDQSxHQUZEOztBQUdBLHNCQUFPLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFRCxNQUFBQSxPQUFGO0FBQVdFLE1BQUFBLEtBQVg7QUFBa0JJLE1BQUFBO0FBQWxCLEtBQTdCO0FBQUEsY0FBeURQO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNBLENBWE07QUFZQSxNQUFNUSxPQUFPLEdBQUcsTUFBTTtBQUM1QixTQUFPWixpREFBVSxDQUFDRSxXQUFELENBQWpCO0FBQ0EsQ0FGTSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL2NvbXBvbmVudHMvQXV0aC9BdXRoLmpzPzFmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSlcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFtpc0xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHVzZXIsIFwidXNlclwiKTtcblx0XHRzZXRMb2dpbih1c2VyKVxuXHR9XG5cblx0Y29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXHRcdHNldExvZ2luKGZhbHNlKVxuXHR9XG5cdHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNMb2dpbiwgbG9naW4gLGxvZ291dH19PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxufVxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG5cdHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dpbiIsInNldExvZ2luIiwibG9naW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImxvZ291dCIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.js\n");

/***/ }),

/***/ "./components/common/productlist/productSlice.js":
/*!*******************************************************!*\
  !*** ./components/common/productlist/productSlice.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsThunk\": () => (/* binding */ productsThunk),\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"updateProduct\": () => (/* binding */ updateProduct),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Api_productsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Api/productsApi */ \"./Api/productsApi.js\");\n\n\n\nconst productsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)('category/getAll', async (params, thunkApi) => {\n  const response = await _Api_productsApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAll();\n  return response;\n});\nconst product = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: 'products',\n  initialState: {\n    current: [],\n    loading: false,\n    error: ''\n  },\n  reducers: {\n    addProduct: (state, action) => {\n      state.current.push(action.payload);\n    },\n    deleteProduct: (state, action) => {\n      const deleteProduct = action.payload;\n      return state.current.filter(product => product.id !== deleteProduct);\n    },\n    updateProduct: (state, action) => {\n      const newProduct = action.payload;\n      const productIndex = state.current.findIndex(product => product.id === newProduct.id);\n\n      if (productIndex >= 0) {\n        state[productIndex] = newProduct;\n      }\n    }\n  },\n  extraReducers: {\n    [productsThunk.pending]: state => {\n      state.loading = true;\n    },\n    [productsThunk.rejected]: (state, action) => {\n      ;\n      state.loading = false, state.error = action.error;\n    },\n    [productsThunk.fulfilled]: (state, action) => {\n      state.loading = false;\n      state.current = action.payload;\n    }\n  }\n});\nconst {\n  reducer,\n  actions\n} = product;\nconst {\n  addProduct,\n  deleteProduct,\n  updateProduct\n} = actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0bGlzdC9wcm9kdWN0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1JLGFBQWEsR0FBR0gsa0VBQWdCLENBQUMsaUJBQUQsRUFBb0IsT0FBT0ksTUFBUCxFQUFlQyxRQUFmLEtBQTRCO0FBQzVGLFFBQU1DLFFBQVEsR0FBRyxNQUFNSiwrREFBQSxFQUF2QjtBQUNBLFNBQU9JLFFBQVA7QUFDQSxDQUg0QyxDQUF0QztBQUlQLE1BQU1FLE9BQU8sR0FBR1AsNkRBQVcsQ0FBQztBQUMzQlEsRUFBQUEsSUFBSSxFQUFFLFVBRHFCO0FBRTNCQyxFQUFBQSxZQUFZLEVBQUU7QUFDYkMsSUFBQUEsT0FBTyxFQUFFLEVBREk7QUFFYkMsSUFBQUEsT0FBTyxFQUFFLEtBRkk7QUFHYkMsSUFBQUEsS0FBSyxFQUFFO0FBSE0sR0FGYTtBQU8zQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1RDLElBQUFBLFVBQVUsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDOUJELE1BQUFBLEtBQUssQ0FBQ0wsT0FBTixDQUFjTyxJQUFkLENBQW1CRCxNQUFNLENBQUNFLE9BQTFCO0FBRUEsS0FKUTtBQUtUQyxJQUFBQSxhQUFhLEVBQUUsQ0FBQ0osS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFlBQU1HLGFBQWEsR0FBR0gsTUFBTSxDQUFDRSxPQUE3QjtBQUNBLGFBQU9ILEtBQUssQ0FBQ0wsT0FBTixDQUFjVSxNQUFkLENBQXNCYixPQUFELElBQWFBLE9BQU8sQ0FBQ2MsRUFBUixLQUFlRixhQUFqRCxDQUFQO0FBQ0EsS0FSUTtBQVNURyxJQUFBQSxhQUFhLEVBQUUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFlBQU1PLFVBQVUsR0FBR1AsTUFBTSxDQUFDRSxPQUExQjtBQUNBLFlBQU1NLFlBQVksR0FBR1QsS0FBSyxDQUFDTCxPQUFOLENBQWNlLFNBQWQsQ0FBeUJsQixPQUFELElBQWFBLE9BQU8sQ0FBQ2MsRUFBUixLQUFlRSxVQUFVLENBQUNGLEVBQS9ELENBQXJCOztBQUNBLFVBQUlHLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUN0QlQsUUFBQUEsS0FBSyxDQUFDUyxZQUFELENBQUwsR0FBc0JELFVBQXRCO0FBQ0E7QUFDRDtBQWZRLEdBUGlCO0FBd0IzQkcsRUFBQUEsYUFBYSxFQUFFO0FBQ2QsS0FBQ3hCLGFBQWEsQ0FBQ3lCLE9BQWYsR0FBMEJaLEtBQUQsSUFBVztBQUNuQ0EsTUFBQUEsS0FBSyxDQUFDSixPQUFOLEdBQWdCLElBQWhCO0FBQ0EsS0FIYTtBQUlkLEtBQUNULGFBQWEsQ0FBQzBCLFFBQWYsR0FBMEIsQ0FBQ2IsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzVDO0FBQUVELE1BQUFBLEtBQUssQ0FBQ0osT0FBTixHQUFnQixLQUFqQixFQUEwQkksS0FBSyxDQUFDSCxLQUFOLEdBQWNJLE1BQU0sQ0FBQ0osS0FBL0M7QUFDRCxLQU5hO0FBT2QsS0FBQ1YsYUFBYSxDQUFDMkIsU0FBZixHQUEyQixDQUFDZCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDN0NELE1BQUFBLEtBQUssQ0FBQ0osT0FBTixHQUFnQixLQUFoQjtBQUNBSSxNQUFBQSxLQUFLLENBQUNMLE9BQU4sR0FBZ0JNLE1BQU0sQ0FBQ0UsT0FBdkI7QUFDQTtBQVZhO0FBeEJZLENBQUQsQ0FBM0I7QUFxQ0EsTUFBTTtBQUFFWSxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBO0FBQVgsSUFBdUJ4QixPQUE3QjtBQUNPLE1BQU07QUFBRU8sRUFBQUEsVUFBRjtBQUFjSyxFQUFBQSxhQUFkO0FBQTZCRyxFQUFBQTtBQUE3QixJQUErQ1MsT0FBckQ7QUFDUCxpRUFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL2NvbXBvbmVudHMvY29tbW9uL3Byb2R1Y3RsaXN0L3Byb2R1Y3RTbGljZS5qcz8zYzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjY29yZGlvbkFjdGlvbnNDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBwcm9kdWN0c0FwaSBmcm9tICcuLi8uLi8uLi9BcGkvcHJvZHVjdHNBcGknXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1RodW5rID0gY3JlYXRlQXN5bmNUaHVuaygnY2F0ZWdvcnkvZ2V0QWxsJywgYXN5bmMgKHBhcmFtcywgdGh1bmtBcGkpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9kdWN0c0FwaS5nZXRBbGwoKVxuXHRyZXR1cm4gcmVzcG9uc2Vcbn0pXG5jb25zdCBwcm9kdWN0ID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAncHJvZHVjdHMnLFxuXHRpbml0aWFsU3RhdGU6IHtcblx0XHRjdXJyZW50OiBbXSxcblx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRlcnJvcjogJycsXG5cdH0sXG5cdHJlZHVjZXJzOiB7XG5cdFx0YWRkUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmN1cnJlbnQucHVzaChhY3Rpb24ucGF5bG9hZClcblxuXHRcdH0sXG5cdFx0ZGVsZXRlUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnQuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBkZWxldGVQcm9kdWN0KVxuXHRcdH0sXG5cdFx0dXBkYXRlUHJvZHVjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IG5ld1Byb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0Y29uc3QgcHJvZHVjdEluZGV4ID0gc3RhdGUuY3VycmVudC5maW5kSW5kZXgoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IG5ld1Byb2R1Y3QuaWQpXG5cdFx0XHRpZiAocHJvZHVjdEluZGV4ID49IDApIHtcblx0XHRcdFx0c3RhdGVbcHJvZHVjdEluZGV4XSA9IG5ld1Byb2R1Y3Rcblx0XHRcdH1cblx0XHR9LFxuXHR9LFxuXHRleHRyYVJlZHVjZXJzOiB7XG5cdFx0W3Byb2R1Y3RzVGh1bmsucGVuZGluZ106IChzdGF0ZSkgPT4ge1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IHRydWVcblx0XHR9LFxuXHRcdFtwcm9kdWN0c1RodW5rLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdDsoc3RhdGUubG9hZGluZyA9IGZhbHNlKSwgKHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yKVxuXHRcdH0sXG5cdFx0W3Byb2R1Y3RzVGh1bmsuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuXHRcdFx0c3RhdGUuY3VycmVudCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0fSxcbn0pXG5jb25zdCB7IHJlZHVjZXIsIGFjdGlvbnMgfSA9IHByb2R1Y3RcbmV4cG9ydCBjb25zdCB7IGFkZFByb2R1Y3QsIGRlbGV0ZVByb2R1Y3QsIHVwZGF0ZVByb2R1Y3QgfSA9IGFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdLCJuYW1lcyI6WyJhY2NvcmRpb25BY3Rpb25zQ2xhc3NlcyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsInByb2R1Y3RzQXBpIiwicHJvZHVjdHNUaHVuayIsInBhcmFtcyIsInRodW5rQXBpIiwicmVzcG9uc2UiLCJnZXRBbGwiLCJwcm9kdWN0IiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWR1Y2VycyIsImFkZFByb2R1Y3QiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwiZGVsZXRlUHJvZHVjdCIsImZpbHRlciIsImlkIiwidXBkYXRlUHJvZHVjdCIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsInJlamVjdGVkIiwiZnVsZmlsbGVkIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/productlist/productSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Auth/Auth */ \"./components/Auth/Auth.js\");\n/* harmony import */ var _utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/create-emotion-cache */ \"./utils/create-emotion-cache.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/theme */ \"./utils/theme.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n // Client-side cache, shared for the whole session of the user in the browser.\n\n\nconst clientSideEmotionCache = (0,_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nfunction MyApp(props) {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  const Layout = Component.Layout; // const [user, setUser] = useState(true)\n  // useEffect(() => {\n  //   setUser(isSuccess)\n  // }, [])\n  // console.log(isSuccess, \"is\");\n  // console.log(user, \"app\");\n  // if (pageProps.protected && user===false) {\n  // \treturn <NotAccess />\n  // }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {\n    value: emotionCache,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: _utils_theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Layout, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, this);\n}\nMyApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired),\n  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),\n  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOzs7QUFDQSxNQUFNWSxzQkFBc0IsR0FBR0YsdUVBQWtCLEVBQWpEO0FBRWUsU0FBU0csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BDLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxZQUFZLEdBQUdKLHNCQUE1QjtBQUFvREssSUFBQUE7QUFBcEQsTUFBa0VILEtBQXhFO0FBQ0EsUUFBTUksTUFBTSxHQUFHSCxTQUFTLENBQUNHLE1BQXpCLENBRm9DLENBS3BDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDQywrREFBQyx5REFBRDtBQUFlLFNBQUssRUFBRUYsWUFBdEI7QUFBQSw0QkFDQywrREFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFJQywrREFBQywrREFBRDtBQUFlLFdBQUssRUFBRUwsb0RBQXRCO0FBQUEsOEJBRUMsK0RBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBR0MsK0RBQUMsaURBQUQ7QUFBVSxhQUFLLEVBQUVKLGtEQUFqQjtBQUFBLCtCQUNDLCtEQUFDLCtEQUFEO0FBQUEsaUNBQ0MsK0RBQUMsTUFBRDtBQUFBLG1DQUNDLCtEQUFDLFNBQUQsb0JBQWVVLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBO0FBRURKLEtBQUssQ0FBQ00sU0FBTixHQUFrQjtBQUNqQkosRUFBQUEsU0FBUyxFQUFFWCwwRUFETTtBQUVqQlksRUFBQUEsWUFBWSxFQUFFWiwwREFGRztBQUdqQmEsRUFBQUEsU0FBUyxFQUFFYixxRUFBMkJpQjtBQUhyQixDQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2FwcC9zdG9yZSdcbmltcG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9BdXRoJ1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlscy9jcmVhdGUtZW1vdGlvbi1jYWNoZSdcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSdcblxuLy8gQ2xpZW50LXNpZGUgY2FjaGUsIHNoYXJlZCBmb3IgdGhlIHdob2xlIHNlc3Npb24gb2YgdGhlIHVzZXIgaW4gdGhlIGJyb3dzZXIuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcblx0Y29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHNcblx0Y29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dFxuXG5cdFxuXHQvLyBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vICAgc2V0VXNlcihpc1N1Y2Nlc3MpXG5cdC8vIH0sIFtdKVxuXHQvLyBjb25zb2xlLmxvZyhpc1N1Y2Nlc3MsIFwiaXNcIik7XG5cdC8vIGNvbnNvbGUubG9nKHVzZXIsIFwiYXBwXCIpO1xuXG5cdC8vIGlmIChwYWdlUHJvcHMucHJvdGVjdGVkICYmIHVzZXI9PT1mYWxzZSkge1xuXHQvLyBcdHJldHVybiA8Tm90QWNjZXNzIC8+XG5cdC8vIH1cblxuXHRyZXR1cm4gKFxuXHRcdDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtlbW90aW9uQ2FjaGV9PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHR7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8QXV0aFByb3ZpZGVyPlxuXHRcdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdFx0PC9MYXlvdXQ+XG5cdFx0XHRcdFx0PC9BdXRoUHJvdmlkZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XG5cdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHQpXG59XG5cbk15QXBwLnByb3BUeXBlcyA9IHtcblx0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcblx0ZW1vdGlvbkNhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cbiJdLCJuYW1lcyI6WyJDYWNoZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJUaGVtZVByb3ZpZGVyIiwiSGVhZCIsIlByb3BUeXBlcyIsIlByb3ZpZGVyIiwidXNlRGlzcGF0Y2giLCJzdG9yZSIsIkF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJ0aGVtZSIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIiwiTGF5b3V0IiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/create-emotion-cache.js":
/*!***************************************!*\
  !*** ./utils/create-emotion-cache.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n // prepend: true moves MUI styles to the top of the <head> so they're loaded first.\n// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.\n\nfunction createEmotionCache() {\n  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: 'css',\n    prepend: true\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jcmVhdGUtZW1vdGlvbi1jYWNoZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Q0FFQTtBQUNBOztBQUNlLFNBQVNDLGtCQUFULEdBQThCO0FBQzNDLFNBQU9ELHFEQUFXLENBQUM7QUFBRUUsSUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBY0MsSUFBQUEsT0FBTyxFQUFFO0FBQXZCLEdBQUQsQ0FBbEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYi8uL3V0aWxzL2NyZWF0ZS1lbW90aW9uLWNhY2hlLmpzP2U3MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuLy8gcHJlcGVuZDogdHJ1ZSBtb3ZlcyBNVUkgc3R5bGVzIHRvIHRoZSB0b3Agb2YgdGhlIDxoZWFkPiBzbyB0aGV5J3JlIGxvYWRlZCBmaXJzdC5cbi8vIEl0IGFsbG93cyBkZXZlbG9wZXJzIHRvIGVhc2lseSBvdmVycmlkZSBNVUkgc3R5bGVzIHdpdGggb3RoZXIgc3R5bGluZyBzb2x1dGlvbnMsIGxpa2UgQ1NTIG1vZHVsZXMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5IiwicHJlcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/create-emotion-cache.js\n");

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    primary: {\n      main: \"#556cd6\"\n    },\n    secondary: {\n      main: \"#19857b\"\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n    }\n  },\n  components: {\n    // MuiIcon: {\n    //   styleOverrides: {\n    //     root: {\n    //       // Match 24px = 3 * 2 + 1.125 * 16\n    //       fontSize: '50rem',\n    //     },\n    //   },\n    // },\n    MuiLink: {\n      defaultProps: {\n        underline: \"none\"\n      },\n      styleOverrides: {\n        root: {\n          color: \"black\",\n          \"&:hover, &.active\": {\n            color: \"#A9A08D\"\n          }\n        }\n      }\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBSUE7O0FBQ0EsTUFBTUcsS0FBSyxHQUFHSCxpRUFBVyxDQUFDO0FBQ3hCSSxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RELE1BQUFBLElBQUksRUFBRTtBQURHLEtBSko7QUFPUEUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xGLE1BQUFBLElBQUksRUFBRUwsMERBQVFRO0FBRFQ7QUFQQSxHQURlO0FBWXhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxZQUFZLEVBQUU7QUFDWkMsUUFBQUEsU0FBUyxFQUFFO0FBREMsT0FEUDtBQUlQQyxNQUFBQSxjQUFjLEVBQUU7QUFDZEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRSxPQURIO0FBRUosK0JBQXFCO0FBQ25CQSxZQUFBQSxLQUFLLEVBQUU7QUFEWTtBQUZqQjtBQURRO0FBSlQ7QUFYQztBQVpZLENBQUQsQ0FBekI7QUF1Q0EsaUVBQWViLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi91dGlscy90aGVtZS5qcz80ZWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyByZWQsIHllbGxvdyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuXG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiBcIiM1NTZjZDZcIixcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogXCIjMTk4NTdiXCIsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIE11aUljb246IHtcbiAgICAvLyAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgLy8gICAgIHJvb3Q6IHtcbiAgICAvLyAgICAgICAvLyBNYXRjaCAyNHB4ID0gMyAqIDIgKyAxLjEyNSAqIDE2XG4gICAgICAgICBcbiAgICAvLyAgICAgICBmb250U2l6ZTogJzUwcmVtJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgICBcbiAgICBNdWlMaW5rOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5kZXJsaW5lOiBcIm5vbmVcIixcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICBcIiY6aG92ZXIsICYuYWN0aXZlXCI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNBOUEwOERcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJyZWQiLCJ5ZWxsb3ciLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCIsImNvbXBvbmVudHMiLCJNdWlMaW5rIiwiZGVmYXVsdFByb3BzIiwidW5kZXJsaW5lIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/theme.js\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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