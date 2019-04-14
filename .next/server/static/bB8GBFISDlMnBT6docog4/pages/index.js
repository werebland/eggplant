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
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "Hwqr":
/***/ (function(module, exports) {

module.exports = require("re-base");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "R18i":
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-pose"
var external_react_pose_ = __webpack_require__("R18i");

// EXTERNAL MODULE: external "geolocation-utils"
var external_geolocation_utils_ = __webpack_require__("oOc3");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// EXTERNAL MODULE: external "re-base"
var external_re_base_ = __webpack_require__("Hwqr");
var external_re_base_default = /*#__PURE__*/__webpack_require__.n(external_re_base_);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// CONCATENATED MODULE: ./rebase.js




if (!app_default.a.apps.length) {
  var app = app_default.a.initializeApp({
    apiKey: process.env.FIREBASE_API,
    authDomain: "bland-eggplant.firebaseapp.com",
    databaseURL: "https://bland-eggplant.firebaseio.com",
    projectId: "bland-eggplant",
    storageBucket: "bland-eggplant.appspot.com",
    messagingSenderId: "467287021540"
  });
} else {
  var app = app_default.a;
}

var db = app_default.a.firestore(app);
var base = external_re_base_default.a.createClass(db);
/* harmony default export */ var rebase = (base);
// CONCATENATED MODULE: ./components/ProfileCard.jsx








var profileCardPose = {
  enter: {
    opacity: 1,
    y: 0,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 64
  },
  preEnter: {
    opacity: 0,
    y: 32
  }
};
var ProfileCardContainer = external_styled_components_default.a.article.withConfig({
  displayName: "ProfileCard__ProfileCardContainer",
  componentId: "sc-1hs62zf-0"
})(["width:100%;max-width:375px;height:274px;border-radius:8px;border:2px solid #fff;box-sizing:border-box;display:inline-flex;flex-flow:column nowrap;justify-content:space-between;overflow:hidden;box-shadow:0 2px 16px -2px rgba(159,159,159,0.50);background-image:url(", ");background-size:cover;background-position:center;font-family:sans-serif;margin-bottom:16px;position:relative;"], function (props) {
  return props.image;
});
var ProfileCardPhotoIndicators = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__ProfileCardPhotoIndicators",
  componentId: "sc-1hs62zf-1"
})(["display:flex;flex-flow:row nowrap;align-items:center;padding:4px 16px;box-sizing:border-box;position:relative;z-index:8;"]);
var ProfileCardPhotoIndicator = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__ProfileCardPhotoIndicator",
  componentId: "sc-1hs62zf-2"
})(["height:2px;display:flex;flex:1;border-radius:8px;background:#fff;opacity:", ";margin-right:6px;cursor:pointer;&:last-of-type{margin-right:0;}"], function (props) {
  return props.active ? '1' : '.42';
});
var ProfileCardPhotoNavigator = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__ProfileCardPhotoNavigator",
  componentId: "sc-1hs62zf-3"
})(["position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;display:flex;flex-flow:row nowrap;& div{height:100%;flex:1;}"]);
var ProfileCardLower = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__ProfileCardLower",
  componentId: "sc-1hs62zf-4"
})(["width:100%;height:92px;background-image:linear-gradient(-180deg,rgba(0,0,0,0.00) 0%,rgba(47,47,47,0.42) 100%);display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;position:relative;z-index:8;"]);
var ProfileCardDetails = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__ProfileCardDetails",
  componentId: "sc-1hs62zf-5"
})(["flex-flow:column nowrap;"]);
var ProfileCardTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "ProfileCard__ProfileCardTitle",
  componentId: "sc-1hs62zf-6"
})(["font-size:1.5rem;font-weight:500;color:#fff;margin:0;& strong{font-weight:700;margin-right:4px;}"]);
var ProfileCardSubtitle = external_styled_components_default.a.h5.withConfig({
  displayName: "ProfileCard__ProfileCardSubtitle",
  componentId: "sc-1hs62zf-7"
})(["font-size:1.25rem;font-weight:500;color:#fff;margin:0;"]);
var ProfileCardButton = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__ProfileCardButton",
  componentId: "sc-1hs62zf-8"
})(["width:56px;height:56px;border-radius:50%;background:#fff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;& svg{fill:#f94343;transform:scale(1.33)}"]);

var ProfileCard_ProfileCard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ProfileCard, _Component);

  function ProfileCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ProfileCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ProfileCard).call(this, props));
    _this.state = {
      activePhoto: 0,
      isLiking: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ProfileCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          profile = _this$props.profile,
          handleLike = _this$props.handleLike,
          index = _this$props.index;
      return external_react_default.a.createElement(ProfileCardContainer, {
        image: profile.photos[this.state.activePhoto]
      }, external_react_default.a.createElement(ProfileCardPhotoIndicators, null, profile.photos.map(function (photo, i) {
        return external_react_default.a.createElement(ProfileCardPhotoIndicator, {
          key: i,
          active: _this2.state.activePhoto === i,
          onClick: function onClick() {
            return _this2.setState({
              activePhoto: i
            });
          }
        });
      })), external_react_default.a.createElement(ProfileCardLower, null, external_react_default.a.createElement(ProfileCardDetails, null, external_react_default.a.createElement(ProfileCardTitle, null, external_react_default.a.createElement("strong", null, profile.name), profile.age), external_react_default.a.createElement(ProfileCardSubtitle, null, _.round(profile.distance / 1000, 1), "km")), external_react_default.a.createElement(ProfileCardButton, {
        onClick: function onClick() {
          return handleLike(profile.id, index);
        }
      }, this.state.isLiking ? external_react_default.a.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, external_react_default.a.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }), external_react_default.a.createElement("path", {
        d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
      })) : external_react_default.a.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, external_react_default.a.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }), external_react_default.a.createElement("path", {
        d: "M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
      })))), external_react_default.a.createElement(ProfileCardPhotoNavigator, null, external_react_default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.state.activePhoto > 0 && _this2.setState({
            activePhoto: _this2.state.activePhoto - 1
          });
        }
      }), external_react_default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.state.activePhoto !== profile.photos.length - 1 && _this2.setState({
            activePhoto: _this2.state.activePhoto + 1
          });
        }
      })));
    }
  }]);

  return ProfileCard;
}(external_react_["Component"]);

/* harmony default export */ var components_ProfileCard = (ProfileCard_ProfileCard);
// CONCATENATED MODULE: ./components/ProfileFeed.jsx




var profileFeedPose = {
  enter: {
    opacity: 1,
    staggerChildren: 300
  },
  exit: {
    opacity: 0
  }
};
var ProfileFeedWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileFeed__ProfileFeedWrapper",
  componentId: "sc-1b1xbtc-0"
})(["display:flex;flex-flow:column nowrap;padding:0 16px;box-sizing:border-box;"]);

var ProfileFeed_ProfileFeed = function ProfileFeed(_ref) {
  var profiles = _ref.profiles,
      _handleLike = _ref.handleLike;
  return external_react_default.a.createElement(ProfileFeedWrapper, null, profiles.length > 0 ? external_react_default.a.createElement("div", null, profiles.map(function (profile, i) {
    return external_react_default.a.createElement(components_ProfileCard, {
      profile: profile,
      index: i,
      key: profile.id,
      handleLike: function handleLike(id, i) {
        return _handleLike(id, i);
      }
    });
  })) : external_react_default.a.createElement("div", null, "loading..."));
};

/* harmony default export */ var components_ProfileFeed = (ProfileFeed_ProfileFeed);
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}
// CONCATENATED MODULE: ./components/AppBar.jsx



var AppBarContainer = external_styled_components_default.a.div.withConfig({
  displayName: "AppBar__AppBarContainer",
  componentId: "sc-1vu77ax-0"
})(["width:100%;height:72px;padding:16px;box-sizing:border-box;display:flex;justify-content:center;align-items:center;position:relative;text-align:center;font-size:1.25rem;font-weight:700;color:#2f2f2f;"]);
var ProfilePhoto = external_styled_components_default.a.div.withConfig({
  displayName: "AppBar__ProfilePhoto",
  componentId: "sc-1vu77ax-1"
})(["width:40px;height:40px;border-radius:50%;border:1px solid #fff;display:inline-flex;background-image:url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);background-size:cover;background-position:center;position:absolute;left:16px;top:16px;"]);

var AppBar_AppBar = function AppBar(_ref) {
  _objectDestructuringEmpty(_ref);

  return external_react_default.a.createElement(AppBarContainer, null, external_react_default.a.createElement(ProfilePhoto, null), "Discover");
};

/* harmony default export */ var components_AppBar = (AppBar_AppBar);
// CONCATENATED MODULE: ./components/Splash.jsx


var SplashContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Splash__SplashContainer",
  componentId: "sc-1e94rkw-0"
})(["width:100vw;height:100vh;background-image:linear-gradient(-42deg,#845EC2 0%,#C493FF 100%);color:#fff;"]);

var Splash_Splash = function Splash(_ref) {
  var handleAuth = _ref.handleAuth;
  return external_react_default.a.createElement(SplashContainer, null, "Welcome to", external_react_default.a.createElement("br", null), "Instant Connections", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
    onClick: function onClick() {
      return handleAuth();
    }
  }, "Log in with Facebook"));
};

/* harmony default export */ var components_Splash = (Splash_Splash);
// CONCATENATED MODULE: ./pages/index.js
















var AppWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pages__AppWrapper",
  componentId: "sc-1wbo52z-0"
})(["font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;"]);
var provider = new external_firebase_default.a.auth.FacebookAuthProvider();
provider.addScope('user_birthday');
provider.addScope('default');
provider.addScope('user_gender');

var pages_Index =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Index, _Component);

  function Index(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Index);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Index).call(this, props));
    _this.state = {
      profiles: [],
      user: {},
      isAuthed: true
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Index, [{
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

      external_lodash_default.a.forEach(data, function (value) {
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
          distance: Object(external_geolocation_utils_["distanceTo"])(userLocation, location)
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
      external_firebase_default.a.auth().signInWithPopup(provider).then(function (result) {
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

      return external_react_default.a.createElement(AppWrapper, null, this.state.isAuthed ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_AppBar, null), external_react_default.a.createElement(components_ProfileFeed, {
        profiles: this.state.profiles,
        handleLike: function handleLike(id, index) {
          return _this2.handleLike(id, index);
        }
      })) : external_react_default.a.createElement(components_Splash, {
        handleAuth: function handleAuth() {
          return _this2.handleAuth();
        }
      }));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oOc3":
/***/ (function(module, exports) {

module.exports = require("geolocation-utils");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });