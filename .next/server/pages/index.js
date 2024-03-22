(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Audio */ "./src/components/Audio.js");
/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _src_components_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Cursor */ "./src/components/Cursor.js");
/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Home */ "./src/components/Home.js");
/* harmony import */ var _src_components_Testimonial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Testimonial */ "./src/components/Testimonial.js");
/* harmony import */ var _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Portfolio */ "./src/components/Portfolio.js");
/* harmony import */ var _src_components_Price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Price */ "./src/components/Price.js");
/* harmony import */ var _src_components_Skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Skills */ "./src/components/Skills.js");
/* harmony import */ var _src_components_Timeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Timeline */ "./src/components/Timeline.js");
/* harmony import */ var _src_layout_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/layout/Footer */ "./src/layout/Footer.js");
/* harmony import */ var _src_layout_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _src_layout_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/layout/Settings */ "./src/layout/Settings.js");
/* harmony import */ var _src_PageHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/PageHead */ "./src/PageHead.js");
/* harmony import */ var _src_components_FeedBack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/FeedBack */ "./src/components/FeedBack.js");
/* harmony import */ var _src_components_FeedBack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_components_FeedBack__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_SocialLinks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/SocialLinks */ "./src/components/SocialLinks.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Testimonial__WEBPACK_IMPORTED_MODULE_5__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__]);
([_src_components_Testimonial__WEBPACK_IMPORTED_MODULE_5__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\pages\\index.js";



















const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_PageHead__WEBPACK_IMPORTED_MODULE_13__.default, {
      page: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      id: "opened",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "kura_tm_all_wrap",
        "data-color": "orange",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_layout_Settings__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_layout_Header__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Home__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Skills__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Timeline__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Price__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Testimonial__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_SocialLinks__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Contact__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_layout_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Audio__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_src_components_Cursor__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
});

/***/ }),

/***/ "./src/PageHead.js":
/*!*************************!*\
  !*** ./src/PageHead.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\PageHead.js";



const PageHead = ({
  page
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
      children: ["Kura | ", page]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);

/***/ }),

/***/ "./src/components/Audio.js":
/*!*********************************!*\
  !*** ./src/components/Audio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Audio.js";



const Audio = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("audio", {
      id: "audio1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/audio/1.mp3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("audio", {
      id: "audio2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/audio/2.mp3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Audio);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Contact.js";



const Contact = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_contact",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Get in Touch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "contact_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "left wow fadeInUp",
            "data-wow-duration": ".7s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "short",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "44 Place, Tokyo, Japan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 473.806 473.806",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4    c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8    c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6    c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5    c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26    c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9    c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806    C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20    c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6    c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1    c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3    c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5    c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8    c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9    l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1    C420.456,377.706,420.456,388.206,410.256,398.806z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 82,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2    c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11    S248.656,111.506,256.056,112.706z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 83,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11    c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2    c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 29
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "+77 033 442 55 57"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "Capa_1",
                      enableBackground: "new 0 0 479.058 479.058",
                      height: "512",
                      viewBox: "0 0 479.058 479.058",
                      width: "512",
                      className: "svg replaced-svg",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "dodo@gmail.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 479.447 479.447",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M239.446,0.022c-8.594,0-17.182,0.462-25.727,1.383c-7.832,0.8-15.568,2.112-23.2,3.704    c-1.477,0.309-2.955,0.635-4.432,0.976C141.12,16.323,100.06,39.314,67.831,72.301c-2.997,3.072-5.931,6.235-8.8,9.488    c-87.06,99.948-76.612,251.548,23.337,338.608c95.688,83.349,239.723,77.803,328.719-12.656c3.003-3.072,5.936-6.235,8.8-9.488    c38.421-43.754,59.594-100.003,59.56-158.232C479.447,107.472,371.995,0.021,239.446,0.022z M78.495,84.301    c1.264-1.312,2.576-2.568,3.864-3.84c1.488-1.464,2.968-2.936,4.488-4.352c1.336-1.248,2.712-2.448,4.08-3.664    c1.544-1.368,3.08-2.736,4.664-4.056c1.392-1.176,2.824-2.304,4.248-3.44c1.6-1.28,3.2-2.56,4.848-3.792    c1.456-1.096,2.936-2.16,4.424-3.2c1.656-1.184,3.32-2.4,5.008-3.504c1.512-1.024,3.04-2.016,4.576-3    c1.712-1.096,3.432-2.176,5.168-3.2c1.563-0.933,3.136-1.851,4.72-2.752c1.771-1.008,3.549-1.992,5.336-2.952    c1.6-0.853,3.2-1.688,4.8-2.504c1.824-0.92,3.664-1.808,5.512-2.68c1.6-0.76,3.264-1.52,4.912-2.24c1.88-0.8,3.784-1.6,5.688-2.4    c1.656-0.68,3.304-1.344,4.976-1.984c1.936-0.736,3.896-1.424,5.856-2.112c1.672-0.584,3.344-1.168,5.04-1.72    c1.992-0.64,4-1.232,6.016-1.816c1.688-0.488,3.36-0.992,5.056-1.448c0.648-0.168,1.296-0.304,1.944-0.472    c-23.68,22.993-41.253,51.529-51.128,83.024c-18.988-5.008-37.37-12.082-54.816-21.096C78.039,84.821,78.263,84.541,78.495,84.301    z M66.991,97.181c19.217,10.412,39.595,18.522,60.712,24.16c-10.352,35.996-15.786,73.227-16.152,110.68h-95.92    C17.374,182.632,35.435,135.214,66.991,97.181z M66.991,382.861c-31.554-38.034-49.615-85.452-51.36-134.84h95.92    c0.366,37.453,5.799,74.684,16.152,110.68C106.587,364.341,86.209,372.45,66.991,382.861z M181.727,456.429    c-1.616-0.408-3.288-0.936-4.952-1.424c-2.024-0.592-4.056-1.184-6.056-1.832c-1.688-0.544-3.352-1.128-5.016-1.712    c-1.968-0.68-3.936-1.376-5.88-2.12c-1.664-0.632-3.304-1.296-4.952-1.968c-1.912-0.8-3.824-1.6-5.72-2.4    c-1.632-0.72-3.256-1.461-4.872-2.224c-1.864-0.88-3.72-1.776-5.6-2.704c-1.6-0.8-3.2-1.6-4.8-2.472    c-1.808-0.968-3.6-1.96-5.392-2.984c-1.6-0.888-3.12-1.8-4.664-2.728c-1.76-1.056-3.488-2.144-5.216-3.256    c-1.52-0.968-3.04-1.952-4.536-2.96c-1.704-1.152-3.392-2.352-5.064-3.552c-1.464-1.048-2.928-2.096-4.368-3.2    c-1.656-1.248-3.28-2.536-4.896-3.832c-1.416-1.128-2.824-2.248-4.208-3.408c-1.6-1.328-3.144-2.712-4.696-4.088    c-1.36-1.208-2.728-2.4-4.056-3.632c-1.528-1.424-3.008-2.904-4.496-4.368c-1.288-1.272-2.6-2.528-3.864-3.832    c-0.232-0.248-0.456-0.504-0.688-0.744c17.445-9.018,35.827-16.095,54.816-21.104c9.877,31.494,27.449,60.029,51.128,83.024    C183.031,456.741,182.375,456.605,181.727,456.429z M231.447,463.389c-34.232-4.864-64.24-40.592-83.12-93.352    c27.296-6.112,55.151-9.391,83.12-9.784V463.389z M231.447,344.253c-29.67,0.39-59.215,3.914-88.144,10.512    c-10.045-34.707-15.344-70.615-15.752-106.744h103.896V344.253z M231.447,232.021H127.551    c0.407-36.129,5.706-72.037,15.752-106.744c28.929,6.597,58.475,10.121,88.144,10.512V232.021z M231.447,119.789    c-27.97-0.39-55.824-3.669-83.12-9.784c18.88-52.76,48.888-88.488,83.12-93.352V119.789z M411.903,97.181    c31.554,38.034,49.615,85.452,51.36,134.84h-95.92c-0.366-37.453-5.799-74.684-16.152-110.68    C372.307,115.7,392.685,107.591,411.903,97.181z M297.103,23.605c1.68,0.416,3.352,0.944,5.016,1.432    c2.024,0.592,4.056,1.184,6.056,1.832c1.688,0.544,3.352,1.128,5.016,1.712c1.968,0.68,3.936,1.376,5.88,2.12    c1.664,0.632,3.304,1.296,4.952,1.968c1.912,0.8,3.824,1.6,5.72,2.4c1.632,0.72,3.256,1.461,4.872,2.224    c1.864,0.88,3.72,1.776,5.6,2.704c1.6,0.8,3.2,1.6,4.8,2.472c1.808,0.968,3.6,1.96,5.392,2.984c1.6,0.888,3.12,1.8,4.664,2.728    c1.76,1.056,3.488,2.144,5.216,3.256c1.52,0.968,3.04,1.952,4.536,2.96c1.704,1.152,3.384,2.344,5.056,3.544    c1.472,1.048,2.936,2.104,4.384,3.2c1.648,1.24,3.264,2.528,4.888,3.824c1.408,1.12,2.824,2.24,4.208,3.408    c1.6,1.328,3.144,2.712,4.696,4.088c1.36,1.208,2.728,2.4,4.056,3.632c1.528,1.424,3.008,2.904,4.496,4.368    c1.288,1.272,2.6,2.528,3.864,3.832c0.232,0.248,0.456,0.504,0.688,0.744c-17.445,9.018-35.827,16.095-54.816,21.104    c-9.896-31.498-27.491-60.031-51.192-83.016C295.799,23.293,296.455,23.429,297.103,23.605z M247.447,16.653    c34.232,4.864,64.24,40.592,83.12,93.352c-27.296,6.112-55.151,9.391-83.12,9.784V16.653z M247.447,135.789    c29.67-0.39,59.215-3.914,88.144-10.512c10.045,34.707,15.344,70.615,15.752,106.744H247.447V135.789z M247.447,248.021h103.896    c-0.407,36.129-5.706,72.037-15.752,106.744h0c-28.929-6.597-58.474-10.121-88.144-10.512V248.021z M247.447,463.389V360.253    c27.97,0.39,55.824,3.669,83.12,9.784C311.687,422.797,281.679,458.525,247.447,463.389z M400.399,395.741    c-1.264,1.304-2.568,2.56-3.856,3.832c-1.488,1.464-2.976,2.944-4.504,4.368c-1.328,1.24-2.696,2.4-4.056,3.64    c-1.552,1.376-3.096,2.752-4.68,4.08c-1.4,1.168-2.824,2.296-4.248,3.432c-1.6,1.28-3.2,2.56-4.848,3.792    c-1.456,1.096-2.936,2.16-4.424,3.2c-1.656,1.184-3.32,2.4-5.008,3.504c-1.512,1.024-3.04,2.016-4.576,2.992    c-1.712,1.104-3.437,2.171-5.176,3.2c-1.6,0.936-3.128,1.848-4.704,2.752c-1.771,1.008-3.552,1.992-5.344,2.952    c-1.6,0.853-3.2,1.688-4.8,2.504c-1.824,0.92-3.664,1.808-5.512,2.68c-1.6,0.76-3.264,1.52-4.912,2.24    c-1.88,0.8-3.784,1.6-5.688,2.4c-1.656,0.672-3.304,1.344-4.968,1.976c-1.952,0.744-3.912,1.44-5.88,2.12    c-1.664,0.584-3.328,1.168-5.016,1.712c-2,0.648-4,1.24-6.04,1.824c-1.672,0.496-3.352,0.992-5.04,1.448    c-0.648,0.168-1.296,0.304-1.944,0.472c23.68-22.993,41.253-51.529,51.128-83.024c18.988,5.008,37.37,12.082,54.816,21.096    C400.855,395.221,400.631,395.501,400.399,395.741z M411.903,382.861c-19.217-10.412-39.595-18.522-60.712-24.16    c10.352-35.996,15.786-73.227,16.152-110.68h95.92C461.521,297.409,443.459,344.828,411.903,382.861z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "www.domain.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "right wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fields",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                action: "/",
                method: "post",
                className: "contact_form",
                id: "contact_form",
                autoComplete: "off",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "returnmessage",
                  "data-success": "Your message has been received, We will contact you soon."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "empty_notice",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: "Please Fill Required Fields"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "first",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        id: "name",
                        type: "text",
                        placeholder: "Name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        id: "email",
                        type: "text",
                        placeholder: "Email"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "last",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
                    id: "message",
                    placeholder: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "kura_tm_button",
                  "data-position": "left",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    id: "send_message",
                    className: "d-flex align-items-center",
                    href: "#",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "Submit"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: "/img/svg/right-arrow.svg",
                      className: "svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/ContentModal.js":
/*!****************************************!*\
  !*** ./src/components/ContentModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModal": () => (/* binding */ NewsModal),
/* harmony export */   "HomeModal": () => (/* binding */ HomeModal)
/* harmony export */ });
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\ContentModal.js";


const NewsModal = ({
  open,
  onCloseModal,
  img,
  title,
  date
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => onCloseModal(),
    center: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "description_wrap",
        style: {
          padding: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "details",
            style: {
              marginBottom: "20px"
            },
            children: [date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: title ? title : `VS Code Gets New JavaScript Debugger`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};
const HomeModal = ({
  open,
  onCloseModal,
  img,
  title,
  date
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => onCloseModal(),
    center: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "description_wrap",
        style: {
          padding: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "details",
            style: {
              marginBottom: "20px"
            },
            children: [date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: title ? title : `VS Code Gets New JavaScript Debugger`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "hidden_content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "popup_informations",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "description",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Cursor.js":
/*!**********************************!*\
  !*** ./src/components/Cursor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Cursor.js";




const Cursor = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.customCursor)();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mouse-cursor cursor-outer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mouse-cursor cursor-inner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);

/***/ }),

/***/ "./src/components/FeedBack.js":
/*!************************************!*\
  !*** ./src/components/FeedBack.js ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Home.js";




const Home = () => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: modalValue,
    1: setModalValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: ""
  });
  const {
    0: userData,
    1: setUserData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // State to store user data fetched from API

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch user data from the API
    fetchUserData();
  }, []); // Empty dependency array to ensure this effect runs only once, similar to componentDidMount

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");

      if (response.ok) {
        const data = await response.json();
        setUserData(data.user.about); // Assuming "user.about" contains the user's details
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({
      img,
      title
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: ""
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "home",
    children: [userData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_hero",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "name",
              children: userData.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "job",
              children: userData.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: userData.subTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: userData.quote
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: userData.exp_year
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: userData.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: userData.phoneNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "image",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "main",
                style: {
                  backgroundImage: `url(${userData.avatar.url})`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "shape"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_1__.HomeModal, {
      open: open,
      onCloseModal: () => onCloseModal(),
      img: modalValue.img,
      title: modalValue.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-lightbox */ "react-awesome-lightbox");
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Portfolio.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Import Axios for making HTTP requests



const Portfolio = () => {
  const {
    0: showLight,
    1: setShowLight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: projects,
    1: setProjects
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // State to store the project data

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch project data when the component mounts
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(response => response.json()).then(data => {
      if (data.success && data.user && data.user.projects) {
        setProjects(data.user.projects);
      }
    }).catch(error => {
      console.error('Error fetching services data', error);
    });
  }, []); // Empty dependency array to only run the effect once on mount

  const showLightBox = index => {
    setShowLight({
      startIndex: index
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "portfolio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "kura_tm_portfolio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "portfolio_list gallery_zoom wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "swiper-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "swiper-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__.portfolioSlider), {}, {
                  children: projects.map((project, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          src: project.image.url,
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 54,
                          columnNumber: 29
                        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(" + project.image.url + ")"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "overlay"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 30
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "/img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "details",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                            children: project.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 31
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                            children: project.techStack
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 31
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 30
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                        className: "kura_tm_full_link popup-vimeo",
                        onClick: () => showLightBox(index)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 25
                    }, undefined)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 23
                  }, undefined))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
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
                          lineNumber: 88,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), showLight ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1___default()), {
      images: projects.map(project => ({
        url: project.image.url,
        title: project.title
      })),
      startIndex: showLight.startIndex,
      onClose: hideLightBox
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);
});

/***/ }),

/***/ "./src/components/Price.js":
/*!*********************************!*\
  !*** ./src/components/Price.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Price.js";



const Price = () => {
  const {
    0: services,
    1: setServices
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(response => response.json()).then(data => {
      if (data.success && data.user && data.user.services) {
        setServices(data.user.services);
      }
    }).catch(error => {
      console.error('Error fetching services data', error);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "price",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_pricing",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "pricing_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "kura_tm_sticky_section",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "kura_tm_main_title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Pricing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: "Service Prices"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "text",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "kura_tm_sticky_section",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: services.map(service => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: service.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 27
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: service.charge
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 27
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "details",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                        src: service.image.url,
                        alt: service.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: "desc",
                        children: service.desc
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 22
                  }, undefined)
                }, service._id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 21
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Skills.js";




const ParallaxVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "src_components_Parallax_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Parallax */ "./src/components/Parallax.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Parallax */ "./src/components/Parallax.js")],
    modules: ["..\\src\\components\\Skills.js -> " + "./Parallax"]
  }
});

const Skills = () => {
  const {
    0: skillsData,
    1: setSkillsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to store fetched skills data

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Fetch skills data from your API
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(response => response.json()).then(data => {
      if (data.success && data.user && data.user.skills) {
        // Set the fetched skills data to the component state
        setSkillsData(data.user.skills);
      }
    }).catch(error => {
      console.error("Error fetching skills data:", error);
    }); // Cleanup function to remove event listener

    return () => {
      window.removeEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_2__.activeSkillProgress);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "skills",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "kura_tm_skills",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "skills_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "kura_tm_main_title light",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                children: "Programming Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text wow fadeInUp",
              "data-wow-duration": ".7s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: "For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined), skillsData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "dodo_progress wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".2s",
              children: skillsData.map((skill, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "progress_inner",
                "data-value": skill.percentage,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "label",
                    children: skill.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "number",
                    children: [skill.percentage, "%"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "background",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "bar_in",
                      style: {
                        width: `${skill.percentage}%`
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 23
                }, undefined)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ParallaxVideo, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "my_image jarallax",
              "data-speed": "0",
              style: {
                backgroundImage: "url(/img/portfolio/2.jpg)"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

/***/ }),

/***/ "./src/components/SocialLinks.js":
/*!***************************************!*\
  !*** ./src/components/SocialLinks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\SocialLinks.js";

 // Import Axios for making HTTP requests



const SocialLinks = () => {
  const {
    0: socialHandles,
    1: setSocialHandles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchSocialHandles = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setSocialHandles(response.data.user.social_handles);
      } catch (error) {
        console.error("Error fetching social handles:", error);
      }
    };

    fetchSocialHandles();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "social-links-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        style: {
          paddingLeft: '600px'
        },
        children: "Social Links"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), socialHandles && socialHandles.map((handle, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: handle.url,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          style: {
            width: '10%',
            marginLeft: '369px'
          },
          src: handle.image.url,
          alt: handle.platform
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);

/***/ }),

/***/ "./src/components/Testimonial.js":
/*!***************************************!*\
  !*** ./src/components/Testimonial.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Testimonial.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Testimonial = () => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: modalValue,
    1: setModalValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: "",
    date: ""
  });
  const {
    0: testimonial,
    1: setTestimonial
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // State to store the project data

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch project data when the component mounts
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(response => response.json()).then(data => {
      if (data.success && data.user && data.user.testimonials) {
        setTestimonial(data.user.testimonials);
      }
    }).catch(error => {
      console.error('Error fetching services data', error);
    });
  }, []);

  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({
      img,
      title,
      date
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: "",
      date: ""
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "news",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "kura_tm_news",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              children: "Reviews"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "news_list wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "slick-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "slick-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__.newsSlider), {}, {
                  children: testimonial && testimonial.map((testimonial, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: testimonial.image.url,
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: testimonial.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 62,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                          children: testimonial.review
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 63,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: testimonial.position
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 29
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 25
                    }, undefined)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 23
                  }, undefined))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_3__.NewsModal, {
      open: open,
      onCloseModal: () => onCloseModal(),
      img: modalValue.img,
      title: modalValue.title,
      date: modalValue.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);
});

/***/ }),

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\Timeline.js";



const Timeline = () => {
  const {
    0: timelineData,
    1: setTimelineData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // State to store fetched timeline data

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch timeline data from your API
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then(response => response.json()).then(data => {
      // Set the fetched timeline data to the component state
      setTimelineData(data.user.timeline);
    }).catch(error => {
      console.error("Error fetching timeline data:", error);
    });
  }, []); // Empty dependency array to run effect only once on mount

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "timeline",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_timeline",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Timeline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Working Period"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "timeline_list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            children: timelineData && timelineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": index * 0.2 + "s" // Add delay for animation
              ,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: [new Date(item.startDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric"
                  }), " ", "-", " ", item.endDate ? new Date(item.endDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric"
                  }) : "Today"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: item.jobTitle
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: item.company_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: item.jobLocation
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 21
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "list_inner",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                  children: item.bulletPoints.map((point, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: point
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 25
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);

/***/ }),

/***/ "./src/layout/Footer.js":
/*!******************************!*\
  !*** ./src/layout/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\layout\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "kura_tm_copyright",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "copyright_inner wow fadeInUp",
            "data-wow-duration": ".7s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["Copyright \xA9 ", new Date().getFullYear(), ". All rights reserved."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "social",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/facebook.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/twitter.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/instagram.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/dribbble.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/tik-tok.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\layout\\Header.js";




const Header = ({
  dark
}) => {
  const {
    0: isToggled,
    1: setToggled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.openNav)(!isToggled);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.audioSoundAndOpen)();
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__.scroll_);
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__.stickyNav);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_topbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "wrapper",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "topbar_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: dark ? "/img/logo/logo.png" : "/img/logo/dark.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "menu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "list",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "anchor_nav",
                id: "anchor_nav",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#home",
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#portfolio",
                    children: "Portfolio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#skills",
                    children: "Skills"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#timeline",
                    children: "Timeline"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#price",
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#feedback",
                    children: "Feedback"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#sociallinks",
                    children: "Social Links"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#contact",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "trigger",
              onClick: () => toggleTrueFalse(),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: `hamburger hamburger--slider ${isToggled ? " is-active" : ""}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hamburger-box",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "hamburger-inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_mobile_menu",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "mobile_menu_inner",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "mobile_in",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: dark ? "/img/logo/logo.png" : "/img/logo/dark.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "trigger",
            onClick: toggleTrueFalse,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: isToggled ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "hamburger-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hamburger-inner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: isToggled ? "dropdown active" : "dropdown",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "dropdown_inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
            className: "anchor_nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              className: "current",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#home",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#portfolio",
                children: "Portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#skills",
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#timeline",
                children: "Timeline"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#price",
                children: "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#feedback",
                children: "Feedback"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#sociallinks",
                children: "Social Links"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#contact",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/layout/Settings.js":
/*!********************************!*\
  !*** ./src/layout/Settings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\layout\\Settings.js";



const Settings = () => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cursor,
    1: setCursor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const colors = document.querySelectorAll("#colors li a");
    colors.forEach(color => {
      color.addEventListener("click", () => {
        document.querySelector(".kura_tm_all_wrap").setAttribute("data-color", color.classList[0]);
      });
    });
  }, []);

  const onClick = value => {
    setCursor(value);
    document.querySelector(".kura_tm_all_wrap").setAttribute("data-magic-cursor", value === 1 ? "show" : "hide");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: `kura_tm_settings ${toggle ? "opened" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          version: "1.1",
          id: "Capa_1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 268.765 268.765",
          xmlSpace: "preserve",
          className: "svg settingSvg replaced-svg changeDark",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
            id: "Settings",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                d: "M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z",
                style: {
                  fillRule: "evenodd",
                  clipRule: "evenodd"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "link",
          href: "#",
          onClick: () => setToggle(!toggle)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "title",
          children: "Unlimited Colors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "colors",
          id: "colors",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "blue",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "green",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "brown",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "pink",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "orange",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "bl",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "black",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "wh",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "white",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "purple",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "sky",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "cadetBlue",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "crimson",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "olive",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "red",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "title",
          children: "Magic Cursor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "cursor",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: `${cursor === 1 ? "showme show" : "hidden"}`,
              onClick: () => onClick(1),
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: `${cursor === 2 ? "showme show" : "hidden"}`,
              onClick: () => onClick(2),
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "Capa_1",
                enableBackground: "new 0 0 512 512",
                height: 512,
                viewBox: "0 0 512 512",
                width: 512,
                className: "svg settingSvg replaced-svg changeDark",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m451.002 183.574h29.997v84.853h-29.997z",
                    transform: "matrix(.707 -.707 .707 .707 -23.318 395.706)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m271.002 3.574h29.997v84.853h-29.997z",
                    transform: "matrix(.707 -.707 .707 .707 51.241 215.706)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m423.574 31.002h84.853v29.997h-84.853z",
                    transform: "matrix(.707 -.707 .707 .707 103.961 342.985)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m42.422 512 150.458-150.458 42.114 125.464 152.988-362.988-362.988 152.988 125.464 42.114-150.458 150.458z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m361 0h30v61h-30z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m451 121h61v30h-61z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/swiperSliderProps.js":
/*!**********************************!*\
  !*** ./src/swiperSliderProps.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portfolioSlider": () => (/* binding */ portfolioSlider),
/* harmony export */   "newsSlider": () => (/* binding */ newsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
const portfolioSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};
const newsSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};
});

/***/ }),

/***/ "./src/utilits.js":
/*!************************!*\
  !*** ./src/utilits.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wowJsAnimation": () => (/* binding */ wowJsAnimation),
/* harmony export */   "customCursor": () => (/* binding */ customCursor),
/* harmony export */   "kura_tm_my_load": () => (/* binding */ kura_tm_my_load),
/* harmony export */   "stickyNav": () => (/* binding */ stickyNav),
/* harmony export */   "audioSoundAndOpen": () => (/* binding */ audioSoundAndOpen),
/* harmony export */   "openNav": () => (/* binding */ openNav),
/* harmony export */   "activeSkillProgress": () => (/* binding */ activeSkillProgress),
/* harmony export */   "activeMenuBySection": () => (/* binding */ activeMenuBySection),
/* harmony export */   "aTagClick": () => (/* binding */ aTagClick),
/* harmony export */   "scroll_": () => (/* binding */ scroll_)
/* harmony export */ });
const kura_tm_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

const wowJsAnimation = () => {
  if (false) {}

  new WOW.WOW().init();
};
const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }

  if (myCursor.length) {
    if (document.body) {
      let n,
          i = 0,
          o = !1;
      window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
      }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
      function () {
        let a = document.querySelectorAll("a");
        e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

        for (let i = 0; i < a.length; i++) {
          const element = a[i];
          mouseEvent(element);
        }

        hamburger && mouseEvent(hamburger);
        kura_tm_topbar && mouseEvent(kura_tm_topbar);
        pointer && mouseEvent(pointer);
      }), e.style.visibility = "visible", t.style.visibility = "visible";
    }
  }
};
const kura_tm_my_load = () => {
  kura_tm_preloader();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 1500);
}; // Header

const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".kura_tm_topbar");
  stickys.forEach(sticky => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};
const audioSoundAndOpen = () => {
  var audio1 = document.querySelectorAll("#audio1");
  var audio2 = document.querySelectorAll("#audio2");
  var hamburgers = document.querySelectorAll(".trigger .hamburger");
  hamburgers.forEach(hamburger => {
    hamburger.addEventListener("click", function () {
      var element = this;

      if (element.classList.contains("is-active")) {
        audio1[0].play();
      } else {
        audio2[0].play();
      }

      return false;
    });
  });
};
const openNav = toggle => {
  const navItems = document.querySelectorAll("#anchor_nav> li");

  if (navItems) {
    navItems.forEach(nav => {
      toggle ? nav.classList.add("opened") : nav.classList.remove("opened");
    });
  }
};
const activeSkillProgress = () => {
  const boxes = document.querySelectorAll(".bar");
  const triggerBottom = window.innerHeight / 5 * 5;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("open");
    } else {
      box.classList.remove("open");
    }
  });
}; // active

const activeMenuBySection = id => {
  const boxes = document.querySelectorAll(`#${id ? id : "home"}`);
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 5;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        activeMenu(id ? id : "home");
      } else {
        activeMenu("");
      }
    });
  }
};

const activeMenu = active => {
  const navItems = document.querySelectorAll("#anchor_nav> li");

  if (navItems) {
    navItems.forEach(nav => {
      if (nav.classList.contains(active)) {
        nav.classList.add("current");
      } else {
        nav.classList.remove("current");
      }
    });
  }
};

const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");

  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", e => {
      e.preventDefault();
    });
  }
};
const scroll_ = () => {
  const sections = document.querySelectorAll(".kura_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(li => {
    li.classList.remove("current");

    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "jarallax":
/*!***************************!*\
  !*** external "jarallax" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("jarallax");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-awesome-lightbox":
/*!*****************************************!*\
  !*** external "react-awesome-lightbox" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-awesome-lightbox");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-modal");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQUltRixPQUFPLEdBQUcsRUFBZDtBQUNBRixFQUFBQSxRQUFRLENBQUNoRixPQUFULENBQWtCbUYsT0FBRCxJQUFhO0FBQzVCLFVBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxTQUEzQjtBQUNBLFVBQU1DLGFBQWEsR0FBR0gsT0FBTyxDQUFDSSxZQUE5Qjs7QUFDQSxRQUFJQyxXQUFXLElBQUlKLFVBQVUsR0FBR0UsYUFBYSxHQUFHLENBQWhELEVBQW1EO0FBQ2pESixNQUFBQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixJQUFyQixDQUFWO0FBQ0Q7QUFDRixHQU5EO0FBT0FSLEVBQUFBLEtBQUssQ0FBQ2pGLE9BQU4sQ0FBZTBGLEVBQUQsSUFBUTtBQUNwQkEsSUFBQUEsRUFBRSxDQUFDdEYsU0FBSCxDQUFheUIsTUFBYixDQUFvQixTQUFwQjs7QUFDQSxRQUFJNkQsRUFBRSxDQUFDQyxvQkFBSCxDQUF3QixHQUF4QixFQUE2QixDQUE3QixFQUFnQ0YsWUFBaEMsQ0FBNkMsTUFBN0MsS0FBeUQsSUFBR1AsT0FBUSxFQUF4RSxFQUEyRTtBQUN6RVEsTUFBQUEsRUFBRSxDQUFDdEYsU0FBSCxDQUFhd0IsR0FBYixDQUFpQixTQUFqQjtBQUNEO0FBQ0YsR0FMRDtBQU1ELENBakJNOzs7Ozs7Ozs7O0FDM0xQLHVIQUFxRDs7Ozs7Ozs7Ozs7O0FDQXJEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3VyYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovL2t1cmEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL1BhZ2VIZWFkLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9BdWRpby5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudE1vZGFsLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpby5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvUHJpY2UuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTGlua3MuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2xheW91dC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvbGF5b3V0L1NldHRpbmdzLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvc3dpcGVyU2xpZGVyUHJvcHMuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy91dGlsaXRzLmpzIiwid2VicGFjazovL2t1cmEvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJqYXJhbGxheFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwicmVhY3QtYXdlc29tZS1saWdodGJveFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlLW1vZGFsXCIiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBdWRpbyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXVkaW9cIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DdXJzb3JcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgTmV3cyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpb1wiO1xuaW1wb3J0IFByaWNlIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9QcmljZVwiO1xuaW1wb3J0IFNraWxscyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU2tpbGxzXCI7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvbGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2xheW91dC9IZWFkZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vc3JjL2xheW91dC9TZXR0aW5nc1wiO1xuaW1wb3J0IFBhZ2VIZWFkIGZyb20gXCIuLi9zcmMvUGFnZUhlYWRcIjtcbmltcG9ydCBGZWVkQmFjayBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRmVlZEJhY2tcIjtcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU29jaWFsTGlua3NcIjtcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFBhZ2VIZWFkIHBhZ2U9XCJIb21lXCIgLz5cbiAgICAgIDxkaXYgaWQ9XCJvcGVuZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2FsbF93cmFwXCIgZGF0YS1jb2xvcj1cIm9yYW5nZVwiPlxuICAgICAgICAgIDxTZXR0aW5ncyAvPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICAgIDxQb3J0Zm9saW8gLz5cbiAgICAgICAgICA8U2tpbGxzIC8+XG4gICAgICAgICAgPFRpbWVsaW5lIC8+XG4gICAgICAgICAgPFByaWNlIC8+XG4gICAgICAgICAgPFRlc3RpbW9uaWFsLz5cbiAgICAgICAgICA8U29jaWFsTGlua3MvPlxuICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDxBdWRpbyAvPlxuICAgICAgICAgIDxDdXJzb3IgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IFBhZ2VIZWFkID0gKHsgcGFnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+S3VyYSB8IHtwYWdlfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkO1xyXG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXVkaW8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW8xXCI+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvYXVkaW8vMS5tcDNcIiAvPlxyXG4gICAgICA8L2F1ZGlvPlxyXG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpbzJcIj5cclxuICAgICAgICA8c291cmNlIHNyYz1cIi9hdWRpby8yLm1wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdWRpbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2NvbnRhY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+Q29udGFjdDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgzPkdldCBpbiBUb3VjaDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBQbGVhc2UgZmlsbCBvdXQgdGhlIGZvcm0gb24gdGhpcyBzZWN0aW9uIHRvIGNvbnRhY3Qgd2l0aCBtZS5cclxuICAgICAgICAgICAgICAgICAgT3IgY2FsbCBiZXR3ZWVuIDk6MDAgYS5tLiBhbmQgODowMCBwLm0uIEVULCBNb25kYXkgdGhyb3VnaFxyXG4gICAgICAgICAgICAgICAgICBGcmlkYXlcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0XCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNhcGFfMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgNTEyIDUxMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI1NiwwQzE1Ni43NDgsMCw3Niw4MC43NDgsNzYsMTgwYzAsMzMuNTM0LDkuMjg5LDY2LjI2LDI2Ljg2OSw5NC42NTJsMTQyLjg4NSwyMzAuMjU3ICAgIGMyLjczNyw0LjQxMSw3LjU1OSw3LjA5MSwxMi43NDUsNy4wOTFjMC4wNCwwLDAuMDc5LDAsMC4xMTksMGM1LjIzMS0wLjA0MSwxMC4wNjMtMi44MDQsMTIuNzUtNy4yOTJMNDEwLjYxMSwyNzIuMjIgICAgQzQyNy4yMjEsMjQ0LjQyOCw0MzYsMjEyLjUzOSw0MzYsMTgwQzQzNiw4MC43NDgsMzU1LjI1MiwwLDI1NiwweiBNMzg0Ljg2NiwyNTYuODE4TDI1OC4yNzIsNDY4LjE4NmwtMTI5LjkwNS0yMDkuMzQgICAgQzExMy43MzQsMjM1LjIxNCwxMDUuOCwyMDcuOTUsMTA1LjgsMTgwYzAtODIuNzEsNjcuNDktMTUwLjIsMTUwLjItMTUwLjJTNDA2LjEsOTcuMjksNDA2LjEsMTgwICAgIEM0MDYuMSwyMDcuMTIxLDM5OC42ODksMjMzLjY4OCwzODQuODY2LDI1Ni44MTh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjU2LDkwYy00OS42MjYsMC05MCw0MC4zNzQtOTAsOTBjMCw0OS4zMDksMzkuNzE3LDkwLDkwLDkwYzUwLjkwMywwLDkwLTQxLjIzMyw5MC05MEMzNDYsMTMwLjM3NCwzMDUuNjI2LDkwLDI1Niw5MHogICAgIE0yNTYsMjQwLjJjLTMzLjI1NywwLTYwLjItMjcuMDMzLTYwLjItNjAuMmMwLTMzLjA4NCwyNy4xMTYtNjAuMiw2MC4yLTYwLjJzNjAuMSwyNy4xMTYsNjAuMSw2MC4yICAgIEMzMTYuMSwyMTIuNjgzLDI4OS43ODQsMjQwLjIsMjU2LDI0MC4yelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NDQgUGxhY2UsIFRva3lvLCBKYXBhbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3My44MDYgNDczLjgwNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDUxMiA1MTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNzQuNDU2LDI5My41MDZjLTkuNy0xMC4xLTIxLjQtMTUuNS0zMy44LTE1LjVjLTEyLjMsMC0yNC4xLDUuMy0zNC4yLDE1LjRsLTMxLjYsMzEuNWMtMi42LTEuNC01LjItMi43LTcuNy00ICAgIGMtMy42LTEuOC03LTMuNS05LjktNS4zYy0yOS42LTE4LjgtNTYuNS00My4zLTgyLjMtNzVjLTEyLjUtMTUuOC0yMC45LTI5LjEtMjctNDIuNmM4LjItNy41LDE1LjgtMTUuMywyMy4yLTIyLjggICAgYzIuOC0yLjgsNS42LTUuNyw4LjQtOC41YzIxLTIxLDIxLTQ4LjIsMC02OS4ybC0yNy4zLTI3LjNjLTMuMS0zLjEtNi4zLTYuMy05LjMtOS41Yy02LTYuMi0xMi4zLTEyLjYtMTguOC0xOC42ICAgIGMtOS43LTkuNi0yMS4zLTE0LjctMzMuNS0xNC43cy0yNCw1LjEtMzQsMTQuN2MtMC4xLDAuMS0wLjEsMC4xLTAuMiwwLjJsLTM0LDM0LjNjLTEyLjgsMTIuOC0yMC4xLDI4LjQtMjEuNyw0Ni41ICAgIGMtMi40LDI5LjIsNi4yLDU2LjQsMTIuOCw3NC4yYzE2LjIsNDMuNyw0MC40LDg0LjIsNzYuNSwxMjcuNmM0My44LDUyLjMsOTYuNSw5My42LDE1Ni43LDEyMi43YzIzLDEwLjksNTMuNywyMy44LDg4LDI2ICAgIGMyLjEsMC4xLDQuMywwLjIsNi4zLDAuMmMyMy4xLDAsNDIuNS04LjMsNTcuNy0yNC44YzAuMS0wLjIsMC4zLTAuMywwLjQtMC41YzUuMi02LjMsMTEuMi0xMiwxNy41LTE4LjFjNC4zLTQuMSw4LjctOC40LDEzLTEyLjkgICAgYzkuOS0xMC4zLDE1LjEtMjIuMywxNS4xLTM0LjZjMC0xMi40LTUuMy0yNC4zLTE1LjQtMzQuM0wzNzQuNDU2LDI5My41MDZ6IE00MTAuMjU2LDM5OC44MDYgICAgQzQxMC4xNTYsMzk4LjgwNiw0MTAuMTU2LDM5OC45MDYsNDEwLjI1NiwzOTguODA2Yy0zLjksNC4yLTcuOSw4LTEyLjIsMTIuMmMtNi41LDYuMi0xMy4xLDEyLjctMTkuMywyMCAgICBjLTEwLjEsMTAuOC0yMiwxNS45LTM3LjYsMTUuOWMtMS41LDAtMy4xLDAtNC42LTAuMWMtMjkuNy0xLjktNTcuMy0xMy41LTc4LTIzLjRjLTU2LjYtMjcuNC0xMDYuMy02Ni4zLTE0Ny42LTExNS42ICAgIGMtMzQuMS00MS4xLTU2LjktNzkuMS03Mi0xMTkuOWMtOS4zLTI0LjktMTIuNy00NC4zLTExLjItNjIuNmMxLTExLjcsNS41LTIxLjQsMTMuOC0yOS43bDM0LjEtMzQuMWM0LjktNC42LDEwLjEtNy4xLDE1LjItNy4xICAgIGM2LjMsMCwxMS40LDMuOCwxNC42LDdjMC4xLDAuMSwwLjIsMC4yLDAuMywwLjNjNi4xLDUuNywxMS45LDExLjYsMTgsMTcuOWMzLjEsMy4yLDYuMyw2LjQsOS41LDkuN2wyNy4zLDI3LjMgICAgYzEwLjYsMTAuNiwxMC42LDIwLjQsMCwzMWMtMi45LDIuOS01LjcsNS44LTguNiw4LjZjLTguNCw4LjYtMTYuNCwxNi42LTI1LjEsMjQuNGMtMC4yLDAuMi0wLjQsMC4zLTAuNSwwLjUgICAgYy04LjYsOC42LTcsMTctNS4yLDIyLjdjMC4xLDAuMywwLjIsMC42LDAuMywwLjljNy4xLDE3LjIsMTcuMSwzMy40LDMyLjMsNTIuN2wwLjEsMC4xYzI3LjYsMzQsNTYuNyw2MC41LDg4LjgsODAuOCAgICBjNC4xLDIuNiw4LjMsNC43LDEyLjMsNi43YzMuNiwxLjgsNywzLjUsOS45LDUuM2MwLjQsMC4yLDAuOCwwLjUsMS4yLDAuN2MzLjQsMS43LDYuNiwyLjUsOS45LDIuNWM4LjMsMCwxMy41LTUuMiwxNS4yLTYuOSAgICBsMzQuMi0zNC4yYzMuNC0zLjQsOC44LTcuNSwxNS4xLTcuNWM2LjIsMCwxMS4zLDMuOSwxNC40LDcuM2MwLjEsMC4xLDAuMSwwLjEsMC4yLDAuMmw1NS4xLDU1LjEgICAgQzQyMC40NTYsMzc3LjcwNiw0MjAuNDU2LDM4OC4yMDYsNDEwLjI1NiwzOTguODA2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjU2LjA1NiwxMTIuNzA2YzI2LjIsNC40LDUwLDE2LjgsNjksMzUuOHMzMS4zLDQyLjgsMzUuOCw2OWMxLjEsNi42LDYuOCwxMS4yLDEzLjMsMTEuMmMwLjgsMCwxLjUtMC4xLDIuMy0wLjIgICAgYzcuNC0xLjIsMTIuMy04LjIsMTEuMS0xNS42Yy01LjQtMzEuNy0yMC40LTYwLjYtNDMuMy04My41cy01MS44LTM3LjktODMuNS00My4zYy03LjQtMS4yLTE0LjMsMy43LTE1LjYsMTEgICAgUzI0OC42NTYsMTExLjUwNiwyNTYuMDU2LDExMi43MDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NzMuMjU2LDIwOS4wMDZjLTguOS01Mi4yLTMzLjUtOTkuNy03MS4zLTEzNy41cy04NS4zLTYyLjQtMTM3LjUtNzEuM2MtNy4zLTEuMy0xNC4yLDMuNy0xNS41LDExICAgIGMtMS4yLDcuNCwzLjcsMTQuMywxMS4xLDE1LjZjNDYuNiw3LjksODkuMSwzMCwxMjIuOSw2My43YzMzLjgsMzMuOCw1NS44LDc2LjMsNjMuNywxMjIuOWMxLjEsNi42LDYuOCwxMS4yLDEzLjMsMTEuMiAgICBjMC44LDAsMS41LTAuMSwyLjMtMC4yQzQ2OS41NTYsMjIzLjMwNiw0NzQuNTU2LDIxNi4zMDYsNDczLjI1NiwyMDkuMDA2elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzc3IDAzMyA0NDIgNTUgNTc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNDc5LjA1OCA0NzkuMDU4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NzkuMDU4IDQ3OS4wNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTQzNC4xNDYgNTkuODgyaC0zODkuMjM0Yy0yNC43NjYgMC00NC45MTIgMjAuMTQ2LTQ0LjkxMiA0NC45MTJ2MjY5LjQ3YzAgMjQuNzY2IDIwLjE0NiA0NC45MTIgNDQuOTEyIDQ0LjkxMmgzODkuMjM0YzI0Ljc2NiAwIDQ0LjkxMi0yMC4xNDYgNDQuOTEyLTQ0LjkxMnYtMjY5LjQ3YzAtMjQuNzY2LTIwLjE0Ni00NC45MTItNDQuOTEyLTQ0LjkxMnptMCAyOS45NDFjMi4wMzQgMCAzLjk2OS40MjIgNS43MzggMS4xNTlsLTIwMC4zNTUgMTczLjY0OS0yMDAuMzU2LTE3My42NDljMS43NjktLjczNiAzLjcwNC0xLjE1OSA1LjczOC0xLjE1OXptMCAyOTkuNDExaC0zODkuMjM0Yy04LjI2IDAtMTQuOTcxLTYuNzEtMTQuOTcxLTE0Ljk3MXYtMjUxLjY0OGwxOTkuNzc4IDE3My4xNDFjMi44MjIgMi40NDEgNi4zMTYgMy42NTUgOS44MSAzLjY1NXM2Ljk4OC0xLjIxMyA5LjgxLTMuNjU1bDE5OS43NzgtMTczLjE0MXYyNTEuNjQ5Yy0uMDAxIDguMjYtNi43MTEgMTQuOTctMTQuOTcxIDE0Ljk3elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZG9kb0BnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNhcGFfMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NzkuNDQ3IDQ3OS40NDdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA1MTIgNTEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjM5LjQ0NiwwLjAyMmMtOC41OTQsMC0xNy4xODIsMC40NjItMjUuNzI3LDEuMzgzYy03LjgzMiwwLjgtMTUuNTY4LDIuMTEyLTIzLjIsMy43MDQgICAgYy0xLjQ3NywwLjMwOS0yLjk1NSwwLjYzNS00LjQzMiwwLjk3NkMxNDEuMTIsMTYuMzIzLDEwMC4wNiwzOS4zMTQsNjcuODMxLDcyLjMwMWMtMi45OTcsMy4wNzItNS45MzEsNi4yMzUtOC44LDkuNDg4ICAgIGMtODcuMDYsOTkuOTQ4LTc2LjYxMiwyNTEuNTQ4LDIzLjMzNywzMzguNjA4Yzk1LjY4OCw4My4zNDksMjM5LjcyMyw3Ny44MDMsMzI4LjcxOS0xMi42NTZjMy4wMDMtMy4wNzIsNS45MzYtNi4yMzUsOC44LTkuNDg4ICAgIGMzOC40MjEtNDMuNzU0LDU5LjU5NC0xMDAuMDAzLDU5LjU2LTE1OC4yMzJDNDc5LjQ0NywxMDcuNDcyLDM3MS45OTUsMC4wMjEsMjM5LjQ0NiwwLjAyMnogTTc4LjQ5NSw4NC4zMDEgICAgYzEuMjY0LTEuMzEyLDIuNTc2LTIuNTY4LDMuODY0LTMuODRjMS40ODgtMS40NjQsMi45NjgtMi45MzYsNC40ODgtNC4zNTJjMS4zMzYtMS4yNDgsMi43MTItMi40NDgsNC4wOC0zLjY2NCAgICBjMS41NDQtMS4zNjgsMy4wOC0yLjczNiw0LjY2NC00LjA1NmMxLjM5Mi0xLjE3NiwyLjgyNC0yLjMwNCw0LjI0OC0zLjQ0YzEuNi0xLjI4LDMuMi0yLjU2LDQuODQ4LTMuNzkyICAgIGMxLjQ1Ni0xLjA5NiwyLjkzNi0yLjE2LDQuNDI0LTMuMmMxLjY1Ni0xLjE4NCwzLjMyLTIuNCw1LjAwOC0zLjUwNGMxLjUxMi0xLjAyNCwzLjA0LTIuMDE2LDQuNTc2LTMgICAgYzEuNzEyLTEuMDk2LDMuNDMyLTIuMTc2LDUuMTY4LTMuMmMxLjU2My0wLjkzMywzLjEzNi0xLjg1MSw0LjcyLTIuNzUyYzEuNzcxLTEuMDA4LDMuNTQ5LTEuOTkyLDUuMzM2LTIuOTUyICAgIGMxLjYtMC44NTMsMy4yLTEuNjg4LDQuOC0yLjUwNGMxLjgyNC0wLjkyLDMuNjY0LTEuODA4LDUuNTEyLTIuNjhjMS42LTAuNzYsMy4yNjQtMS41Miw0LjkxMi0yLjI0YzEuODgtMC44LDMuNzg0LTEuNiw1LjY4OC0yLjQgICAgYzEuNjU2LTAuNjgsMy4zMDQtMS4zNDQsNC45NzYtMS45ODRjMS45MzYtMC43MzYsMy44OTYtMS40MjQsNS44NTYtMi4xMTJjMS42NzItMC41ODQsMy4zNDQtMS4xNjgsNS4wNC0xLjcyICAgIGMxLjk5Mi0wLjY0LDQtMS4yMzIsNi4wMTYtMS44MTZjMS42ODgtMC40ODgsMy4zNi0wLjk5Miw1LjA1Ni0xLjQ0OGMwLjY0OC0wLjE2OCwxLjI5Ni0wLjMwNCwxLjk0NC0wLjQ3MiAgICBjLTIzLjY4LDIyLjk5My00MS4yNTMsNTEuNTI5LTUxLjEyOCw4My4wMjRjLTE4Ljk4OC01LjAwOC0zNy4zNy0xMi4wODItNTQuODE2LTIxLjA5NkM3OC4wMzksODQuODIxLDc4LjI2Myw4NC41NDEsNzguNDk1LDg0LjMwMSAgICB6IE02Ni45OTEsOTcuMTgxYzE5LjIxNywxMC40MTIsMzkuNTk1LDE4LjUyMiw2MC43MTIsMjQuMTZjLTEwLjM1MiwzNS45OTYtMTUuNzg2LDczLjIyNy0xNi4xNTIsMTEwLjY4aC05NS45MiAgICBDMTcuMzc0LDE4Mi42MzIsMzUuNDM1LDEzNS4yMTQsNjYuOTkxLDk3LjE4MXogTTY2Ljk5MSwzODIuODYxYy0zMS41NTQtMzguMDM0LTQ5LjYxNS04NS40NTItNTEuMzYtMTM0Ljg0aDk1LjkyICAgIGMwLjM2NiwzNy40NTMsNS43OTksNzQuNjg0LDE2LjE1MiwxMTAuNjhDMTA2LjU4NywzNjQuMzQxLDg2LjIwOSwzNzIuNDUsNjYuOTkxLDM4Mi44NjF6IE0xODEuNzI3LDQ1Ni40MjkgICAgYy0xLjYxNi0wLjQwOC0zLjI4OC0wLjkzNi00Ljk1Mi0xLjQyNGMtMi4wMjQtMC41OTItNC4wNTYtMS4xODQtNi4wNTYtMS44MzJjLTEuNjg4LTAuNTQ0LTMuMzUyLTEuMTI4LTUuMDE2LTEuNzEyICAgIGMtMS45NjgtMC42OC0zLjkzNi0xLjM3Ni01Ljg4LTIuMTJjLTEuNjY0LTAuNjMyLTMuMzA0LTEuMjk2LTQuOTUyLTEuOTY4Yy0xLjkxMi0wLjgtMy44MjQtMS42LTUuNzItMi40ICAgIGMtMS42MzItMC43Mi0zLjI1Ni0xLjQ2MS00Ljg3Mi0yLjIyNGMtMS44NjQtMC44OC0zLjcyLTEuNzc2LTUuNi0yLjcwNGMtMS42LTAuOC0zLjItMS42LTQuOC0yLjQ3MiAgICBjLTEuODA4LTAuOTY4LTMuNi0xLjk2LTUuMzkyLTIuOTg0Yy0xLjYtMC44ODgtMy4xMi0xLjgtNC42NjQtMi43MjhjLTEuNzYtMS4wNTYtMy40ODgtMi4xNDQtNS4yMTYtMy4yNTYgICAgYy0xLjUyLTAuOTY4LTMuMDQtMS45NTItNC41MzYtMi45NmMtMS43MDQtMS4xNTItMy4zOTItMi4zNTItNS4wNjQtMy41NTJjLTEuNDY0LTEuMDQ4LTIuOTI4LTIuMDk2LTQuMzY4LTMuMiAgICBjLTEuNjU2LTEuMjQ4LTMuMjgtMi41MzYtNC44OTYtMy44MzJjLTEuNDE2LTEuMTI4LTIuODI0LTIuMjQ4LTQuMjA4LTMuNDA4Yy0xLjYtMS4zMjgtMy4xNDQtMi43MTItNC42OTYtNC4wODggICAgYy0xLjM2LTEuMjA4LTIuNzI4LTIuNC00LjA1Ni0zLjYzMmMtMS41MjgtMS40MjQtMy4wMDgtMi45MDQtNC40OTYtNC4zNjhjLTEuMjg4LTEuMjcyLTIuNi0yLjUyOC0zLjg2NC0zLjgzMiAgICBjLTAuMjMyLTAuMjQ4LTAuNDU2LTAuNTA0LTAuNjg4LTAuNzQ0YzE3LjQ0NS05LjAxOCwzNS44MjctMTYuMDk1LDU0LjgxNi0yMS4xMDRjOS44NzcsMzEuNDk0LDI3LjQ0OSw2MC4wMjksNTEuMTI4LDgzLjAyNCAgICBDMTgzLjAzMSw0NTYuNzQxLDE4Mi4zNzUsNDU2LjYwNSwxODEuNzI3LDQ1Ni40Mjl6IE0yMzEuNDQ3LDQ2My4zODljLTM0LjIzMi00Ljg2NC02NC4yNC00MC41OTItODMuMTItOTMuMzUyICAgIGMyNy4yOTYtNi4xMTIsNTUuMTUxLTkuMzkxLDgzLjEyLTkuNzg0VjQ2My4zODl6IE0yMzEuNDQ3LDM0NC4yNTNjLTI5LjY3LDAuMzktNTkuMjE1LDMuOTE0LTg4LjE0NCwxMC41MTIgICAgYy0xMC4wNDUtMzQuNzA3LTE1LjM0NC03MC42MTUtMTUuNzUyLTEwNi43NDRoMTAzLjg5NlYzNDQuMjUzeiBNMjMxLjQ0NywyMzIuMDIxSDEyNy41NTEgICAgYzAuNDA3LTM2LjEyOSw1LjcwNi03Mi4wMzcsMTUuNzUyLTEwNi43NDRjMjguOTI5LDYuNTk3LDU4LjQ3NSwxMC4xMjEsODguMTQ0LDEwLjUxMlYyMzIuMDIxeiBNMjMxLjQ0NywxMTkuNzg5ICAgIGMtMjcuOTctMC4zOS01NS44MjQtMy42NjktODMuMTItOS43ODRjMTguODgtNTIuNzYsNDguODg4LTg4LjQ4OCw4My4xMi05My4zNTJWMTE5Ljc4OXogTTQxMS45MDMsOTcuMTgxICAgIGMzMS41NTQsMzguMDM0LDQ5LjYxNSw4NS40NTIsNTEuMzYsMTM0Ljg0aC05NS45MmMtMC4zNjYtMzcuNDUzLTUuNzk5LTc0LjY4NC0xNi4xNTItMTEwLjY4ICAgIEMzNzIuMzA3LDExNS43LDM5Mi42ODUsMTA3LjU5MSw0MTEuOTAzLDk3LjE4MXogTTI5Ny4xMDMsMjMuNjA1YzEuNjgsMC40MTYsMy4zNTIsMC45NDQsNS4wMTYsMS40MzIgICAgYzIuMDI0LDAuNTkyLDQuMDU2LDEuMTg0LDYuMDU2LDEuODMyYzEuNjg4LDAuNTQ0LDMuMzUyLDEuMTI4LDUuMDE2LDEuNzEyYzEuOTY4LDAuNjgsMy45MzYsMS4zNzYsNS44OCwyLjEyICAgIGMxLjY2NCwwLjYzMiwzLjMwNCwxLjI5Niw0Ljk1MiwxLjk2OGMxLjkxMiwwLjgsMy44MjQsMS42LDUuNzIsMi40YzEuNjMyLDAuNzIsMy4yNTYsMS40NjEsNC44NzIsMi4yMjQgICAgYzEuODY0LDAuODgsMy43MiwxLjc3Niw1LjYsMi43MDRjMS42LDAuOCwzLjIsMS42LDQuOCwyLjQ3MmMxLjgwOCwwLjk2OCwzLjYsMS45Niw1LjM5MiwyLjk4NGMxLjYsMC44ODgsMy4xMiwxLjgsNC42NjQsMi43MjggICAgYzEuNzYsMS4wNTYsMy40ODgsMi4xNDQsNS4yMTYsMy4yNTZjMS41MiwwLjk2OCwzLjA0LDEuOTUyLDQuNTM2LDIuOTZjMS43MDQsMS4xNTIsMy4zODQsMi4zNDQsNS4wNTYsMy41NDQgICAgYzEuNDcyLDEuMDQ4LDIuOTM2LDIuMTA0LDQuMzg0LDMuMmMxLjY0OCwxLjI0LDMuMjY0LDIuNTI4LDQuODg4LDMuODI0YzEuNDA4LDEuMTIsMi44MjQsMi4yNCw0LjIwOCwzLjQwOCAgICBjMS42LDEuMzI4LDMuMTQ0LDIuNzEyLDQuNjk2LDQuMDg4YzEuMzYsMS4yMDgsMi43MjgsMi40LDQuMDU2LDMuNjMyYzEuNTI4LDEuNDI0LDMuMDA4LDIuOTA0LDQuNDk2LDQuMzY4ICAgIGMxLjI4OCwxLjI3MiwyLjYsMi41MjgsMy44NjQsMy44MzJjMC4yMzIsMC4yNDgsMC40NTYsMC41MDQsMC42ODgsMC43NDRjLTE3LjQ0NSw5LjAxOC0zNS44MjcsMTYuMDk1LTU0LjgxNiwyMS4xMDQgICAgYy05Ljg5Ni0zMS40OTgtMjcuNDkxLTYwLjAzMS01MS4xOTItODMuMDE2QzI5NS43OTksMjMuMjkzLDI5Ni40NTUsMjMuNDI5LDI5Ny4xMDMsMjMuNjA1eiBNMjQ3LjQ0NywxNi42NTMgICAgYzM0LjIzMiw0Ljg2NCw2NC4yNCw0MC41OTIsODMuMTIsOTMuMzUyYy0yNy4yOTYsNi4xMTItNTUuMTUxLDkuMzkxLTgzLjEyLDkuNzg0VjE2LjY1M3ogTTI0Ny40NDcsMTM1Ljc4OSAgICBjMjkuNjctMC4zOSw1OS4yMTUtMy45MTQsODguMTQ0LTEwLjUxMmMxMC4wNDUsMzQuNzA3LDE1LjM0NCw3MC42MTUsMTUuNzUyLDEwNi43NDRIMjQ3LjQ0N1YxMzUuNzg5eiBNMjQ3LjQ0NywyNDguMDIxaDEwMy44OTYgICAgYy0wLjQwNywzNi4xMjktNS43MDYsNzIuMDM3LTE1Ljc1MiwxMDYuNzQ0aDBjLTI4LjkyOS02LjU5Ny01OC40NzQtMTAuMTIxLTg4LjE0NC0xMC41MTJWMjQ4LjAyMXogTTI0Ny40NDcsNDYzLjM4OVYzNjAuMjUzICAgIGMyNy45NywwLjM5LDU1LjgyNCwzLjY2OSw4My4xMiw5Ljc4NEMzMTEuNjg3LDQyMi43OTcsMjgxLjY3OSw0NTguNTI1LDI0Ny40NDcsNDYzLjM4OXogTTQwMC4zOTksMzk1Ljc0MSAgICBjLTEuMjY0LDEuMzA0LTIuNTY4LDIuNTYtMy44NTYsMy44MzJjLTEuNDg4LDEuNDY0LTIuOTc2LDIuOTQ0LTQuNTA0LDQuMzY4Yy0xLjMyOCwxLjI0LTIuNjk2LDIuNC00LjA1NiwzLjY0ICAgIGMtMS41NTIsMS4zNzYtMy4wOTYsMi43NTItNC42OCw0LjA4Yy0xLjQsMS4xNjgtMi44MjQsMi4yOTYtNC4yNDgsMy40MzJjLTEuNiwxLjI4LTMuMiwyLjU2LTQuODQ4LDMuNzkyICAgIGMtMS40NTYsMS4wOTYtMi45MzYsMi4xNi00LjQyNCwzLjJjLTEuNjU2LDEuMTg0LTMuMzIsMi40LTUuMDA4LDMuNTA0Yy0xLjUxMiwxLjAyNC0zLjA0LDIuMDE2LTQuNTc2LDIuOTkyICAgIGMtMS43MTIsMS4xMDQtMy40MzcsMi4xNzEtNS4xNzYsMy4yYy0xLjYsMC45MzYtMy4xMjgsMS44NDgtNC43MDQsMi43NTJjLTEuNzcxLDEuMDA4LTMuNTUyLDEuOTkyLTUuMzQ0LDIuOTUyICAgIGMtMS42LDAuODUzLTMuMiwxLjY4OC00LjgsMi41MDRjLTEuODI0LDAuOTItMy42NjQsMS44MDgtNS41MTIsMi42OGMtMS42LDAuNzYtMy4yNjQsMS41Mi00LjkxMiwyLjI0ICAgIGMtMS44OCwwLjgtMy43ODQsMS42LTUuNjg4LDIuNGMtMS42NTYsMC42NzItMy4zMDQsMS4zNDQtNC45NjgsMS45NzZjLTEuOTUyLDAuNzQ0LTMuOTEyLDEuNDQtNS44OCwyLjEyICAgIGMtMS42NjQsMC41ODQtMy4zMjgsMS4xNjgtNS4wMTYsMS43MTJjLTIsMC42NDgtNCwxLjI0LTYuMDQsMS44MjRjLTEuNjcyLDAuNDk2LTMuMzUyLDAuOTkyLTUuMDQsMS40NDggICAgYy0wLjY0OCwwLjE2OC0xLjI5NiwwLjMwNC0xLjk0NCwwLjQ3MmMyMy42OC0yMi45OTMsNDEuMjUzLTUxLjUyOSw1MS4xMjgtODMuMDI0YzE4Ljk4OCw1LjAwOCwzNy4zNywxMi4wODIsNTQuODE2LDIxLjA5NiAgICBDNDAwLjg1NSwzOTUuMjIxLDQwMC42MzEsMzk1LjUwMSw0MDAuMzk5LDM5NS43NDF6IE00MTEuOTAzLDM4Mi44NjFjLTE5LjIxNy0xMC40MTItMzkuNTk1LTE4LjUyMi02MC43MTItMjQuMTYgICAgYzEwLjM1Mi0zNS45OTYsMTUuNzg2LTczLjIyNywxNi4xNTItMTEwLjY4aDk1LjkyQzQ2MS41MjEsMjk3LjQwOSw0NDMuNDU5LDM0NC44MjgsNDExLjkwMywzODIuODYxelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+d3d3LmRvbWFpbi5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCIvXCJcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3RfZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdF9mb3JtXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldHVybm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3VjY2Vzcz1cIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCwgV2Ugd2lsbCBjb250YWN0IHlvdSBzb29uLlwiXHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eV9ub3RpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QbGVhc2UgRmlsbCBSZXF1aXJlZCBGaWVsZHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fYnV0dG9uXCIgZGF0YS1wb3NpdGlvbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VibWl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLW1vZGFsXCI7XHJcbmV4cG9ydCBjb25zdCBOZXdzTW9kYWwgPSAoeyBvcGVuLCBvbkNsb3NlTW9kYWwsIGltZywgdGl0bGUsIGRhdGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17KCkgPT4gb25DbG9zZU1vZGFsKCl9IGNlbnRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3dyYXBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICB7ZGF0ZSAmJiA8c3Bhbj57ZGF0ZX08L3NwYW4+fVxyXG4gICAgICAgICAgICAgIDxoMz57dGl0bGUgPyB0aXRsZSA6IGBWUyBDb2RlIEdldHMgTmV3IEphdmFTY3JpcHQgRGVidWdnZXJgfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgS3VyYSBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhbiBhd2FyZC13aW5uaW5nIGRlc2lnblxyXG4gICAgICAgICAgICAgICAgdGVhbSB0aGF0IGNyZWF0ZXMgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXQgY2FwdHVyZVxyXG4gICAgICAgICAgICAgICAgeW91ciBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZCBtYXhpbWl6ZSB5b3VyXHJcbiAgICAgICAgICAgICAgICByZXZlbnVlIHRvIGhlbHAgZ3JvdyB5b3VyIGJ1c2luZXNzIGFuZCBhY2hpZXZlIHlvdXIgZ29hbHMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGUgZmlyc3QgaW50ZXJhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN1bWVycyBoYXZlIHdpdGggeW91ciBidXNpbmVzcy4gVGhhdCdzIHdoeSBhbG1vc3QgOTUgcGVyY2VudFxyXG4gICAgICAgICAgICAgICAgb2YgYSB1c2Vy4oCZcyBmaXJzdCBpbXByZXNzaW9uIHJlbGF0ZXMgdG8gd2ViIGRlc2lnbi4gSXTigJlzIGFsc29cclxuICAgICAgICAgICAgICAgIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuIGltbWVuc2UgaW1wYWN0IG9uIHlvdXJcclxuICAgICAgICAgICAgICAgIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHkgcmVldmFsdWF0aW5nIHRoZWlyXHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRl4oCZcyBkZXNpZ24gYnV0IGFsc28gcGFydG5lcmluZyB3aXRoIEt1cmEsIHRoZSB3ZWIgZGVzaWduXHJcbiAgICAgICAgICAgICAgICBhZ2VuY3kgdGhhdOKAmXMgZHJpdmVuIG1vcmUgdGhhbiAkMi40IGJpbGxpb24gaW4gcmV2ZW51ZSBmb3IgaXRzXHJcbiAgICAgICAgICAgICAgICBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHMgdW5kZXIgb3VyIGJlbHQsIHdlJ3JlXHJcbiAgICAgICAgICAgICAgICBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhIGN1c3RvbSB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvclxyXG4gICAgICAgICAgICAgICAgeW91ciB1bmlxdWUgYnVzaW5lc3MuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IEhvbWVNb2RhbCA9ICh7IG9wZW4sIG9uQ2xvc2VNb2RhbCwgaW1nLCB0aXRsZSwgZGF0ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBvbkNsb3NlTW9kYWwoKX0gY2VudGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BvcHVwX2luZm9ybWF0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtkYXRlICYmIDxzcGFuPntkYXRlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPGgzPnt0aXRsZSA/IHRpdGxlIDogYFZTIENvZGUgR2V0cyBOZXcgSmF2YVNjcmlwdCBEZWJ1Z2dlcmB9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEt1cmEgaXMgYSBsZWFkaW5nIHdlYiBkZXNpZ24gYWdlbmN5IHdpdGggYW4gYXdhcmQtd2lubmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbiB0ZWFtIHRoYXQgY3JlYXRlcyBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgeW91ciBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltaXplIHlvdXIgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzcyBhbmQgYWNoaWV2ZVxyXG4gICAgICAgICAgICAgICAgICAgIHlvdXIgZ29hbHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGUgZmlyc3RcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXIgYnVzaW5lc3MuIFRoYXQncyB3aHlcclxuICAgICAgICAgICAgICAgICAgICBhbG1vc3QgOTUgcGVyY2VudCBvZiBhIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0b1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYiBkZXNpZ24uIEl04oCZcyBhbHNvIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5IHJlZXZhbHVhdGluZyB0aGVpclxyXG4gICAgICAgICAgICAgICAgICAgIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzbyBwYXJ0bmVyaW5nIHdpdGggS3VyYSwgdGhlIHdlYlxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbiBhZ2VuY3kgdGhhdOKAmXMgZHJpdmVuIG1vcmUgdGhhbiAkMi40IGJpbGxpb24gaW5cclxuICAgICAgICAgICAgICAgICAgICByZXZlbnVlIGZvciBpdHMgY2xpZW50cy4gV2l0aCBvdmVyIDUwIHdlYiBkZXNpZ24gYXdhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXIgb3VyIGJlbHQsIHdlJ3JlIGNvbmZpZGVudCB3ZSBjYW4gZGVzaWduIGEgY3VzdG9tXHJcbiAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZSB0aGF0IGRyaXZlcyBzYWxlcyBmb3IgeW91ciB1bmlxdWUgYnVzaW5lc3MuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjdXN0b21DdXJzb3IgfSBmcm9tIFwiLi4vdXRpbGl0c1wiO1xyXG5cclxuY29uc3QgQ3Vyc29yID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjdXN0b21DdXJzb3IoKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdXNlLWN1cnNvciBjdXJzb3Itb3V0ZXJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3VzZS1jdXJzb3IgY3Vyc29yLWlubmVyXCI+PC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJzb3I7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSG9tZU1vZGFsIH0gZnJvbSBcIi4vQ29udGVudE1vZGFsXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWYWx1ZSwgc2V0TW9kYWxWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWc6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSB0byBzdG9yZSB1c2VyIGRhdGEgZmV0Y2hlZCBmcm9tIEFQSVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggdXNlciBkYXRhIGZyb20gdGhlIEFQSVxyXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBlbnN1cmUgdGhpcyBlZmZlY3QgcnVucyBvbmx5IG9uY2UsIHNpbWlsYXIgdG8gY29tcG9uZW50RGlkTW91bnRcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIik7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0VXNlckRhdGEoZGF0YS51c2VyLmFib3V0KTsgLy8gQXNzdW1pbmcgXCJ1c2VyLmFib3V0XCIgY29udGFpbnMgdGhlIHVzZXIncyBkZXRhaWxzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGFcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbk9wZW5Nb2RhbCA9IChpbWcsIHRpdGxlKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0TW9kYWxWYWx1ZSh7IGltZywgdGl0bGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRNb2RhbFZhbHVlKHsgaW1nOiBudWxsLCB0aXRsZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cImhvbWVcIj5cclxuICAgICAge3VzZXJEYXRhICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1faGVyb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXJEYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImpvYlwiPnt1c2VyRGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXJEYXRhLnN1YlRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnt1c2VyRGF0YS5xdW90ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57dXNlckRhdGEuZXhwX3llYXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXJEYXRhLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3VzZXJEYXRhLnBob25lTnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgb3RoZXIgdXNlciBkZXRhaWxzIGFzIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dXNlckRhdGEuYXZhdGFyLnVybH0pYCB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPEhvbWVNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZU1vZGFsPXsoKSA9PiBvbkNsb3NlTW9kYWwoKX1cclxuICAgICAgICBpbWc9e21vZGFsVmFsdWUuaW1nfVxyXG4gICAgICAgIHRpdGxlPXttb2RhbFZhbHVlLnRpdGxlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlnaHRCb3ggZnJvbSBcInJlYWN0LWF3ZXNvbWUtbGlnaHRib3hcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgcG9ydGZvbGlvU2xpZGVyIH0gZnJvbSBcIi4uL3N3aXBlclNsaWRlclByb3BzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgLy8gSW1wb3J0IEF4aW9zIGZvciBtYWtpbmcgSFRUUCByZXF1ZXN0c1xyXG5cclxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TGlnaHQsIHNldFNob3dMaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIHByb2plY3QgZGF0YVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggcHJvamVjdCBkYXRhIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgJiYgZGF0YS51c2VyICYmIGRhdGEudXNlci5wcm9qZWN0cykge1xyXG4gICAgICAgICAgc2V0UHJvamVjdHMoZGF0YS51c2VyLnByb2plY3RzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlcyBkYXRhJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgdG8gb25seSBydW4gdGhlIGVmZmVjdCBvbmNlIG9uIG1vdW50XHJcblxyXG4gIGNvbnN0IHNob3dMaWdodEJveCA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0U2hvd0xpZ2h0KHtcclxuICAgICAgc3RhcnRJbmRleDogaW5kZXgsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlTGlnaHRCb3ggPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TGlnaHQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInBvcnRmb2xpb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgzPlByb2plY3RzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW9fbGlzdCBnYWxsZXJ5X3pvb20gd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXBlciB7Li4ucG9ydGZvbGlvU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5pbWFnZS51cmx9IGFsdD1cIlwiIC8+IHsvKiBVc2UgdGhlIHByb2plY3QgaW1hZ2UgVVJMICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgcHJvamVjdC5pbWFnZS51cmwgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdC50ZWNoU3RhY2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFJlc3Qgb2YgeW91ciBwcm9qZWN0IGRldGFpbHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1cmFfdG1fZnVsbF9saW5rIHBvcHVwLXZpbWVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dMaWdodEJveChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3N3aXBlcl9wcm9ncmVzcyBmaWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlfcGFnaW5hdGlvbl9pblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X25hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15X3ByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9uZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dMaWdodCA/IChcclxuICAgICAgICA8TGlnaHRCb3hcclxuICAgICAgICAgIGltYWdlcz17cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xyXG4gICAgICAgICAgICB1cmw6IHByb2plY3QuaW1hZ2UudXJsLFxyXG4gICAgICAgICAgICB0aXRsZTogcHJvamVjdC50aXRsZSxcclxuICAgICAgICAgIH0pKX1cclxuICAgICAgICAgIHN0YXJ0SW5kZXg9e3Nob3dMaWdodC5zdGFydEluZGV4fVxyXG4gICAgICAgICAgb25DbG9zZT17aGlkZUxpZ2h0Qm94fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByaWNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLzY1YjNhMjJjMDFkOTAwZTk2YzQyMTlhZVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzICYmIGRhdGEudXNlciAmJiBkYXRhLnVzZXIuc2VydmljZXMpIHtcclxuICAgICAgICAgIHNldFNlcnZpY2VzKGRhdGEudXNlci5zZXJ2aWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZXMgZGF0YScsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInByaWNlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9wcmljaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ19pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc3RpY2t5X3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlByaWNpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5TZXJ2aWNlIFByaWNlczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBGb3IgbW9yZSB0aGFuIDIwIHllYXJzIG91ciBleHBlcnRzIGhhdmUgYmVlbiBhY2NvbXBsaXNoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgZW5vdWdoIHdpdGggbW9kZXJuIFdlYiBEZXZlbG9wbWVudCwgbmV3IGdlbmVyYXRpb24gd2ViIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcCBwcm9ncmFtbWluZyBsYW5ndWFnZS5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3N0aWNreV9zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2VydmljZS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZXJ2aWNlLmNoYXJnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VydmljZS5pbWFnZS51cmx9IGFsdD17c2VydmljZS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPntzZXJ2aWNlLmRlc2N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTtcclxuIiwiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhY3RpdmVTa2lsbFByb2dyZXNzIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuXHJcbmNvbnN0IFBhcmFsbGF4VmlkZW8gPSBkeW5hbWljKGltcG9ydChcIi4vUGFyYWxsYXhcIiksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IFNraWxscyA9ICgpID0+IHtcclxuICBjb25zdCBbc2tpbGxzRGF0YSwgc2V0U2tpbGxzRGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gc3RvcmUgZmV0Y2hlZCBza2lsbHMgZGF0YVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggc2tpbGxzIGRhdGEgZnJvbSB5b3VyIEFQSVxyXG4gICAgZmV0Y2goXCJodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyAmJiBkYXRhLnVzZXIgJiYgZGF0YS51c2VyLnNraWxscykge1xyXG4gICAgICAgICAgLy8gU2V0IHRoZSBmZXRjaGVkIHNraWxscyBkYXRhIHRvIHRoZSBjb21wb25lbnQgc3RhdGVcclxuICAgICAgICAgIHNldFNraWxsc0RhdGEoZGF0YS51c2VyLnNraWxscyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNraWxscyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBhY3RpdmVTa2lsbFByb2dyZXNzKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biBlZmZlY3Qgb25seSBvbmNlIG9uIG1vdW50XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwic2tpbGxzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9za2lsbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHNfaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGUgbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNraWxsczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMz5Qcm9ncmFtbWluZyBTa2lsbHM8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEZvciBtb3JlIHRoYW4gMjAgeWVhcnMgb3VyIGV4cGVydHMgaGF2ZSBiZWVuIGFjY29tcGxpc2hpbmdcclxuICAgICAgICAgICAgICAgICAgZW5vdWdoIHdpdGggbW9kZXJuIFdlYiBEZXZlbG9wbWVudCwgbmV3IGdlbmVyYXRpb24gd2ViIGFuZCBhcHBcclxuICAgICAgICAgICAgICAgICAgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIFJlbmRlciBza2lsbHMgZGF0YSBmcm9tIEFQSSAqL31cclxuICAgICAgICAgICAgICB7c2tpbGxzRGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvZG9fcHJvZ3Jlc3Mgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIiBkYXRhLXdvdy1kZWxheT1cIi4yc1wiPlxyXG4gICAgICAgICAgICAgICAgICB7c2tpbGxzRGF0YS5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NfaW5uZXJcIiBrZXk9e2luZGV4fSBkYXRhLXZhbHVlPXtza2lsbC5wZXJjZW50YWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntza2lsbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+e3NraWxsLnBlcmNlbnRhZ2V9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX2luXCIgc3R5bGU9e3sgd2lkdGg6IGAke3NraWxsLnBlcmNlbnRhZ2V9JWAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8UGFyYWxsYXhWaWRlbyAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15X2ltYWdlIGphcmFsbGF4XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtc3BlZWQ9XCIwXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltZy9wb3J0Zm9saW8vMi5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiOyAvLyBJbXBvcnQgQXhpb3MgZm9yIG1ha2luZyBIVFRQIHJlcXVlc3RzXHJcblxyXG5jb25zdCBTb2NpYWxMaW5rcyA9ICgpID0+IHtcclxuICBjb25zdCBbc29jaWFsSGFuZGxlcywgc2V0U29jaWFsSGFuZGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFNvY2lhbEhhbmRsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIik7XHJcbiAgICAgICAgc2V0U29jaWFsSGFuZGxlcyhyZXNwb25zZS5kYXRhLnVzZXIuc29jaWFsX2hhbmRsZXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzb2NpYWwgaGFuZGxlczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoU29jaWFsSGFuZGxlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzIHN0eWxlPXt7cGFkZGluZ0xlZnQ6JzYwMHB4J319PlNvY2lhbCBMaW5rczwvaDM+XHJcbiAgICAgICAge3NvY2lhbEhhbmRsZXMgJiYgc29jaWFsSGFuZGxlcy5tYXAoKGhhbmRsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxhIGtleT17aW5kZXh9IGhyZWY9e2hhbmRsZS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMCUnLG1hcmdpbkxlZnQ6JzM2OXB4J319IHNyYz17aGFuZGxlLmltYWdlLnVybH0gYWx0PXtoYW5kbGUucGxhdGZvcm19IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IG5ld3NTbGlkZXIgfSBmcm9tIFwiLi4vc3dpcGVyU2xpZGVyUHJvcHNcIjtcclxuaW1wb3J0IHsgTmV3c01vZGFsIH0gZnJvbSBcIi4vQ29udGVudE1vZGFsXCI7XHJcbmNvbnN0IFRlc3RpbW9uaWFsPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbFZhbHVlLCBzZXRNb2RhbFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgIGltZzogbnVsbCxcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgZGF0ZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbdGVzdGltb25pYWwsIHNldFRlc3RpbW9uaWFsXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIHByb2plY3QgZGF0YVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggcHJvamVjdCBkYXRhIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgJiYgZGF0YS51c2VyICYmIGRhdGEudXNlci50ZXN0aW1vbmlhbHMpIHtcclxuICAgICAgICAgIHNldFRlc3RpbW9uaWFsKGRhdGEudXNlci50ZXN0aW1vbmlhbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNlcnZpY2VzIGRhdGEnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTsgXHJcbiAgY29uc3Qgb25PcGVuTW9kYWwgPSAoaW1nLCB0aXRsZSwgZGF0ZSkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWcsIHRpdGxlLCBkYXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxWYWx1ZSh7IGltZzogbnVsbCwgdGl0bGU6IFwiXCIsIGRhdGU6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cIm5ld3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbmV3c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDM+UmV2aWV3czwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfbGlzdCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNrLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXBlciB7Li4ubmV3c1NsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFsICYmIHRlc3RpbW9uaWFsLm1hcCgodGVzdGltb25pYWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2xpY2stc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Rlc3RpbW9uaWFsLmltYWdlLnVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGVzdGltb25pYWwubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsLnJldmlld308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGVzdGltb25pYWwucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc3dpcGVyX3Byb2dyZXNzIGZpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteV9wYWdpbmF0aW9uX2luXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlfbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlfcHJldlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm15X25leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmV3c01vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlTW9kYWw9eygpID0+IG9uQ2xvc2VNb2RhbCgpfVxyXG4gICAgICAgIGltZz17bW9kYWxWYWx1ZS5pbWd9XHJcbiAgICAgICAgdGl0bGU9e21vZGFsVmFsdWUudGl0bGV9XHJcbiAgICAgICAgZGF0ZT17bW9kYWxWYWx1ZS5kYXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aW1lbGluZURhdGEsIHNldFRpbWVsaW5lRGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gc3RvcmUgZmV0Y2hlZCB0aW1lbGluZSBkYXRhXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCB0aW1lbGluZSBkYXRhIGZyb20geW91ciBBUElcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9wb3J0Zm9saW8tYmFja2VuZC0zMG1wLm9ucmVuZGVyLmNvbS9hcGkvdjEvZ2V0L3VzZXIvNjViM2EyMmMwMWQ5MDBlOTZjNDIxOWFlXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIFNldCB0aGUgZmV0Y2hlZCB0aW1lbGluZSBkYXRhIHRvIHRoZSBjb21wb25lbnQgc3RhdGVcclxuICAgICAgICBzZXRUaW1lbGluZURhdGEoZGF0YS51c2VyLnRpbWVsaW5lKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0aW1lbGluZSBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBydW4gZWZmZWN0IG9ubHkgb25jZSBvbiBtb3VudFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInRpbWVsaW5lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV90aW1lbGluZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5UaW1lbGluZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGgzPldvcmtpbmcgUGVyaW9kPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZV9saXN0XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7LyogUmVuZGVyIHRpbWVsaW5lIGRhdGEgZnJvbSBBUEkgKi99XHJcbiAgICAgICAgICAgICAge3RpbWVsaW5lRGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgdGltZWxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT17aW5kZXggKiAwLjIgKyBcInNcIn0gLy8gQWRkIGRlbGF5IGZvciBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW4tVVNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5lbmREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShpdGVtLmVuZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlRvZGF5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5qb2JUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5jb21wYW55X25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uam9iTG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJ1bGxldFBvaW50cy5tYXAoKHBvaW50LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9Pntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9jb3B5cmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5cmlnaHRfaW5uZXIgd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiBBbGwgcmlnaHRzXHJcbiAgICAgICAgICAgICAgICAgIHJlc2VydmVkLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9zb2NpYWwvZmFjZWJvb2suc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvc29jaWFsL3R3aXR0ZXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvc29jaWFsL2luc3RhZ3JhbS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9zb2NpYWwvZHJpYmJibGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvc29jaWFsL3Rpay10b2suc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXVkaW9Tb3VuZEFuZE9wZW4sIG9wZW5OYXYsIHNjcm9sbF8sIHN0aWNreU5hdiB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBkYXJrIH0pID0+IHtcclxuICBjb25zdCBbaXNUb2dnbGVkLCBzZXRUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVUcnVlRmFsc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRUb2dnbGVkKCFpc1RvZ2dsZWQpO1xyXG4gICAgb3Blbk5hdighaXNUb2dnbGVkKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXVkaW9Tb3VuZEFuZE9wZW4oKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbF8pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc3RpY2t5TmF2KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wia3VyYV90bV90b3BiYXJcIn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGJhcl9pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2RhcmsgPyBcIi9pbWcvbG9nby9sb2dvLnBuZ1wiIDogXCIvaW1nL2xvZ28vZGFyay5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYW5jaG9yX25hdlwiIGlkPVwiYW5jaG9yX25hdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNza2lsbHNcIj5Ta2lsbHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RpbWVsaW5lXCI+VGltZWxpbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3ByaWNlXCI+UHJpY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2ZlZWRiYWNrXCI+RmVlZGJhY2s8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NvY2lhbGxpbmtzXCI+U29jaWFsIExpbmtzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlnZ2VyXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlVHJ1ZUZhbHNlKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoYW1idXJnZXIgaGFtYnVyZ2VyLS1zbGlkZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcIiBpcy1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbW9iaWxlX21lbnVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZV9tZW51X2lubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZV9pblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2RhcmsgPyBcIi9pbWcvbG9nby9sb2dvLnBuZ1wiIDogXCIvaW1nL2xvZ28vZGFyay5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlnZ2VyXCIgb25DbGljaz17dG9nZ2xlVHJ1ZUZhbHNlfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBpc1RvZ2dsZWRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc2xpZGVyIGlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImhhbWJ1cmdlciBoYW1idXJnZXItLXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUb2dnbGVkID8gXCJkcm9wZG93biBhY3RpdmVcIiA6IFwiZHJvcGRvd25cIn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhbmNob3JfbmF2XCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnJlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2tpbGxzXCI+U2tpbGxzPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0aW1lbGluZVwiPlRpbWVsaW5lPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcmljZVwiPlByaWNlPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmZWVkYmFja1wiPkZlZWRiYWNrPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNzb2NpYWxsaW5rc1wiPlNvY2lhbCBMaW5rczwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnNvciwgc2V0Q3Vyc29yXSA9IHVzZVN0YXRlKDEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbG9ycyBsaSBhXCIpO1xyXG4gICAgY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XHJcbiAgICAgIGNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmt1cmFfdG1fYWxsX3dyYXBcIilcclxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yXCIsIGNvbG9yLmNsYXNzTGlzdFswXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRDdXJzb3IodmFsdWUpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIua3VyYV90bV9hbGxfd3JhcFwiKVxyXG4gICAgICAuc2V0QXR0cmlidXRlKFwiZGF0YS1tYWdpYy1jdXJzb3JcIiwgdmFsdWUgPT09IDEgPyBcInNob3dcIiA6IFwiaGlkZVwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdXJhX3RtX3NldHRpbmdzICR7dG9nZ2xlID8gXCJvcGVuZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICBpZD1cIkNhcGFfMVwiXHJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNjguNzY1IDI2OC43NjVcIlxyXG4gICAgICAgICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHNldHRpbmdTdmcgcmVwbGFjZWQtc3ZnIGNoYW5nZURhcmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTI2Ny45MiwxMTkuNDYxYy0wLjQyNS0zLjc3OC00LjgzLTYuNjE3LTguNjM5LTYuNjE3ICAgIGMtMTIuMzE1LDAtMjMuMjQzLTcuMjMxLTI3LjgyNi0xOC40MTRjLTQuNjgyLTExLjQ1NC0xLjY2My0yNC44MTIsNy41MTUtMzMuMjMxYzIuODg5LTIuNjQxLDMuMjQtNy4wNjIsMC44MTctMTAuMTMzICAgIGMtNi4zMDMtOC4wMDQtMTMuNDY3LTE1LjIzNC0yMS4yODktMjEuNWMtMy4wNjMtMi40NTgtNy41NTctMi4xMTYtMTAuMjEzLDAuODI1Yy04LjAxLDguODcxLTIyLjM5OCwxMi4xNjgtMzMuNTE2LDcuNTI5ICAgIGMtMTEuNTctNC44NjctMTguODY2LTE2LjU5MS0xOC4xNTItMjkuMTc2YzAuMjM1LTMuOTUzLTIuNjU0LTcuMzktNi41OTUtNy44NDljLTEwLjAzOC0xLjE2MS0yMC4xNjQtMS4xOTctMzAuMjMyLTAuMDggICAgYy0zLjg5NiwwLjQzLTYuNzg1LDMuNzg2LTYuNjU0LDcuNjg5YzAuNDM4LDEyLjQ2MS02Ljk0NiwyMy45OC0xOC40MDEsMjguNjcyYy0xMC45ODUsNC40ODctMjUuMjcyLDEuMjE4LTMzLjI2Ni03LjU3NCAgICBjLTIuNjQyLTIuODk2LTcuMDYzLTMuMjUyLTEwLjE0MS0wLjg1M2MtOC4wNTQsNi4zMTktMTUuMzc5LDEzLjU1NS0yMS43NCwyMS40OTNjLTIuNDgxLDMuMDg2LTIuMTE2LDcuNTU5LDAuODAyLDEwLjIxNCAgICBjOS4zNTMsOC40NywxMi4zNzMsMjEuOTQ0LDcuNTE0LDMzLjUzYy00LjYzOSwxMS4wNDYtMTYuMTA5LDE4LjE2NS0yOS4yNCwxOC4xNjVjLTQuMjYxLTAuMTM3LTcuMjk2LDIuNzIzLTcuNzYyLDYuNTk3ICAgIGMtMS4xODIsMTAuMDk2LTEuMTk2LDIwLjM4My0wLjA1OCwzMC41NjFjMC40MjIsMy43OTQsNC45NjEsNi42MDgsOC44MTIsNi42MDhjMTEuNzAyLTAuMjk5LDIyLjkzNyw2Ljk0NiwyNy42NSwxOC40MTUgICAgYzQuNjk4LDExLjQ1NCwxLjY3OCwyNC44MDQtNy41MTQsMzMuMjNjLTIuODc1LDIuNjQxLTMuMjQsNy4wNTUtMC44MTcsMTAuMTI2YzYuMjQ0LDcuOTUzLDEzLjQwOSwxNS4xOSwyMS4yNTksMjEuNTA4ICAgIGMzLjA3OSwyLjQ4MSw3LjU1OSwyLjEzMSwxMC4yMjgtMC44MWM4LjA0LTguODkzLDIyLjQyNy0xMi4xODQsMzMuNTAxLTcuNTM2YzExLjU5OSw0Ljg1MiwxOC44OTUsMTYuNTc1LDE4LjE4MSwyOS4xNjcgICAgYy0wLjIzMywzLjk1NSwyLjY3LDcuMzk4LDYuNTk1LDcuODVjNS4xMzUsMC41OTksMTAuMzAxLDAuODk4LDE1LjQ4MSwwLjg5OGM0LjkxNywwLDkuODM1LTAuMjcsMTQuNzUyLTAuODE3ICAgIGMzLjg5Ny0wLjQzLDYuNzg0LTMuNzg2LDYuNjUzLTcuNjk2Yy0wLjQ1MS0xMi40NTQsNi45NDYtMjMuOTczLDE4LjM4Ni0yOC42NTdjMTEuMDU5LTQuNTE3LDI1LjI4Ni0xLjIxMSwzMy4yODEsNy41NzIgICAgYzIuNjU3LDIuODksNy4wNDcsMy4yMzksMTAuMTQyLDAuODQ4YzguMDM5LTYuMzA0LDE1LjM0OS0xMy41MzQsMjEuNzQtMjEuNDk0YzIuNDgtMy4wNzksMi4xMy03LjU1OS0wLjgwMy0xMC4yMTMgICAgYy05LjM1My04LjQ3LTEyLjM4OC0yMS45NDYtNy41MjktMzMuNTI0YzQuNTY4LTEwLjg5OSwxNS42MTItMTguMjE3LDI3LjQ5MS0xOC4yMTdsMS42NjIsMC4wNDMgICAgYzMuODUzLDAuMzEzLDcuMzk4LTIuNjU1LDcuODY1LTYuNTg4QzI2OS4wNDQsMTM5LjkxNywyNjkuMDU4LDEyOS42MzksMjY3LjkyLDExOS40NjF6IE0xMzQuNTk1LDE3OS40OTEgICAgYy0yNC43MTgsMC00NC44MjQtMjAuMTA2LTQ0LjgyNC00NC44MjRjMC0yNC43MTcsMjAuMTA2LTQ0LjgyNCw0NC44MjQtNDQuODI0YzI0LjcxNywwLDQ0LjgyMywyMC4xMDcsNDQuODIzLDQ0LjgyNCAgICBDMTc5LjQxOCwxNTkuMzg1LDE1OS4zMTIsMTc5LjQ5MSwxMzQuNTk1LDE3OS40OTF6XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICAgIDxnIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9PjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VW5saW1pdGVkIENvbG9yczwvc3Bhbj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xvcnNcIiBpZD1cImNvbG9yc1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmx1ZVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JlZW5cIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyb3duXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwaW5rXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcmFuZ2VcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJsXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxhY2tcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndoXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2hpdGVcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB1cnBsZVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2t5XCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYWRldEJsdWVcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNyaW1zb25cIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9saXZlXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWRcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hZ2ljIEN1cnNvcjwvc3Bhbj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXJzb3JcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2N1cnNvciA9PT0gMSA/IFwic2hvd21lIHNob3dcIiA6IFwiaGlkZGVuXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soMSl9XHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2N1cnNvciA9PT0gMiA/IFwic2hvd21lIHNob3dcIiA6IFwiaGlkZGVuXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soMil9XHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MTJ9XHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MTJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyBzZXR0aW5nU3ZnIHJlcGxhY2VkLXN2ZyBjaGFuZ2VEYXJrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDUxLjAwMiAxODMuNTc0aDI5Ljk5N3Y4NC44NTNoLTI5Ljk5N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0yMy4zMTggMzk1LjcwNilcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMjcxLjAwMiAzLjU3NGgyOS45OTd2ODQuODUzaC0yOS45OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyA1MS4yNDEgMjE1LjcwNilcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDIzLjU3NCAzMS4wMDJoODQuODUzdjI5Ljk5N2gtODQuODUzelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgMTAzLjk2MSAzNDIuOTg1KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTQyLjQyMiA1MTIgMTUwLjQ1OC0xNTAuNDU4IDQyLjExNCAxMjUuNDY0IDE1Mi45ODgtMzYyLjk4OC0zNjIuOTg4IDE1Mi45ODggMTI1LjQ2NCA0Mi4xMTQtMTUwLjQ1OCAxNTAuNDU4elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0zNjEgMGgzMHY2MWgtMzB6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTQ1MSAxMjFoNjF2MzBoLTYxelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xyXG4iLCJpbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xyXG5Td2lwZXJDb3JlLnVzZShbUGFnaW5hdGlvbiwgTmF2aWdhdGlvbl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcnRmb2xpb1NsaWRlciA9IHtcclxuICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBwcmV2RWw6IFwiLm15X3ByZXZcIixcclxuICAgIG5leHRFbDogXCIubXlfbmV4dFwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgfSxcclxuICAgIDY0MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzU2xpZGVyID0ge1xyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIHByZXZFbDogXCIubXlfcHJldlwiLFxyXG4gICAgbmV4dEVsOiBcIi5teV9uZXh0XCIsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJjb25zdCBrdXJhX3RtX3ByZWxvYWRlciA9ICgpID0+IHtcclxuICBsZXQgaXNNb2JpbGUgPSAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaS50ZXN0KFxyXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gIClcclxuICAgID8gdHJ1ZVxyXG4gICAgOiBmYWxzZTtcclxuICBsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIik7XHJcblxyXG4gIGlmIChwcmVsb2FkZXIpIHtcclxuICAgIGlmICghaXNNb2JpbGUpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZWRcIik7XHJcbiAgICAgIH0sIDgwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZWxvYWRlci5yZW1vdmUoKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmVsb2FkZXIucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvd0pzQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuV09XID0gcmVxdWlyZShcIndvd2pzXCIpO1xyXG4gIH1cclxuICBuZXcgV09XLldPVygpLmluaXQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjdXN0b21DdXJzb3IgPSAoKSA9PiB7XHJcbiAgdmFyIG15Q3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3VzZS1jdXJzb3JcIiksXHJcbiAgICBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKSxcclxuICAgIGt1cmFfdG1fdG9wYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rdXJhX3RtX3RvcGJhciBcIiksXHJcbiAgICBwb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItcG9pbnRlclwiKSxcclxuICAgIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1pbm5lclwiKSxcclxuICAgIHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1vdXRlclwiKTtcclxuXHJcbiAgZnVuY3Rpb24gbW91c2VFdmVudChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpLCB0LmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIiksIHQuY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvci1ob3ZlclwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAobXlDdXJzb3IubGVuZ3RoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICBsZXQgbixcclxuICAgICAgICBpID0gMCxcclxuICAgICAgICBvID0gITE7XHJcbiAgICAgICh3aW5kb3cub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcykpO1xyXG4gICAgICAgIG8gfHxcclxuICAgICAgICAgICh0LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgcy5jbGllbnRYICsgXCJweCwgXCIgKyBzLmNsaWVudFkgKyBcInB4KVwiKSxcclxuICAgICAgICAgIChlLnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgcy5jbGllbnRYICsgXCJweCwgXCIgKyBzLmNsaWVudFkgKyBcInB4KVwiKSxcclxuICAgICAgICAgIChuID0gcy5jbGllbnRZKSxcclxuICAgICAgICAgIChpID0gcy5jbGllbnRYKTtcclxuICAgICAgfSksXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgXCJtb3VzZWVudGVyXCIsXHJcbiAgICAgICAgICAvLyBcImEsLmt1cmFfdG1fdG9wYmFyIC50cmlnZ2VyLCAuY3Vyc29yLXBvaW50ZXJcIixcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWlubmVyXCIpLCB0LmNsYXNzTGlzdC5hZGQoXCJjdXJzb3Itb3V0ZXJcIik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYVtpXTtcclxuICAgICAgICAgICAgICBtb3VzZUV2ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYW1idXJnZXIgJiYgbW91c2VFdmVudChoYW1idXJnZXIpO1xyXG4gICAgICAgICAgICBrdXJhX3RtX3RvcGJhciAmJiBtb3VzZUV2ZW50KGt1cmFfdG1fdG9wYmFyKTtcclxuICAgICAgICAgICAgcG9pbnRlciAmJiBtb3VzZUV2ZW50KHBvaW50ZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgKGUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiKSxcclxuICAgICAgICAodC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBrdXJhX3RtX215X2xvYWQgPSAoKSA9PiB7XHJcbiAga3VyYV90bV9wcmVsb2FkZXIoKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XHJcbiAgfSwgMTUwMCk7XHJcbn07XHJcblxyXG4vLyBIZWFkZXJcclxuZXhwb3J0IGNvbnN0IHN0aWNreU5hdiA9ICgpID0+IHtcclxuICBsZXQgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XHJcbiAgY29uc3Qgc3RpY2t5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIua3VyYV90bV90b3BiYXJcIik7XHJcbiAgc3RpY2t5cy5mb3JFYWNoKChzdGlja3kpID0+IHtcclxuICAgIGlmIChzdGlja3kpIHtcclxuICAgICAgaWYgKG9mZnNldCA+IDEwMCkge1xyXG4gICAgICAgIHN0aWNreS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGlja3kuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdWRpb1NvdW5kQW5kT3BlbiA9ICgpID0+IHtcclxuICB2YXIgYXVkaW8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhdWRpbzFcIik7XHJcbiAgdmFyIGF1ZGlvMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYXVkaW8yXCIpO1xyXG4gIHZhciBoYW1idXJnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmlnZ2VyIC5oYW1idXJnZXJcIik7XHJcblxyXG4gIGhhbWJ1cmdlcnMuZm9yRWFjaCgoaGFtYnVyZ2VyKSA9PiB7XHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgYXVkaW8xWzBdLnBsYXkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdWRpbzJbMF0ucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5OYXYgPSAodG9nZ2xlKSA9PiB7XHJcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2FuY2hvcl9uYXY+IGxpXCIpO1xyXG4gIGlmIChuYXZJdGVtcykge1xyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgobmF2KSA9PiB7XHJcbiAgICAgIHRvZ2dsZSA/IG5hdi5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpIDogbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlU2tpbGxQcm9ncmVzcyA9ICgpID0+IHtcclxuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmFyXCIpO1xyXG4gIGNvbnN0IHRyaWdnZXJCb3R0b20gPSAod2luZG93LmlubmVySGVpZ2h0IC8gNSkgKiA1O1xyXG4gIGJveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4gICAgY29uc3QgYm94VG9wID0gYm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGlmIChib3hUb3AgPCB0cmlnZ2VyQm90dG9tKSB7XHJcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8vIGFjdGl2ZVxyXG5leHBvcnQgY29uc3QgYWN0aXZlTWVudUJ5U2VjdGlvbiA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7aWQgPyBpZCA6IFwiaG9tZVwifWApO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrQm94ZXMpO1xyXG4gIGNoZWNrQm94ZXMoKTtcclxuICBmdW5jdGlvbiBjaGVja0JveGVzKCkge1xyXG4gICAgY29uc3QgdHJpZ2dlckJvdHRvbSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyA1KSAqIDU7XHJcbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgY29uc3QgYm94VG9wID0gYm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICAgIGlmIChib3hUb3AgPCB0cmlnZ2VyQm90dG9tKSB7XHJcbiAgICAgICAgYWN0aXZlTWVudShpZCA/IGlkIDogXCJob21lXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGl2ZU1lbnUoXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGFjdGl2ZU1lbnUgPSAoYWN0aXZlKSA9PiB7XHJcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2FuY2hvcl9uYXY+IGxpXCIpO1xyXG4gIGlmIChuYXZJdGVtcykge1xyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgobmF2KSA9PiB7XHJcbiAgICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZSkpIHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhVGFnQ2xpY2sgPSAoKSA9PiB7XHJcbiAgY29uc3QgYVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHJlZj0nIyddXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYVRhZy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgYSA9IGFUYWdbaV07XHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2Nyb2xsXyA9ICgpID0+IHtcclxuICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIua3VyYV90bV9zZWN0aW9uXCIpO1xyXG4gIGNvbnN0IG5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbmNob3JfbmF2IGxpXCIpO1xyXG4gIGxldCBjdXJyZW50ID0gXCJcIjtcclxuICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gc2VjdGlvbi5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAocGFnZVlPZmZzZXQgPj0gc2VjdGlvblRvcCAtIHNlY3Rpb25IZWlnaHQgLyAzKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIG5hdkxpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgIGlmIChsaS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA9PSBgIyR7Y3VycmVudH1gKSB7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiamFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtbGlnaHRib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBpbXBvcnQoXCJzd2lwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gaW1wb3J0KFwic3dpcGVyL3JlYWN0XCIpOzsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJub1NTUiIsImRlZmF1bHQiLCJkeW5hbWljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwic3VzcGVuc2VPcHRpb25zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJGcmFnbWVudCIsIkF1ZGlvIiwiQ29udGFjdCIsIkN1cnNvciIsIkhvbWUiLCJOZXdzIiwiUG9ydGZvbGlvIiwiUHJpY2UiLCJTa2lsbHMiLCJUaW1lbGluZSIsIkZvb3RlciIsIkhlYWRlciIsIlNldHRpbmdzIiwiUGFnZUhlYWQiLCJGZWVkQmFjayIsIlNvY2lhbExpbmtzIiwiVGVzdGltb25pYWwiLCJJbmRleCIsIkhlYWQiLCJwYWdlIiwiUmVhY3QiLCJlbmFibGVCYWNrZ3JvdW5kIiwiTW9kYWwiLCJOZXdzTW9kYWwiLCJvcGVuIiwib25DbG9zZU1vZGFsIiwiaW1nIiwidGl0bGUiLCJkYXRlIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsIkhvbWVNb2RhbCIsInVzZUVmZmVjdCIsImN1c3RvbUN1cnNvciIsInVzZVN0YXRlIiwic2V0T3BlbiIsIm1vZGFsVmFsdWUiLCJzZXRNb2RhbFZhbHVlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImZldGNoVXNlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsInVzZXIiLCJhYm91dCIsImNvbnNvbGUiLCJvbk9wZW5Nb2RhbCIsIm5hbWUiLCJzdWJUaXRsZSIsInF1b3RlIiwiZXhwX3llYXIiLCJhZGRyZXNzIiwicGhvbmVOdW1iZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhdmF0YXIiLCJ1cmwiLCJMaWdodEJveCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwicG9ydGZvbGlvU2xpZGVyIiwiYXhpb3MiLCJzaG93TGlnaHQiLCJzZXRTaG93TGlnaHQiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwidGhlbiIsInN1Y2Nlc3MiLCJjYXRjaCIsInNob3dMaWdodEJveCIsImluZGV4Iiwic3RhcnRJbmRleCIsImhpZGVMaWdodEJveCIsIm1hcCIsInByb2plY3QiLCJpbWFnZSIsInRlY2hTdGFjayIsInNlcnZpY2VzIiwic2V0U2VydmljZXMiLCJzZXJ2aWNlIiwiY2hhcmdlIiwiZGVzYyIsIl9pZCIsImFjdGl2ZVNraWxsUHJvZ3Jlc3MiLCJQYXJhbGxheFZpZGVvIiwic2tpbGxzRGF0YSIsInNldFNraWxsc0RhdGEiLCJza2lsbHMiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2tpbGwiLCJwZXJjZW50YWdlIiwid2lkdGgiLCJzb2NpYWxIYW5kbGVzIiwic2V0U29jaWFsSGFuZGxlcyIsImZldGNoU29jaWFsSGFuZGxlcyIsImdldCIsInNvY2lhbF9oYW5kbGVzIiwicGFkZGluZ0xlZnQiLCJoYW5kbGUiLCJtYXJnaW5MZWZ0IiwicGxhdGZvcm0iLCJuZXdzU2xpZGVyIiwidGVzdGltb25pYWwiLCJzZXRUZXN0aW1vbmlhbCIsInRlc3RpbW9uaWFscyIsInJldmlldyIsInBvc2l0aW9uIiwidGltZWxpbmVEYXRhIiwic2V0VGltZWxpbmVEYXRhIiwidGltZWxpbmUiLCJpdGVtIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1vbnRoIiwieWVhciIsImVuZERhdGUiLCJqb2JUaXRsZSIsImNvbXBhbnlfbmFtZSIsImpvYkxvY2F0aW9uIiwiYnVsbGV0UG9pbnRzIiwicG9pbnQiLCJpIiwiZ2V0RnVsbFllYXIiLCJhdWRpb1NvdW5kQW5kT3BlbiIsIm9wZW5OYXYiLCJzY3JvbGxfIiwic3RpY2t5TmF2IiwiZGFyayIsImlzVG9nZ2xlZCIsInNldFRvZ2dsZWQiLCJ0b2dnbGVUcnVlRmFsc2UiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiY3Vyc29yIiwic2V0Q3Vyc29yIiwiY29sb3JzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNvbG9yIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsIm9uQ2xpY2siLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiU3dpcGVyQ29yZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwidXNlIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiIsInByZXZFbCIsIm5leHRFbCIsImJyZWFrcG9pbnRzIiwia3VyYV90bV9wcmVsb2FkZXIiLCJpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJwcmVsb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJhZGQiLCJyZW1vdmUiLCJ3b3dKc0FuaW1hdGlvbiIsIldPVyIsImluaXQiLCJteUN1cnNvciIsImhhbWJ1cmdlciIsImt1cmFfdG1fdG9wYmFyIiwicG9pbnRlciIsImUiLCJ0IiwibW91c2VFdmVudCIsImVsZW1lbnQiLCJsZW5ndGgiLCJib2R5IiwibiIsIm8iLCJvbm1vdXNlbW92ZSIsInMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNsaWVudFgiLCJjbGllbnRZIiwiYSIsInZpc2liaWxpdHkiLCJrdXJhX3RtX215X2xvYWQiLCJvZmZzZXQiLCJzY3JvbGxZIiwic3RpY2t5cyIsInN0aWNreSIsImF1ZGlvMSIsImF1ZGlvMiIsImhhbWJ1cmdlcnMiLCJjb250YWlucyIsInBsYXkiLCJuYXZJdGVtcyIsIm5hdiIsImJveGVzIiwidHJpZ2dlckJvdHRvbSIsImlubmVySGVpZ2h0IiwiYm94IiwiYm94VG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYWN0aXZlTWVudUJ5U2VjdGlvbiIsImlkIiwiY2hlY2tCb3hlcyIsImFjdGl2ZU1lbnUiLCJhY3RpdmUiLCJhVGFnQ2xpY2siLCJhVGFnIiwicHJldmVudERlZmF1bHQiLCJzZWN0aW9ucyIsIm5hdkxpIiwiY3VycmVudCIsInNlY3Rpb24iLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2VjdGlvbkhlaWdodCIsImNsaWVudEhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiZ2V0QXR0cmlidXRlIiwibGkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=