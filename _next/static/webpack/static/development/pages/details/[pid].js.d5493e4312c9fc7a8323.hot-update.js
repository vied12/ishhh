webpackHotUpdate("static/development/pages/details/[pid].js",{

/***/ "./components/Details.js":
/*!*******************************!*\
  !*** ./components/Details.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Galery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Galery */ "./components/Galery.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _images_ishhh_NB_MD_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/ishhh-NB-MD.png */ "./images/ishhh-NB-MD.png");
/* harmony import */ var _images_ishhh_NB_MD_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_ishhh_NB_MD_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Selector */ "./components/Selector.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);










var _jsxFileName = "/home/edouard/work/ishhh/components/Details.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;













var REGIONS = {
  Germany: 5,
  Europe: 7,
  World: 9
};

var styles = function styles(theme) {
  var _image;

  return {
    root: {
      textAlign: 'center'
    },
    logoContainer: {
      marginTop: 40,
      marginBottom: 100,
      display: 'inline-block'
    },
    logo: {
      maxWidth: '70%',
      maxHeight: 200
    },
    images: {
      margin: [[70, 0]]
    },
    image: (_image = {
      display: 'inline-block',
      width: '40%',
      maxWidth: 600,
      boxShadow: '0 0 1px rgba(0, 0, 0, .4)',
      margin: 20,
      position: 'relative'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_image, theme.breakpoints.down('sm'), {
      width: '100%',
      margin: 0,
      marginBottom: 40
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_image, '& img', {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_image, '&:after', {
      content: '""',
      display: 'block',
      paddingBottom: '100%'
    }), _image),
    title: {
      marginTop: 40,
      marginBottom: 40
    },
    cgv: {
      textAlign: 'left',
      maxWidth: 600,
      margin: 'auto',
      padding: 20,
      marginTop: 60,
      '& h2': {
        fontSize: '.9rem'
      },
      '& p': {
        fontSize: '.9rem'
      }
    }
  };
};

var Details =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Details, _Component);

  function Details() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Details);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Details)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      item: null,
      error: false,
      chosenSize: '',
      chosenRegion: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleToken", function (token) {
      var item = _this.props.item;
      var chosenSize = _this.state.chosenSize;
      fetch('https://wt-d7f3465bba4be50c0e0805107a2dddb9-0.sandbox.auth0-extend.com/stripe-payment/payment', {
        method: 'POST',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
          stripeToken: token.id,
          amount: (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(item.price, 10) + _this.getShippingPrice()) * 100,
          currency: 'EUR',
          description: "".concat(item.name, " ").concat(chosenSize)
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (d) {
        if (d.ok) {
          next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push('/payment-successful');
        } else {
          d.text().then(function (text) {
            _this.setState({
              error: text
            });
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getShippingPrice", function () {
      return REGIONS[_this.state.chosenRegion];
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Details, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          item = _this$props.item;
      var _this$state = this.state,
          chosenSize = _this$state.chosenSize,
          chosenRegion = _this$state.chosenRegion,
          error = _this$state.error;

      if (!item) {
        return null;
      }

      var shippingPrice = this.getShippingPrice();
      return __jsx("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "/",
        className: classes.logoContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("img", {
        src: _images_ishhh_NB_MD_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "ISHHH",
        className: classes.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), !!error && __jsx("div", {
        style: {
          margin: 80
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h2",
        color: "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Sorry, an error occured."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, error), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Please try again,", ' ', __jsx("a", {
        href: "https://m.me/ishhhliebedich",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "or contact us"))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h5",
        className: classes.title,
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, item.name), __jsx("div", {
        className: classes.images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("div", {
        className: classes.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("img", {
        src: item.detail || item.front,
        alt: "front",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })), __jsx("div", {
        className: classes.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("img", {
        src: item.back,
        alt: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Buy online"), item.description && item.description.split('\n').map(function (s, i) {
        return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: i,
          gutterBottom: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, s);
      }), __jsx(_Selector__WEBPACK_IMPORTED_MODULE_19__["default"], {
        value: chosenSize,
        label: "Sizes",
        onChange: function onChange(s) {
          return _this2.setState({
            chosenSize: s
          });
        },
        choices: item.sizes || [],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), __jsx(_Selector__WEBPACK_IMPORTED_MODULE_19__["default"], {
        value: chosenRegion,
        label: "Region",
        onChange: function onChange(s) {
          return _this2.setState({
            chosenRegion: s
          });
        },
        choices: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(REGIONS),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_18___default.a, {
        stripeKey: process.env.REACT_APP_STRIPE_KEY,
        token: this.handleToken,
        currency: "EUR",
        amount: (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(item.price, 10) + shippingPrice) * 100,
        name: "ISHHH",
        locale: "auto",
        billingAddress: false,
        shippingAddress: true // bitcoin
        ,
        disabled: !chosenSize || !chosenRegion,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "contained",
        color: "primary",
        size: "large",
        style: {
          margin: 40
        },
        disabled: !chosenSize || !chosenRegion,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Order now")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, item.price, " \u20AC"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Shipping:", ' ', shippingPrice ? "+ ".concat(shippingPrice, " \u20AC") : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Select a region first")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "caption",
        style: {
          padding: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "We do not store your credit card information.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), "We instead rely on the secure third-party payment processor Stripe.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }), "You may also want to read Stripe's privacy policy:", ' ', __jsx("a", {
        href: "https://stripe.com/us/privacy",
        target: "_blank",
        rel: "nofollow noreferrer noopener",
        style: {
          color: 'black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "https://stripe.com/us/privacy")), __jsx("div", {
        className: classes.cgv,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Processing time"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "1-3 business days"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Estimated shipping times"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Europe: 3-6 business days", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), "I'll do my best to meet these shipping estimates, but can't guarantee them."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Customs and import taxes"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Buyers are responsible for any customs and import taxes that may apply. I'm not responsible for delays due to customs."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "I accept returns, exchanges and cancellations"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Contact me within: 24 hours of delivery", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), "Ship items back within: 7 days of delivery", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }), "Request a cancellation within: 12 hours of purchase"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Conditions of return"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Buyers are responsible for return shipping costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        variant: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Questions about your order?"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Please", ' ', __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        color: "primary",
        target: "_blank",
        size: "small",
        rel: "nofollow noreferrer noopener",
        href: "https://m.me/ishhhliebedich",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Contact Me"), ' ', "if you have any problems with your order.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h4",
        gutterBottom: true,
        style: {
          marginTop: 200
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Others clothes available"), __jsx(_Galery__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }));
    }
  }]);

  return Details;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_21___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(function (state, _ref) {
  var itemId = _ref.itemId;
  return {
    item: state.inventory.data.find(function (d) {
      return d.key === itemId;
    })
  };
}))(Details));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[pid].js.d5493e4312c9fc7a8323.hot-update.js.map