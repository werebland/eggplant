webpackHotUpdate("static/development/pages/index.js",{

/***/ "./rebase.js":
/*!*******************!*\
  !*** ./rebase.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-base */ "./node_modules/re-base/index.js");
/* harmony import */ var re_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp({
    apiKey: "AIzaSyCWP9oQmSJaPRn4iMH5CMn8KnluP4syT3Q",
    authDomain: "bland-eggplant.firebaseapp.com",
    databaseURL: "https://bland-eggplant.firebaseio.com",
    projectId: "bland-eggplant",
    storageBucket: "bland-eggplant.appspot.com",
    messagingSenderId: "467287021540"
  });
} else {
  var app = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a;
}

var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore(app);
var base = re_base__WEBPACK_IMPORTED_MODULE_0___default.a.createClass(db);
/* harmony default export */ __webpack_exports__["default"] = (base);

/***/ })

})
//# sourceMappingURL=index.js.1277a5b2c37a685102cf.hot-update.js.map