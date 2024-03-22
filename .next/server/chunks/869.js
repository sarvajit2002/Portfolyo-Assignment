"use strict";
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 5869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4993);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


 // import "./styles.css";


function Parallax() {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxVideo)();
    (0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallax)(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=7e90gBu4pas"
    });
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "jarallax"
  });
}

/***/ })

};
;