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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosClient */ \"./Api/axiosClient.js\");\n\nconst productsApi = {\n  getAll() {\n    const url = '/products';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n  },\n\n  createCategory(body) {\n    const url = '/create-category';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  },\n\n  createProduct(body) {\n    const url = '/create-product';\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  },\n\n  updateProduct(body, id) {\n    const url = `/product/${id}`;\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(url, body);\n  },\n\n  updateCategory(body, id) {\n    const url = `/category/${id}`;\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(url, body);\n  },\n\n  deleteCategory(id) {\n    const url = `/category/${id}`;\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](url);\n  },\n\n  deleteProduct(id) {\n    const url = `/product/${id}`;\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](url);\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvcHJvZHVjdHNBcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLFdBQVcsR0FBRztBQUNuQkMsRUFBQUEsTUFBTSxHQUFHO0FBQ1IsVUFBTUMsR0FBRyxHQUFHLFdBQVo7QUFDQSxXQUFPSCx3REFBQSxDQUFnQkcsR0FBaEIsQ0FBUDtBQUNBLEdBSmtCOztBQUtuQkUsRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQU87QUFDcEIsVUFBTUgsR0FBRyxHQUFHLGtCQUFaO0FBQ0EsV0FBT0gseURBQUEsQ0FBaUJHLEdBQWpCLEVBQXNCRyxJQUF0QixDQUFQO0FBQ0EsR0FSa0I7O0FBU25CRSxFQUFBQSxhQUFhLENBQUNGLElBQUQsRUFBTztBQUNuQixVQUFNSCxHQUFHLEdBQUcsaUJBQVo7QUFDQSxXQUFPSCx5REFBQSxDQUFpQkcsR0FBakIsRUFBc0JHLElBQXRCLENBQVA7QUFDQSxHQVprQjs7QUFhbkJHLEVBQUFBLGFBQWEsQ0FBQ0gsSUFBRCxFQUFPSSxFQUFQLEVBQVc7QUFDdkIsVUFBTVAsR0FBRyxHQUFJLFlBQVdPLEVBQUcsRUFBM0I7QUFDQSxXQUFPVix3REFBQSxDQUFnQkcsR0FBaEIsRUFBcUJHLElBQXJCLENBQVA7QUFDQSxHQWhCa0I7O0FBaUJuQk0sRUFBQUEsY0FBYyxDQUFDTixJQUFELEVBQU1JLEVBQU4sRUFBUztBQUN0QixVQUFNUCxHQUFHLEdBQUcsYUFBWU8sRUFBRyxFQUEzQjtBQUNBLFdBQU9WLHdEQUFBLENBQWdCRyxHQUFoQixFQUFvQkcsSUFBcEIsQ0FBUDtBQUNBLEdBcEJrQjs7QUFxQm5CTyxFQUFBQSxjQUFjLENBQUNILEVBQUQsRUFBSTtBQUNqQixVQUFNUCxHQUFHLEdBQUUsYUFBWU8sRUFBRyxFQUExQjtBQUNBLFdBQU9WLDhEQUFBLENBQW1CRyxHQUFuQixDQUFQO0FBQ0EsR0F4QmtCOztBQXlCbkJZLEVBQUFBLGFBQWEsQ0FBQ0wsRUFBRCxFQUFJO0FBQ2hCLFVBQU1QLEdBQUcsR0FBRSxZQUFXTyxFQUFHLEVBQXpCO0FBQ0EsV0FBT1YsOERBQUEsQ0FBbUJHLEdBQW5CLENBQVA7QUFDQTs7QUE1QmtCLENBQXBCO0FBOEJBLGlFQUFlRixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vQXBpL3Byb2R1Y3RzQXBpLmpzP2FhZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zQ2xpZW50IGZyb20gJy4vYXhpb3NDbGllbnQnXG5cbmNvbnN0IHByb2R1Y3RzQXBpID0ge1xuXHRnZXRBbGwoKSB7XG5cdFx0Y29uc3QgdXJsID0gJy9wcm9kdWN0cydcblx0XHRyZXR1cm4gYXhpb3NDbGllbnQuZ2V0KHVybClcblx0fSxcblx0Y3JlYXRlQ2F0ZWdvcnkoYm9keSkge1xuXHRcdGNvbnN0IHVybCA9ICcvY3JlYXRlLWNhdGVnb3J5J1xuXHRcdHJldHVybiBheGlvc0NsaWVudC5wb3N0KHVybCwgYm9keSlcblx0fSxcblx0Y3JlYXRlUHJvZHVjdChib2R5KSB7XG5cdFx0Y29uc3QgdXJsID0gJy9jcmVhdGUtcHJvZHVjdCdcblx0XHRyZXR1cm4gYXhpb3NDbGllbnQucG9zdCh1cmwsIGJvZHkpXG5cdH0sXG5cdHVwZGF0ZVByb2R1Y3QoYm9keSwgaWQpIHtcblx0XHRjb25zdCB1cmwgPSBgL3Byb2R1Y3QvJHtpZH1gXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LnB1dCh1cmwsIGJvZHkpXG5cdH0sXG5cdHVwZGF0ZUNhdGVnb3J5KGJvZHksaWQpe1xuXHRcdGNvbnN0IHVybD0gYC9jYXRlZ29yeS8ke2lkfWBcblx0XHRyZXR1cm4gYXhpb3NDbGllbnQucHV0KHVybCxib2R5KVxuXHR9LFxuXHRkZWxldGVDYXRlZ29yeShpZCl7XG5cdFx0Y29uc3QgdXJsPWAvY2F0ZWdvcnkvJHtpZH1gXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LmRlbGV0ZSh1cmwpXG5cdH0sXG5cdGRlbGV0ZVByb2R1Y3QoaWQpe1xuXHRcdGNvbnN0IHVybD1gL3Byb2R1Y3QvJHtpZH1gXG5cdFx0cmV0dXJuIGF4aW9zQ2xpZW50LmRlbGV0ZSh1cmwpXG5cdH0sXG59XG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c0FwaVxuIl0sIm5hbWVzIjpbImF4aW9zQ2xpZW50IiwicHJvZHVjdHNBcGkiLCJnZXRBbGwiLCJ1cmwiLCJnZXQiLCJjcmVhdGVDYXRlZ29yeSIsImJvZHkiLCJwb3N0IiwiY3JlYXRlUHJvZHVjdCIsInVwZGF0ZVByb2R1Y3QiLCJpZCIsInB1dCIsInVwZGF0ZUNhdGVnb3J5IiwiZGVsZXRlQ2F0ZWdvcnkiLCJkZWxldGUiLCJkZWxldGVQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Api/productsApi.js\n");

/***/ }),

/***/ "./Api/projectsApi.js":
/*!****************************!*\
  !*** ./Api/projectsApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosClient */ \"./Api/axiosClient.js\");\n\nconst projectsApi = {\n  getAll() {\n    const url = \"/projects\";\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n  },\n\n  createProject(body) {\n    const url = \"/create-project\";\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body);\n  },\n\n  updateProject(body, id) {\n    const url = `/project/${id}`;\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(url, body);\n  },\n\n  deleteProject(id) {\n    const url = `/project/${id}`;\n    return _axiosClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](url);\n  }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcGkvcHJvamVjdHNBcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVDLE1BQU1DLFdBQVcsR0FBQztBQUNuQkMsRUFBQUEsTUFBTSxHQUFFO0FBQ0osVUFBTUMsR0FBRyxHQUFDLFdBQVY7QUFDQSxXQUFPSCx3REFBQSxDQUFnQkcsR0FBaEIsQ0FBUDtBQUNILEdBSmtCOztBQUtuQkUsRUFBQUEsYUFBYSxDQUFDQyxJQUFELEVBQU07QUFDZixVQUFNSCxHQUFHLEdBQUMsaUJBQVY7QUFDQSxXQUFPSCx5REFBQSxDQUFpQkcsR0FBakIsRUFBcUJHLElBQXJCLENBQVA7QUFDSCxHQVJrQjs7QUFTbkJFLEVBQUFBLGFBQWEsQ0FBQ0YsSUFBRCxFQUFNRyxFQUFOLEVBQVM7QUFDbEIsVUFBTU4sR0FBRyxHQUFHLFlBQVdNLEVBQUcsRUFBMUI7QUFDQSxXQUFPVCx3REFBQSxDQUFnQkcsR0FBaEIsRUFBb0JHLElBQXBCLENBQVA7QUFDSCxHQVprQjs7QUFhbkJLLEVBQUFBLGFBQWEsQ0FBQ0YsRUFBRCxFQUFJO0FBQ2IsVUFBTU4sR0FBRyxHQUFFLFlBQVdNLEVBQUcsRUFBekI7QUFDQSxXQUFPVCw4REFBQSxDQUFtQkcsR0FBbkIsQ0FBUDtBQUNIOztBQWhCa0IsQ0FBbEI7QUFrQkQsaUVBQWVGLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi9BcGkvcHJvamVjdHNBcGkuanM/NjlhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBheGlvc0NsaWVudCBmcm9tIFwiLi9heGlvc0NsaWVudFwiXG5cbiBjb25zdCBwcm9qZWN0c0FwaT17XG5nZXRBbGwoKXtcbiAgICBjb25zdCB1cmw9XCIvcHJvamVjdHNcIlxuICAgIHJldHVybiBheGlvc0NsaWVudC5nZXQodXJsKVxufSxcbmNyZWF0ZVByb2plY3QoYm9keSl7XG4gICAgY29uc3QgdXJsPVwiL2NyZWF0ZS1wcm9qZWN0XCJcbiAgICByZXR1cm4gYXhpb3NDbGllbnQucG9zdCh1cmwsYm9keSlcbn0sXG51cGRhdGVQcm9qZWN0KGJvZHksaWQpe1xuICAgIGNvbnN0IHVybCA9YC9wcm9qZWN0LyR7aWR9YFxuICAgIHJldHVybiBheGlvc0NsaWVudC5wdXQodXJsLGJvZHkpXG59LFxuZGVsZXRlUHJvamVjdChpZCl7XG4gICAgY29uc3QgdXJsPWAvcHJvamVjdC8ke2lkfWBcbiAgICByZXR1cm4gYXhpb3NDbGllbnQuZGVsZXRlKHVybClcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzQXBpIl0sIm5hbWVzIjpbImF4aW9zQ2xpZW50IiwicHJvamVjdHNBcGkiLCJnZXRBbGwiLCJ1cmwiLCJnZXQiLCJjcmVhdGVQcm9qZWN0IiwiYm9keSIsInBvc3QiLCJ1cGRhdGVQcm9qZWN0IiwiaWQiLCJwdXQiLCJkZWxldGVQcm9qZWN0IiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Api/projectsApi.js\n");

/***/ }),

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_productlist_productSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/productlist/productSlice */ \"./components/common/productlist/productSlice.js\");\n/* harmony import */ var _components_works_projectSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/works/projectSlice */ \"./components/works/projectSlice.js\");\n\n\n\nconst rootReducer = {\n  products: _components_common_productlist_productSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  projects: _components_works_projectSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: rootReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRyxXQUFXLEdBQUc7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRUgsbUZBRFM7QUFFbkJJLEVBQUFBLFFBQVEsRUFBRUgsc0VBQWNBO0FBRkwsQ0FBcEI7QUFJQSxNQUFNSSxLQUFLLEdBQUdOLGdFQUFjLENBQUM7QUFDNUJPLEVBQUFBLE9BQU8sRUFBRUo7QUFEbUIsQ0FBRCxDQUE1QjtBQUlBLGlFQUFlRyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vYXBwL3N0b3JlLmpzP2NhZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3Byb2R1Y3RsaXN0L3Byb2R1Y3RTbGljZSdcbmltcG9ydCBwcm9qZWN0UmVkdWNlciBmcm9tICcuLi9jb21wb25lbnRzL3dvcmtzL3Byb2plY3RTbGljZSdcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSB7XG5cdHByb2R1Y3RzOiBwcm9kdWN0UmVkdWNlcixcblx0cHJvamVjdHM6IHByb2plY3RSZWR1Y2VyLFxufVxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG5cdHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInByb2R1Y3RSZWR1Y2VyIiwicHJvamVjdFJlZHVjZXIiLCJyb290UmVkdWNlciIsInByb2R1Y3RzIiwicHJvamVjdHMiLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsThunk\": () => (/* binding */ productsThunk),\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"deleteProduct\": () => (/* binding */ deleteProduct),\n/* harmony export */   \"updateProduct\": () => (/* binding */ updateProduct),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Api_productsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Api/productsApi */ \"./Api/productsApi.js\");\n\n\nconst productsThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('category/getAll', async (params, thunkApi) => {\n  const response = await _Api_productsApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAll();\n  return response;\n});\nconst product = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'products',\n  initialState: {\n    current: [],\n    loading: false,\n    error: ''\n  },\n  reducers: {\n    addProduct: (state, action) => {\n      state.current.push(action.payload);\n    },\n    deleteProduct: (state, action) => {\n      const deleteProduct = action.payload;\n      return state.current.filter(product => product.id !== deleteProduct);\n    },\n    updateProduct: (state, action) => {\n      const newProduct = action.payload;\n      const productIndex = state.current.findIndex(product => product.id === newProduct.id);\n\n      if (productIndex >= 0) {\n        state[productIndex] = newProduct;\n      }\n    }\n  },\n  extraReducers: {\n    [productsThunk.pending]: state => {\n      state.loading = true;\n    },\n    [productsThunk.rejected]: (state, action) => {\n      ;\n      state.loading = false, state.error = action.error;\n    },\n    [productsThunk.fulfilled]: (state, action) => {\n      state.loading = false;\n      state.current = action.payload;\n    }\n  }\n});\nconst {\n  reducer,\n  actions\n} = product;\nconst {\n  addProduct,\n  deleteProduct,\n  updateProduct\n} = actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0bGlzdC9wcm9kdWN0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUcsYUFBYSxHQUFHSCxrRUFBZ0IsQ0FBQyxpQkFBRCxFQUFvQixPQUFPSSxNQUFQLEVBQWVDLFFBQWYsS0FBNEI7QUFDNUYsUUFBTUMsUUFBUSxHQUFHLE1BQU1KLCtEQUFBLEVBQXZCO0FBQ0EsU0FBT0ksUUFBUDtBQUNBLENBSDRDLENBQXRDO0FBSVAsTUFBTUUsT0FBTyxHQUFHUCw2REFBVyxDQUFDO0FBQzNCUSxFQUFBQSxJQUFJLEVBQUUsVUFEcUI7QUFFM0JDLEVBQUFBLFlBQVksRUFBRTtBQUNiQyxJQUFBQSxPQUFPLEVBQUUsRUFESTtBQUViQyxJQUFBQSxPQUFPLEVBQUUsS0FGSTtBQUdiQyxJQUFBQSxLQUFLLEVBQUU7QUFITSxHQUZhO0FBTzNCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsVUFBVSxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QkQsTUFBQUEsS0FBSyxDQUFDTCxPQUFOLENBQWNPLElBQWQsQ0FBbUJELE1BQU0sQ0FBQ0UsT0FBMUI7QUFFQSxLQUpRO0FBS1RDLElBQUFBLGFBQWEsRUFBRSxDQUFDSixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDakMsWUFBTUcsYUFBYSxHQUFHSCxNQUFNLENBQUNFLE9BQTdCO0FBQ0EsYUFBT0gsS0FBSyxDQUFDTCxPQUFOLENBQWNVLE1BQWQsQ0FBc0JiLE9BQUQsSUFBYUEsT0FBTyxDQUFDYyxFQUFSLEtBQWVGLGFBQWpELENBQVA7QUFDQSxLQVJRO0FBU1RHLElBQUFBLGFBQWEsRUFBRSxDQUFDUCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDakMsWUFBTU8sVUFBVSxHQUFHUCxNQUFNLENBQUNFLE9BQTFCO0FBQ0EsWUFBTU0sWUFBWSxHQUFHVCxLQUFLLENBQUNMLE9BQU4sQ0FBY2UsU0FBZCxDQUF5QmxCLE9BQUQsSUFBYUEsT0FBTyxDQUFDYyxFQUFSLEtBQWVFLFVBQVUsQ0FBQ0YsRUFBL0QsQ0FBckI7O0FBQ0EsVUFBSUcsWUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ3RCVCxRQUFBQSxLQUFLLENBQUNTLFlBQUQsQ0FBTCxHQUFzQkQsVUFBdEI7QUFDQTtBQUNEO0FBZlEsR0FQaUI7QUF3QjNCRyxFQUFBQSxhQUFhLEVBQUU7QUFDZCxLQUFDeEIsYUFBYSxDQUFDeUIsT0FBZixHQUEwQlosS0FBRCxJQUFXO0FBQ25DQSxNQUFBQSxLQUFLLENBQUNKLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQSxLQUhhO0FBSWQsS0FBQ1QsYUFBYSxDQUFDMEIsUUFBZixHQUEwQixDQUFDYixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDNUM7QUFBRUQsTUFBQUEsS0FBSyxDQUFDSixPQUFOLEdBQWdCLEtBQWpCLEVBQTBCSSxLQUFLLENBQUNILEtBQU4sR0FBY0ksTUFBTSxDQUFDSixLQUEvQztBQUNELEtBTmE7QUFPZCxLQUFDVixhQUFhLENBQUMyQixTQUFmLEdBQTJCLENBQUNkLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM3Q0QsTUFBQUEsS0FBSyxDQUFDSixPQUFOLEdBQWdCLEtBQWhCO0FBQ0FJLE1BQUFBLEtBQUssQ0FBQ0wsT0FBTixHQUFnQk0sTUFBTSxDQUFDRSxPQUF2QjtBQUNBO0FBVmE7QUF4QlksQ0FBRCxDQUEzQjtBQXFDQSxNQUFNO0FBQUVZLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUE7QUFBWCxJQUF1QnhCLE9BQTdCO0FBQ08sTUFBTTtBQUFFTyxFQUFBQSxVQUFGO0FBQWNLLEVBQUFBLGFBQWQ7QUFBNkJHLEVBQUFBO0FBQTdCLElBQStDUyxPQUFyRDtBQUNQLGlFQUFlRCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vY29tcG9uZW50cy9jb21tb24vcHJvZHVjdGxpc3QvcHJvZHVjdFNsaWNlLmpzPzNjMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHByb2R1Y3RzQXBpIGZyb20gJy4uLy4uLy4uL0FwaS9wcm9kdWN0c0FwaSdcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzVGh1bmsgPSBjcmVhdGVBc3luY1RodW5rKCdjYXRlZ29yeS9nZXRBbGwnLCBhc3luYyAocGFyYW1zLCB0aHVua0FwaSkgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb2R1Y3RzQXBpLmdldEFsbCgpXG5cdHJldHVybiByZXNwb25zZVxufSlcbmNvbnN0IHByb2R1Y3QgPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdwcm9kdWN0cycsXG5cdGluaXRpYWxTdGF0ZToge1xuXHRcdGN1cnJlbnQ6IFtdLFxuXHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdGVycm9yOiAnJyxcblx0fSxcblx0cmVkdWNlcnM6IHtcblx0XHRhZGRQcm9kdWN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuY3VycmVudC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuXG5cdFx0fSxcblx0XHRkZWxldGVQcm9kdWN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgZGVsZXRlUHJvZHVjdCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHRyZXR1cm4gc3RhdGUuY3VycmVudC5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGRlbGV0ZVByb2R1Y3QpXG5cdFx0fSxcblx0XHR1cGRhdGVQcm9kdWN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgbmV3UHJvZHVjdCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHRjb25zdCBwcm9kdWN0SW5kZXggPSBzdGF0ZS5jdXJyZW50LmZpbmRJbmRleCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gbmV3UHJvZHVjdC5pZClcblx0XHRcdGlmIChwcm9kdWN0SW5kZXggPj0gMCkge1xuXHRcdFx0XHRzdGF0ZVtwcm9kdWN0SW5kZXhdID0gbmV3UHJvZHVjdFxuXHRcdFx0fVxuXHRcdH0sXG5cdH0sXG5cdGV4dHJhUmVkdWNlcnM6IHtcblx0XHRbcHJvZHVjdHNUaHVuay5wZW5kaW5nXTogKHN0YXRlKSA9PiB7XG5cdFx0XHRzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuXHRcdH0sXG5cdFx0W3Byb2R1Y3RzVGh1bmsucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0OyhzdGF0ZS5sb2FkaW5nID0gZmFsc2UpLCAoc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3IpXG5cdFx0fSxcblx0XHRbcHJvZHVjdHNUaHVuay5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlXG5cdFx0XHRzdGF0ZS5jdXJyZW50ID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHR9LFxufSlcbmNvbnN0IHsgcmVkdWNlciwgYWN0aW9ucyB9ID0gcHJvZHVjdFxuZXhwb3J0IGNvbnN0IHsgYWRkUHJvZHVjdCwgZGVsZXRlUHJvZHVjdCwgdXBkYXRlUHJvZHVjdCB9ID0gYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsInByb2R1Y3RzQXBpIiwicHJvZHVjdHNUaHVuayIsInBhcmFtcyIsInRodW5rQXBpIiwicmVzcG9uc2UiLCJnZXRBbGwiLCJwcm9kdWN0IiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnQiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWR1Y2VycyIsImFkZFByb2R1Y3QiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwiZGVsZXRlUHJvZHVjdCIsImZpbHRlciIsImlkIiwidXBkYXRlUHJvZHVjdCIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsInJlamVjdGVkIiwiZnVsZmlsbGVkIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/productlist/productSlice.js\n");

/***/ }),

/***/ "./components/works/projectSlice.js":
/*!******************************************!*\
  !*** ./components/works/projectSlice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectThunk\": () => (/* binding */ projectThunk),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Api_projectsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Api/projectsApi */ \"./Api/projectsApi.js\");\n\n\nconst projectThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"projects/getAll\", async (params, thunkAppi) => {\n  const res = await _Api_projectsApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAll();\n  return res;\n});\nconst project = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'projects',\n  initialState: {\n    projects: [],\n    loading: false,\n    error: ''\n  },\n  reducers: {\n    addProject: (state, action) => {\n      state.current.push(action.payload);\n    }\n  },\n  extraReducers: {\n    [projectThunk.pending]: state => {\n      state.loading = true;\n    },\n    [projectThunk.rejected]: (state, action) => {\n      state.loading = false;\n      state.error = action.error;\n    },\n    [projectThunk.fulfilled]: (state, action) => {\n      state.loading = false;\n      state.projects = action.payload;\n    }\n  }\n});\nconst {\n  reducer,\n  actions\n} = project;\nconst {\n  addProject\n} = actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3dvcmtzL3Byb2plY3RTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sTUFBTUcsWUFBWSxHQUFFSCxrRUFBZ0IsQ0FBQyxpQkFBRCxFQUFvQixPQUFNSSxNQUFOLEVBQWFDLFNBQWIsS0FBeUI7QUFDcEYsUUFBTUMsR0FBRyxHQUFFLE1BQU1KLCtEQUFBLEVBQWpCO0FBQ0EsU0FBT0ksR0FBUDtBQUNILENBSDBDLENBQXBDO0FBSVAsTUFBTUUsT0FBTyxHQUFHUCw2REFBVyxDQUFDO0FBQzNCUSxFQUFBQSxJQUFJLEVBQUUsVUFEcUI7QUFFM0JDLEVBQUFBLFlBQVksRUFBRTtBQUNiQyxJQUFBQSxRQUFRLEVBQUUsRUFERztBQUVQQyxJQUFBQSxPQUFPLEVBQUUsS0FGRjtBQUdiQyxJQUFBQSxLQUFLLEVBQUU7QUFITSxHQUZhO0FBUTNCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsVUFBVSxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QkQsTUFBQUEsS0FBSyxDQUFDRSxPQUFOLENBQWNDLElBQWQsQ0FBbUJGLE1BQU0sQ0FBQ0csT0FBMUI7QUFDQTtBQUhRLEdBUmlCO0FBYXhCQyxFQUFBQSxhQUFhLEVBQUM7QUFDbEIsS0FBQ2xCLFlBQVksQ0FBQ21CLE9BQWQsR0FBd0JOLEtBQUQsSUFBUztBQUM1QkEsTUFBQUEsS0FBSyxDQUFDSixPQUFOLEdBQWUsSUFBZjtBQUNILEtBSGlCO0FBSWxCLEtBQUNULFlBQVksQ0FBQ29CLFFBQWQsR0FBd0IsQ0FBQ1AsS0FBRCxFQUFPQyxNQUFQLEtBQWdCO0FBQ3BDRCxNQUFBQSxLQUFLLENBQUNKLE9BQU4sR0FBZSxLQUFmO0FBQ0FJLE1BQUFBLEtBQUssQ0FBQ0gsS0FBTixHQUFhSSxNQUFNLENBQUNKLEtBQXBCO0FBQ0gsS0FQaUI7QUFRbEIsS0FBQ1YsWUFBWSxDQUFDcUIsU0FBZCxHQUF5QixDQUFDUixLQUFELEVBQU9DLE1BQVAsS0FBZ0I7QUFDckNELE1BQUFBLEtBQUssQ0FBQ0osT0FBTixHQUFjLEtBQWQ7QUFDQUksTUFBQUEsS0FBSyxDQUFDTCxRQUFOLEdBQWVNLE1BQU0sQ0FBQ0csT0FBdEI7QUFDSDtBQVhpQjtBQWJVLENBQUQsQ0FBM0I7QUEyQkEsTUFBSztBQUFDSyxFQUFBQSxPQUFEO0FBQVNDLEVBQUFBO0FBQVQsSUFBa0JsQixPQUF2QjtBQUNPLE1BQU07QUFBQ08sRUFBQUE7QUFBRCxJQUFlVyxPQUFyQjtBQUNQLGlFQUFlRCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vY29tcG9uZW50cy93b3Jrcy9wcm9qZWN0U2xpY2UuanM/YzYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgcHJvamVjdHNBcGkgZnJvbSAnLi4vLi4vQXBpL3Byb2plY3RzQXBpJ1xuZXhwb3J0IGNvbnN0IHByb2plY3RUaHVuaz0gY3JlYXRlQXN5bmNUaHVuayhcInByb2plY3RzL2dldEFsbFwiLCBhc3luYyhwYXJhbXMsdGh1bmtBcHBpKT0+e1xuICAgIGNvbnN0IHJlcz0gYXdhaXQgcHJvamVjdHNBcGkuZ2V0QWxsKClcbiAgICByZXR1cm4gcmVzXG59KVxuY29uc3QgcHJvamVjdCA9IGNyZWF0ZVNsaWNlKHtcblx0bmFtZTogJ3Byb2plY3RzJyxcblx0aW5pdGlhbFN0YXRlOiB7XG5cdFx0cHJvamVjdHM6IFtdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcblx0XHRlcnJvcjogJycsXG5cdH0sXG5cblx0cmVkdWNlcnM6IHtcblx0XHRhZGRQcm9qZWN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuY3VycmVudC5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuXHRcdH0sXG5cdH0sXG4gICAgZXh0cmFSZWR1Y2Vyczp7XG5bcHJvamVjdFRodW5rLnBlbmRpbmddOihzdGF0ZSk9PntcbiAgICBzdGF0ZS5sb2FkaW5nPSB0cnVlXG59LFxuW3Byb2plY3RUaHVuay5yZWplY3RlZF06KHN0YXRlLGFjdGlvbik9PntcbiAgICBzdGF0ZS5sb2FkaW5nPSBmYWxzZVxuICAgIHN0YXRlLmVycm9yPSBhY3Rpb24uZXJyb3Jcbn0sXG5bcHJvamVjdFRodW5rLmZ1bGZpbGxlZF06KHN0YXRlLGFjdGlvbik9PntcbiAgICBzdGF0ZS5sb2FkaW5nPWZhbHNlXG4gICAgc3RhdGUucHJvamVjdHM9YWN0aW9uLnBheWxvYWRcbn1cbiAgICB9XG59KVxuY29uc3R7cmVkdWNlcixhY3Rpb25zfT1wcm9qZWN0XG5leHBvcnQgY29uc3Qge2FkZFByb2plY3R9ID0gYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuXG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwicHJvamVjdHNBcGkiLCJwcm9qZWN0VGh1bmsiLCJwYXJhbXMiLCJ0aHVua0FwcGkiLCJyZXMiLCJnZXRBbGwiLCJwcm9qZWN0IiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInByb2plY3RzIiwibG9hZGluZyIsImVycm9yIiwicmVkdWNlcnMiLCJhZGRQcm9qZWN0Iiwic3RhdGUiLCJhY3Rpb24iLCJjdXJyZW50IiwicHVzaCIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsInJlamVjdGVkIiwiZnVsZmlsbGVkIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/works/projectSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Auth/Auth */ \"./components/Auth/Auth.js\");\n/* harmony import */ var _utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/create-emotion-cache */ \"./utils/create-emotion-cache.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/theme */ \"./utils/theme.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Auth_NotAccess__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Auth/NotAccess */ \"./components/Auth/NotAccess.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/Users/nhly1204/Documents/LEARNJS/Project/Furniture-web/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Client-side cache, shared for the whole session of the user in the browser.\n\n\nconst clientSideEmotionCache = (0,_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nfunction MyApp(props) {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  const Layout = Component.Layout;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {\n    value: emotionCache,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: _utils_theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n          store: _app_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Layout, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }, this);\n}\nMyApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired),\n  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),\n  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7OztBQUNBLE1BQU1lLHNCQUFzQixHQUFHTCx1RUFBa0IsRUFBakQ7QUFFZSxTQUFTTSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEMsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLFlBQVksR0FBR0osc0JBQTVCO0FBQW9ESyxJQUFBQTtBQUFwRCxNQUFrRUgsS0FBeEU7QUFDQSxRQUFNSSxNQUFNLEdBQUdILFNBQVMsQ0FBQ0csTUFBekI7QUFFQSxzQkFDQywrREFBQyx5REFBRDtBQUFlLFNBQUssRUFBRUYsWUFBdEI7QUFBQSw0QkFDQywrREFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFJQywrREFBQywrREFBRDtBQUFlLFdBQUssRUFBRVIsb0RBQXRCO0FBQUEsOEJBRUMsK0RBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBR0MsK0RBQUMsK0RBQUQ7QUFBQSwrQkFDQywrREFBQyxpREFBRDtBQUFVLGVBQUssRUFBRUosa0RBQWpCO0FBQUEsaUNBQ0MsK0RBQUMsTUFBRDtBQUFBLG1DQUNDLCtEQUFDLFNBQUQsb0JBQWVhLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBO0FBRURKLEtBQUssQ0FBQ00sU0FBTixHQUFrQjtBQUNqQkosRUFBQUEsU0FBUyxFQUFFZCwwRUFETTtBQUVqQmUsRUFBQUEsWUFBWSxFQUFFZiwwREFGRztBQUdqQmdCLEVBQUFBLFNBQVMsRUFBRWhCLHFFQUEyQm9CO0FBSHJCLENBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2ViLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vYXBwL3N0b3JlJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoL0F1dGgnXG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL3V0aWxzL2NyZWF0ZS1lbW90aW9uLWNhY2hlJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3V0aWxzL3RoZW1lJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTm90QWNjZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9Ob3RBY2Nlc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbi8vIENsaWVudC1zaWRlIGNhY2hlLCBzaGFyZWQgZm9yIHRoZSB3aG9sZSBzZXNzaW9uIG9mIHRoZSB1c2VyIGluIHRoZSBicm93c2VyLlxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG5cdGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzXG5cdGNvbnN0IExheW91dCA9IENvbXBvbmVudC5MYXlvdXRcblx0XG5cdHJldHVybiAoXG5cdFx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cdFx0XHRcdHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdDxBdXRoUHJvdmlkZXI+XG5cdFx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHRcdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHRcdFx0XHQ8L0xheW91dD5cblx0XHRcdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdFx0XHQ8L0F1dGhQcm92aWRlcj5cblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cblx0XHQ8L0NhY2hlUHJvdmlkZXI+XG5cdClcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXHRlbW90aW9uQ2FjaGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuIl0sIm5hbWVzIjpbIkNhY2hlUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJIZWFkIiwiUHJvcFR5cGVzIiwiUHJvdmlkZXIiLCJ1c2VEaXNwYXRjaCIsInN0b3JlIiwiQXV0aFByb3ZpZGVyIiwidXNlQXV0aCIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsInRoZW1lIiwiTm90QWNjZXNzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImVtb3Rpb25DYWNoZSIsInBhZ2VQcm9wcyIsIkxheW91dCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    primary: {\n      main: \"#556cd6\"\n    },\n    secondary: {\n      main: \"#c2bbb5\"\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n    }\n  },\n  components: {\n    // MuiIcon: {\n    //   styleOverrides: {\n    //     root: {\n    //       // Match 24px = 3 * 2 + 1.125 * 16\n    //       fontSize: '50rem',\n    //     },\n    //   },\n    // },\n    MuiLink: {\n      defaultProps: {\n        underline: \"none\"\n      },\n      styleOverrides: {\n        root: {\n          color: \"black\",\n          \"&:hover, &.active\": {\n            color: \"#A9A08D\"\n          }\n        }\n      }\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBSUE7O0FBRUEsTUFBTUcsS0FBSyxHQUFHSCxpRUFBVyxDQUFDO0FBQ3hCSSxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RELE1BQUFBLElBQUksRUFBRTtBQURHLEtBSko7QUFPUEUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xGLE1BQUFBLElBQUksRUFBRUwsMERBQVFRO0FBRFQ7QUFQQSxHQURlO0FBWXhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxZQUFZLEVBQUU7QUFDWkMsUUFBQUEsU0FBUyxFQUFFO0FBREMsT0FEUDtBQUlQQyxNQUFBQSxjQUFjLEVBQUU7QUFDZEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLEtBQUssRUFBRSxPQURIO0FBRUosK0JBQXFCO0FBQ25CQSxZQUFBQSxLQUFLLEVBQUU7QUFEWTtBQUZqQjtBQURRO0FBSlQ7QUFYQztBQVpZLENBQUQsQ0FBekI7QUF1Q0EsaUVBQWViLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWIvLi91dGlscy90aGVtZS5qcz80ZWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyByZWQsIHllbGxvdyB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuXG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiIzU1NmNkNlwiLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBcIiNjMmJiYjVcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gTXVpSWNvbjoge1xuICAgIC8vICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAvLyAgICAgcm9vdDoge1xuICAgIC8vICAgICAgIC8vIE1hdGNoIDI0cHggPSAzICogMiArIDEuMTI1ICogMTZcbiAgICAgICAgIFxuICAgIC8vICAgICAgIGZvbnRTaXplOiAnNTByZW0nLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICAgIFxuICAgIE11aUxpbms6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bmRlcmxpbmU6IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgIFwiJjpob3ZlciwgJi5hY3RpdmVcIjoge1xuICAgICAgICAgICAgY29sb3I6IFwiI0E5QTA4RFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlZCIsInllbGxvdyIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiZXJyb3IiLCJBNDAwIiwiY29tcG9uZW50cyIsIk11aUxpbmsiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlcmxpbmUiLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/theme.js\n");

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