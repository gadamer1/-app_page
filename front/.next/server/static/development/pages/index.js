module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InputLabelForm.js":
/*!**************************************!*\
  !*** ./components/InputLabelForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/label */ "./reducers/label.js");
var _jsxFileName = "D:\\webdev\\-app_page\\front\\components\\InputLabelForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InputLabelForm = () => {
  const {
    0: lat,
    1: setLat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: lng,
    1: setLng
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const onChangeLat = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setLat(e.target.value);
  }, []);
  const onChangeLng = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setLng(e.target.value);
  }, []);
  const onChangeName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setName(e.target.value);
  }, []);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: _reducers_label__WEBPACK_IMPORTED_MODULE_2__["POST_LABELLIST_REQUEST"],
      data: {
        lat,
        lng,
        name
      }
    });
  }, [lat, lng, name]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "post-lat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "lat"), __jsx("input", {
    value: lat,
    onChange: onChangeLat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "post-lng",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "lng"), __jsx("input", {
    value: lng,
    onChange: onChangeLng,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "post-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "name"), __jsx("input", {
    value: name,
    onChange: onChangeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "\uC81C\uCD9C")));
};

/* harmony default export */ __webpack_exports__["default"] = (InputLabelForm);

/***/ }),

/***/ "./components/Label.js":
/*!*****************************!*\
  !*** ./components/Label.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\webdev\\-app_page\\front\\components\\Label.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Label = ({
  name
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, name));
};

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Label */ "./components/Label.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/label */ "./reducers/label.js");
/* harmony import */ var _components_InputLabelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputLabelForm */ "./components/InputLabelForm.js");
var _jsxFileName = "D:\\webdev\\-app_page\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = () => {
  const {
    labelList
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.label);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  const onLoadLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_label__WEBPACK_IMPORTED_MODULE_4__["LOAD_LABELLIST_REQUEST"]
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "cappit 5\uC8FC\uCC28"), __jsx("div", {
    className: "tap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, labelList.map(v => {
    return __jsx(_components_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: v.name,
      name: v.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    });
  }), __jsx("button", {
    onClick: onLoadLabels,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "getLabels")), __jsx(_components_InputLabelForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("div", {
    style: {
      height: '100vh',
      width: '80%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
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
    __self: undefined
  }, labelList && labelList.map(v => {
    return __jsx("div", {
      lat: v.lat,
      lng: v.lng,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, v.name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/label.js":
/*!***************************!*\
  !*** ./reducers/label.js ***!
  \***************************/
/*! exports provided: initialState, POST_LABELLIST_REQUEST, POST_LABELLIST_SUCCESS, POST_LABELLIST_FAILURE, LOAD_LABELLIST_REQUEST, LOAD_LABELLIST_SUCCESS, LOAD_LABELLIST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LABELLIST_REQUEST", function() { return POST_LABELLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LABELLIST_SUCCESS", function() { return POST_LABELLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LABELLIST_FAILURE", function() { return POST_LABELLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LABELLIST_REQUEST", function() { return LOAD_LABELLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LABELLIST_SUCCESS", function() { return LOAD_LABELLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LABELLIST_FAILURE", function() { return LOAD_LABELLIST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const dummyLabelList = [{
  lat: 59.955413,
  lng: 30.337844,
  name: 'T1'
}];
const initialState = {
  labelList: dummyLabelList,
  loadLabelListErrorReason: '' //LOAD_LABELLIST 에러 이유

};
const POST_LABELLIST_REQUEST = 'POST_LABELLIST_REQUEST';
const POST_LABELLIST_SUCCESS = 'POST_LABELLIST_SUCCESS';
const POST_LABELLIST_FAILURE = 'POST_LABELLIST_FAILURE';
const LOAD_LABELLIST_REQUEST = 'LOAD_LABELLIST_REQUEST';
const LOAD_LABELLIST_SUCCESS = 'LOAD_LABELLIST_SUCCESS';
const LOAD_LABELLIST_FAILURE = 'LOAD_LABELLIST_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_LABELLIST_REQUEST:
        {
          break;
        }

      case LOAD_LABELLIST_SUCCESS:
        {
          draft.labelList = action.data;
        }

      case LOAD_LABELLIST_FAILURE:
        {
          draft.loadLabelListErrorReason = action.error;
          break;
        }

      case POST_LABELLIST_REQUEST:
        {
          break;
        }

      case POST_LABELLIST_SUCCESS:
        {
          break;
        }

      case POST_LABELLIST_FAILURE:
        {
          draft.loadLabelListErrorReason = action.error;
          break;
        }

      default:
        {
          break;
        }
    }
  });
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webdev\-app_page\front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map