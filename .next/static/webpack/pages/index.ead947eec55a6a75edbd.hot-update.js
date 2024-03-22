"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Testimonial.js":
/*!***************************************!*\
  !*** ./src/components/Testimonial.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Acer_Desktop_kura_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Testimonial.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Acer_Desktop_kura_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Testimonial = function Testimonial() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    img: null,
    title: "",
    date: ""
  }),
      modalValue = _useState2[0],
      setModalValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      testimonial = _useState3[0],
      setTestimonial = _useState3[1]; // State to store the project data


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Fetch project data when the component mounts
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.success && data.user && data.user.testimonials) {
        setTestimonial(data.user.testimonials);
      }
    })["catch"](function (error) {
      console.error('Error fetching services data', error);
    });
  }, []);

  var onOpenModal = function onOpenModal(img, title, date) {
    setOpen(true);
    setModalValue({
      img: img,
      title: title,
      date: date
    });
  };

  var _onCloseModal = function onCloseModal() {
    setOpen(false);
    setModalValue({
      img: null,
      title: "",
      date: ""
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "news",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "kura_tm_news",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
              children: "Reviews"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "news_list wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "slick-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "slick-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__.newsSlider), {}, {
                  children: testimonial && testimonial.map(function (testimonial, index) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                      className: "slick-slide",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                        className: "list_inner",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "image",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                            src: testimonial.image.url,
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 53,
                            columnNumber: 29
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "overlay"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "/img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "details",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                            children: testimonial.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 62,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                            children: testimonial.review
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 63,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                            children: testimonial.position
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 64,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 25
                      }, _this)
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_4__.NewsModal, {
      open: open,
      onCloseModal: function onCloseModal() {
        return _onCloseModal();
      },
      img: modalValue.img,
      title: modalValue.title,
      date: modalValue.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(Testimonial, "GbzvrVPF7pvtKgbrZ+5rUN86f1k=");

_c = Testimonial;
/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

var _c;

$RefreshReg$(_c, "Testimonial");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWFkOTQ3ZWVjNTVhNmE3NWVkYmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNUSxXQUFXLEdBQUUsU0FBYkEsV0FBYSxHQUFNO0FBQUE7O0FBQ3ZCLGtCQUF3Qk4sK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQUEsTUFBT08sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQW9DUiwrQ0FBUSxDQUFDO0FBQzNDUyxJQUFBQSxHQUFHLEVBQUUsSUFEc0M7QUFFM0NDLElBQUFBLEtBQUssRUFBRSxFQUZvQztBQUczQ0MsSUFBQUEsSUFBSSxFQUFFO0FBSHFDLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUtBLG1CQUFzQ2IsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT2MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQixpQkFQdUIsQ0FPNkI7OztBQUVwRGQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQWUsSUFBQUEsS0FBSyxDQUFDLHNGQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkLFVBQUlBLElBQUksQ0FBQ0MsT0FBTCxJQUFnQkQsSUFBSSxDQUFDRSxJQUFyQixJQUE2QkYsSUFBSSxDQUFDRSxJQUFMLENBQVVDLFlBQTNDLEVBQXlEO0FBQ3ZEUixRQUFBQSxjQUFjLENBQUNLLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxZQUFYLENBQWQ7QUFDRDtBQUNGLEtBTkgsV0FPUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjLDhCQUFkLEVBQThDQSxL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QU1MOztLQUFBQTtBQTJHTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UZXN0aW1vbmlhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBuZXdzU2xpZGVyIH0gZnJvbSBcIi4uL3N3aXBlclNsaWRlclByb3BzXCI7XHJcbmltcG9ydCB7IE5ld3NNb2RhbCB9IGZyb20gXCIuL0NvbnRlbnRNb2RhbFwiO1xyXG5jb25zdCBUZXN0aW1vbmlhbD0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWYWx1ZSwgc2V0TW9kYWxWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWc6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3Rlc3RpbW9uaWFsLCBzZXRUZXN0aW1vbmlhbF0gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBwcm9qZWN0IGRhdGFcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIHByb2plY3QgZGF0YSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICBmZXRjaChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzICYmIGRhdGEudXNlciAmJiBkYXRhLnVzZXIudGVzdGltb25pYWxzKSB7XHJcbiAgICAgICAgICBzZXRUZXN0aW1vbmlhbChkYXRhLnVzZXIudGVzdGltb25pYWxzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlcyBkYXRhJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7IFxyXG4gIGNvbnN0IG9uT3Blbk1vZGFsID0gKGltZywgdGl0bGUsIGRhdGUpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRNb2RhbFZhbHVlKHsgaW1nLCB0aXRsZSwgZGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWc6IG51bGwsIHRpdGxlOiBcIlwiLCBkYXRlOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJuZXdzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX25ld3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgzPlJldmlld3M8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX2xpc3Qgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljay13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2lwZXIgey4uLm5ld3NTbGlkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbCAmJiB0ZXN0aW1vbmlhbC5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNsaWNrLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZXN0aW1vbmlhbC5pbWFnZS51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Rlc3RpbW9uaWFsLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0ZXN0aW1vbmlhbC5yZXZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rlc3RpbW9uaWFsLnBvc2l0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3N3aXBlcl9wcm9ncmVzcyBmaWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlfcGFnaW5hdGlvbl9pblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X25hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15X3ByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9uZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5ld3NNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZU1vZGFsPXsoKSA9PiBvbkNsb3NlTW9kYWwoKX1cclxuICAgICAgICBpbWc9e21vZGFsVmFsdWUuaW1nfVxyXG4gICAgICAgIHRpdGxlPXttb2RhbFZhbHVlLnRpdGxlfVxyXG4gICAgICAgIGRhdGU9e21vZGFsVmFsdWUuZGF0ZX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJuZXdzU2xpZGVyIiwiTmV3c01vZGFsIiwiVGVzdGltb25pYWwiLCJvcGVuIiwic2V0T3BlbiIsImltZyIsInRpdGxlIiwiZGF0ZSIsIm1vZGFsVmFsdWUiLCJzZXRNb2RhbFZhbHVlIiwidGVzdGltb25pYWwiLCJzZXRUZXN0aW1vbmlhbCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwidXNlciIsInRlc3RpbW9uaWFscyIsImVycm9yIiwiY29uc29sZSIsIm9uT3Blbk1vZGFsIiwib25DbG9zZU1vZGFsIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJyZXZpZXciLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=