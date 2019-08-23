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
      console.log(lat, lng, name);
      return alert('모두 입력해주세요', lat, lng, name);
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
      lineNumber: 39
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "post-lat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "lat"), __jsx("input", {
    value: lat,
    onChange: onChangeLat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "post-lng",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "lng"), __jsx("input", {
    value: lng,
    onChange: onChangeLng,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "post-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "name"), __jsx("input", {
    value: name,
    onChange: onChangeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\uC81C\uCD9C")));
};

/* harmony default export */ __webpack_exports__["default"] = (InputLabelForm);

/***/ })

})
//# sourceMappingURL=index.js.5f900324b930fc8147b5.hot-update.js.map