webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/InputLabelForm.js":
/*!**************************************!*\
  !*** ./components/InputLabelForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/label */ "./reducers/label.js");
var _jsxFileName = "D:\\webdev\\-app_page\\front\\components\\InputLabelForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var InputLabelForm = function InputLabelForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lat = _useState[0],
      setLat = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lng = _useState2[0],
      setLng = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState3[0],
      setName = _useState3[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var onChangeLat = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setLat(e.target.value);
  }, []);
  var onChangeLng = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setLng(e.target.value);
  }, []);
  var onChangeName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setName(e.target.value);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!lat || !lng || !name) {
      return alert('모두 입력해주세요');
    }

    dispatch({
      type: _reducers_label__WEBPACK_IMPORTED_MODULE_2__["POST_LABELLIST_REQUEST"],
      data: {
        lat: lat,
        lng: lng,
        name: name
      }
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "post-lat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "lat"), __jsx("input", {
    value: lat,
    onChange: onChangeLat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "post-lng",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "lng"), __jsx("input", {
    value: lng,
    onChange: onChangeLng,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "post-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "name"), __jsx("input", {
    value: name,
    onChange: onChangeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\uC81C\uCD9C")));
};

/* harmony default export */ __webpack_exports__["default"] = (InputLabelForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Label */ "./components/Label.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/label */ "./reducers/label.js");
/* harmony import */ var _components_InputLabelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputLabelForm */ "./components/InputLabelForm.js");
var _jsxFileName = "D:\\webdev\\-app_page\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Home = function Home() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.label;
  }),
      labelList = _useSelector.labelList;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  var onLoadLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_label__WEBPACK_IMPORTED_MODULE_4__["LOAD_LABELLIST_REQUEST"]
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "cappit 5\uC8FC\uCC28"), __jsx("div", {
    className: "tap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, labelList.map(function (v) {
    return __jsx(_components_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: v.name,
      name: v.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }), __jsx("button", {
    onClick: onLoadLabels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "getLabels")), __jsx(_components_InputLabelForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    style: {
      height: '100vh',
      width: '80%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyBzSezxBpG3ITijfS-4QxHPDkcxF6C-STA"
    },
    defaultCenter: defaultProps.center,
    defaultZoom: defaultProps.zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, labelList && labelList.map(function (v) {
    return __jsx("div", {
      lat: v.lat,
      lng: v.lng,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, v.name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.69f2eddc15f917609503.hot-update.js.map