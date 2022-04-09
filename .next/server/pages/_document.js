"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 8193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: ./utils/theme.js
var theme = __webpack_require__(7518);
// EXTERNAL MODULE: ./utils/create-emotion-cache.js
var create_emotion_cache = __webpack_require__(9421);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_document.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MyDocument extends next_document["default"] {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
        lang: "en",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
            name: "theme-color",
            content: theme/* default.palette.primary.main */.Z.palette.primary.main
          }), /*#__PURE__*/jsx_runtime_.jsx("link", {
            rel: "shortcut icon",
            href: "/static/favicon.ico"
          }), /*#__PURE__*/jsx_runtime_.jsx("link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css",
            integrity: "undefined",
            crossOrigin: "anonymous"
          }), /*#__PURE__*/jsx_runtime_.jsx("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          }), this.props.emotionStyleTags]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
        })]
      })
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage;
  const cache = (0,create_emotion_cache/* default */.Z)();
  const {
    extractCriticalToChunks
  } = create_instance_default()(cache);

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => function EnhanceApp(props) {
      return /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({
        emotionCache: cache
      }, props));
    }
  });

  const initialProps = await next_document["default"].getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => /*#__PURE__*/jsx_runtime_.jsx("style", {
    "data-emotion": `${style.key} ${style.ids.join(' ')}`,
    dangerouslySetInnerHTML: {
      __html: style.css
    }
  }, style.key));
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    emotionStyleTags
  });
};

/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [932,859,635], () => (__webpack_exec__(8193)));
module.exports = __webpack_exports__;

})();