"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SocialLinks.js":
/*!***************************************!*\
  !*** ./src/components/SocialLinks.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Acer_Desktop_kura_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Acer_Desktop_kura_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Acer_Desktop_kura_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Acer_Desktop_kura_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Acer\\Desktop\\kura\\src\\components\\SocialLinks.js",
    _this = undefined,
    _s = $RefreshSig$();



 // Import Axios for making HTTP requests



var SocialLinks = function SocialLinks() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      socialHandles = _useState[0],
      setSocialHandles = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var fetchSocialHandles = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Acer_Desktop_kura_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Acer_Desktop_kura_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var response;
        return C_Users_Acer_Desktop_kura_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4__.default.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");

              case 3:
                response = _context.sent;
                setSocialHandles(response.data.user.social_handles);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error("Error fetching social handles:", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchSocialHandles() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchSocialHandles();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "social-links-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        style: {
          paddingLeft: '204px'
        },
        children: "Social Links"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), socialHandles && socialHandles.map(function (handle, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: handle.url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
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
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(SocialLinks, "Yc9qn9p2HznRICJLDaKDtgUgYrg=");

_c = SocialLinks;
/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

var _c;

$RefreshReg$(_c, "SocialLinks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzI1ZjcyZjQ2OWFhM2FmNTIxZDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQzJCOzs7O0FBRTNCLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsa0JBQTBDSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPSSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUssa0JBQWtCO0FBQUEsdVFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVBSiw4Q0FBQSxDQUFVLHNGQUFWLENBRkE7O0FBQUE7QUFFakJNLGdCQUFBQSxRQUZpQjtBQUd2QkgsZ0JBQUFBLGdCQUFnQixDQUFDRyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkMsY0FBcEIsQ0FBaEI7QUFIdUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLdkJDLGdCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxnQ0FBZDs7QUFMdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBbEJQLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxPQUF4Qjs7QUFTQUEsSUFBQUEsa0JBQWtCO0FBQ25CLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0U7QUFBSSxhQUFLLEVBQUU7QUFBQ1EsVUFBQUEsV0FBVyxFQUFDO0FBQWIsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdWLGFBQWEsSUFBSUEsYUFBYSxDQUFDVyxHQUFkLENBQWtCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDRCQUNsQztBQUFlLGNBQUksRUFBRUQsTUFBTSxDQUFDRSxHQUE1QjtBQUFpQyxnQkFBTSxFQUFDLFFBQXhDO0FBQWlELGFBQUcsRUFBQyxxQkFBckQ7QUFBQSxpQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFBQ0MsY0FBQUEsS0FBSyxFQUFDLEtBQVA7QUFBYUMsY0FBQUEsVUFBVSxFQUFDO0FBQXhCLGFBQVo7QUFBOEMsZUFBRyxFQUFFSixNQUFNLENBQUNLLEtBQVAsQ0FBYUgsR0FBaEU7QUFBcUUsZUFBRyxFQUFFRixNQUFNLENBQUNNO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFRTCxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtDO0FBQUEsT0FBbEIsQ0FGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0E1QkQ7O0dBQU1kOztLQUFBQTtBQThCTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiOyAvLyBJbXBvcnQgQXhpb3MgZm9yIG1ha2luZyBIVFRQIHJlcXVlc3RzXHJcblxyXG5jb25zdCBTb2NpYWxMaW5rcyA9ICgpID0+IHtcclxuICBjb25zdCBbc29jaWFsSGFuZGxlcywgc2V0U29jaWFsSGFuZGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFNvY2lhbEhhbmRsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3BvcnRmb2xpby1iYWNrZW5kLTMwbXAub25yZW5kZXIuY29tL2FwaS92MS9nZXQvdXNlci82NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIik7XHJcbiAgICAgICAgc2V0U29jaWFsSGFuZGxlcyhyZXNwb25zZS5kYXRhLnVzZXIuc29jaWFsX2hhbmRsZXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzb2NpYWwgaGFuZGxlczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoU29jaWFsSGFuZGxlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgzIHN0eWxlPXt7cGFkZGluZ0xlZnQ6JzIwNHB4J319PlNvY2lhbCBMaW5rczwvaDM+XHJcbiAgICAgICAge3NvY2lhbEhhbmRsZXMgJiYgc29jaWFsSGFuZGxlcy5tYXAoKGhhbmRsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxhIGtleT17aW5kZXh9IGhyZWY9e2hhbmRsZS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMCUnLG1hcmdpbkxlZnQ6JzM2OXB4J319IHNyYz17aGFuZGxlLmltYWdlLnVybH0gYWx0PXtoYW5kbGUucGxhdGZvcm19IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlNvY2lhbExpbmtzIiwic29jaWFsSGFuZGxlcyIsInNldFNvY2lhbEhhbmRsZXMiLCJmZXRjaFNvY2lhbEhhbmRsZXMiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwic29jaWFsX2hhbmRsZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImhhbmRsZSIsImluZGV4IiwidXJsIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiaW1hZ2UiLCJwbGF0Zm9ybSJdLCJzb3VyY2VSb290IjoiIn0=