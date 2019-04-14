webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var geolocation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! geolocation-utils */ "./node_modules/geolocation-utils/lib/index.js");
/* harmony import */ var geolocation_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(geolocation_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _rebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rebase */ "./rebase.js");
/* harmony import */ var _components_ProfileFeed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ProfileFeed */ "./components/ProfileFeed.jsx");
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AppBar */ "./components/AppBar.jsx");
/* harmony import */ var _components_Splash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Splash */ "./components/Splash.jsx");





var _jsxFileName = "/Users/Chris/eggplant/pages/index.js";











var AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "pages__AppWrapper",
  componentId: "sc-1wbo52z-0"
})(["font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;"]);
var provider = new firebase__WEBPACK_IMPORTED_MODULE_10___default.a.auth.FacebookAuthProvider();
provider.addScope('user_birthday');
provider.addScope('default');
provider.addScope('user_gender');

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      profiles: [],
      user: {},
      isAuthed: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          this.loadProfiles(position.coords.latitude, position.coords.longitude);
        }.bind(this));
      } else {
        alert('location disabled');
      }
    }
  }, {
    key: "loadProfiles",
    value: function loadProfiles(lat, lng) {
      var userLocation = {
        lat: lat,
        lng: lng
      };
      var data = [{
        id: '23sdfa4qgsfd',
        name: 'Emma',
        age: 22,
        lat: 44.703664811708066,
        lng: -63.5526466369629,
        photos: ["https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"]
      }, {
        id: '243tregdfgwsd',
        name: 'Fiona',
        age: 20,
        lat: 44.689323988750424,
        lng: -63.56305193156005,
        photos: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"]
      }, {
        id: '46756edhgfgh4',
        name: 'Kelly',
        age: 26,
        lat: 44.689323988750424,
        lng: -63.56305193156005,
        photos: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"]
      }];
      var profiles = [];

      lodash__WEBPACK_IMPORTED_MODULE_9___default.a.forEach(data, function (value) {
        var location = {
          lat: value.lat,
          lng: value.lng
        };
        console.log(location);
        var profile = {
          id: value.id,
          name: value.name,
          age: value.age,
          photos: value.photos,
          distance: Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_8__["distanceTo"])(userLocation, location)
        };
        profiles.push(profile);
      });

      if (profiles.length === data.length) {
        this.setState({
          profiles: profiles
        });
      }
    }
  }, {
    key: "handleLike",
    value: function handleLike(id, index) {
      var profiles = this.state.profiles;
      profiles.splice(index, 1);
      console.log(profiles);
      this.setState({
        profiles: profiles
      });
    }
  }, {
    key: "handleAuth",
    value: function handleAuth() {
      firebase__WEBPACK_IMPORTED_MODULE_10___default.a.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken; // The signed-in user info.

        var user = result.user;
        console.log(user); // ...
      }).catch(function (error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message; // The email of the user's account used.

        var email = error.email; // The firebase.auth.AuthCredential type that was used.

        var credential = error.credential; // ...
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AppWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, this.state.isAuthed ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ProfileFeed__WEBPACK_IMPORTED_MODULE_13__["default"], {
        profiles: this.state.profiles,
        handleLike: function handleLike(id, index) {
          return _this2.handleLike(id, index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Splash__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handleAuth: function handleAuth() {
          return _this2.handleAuth();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.624937e2048a04df8712.hot-update.js.map