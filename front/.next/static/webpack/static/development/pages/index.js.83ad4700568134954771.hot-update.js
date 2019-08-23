webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var dummyLabelList = [{
  lat: 59.955413,
  lng: 30.337844,
  name: 'T1'
}];
var initialState = {
  labelList: dummyLabelList,
  loadLabelListErrorReason: '' //LOAD_LABELLIST 에러 이유

};
var POST_LABELLIST_REQUEST = 'POST_LABELLIST_REQUEST';
var POST_LABELLIST_SUCCESS = 'POST_LABELLIST_SUCCESS';
var POST_LABELLIST_FAILURE = 'POST_LABELLIST_FAILURE';
var LOAD_LABELLIST_REQUEST = 'LOAD_LABELLIST_REQUEST';
var LOAD_LABELLIST_SUCCESS = 'LOAD_LABELLIST_SUCCESS';
var LOAD_LABELLIST_FAILURE = 'LOAD_LABELLIST_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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

/***/ })

})
//# sourceMappingURL=index.js.83ad4700568134954771.hot-update.js.map