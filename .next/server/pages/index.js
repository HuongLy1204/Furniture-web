"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./components/common/header/Banner/Banner.js + 4 modules
var Banner = __webpack_require__(2113);
// EXTERNAL MODULE: ./components/common/productlist/product-list.js
var product_list = __webpack_require__(2324);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Card"
const Card_namespaceObject = require("@mui/material/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardActions"
const CardActions_namespaceObject = require("@mui/material/CardActions");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardMedia"
const CardMedia_namespaceObject = require("@mui/material/CardMedia");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/FavoriteBorder"
const FavoriteBorder_namespaceObject = require("@mui/icons-material/FavoriteBorder");
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_namespaceObject);
;// CONCATENATED MODULE: ./components/common/productlist/ProductItem.jsx










function ProductItem(props) {
    const [isLike, setLike] = external_react_.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            maxWidth: 300
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                component: "img",
                "max-height": "300",
                image: props.dataItem.url,
                alt: props.dataItem.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    align: "center",
                    gutterBottom: true,
                    variant: "OVERLINE TEXT",
                    component: "div",
                    children: props.dataItem.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                flexDirection: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "success",
                        variant: "outlined",
                        size: "medium",
                        children: "CHI TI\u1EBET"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        onClick: ()=>setLike(!isLike)
                        ,
                        "aria-label": "favoritebordericon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {
                            variant: "filled",
                            sx: {
                                color: isLike ? "red" : "black"
                            }
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/layout/main.jsx + 6 modules
var main = __webpack_require__(2305);
;// CONCATENATED MODULE: ./pages/index.js







function HomePage() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(system_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Banner/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        align: "center",
                        color: "gray",
                        component: "h1",
                        variant: "h5",
                        my: 4,
                        fontWeight: "bolder",
                        children: "S\u1EA2N PH\u1EA8M"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        container: true,
                        spacing: {
                            xs: 2,
                            md: 3
                        },
                        columns: {
                            xs: 4,
                            sm: 8,
                            md: 12
                        },
                        children: product_list/* PRODUCT_LIST.map */.Z.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                my: 2,
                                item: true,
                                xs: 2,
                                sm: 4,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductItem, {
                                    dataItem: item
                                })
                            }, item.id)
                        )
                    })
                ]
            })
        ]
    });
};
// export default Home;
HomePage.Layout = main/* default */.Z;


/***/ }),

/***/ 550:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalPhone");

/***/ }),

/***/ 6952:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,61,305], () => (__webpack_exec__(2050)));
module.exports = __webpack_exports__;

})();