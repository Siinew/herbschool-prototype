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
exports.id = "pages/api/getMentors";
exports.ids = ["pages/api/getMentors"];
exports.modules = {

/***/ "(api-node)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.PG_USER,\n    host: process.env.PG_HOST,\n    database: process.env.PG_DATABASE,\n    password: process.env.PG_PASSWORD,\n    port: process.env.PG_PORT\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsT0FBTyxJQUFJRCxvQ0FBSUEsQ0FBQztJQUNwQkUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssV0FBVztJQUNqQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO0lBQ2pDQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLE9BQU87QUFDM0I7QUFFQSxpRUFBZVosSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiYzpcXFByb2dyYW1taW5nXFxBSVxcSGVyYmFsIFByb2plY3RcXGhlcmJzY2hvb2wtcHJvdG90eXBlXFxsaWJcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcclxuXHJcbmNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XHJcbiAgdXNlcjogcHJvY2Vzcy5lbnYuUEdfVVNFUixcclxuICBob3N0OiBwcm9jZXNzLmVudi5QR19IT1NULFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QR19EQVRBQkFTRSxcclxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEdfUEFTU1dPUkQsXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUEdfUE9SVCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb29sO1xyXG4iXSwibmFtZXMiOlsiUG9vbCIsInBvb2wiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIlBHX1VTRVIiLCJob3N0IiwiUEdfSE9TVCIsImRhdGFiYXNlIiwiUEdfREFUQUJBU0UiLCJwYXNzd29yZCIsIlBHX1BBU1NXT1JEIiwicG9ydCIsIlBHX1BPUlQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./lib/db.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetMentors&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetMentors.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetMentors&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetMentors.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_getMentors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\getMentors.js */ \"(api-node)/./pages/api/getMentors.js\");\n\r\n\r\n\r\n// Import the userland code.\r\n\r\n// Re-export the handler (should be the default export).\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_getMentors_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\r\n// Re-export config.\r\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_getMentors_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\r\n// Create and export the route module that will be consumed.\r\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\r\n    definition: {\r\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\r\n        page: \"/api/getMentors\",\r\n        pathname: \"/api/getMentors\",\r\n        // The following aren't used in production.\r\n        bundlePath: '',\r\n        filename: ''\r\n    },\r\n    userland: _pages_api_getMentors_js__WEBPACK_IMPORTED_MODULE_3__\r\n});\r\n\r\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGZ2V0TWVudG9ycyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDZ2V0TWVudG9ycy5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMscURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHFEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XHJcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcclxuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XHJcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGdldE1lbnRvcnMuanNcIjtcclxuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cclxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XHJcbi8vIFJlLWV4cG9ydCBjb25maWcuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xyXG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cclxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xyXG4gICAgZGVmaW5pdGlvbjoge1xyXG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXHJcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldE1lbnRvcnNcIixcclxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldE1lbnRvcnNcIixcclxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXHJcbiAgICAgICAgYnVuZGxlUGF0aDogJycsXHJcbiAgICAgICAgZmlsZW5hbWU6ICcnXHJcbiAgICB9LFxyXG4gICAgdXNlcmxhbmRcclxufSk7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetMentors&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetMentors.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/getMentors.js":
/*!*********************************!*\
  !*** ./pages/api/getMentors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api-node)/./lib/db.js\");\n\nasync function handler(req, res) {\n    try {\n        const result = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.pool.query(\"SELECT id, name, image_url, talents FROM mentors\");\n        res.status(200).json(result.rows || []); // Return an empty array if no results\n    } catch (error) {\n        console.error(\"Error fetching mentors:\", error);\n        res.status(500).json({\n            error: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9nZXRNZW50b3JzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBRXJCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNSix5Q0FBSUEsQ0FBQ0ssS0FBSyxDQUFDO1FBQ2hDRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSCxPQUFPSSxJQUFJLElBQUksRUFBRSxHQUFJLHNDQUFzQztJQUNsRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekNOLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF3QjtJQUN4RDtBQUNGIiwic291cmNlcyI6WyJjOlxcUHJvZ3JhbW1pbmdcXEFJXFxIZXJiYWwgUHJvamVjdFxcaGVyYnNjaG9vbC1wcm90b3R5cGVcXHBhZ2VzXFxhcGlcXGdldE1lbnRvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCBpZCwgbmFtZSwgaW1hZ2VfdXJsLCB0YWxlbnRzIEZST00gbWVudG9yc1wiKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yb3dzIHx8IFtdKTsgIC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBubyByZXN1bHRzXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtZW50b3JzOlwiLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicG9vbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJyb3dzIiwiZXJyb3IiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/getMentors.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetMentors&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetMentors.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();