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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import { updateData } from '../../../mongoDB';\nconst authOptions = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    database: process.env.DATABASE_URL,\n    session: {\n        jwt: true\n    },\n    jwt: {\n        // secret: process.env.JWT_SECRET,\n        secret: \"doziyrgsueb\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUN4RCxpREFBaUQ7QUFHdEMsTUFBTUUsY0FBYztJQUN2QkMsV0FBVztRQUNQRixpRUFBY0EsQ0FBQztZQUNYRyxVQUFVQyxRQUFRQyxJQUFJQztZQUN0QkMsY0FBY0gsUUFBUUMsSUFBSUc7UUFDOUI7S0FDSDtJQUNEQyxVQUFVTCxRQUFRQyxJQUFJSztJQUN0QkMsU0FBUztRQUNMQyxLQUFLO0lBQ1Q7SUFDQUEsS0FBSztRQUNELGtDQUFrQztRQUNsQ0MsUUFBUTtJQUNaO0FBQ0osRUFBRTtBQUdOLGlFQUFlZCxnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG4vLyBpbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSAnLi4vLi4vLi4vbW9uZ29EQic7XG5cblxuICAgIGV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICAgICAgc2Vzc2lvbjoge1xuICAgICAgICAgICAgand0OiB0cnVlLCAgXG4gICAgICAgIH0sXG4gICAgICAgIGp3dDoge1xuICAgICAgICAgICAgLy8gc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgICAgICAgc2VjcmV0OiAnZG96aXlyZ3N1ZWInLFxuICAgICAgICB9LFxuICAgIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiZGF0YWJhc2UiLCJEQVRBQkFTRV9VUkwiLCJzZXNzaW9uIiwiand0Iiwic2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();