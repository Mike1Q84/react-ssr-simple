/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD_URL_SUCCESS = exports.LOAD_URL_SUCCESS = 'LOAD_URL_SUCCESS';
var LOAD_URL_FAILURE = exports.LOAD_URL_FAILURE = 'LOAD_URL_FAILURE';

var LOAD_LANG_SUCCESS = exports.LOAD_LANG_SUCCESS = 'LOAD_LANG_SUCCESS';
var LOAD_LANG_FAILURE = exports.LOAD_LANG_FAILURE = 'LOAD_LANG_FAILURE';
var LOAD_LANGUAGES_SUCCESS = exports.LOAD_LANGUAGES_SUCCESS = 'LOAD_LANGUAGES_SUCCESS';

var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  url: '/en-AU/404',
  noLang: false,
  lang: {},
  languages: []
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _redis = __webpack_require__(10);

var _redis2 = _interopRequireDefault(_redis);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(3);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(5);

var _configureStore = __webpack_require__(23);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _serializeJavascript = __webpack_require__(29);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import languageApi from '../api/mockLanguageApi';

/* eslint-disable no-console */

var NODE_PORT = 3000;
// const REDIS_PORT = 6379;
var app = (0, _express2.default)();
var client = _redis2.default.createClient({
  host: 'redis' // ECONNREFUSED https://github.com/docker-library/redis/issues/45
});

app.use(_express2.default.static('dist'));

function initAllLangActions(lang) {
  return function (dispatch) {
    return Promise.all([dispatch(_App2.default.initLang(lang)), dispatch(_App2.default.initLanguages())]);
  };
}

function renderMarkup(url, store) {
  var initialData = store.getState();
  var newUrl = url;
  var context = {};

  var rendered = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: newUrl, context: context },
      _react2.default.createElement(_App2.default, null)
    )
  ));

  var markup = '<!DOCTYPE html>\n  <head>\n    <title>React SSR Simple</title>\n    <link rel="stylesheet" href="/css/main.css">\n    <script src="/bundle.js" defer></script>\n    <script>window.__initialData__ = ' + (0, _serializeJavascript2.default)(initialData) + '</script>\n  </head>\n  <body>\n    <div id="root">' + rendered + '</div>\n  </body>\n</html>';

  return { newUrl: newUrl, markup: markup };
}

var languages = [{ id: 'en-AU', name: 'English(AU)' }, { id: 'zh-CN', name: '中文（简体）' }];

var routes = [{ route: 'home', hasChildren: false }, { route: '404', hasChildren: false }, { route: 'about', hasChildren: false }];

// Process requests before hitting ssr React and cache
app.use(function (req, res, next) {
  var defaultLang = 'en-AU';

  if (req.url.search('//') !== -1) {
    req.url = '/' + defaultLang + '/404';
  }
  if (req.url.slice(-1) === '/') {
    req.url = req.url.slice(0, -1);
  }
  var reqLang = req.url.split('/')[1];
  var reqRoute = req.url.split('/')[2];
  var reqRestTokens = req.url.split('/').slice(3);
  var reqRest = reqRestTokens.join('/');

  if (!reqLang || !languages.find(function (language) {
    return language.id === reqLang;
  })) {
    reqLang = defaultLang;
  }
  if (!reqRoute) {
    reqRoute = 'home';
  }
  var matchedRoute = routes.find(function (route) {
    return route.route === reqRoute;
  });

  if (matchedRoute) {
    if (reqRoute.hasChildren) {
      // console.log('200 Pass Route with Children');
      req.url = '/' + reqLang + '/' + reqRoute + '/' + reqRest;
    } else {
      if (!reqRest) {
        // console.log('200 Pass Route without Children');
        req.url = '/' + reqLang + '/' + reqRoute;
      } else {
        // console.log('404 Extra Routes');
        req.url = '/' + reqLang + '/404';
      }
    }
  } else {
    // console.log('404 No Matched Routes');
    req.url = '/' + reqLang + '/404';
  }

  next();
});

app.get('*', function (req, res) {
  var url = req.url;
  var lang = url.split('/')[1];
  var store = (0, _configureStore2.default)();
  store.dispatch(_App2.default.initUrl(url));

  client.get(url, function (err, data) {
    // redis client
    if (err) throw err;

    if (data != null) {
      // check available cache in redis first
      res.send(data);
    } else {
      // server-side rendering through React's renderToString
      store.dispatch(initAllLangActions(lang)).then(function () {
        var _renderMarkup = renderMarkup(url, store),
            newUrl = _renderMarkup.newUrl,
            markup = _renderMarkup.markup;

        res.send(markup); // send ssr markup result to browser
        client.set(newUrl, markup); // store ssr markup result in redis cache
      });
    } // server-side rendering through React's renderToString
  }); // redis client
});

if (!module.parent) {
  // Make sure test DOES NOT listen port 3000 THE SECOND TIME
  app.listen(process.env.PORT || NODE_PORT, function () {
    console.log('Server is listening on port: ' + NODE_PORT);
  });
}

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

var _routes = __webpack_require__(15);

var _routes2 = _interopRequireDefault(_routes);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _urlActions = __webpack_require__(37);

var _languageActions = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Change client-side url to match node processed server-side url
      this.props.history.push(this.props.url);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.languages) {
        this.props.dispatch(App.initLanguages());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_Header2.default, { lang: this.props.lang, languages: this.props.languages }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (route, i) {
            return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
          })
        ),
        _react2.default.createElement(_Footer2.default, { lang: this.props.lang })
      );
    }
  }], [{
    key: 'initUrl',
    value: function initUrl(url) {
      return (0, _urlActions.loadUrl)(url);
    }
  }, {
    key: 'initLang',
    value: function initLang(lang) {
      return (0, _languageActions.loadLang)(lang);
    }
  }, {
    key: 'initLanguages',
    value: function initLanguages() {
      return (0, _languageActions.loadLanguages)();
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  url: _propTypes2.default.string.isRequired,
  history: _propTypes2.default.object.isRequired,
  noLang: _propTypes2.default.bool.isRequired,
  lang: _propTypes2.default.object.isRequired,
  languages: _propTypes2.default.array.isRequired,
  dispatch: _propTypes2.default.func.isRequired
};

function mapStateToProps(state) {
  return {
    url: state.url,
    noLang: state.noLang,
    lang: state.lang,
    languages: state.languages
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lang = __webpack_require__(31);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var lang = _ref.lang,
      languages = _ref.languages;

  return _react2.default.createElement(
    'div',
    { className: 'header' },
    _react2.default.createElement(
      'h1',
      { className: 'header__title' },
      _lang2.default[lang.id].name
    ),
    _react2.default.createElement(
      'p',
      { className: 'header__lang' },
      _lang2.default[lang.id].lang,
      ': ',
      lang.name
    ),
    _react2.default.createElement(
      'ul',
      { className: 'lang-list' },
      languages.map(function (language) {
        return _react2.default.createElement(
          'li',
          { className: 'lang-list__item', key: language.id },
          language.name
        );
      })
    )
  );
};

Header.propTypes = {
  lang: _propTypes2.default.object.isRequired,
  languages: _propTypes2.default.array.isRequired
};

exports.default = Header;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lang = __webpack_require__(30);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var lang = _ref.lang;

  return _react2.default.createElement(
    'div',
    { className: 'footer' },
    _react2.default.createElement(
      'h1',
      { className: 'footer__title' },
      _lang2.default[lang.id].name
    )
  );
};

Footer.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

exports.default = Footer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomePage = __webpack_require__(16);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(18);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _NotFoundPage = __webpack_require__(19);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ path: "/", component: _HomePage2.default, exact: true }, { path: "/:lang/", component: _HomePage2.default, exact: true }, { path: "/:lang/home", component: _HomePage2.default, exact: true }, { path: "/:lang/about", component: _AboutPage2.default, exact: true }, { path: "/:lang/404", component: _NotFoundPage2.default, exact: true }, { path: "*", component: _NotFoundPage2.default }];

exports.default = routes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _lang = __webpack_require__(32);

var _lang2 = _interopRequireDefault(_lang);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'h1',
          { className: 'home__title' },
          _lang2.default[lang.id].name
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

HomePage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _lang = __webpack_require__(34);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPage = function (_Component) {
  _inherits(AboutPage, _Component);

  function AboutPage() {
    _classCallCheck(this, AboutPage);

    return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
  }

  _createClass(AboutPage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'about' },
        _react2.default.createElement(
          'h1',
          { className: 'about__title' },
          _lang2.default[lang.id].name
        )
      );
    }
  }]);

  return AboutPage;
}(_react.Component);

AboutPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AboutPage);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _lang = __webpack_require__(33);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundPage = function (_Component) {
  _inherits(NotFoundPage, _Component);

  function NotFoundPage() {
    _classCallCheck(this, NotFoundPage);

    return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
  }

  _createClass(NotFoundPage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'not-found' },
        _react2.default.createElement(
          'h1',
          { className: 'not-found__title' },
          _lang2.default[lang.id].name
        )
      );
    }
  }]);

  return NotFoundPage;
}(_react.Component);

NotFoundPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NotFoundPage);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLangSuccess = loadLangSuccess;
exports.loadLangFailure = loadLangFailure;
exports.loadLanguagesSuccess = loadLanguagesSuccess;
exports.loadLang = loadLang;
exports.loadLanguages = loadLanguages;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

var _mockLanguageApi = __webpack_require__(21);

var _mockLanguageApi2 = _interopRequireDefault(_mockLanguageApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadLangSuccess(lang) {
  return { type: types.LOAD_LANG_SUCCESS, lang: lang };
}

function loadLangFailure(noLang) {
  return { type: types.LOAD_LANG_FAILURE, noLang: noLang };
}

function loadLanguagesSuccess(languages) {
  return { type: types.LOAD_LANGUAGES_SUCCESS, languages: languages };
}

function loadLang(lang) {
  return function (dispatch) {
    return _mockLanguageApi2.default.getCurrentLang(lang).then(function (res) {
      dispatch(loadLangSuccess(res));
    }).catch(function () {
      var noLang = true;
      dispatch(loadLangFailure(noLang));
    });
  };
}

function loadLanguages() {
  return function (dispatch) {
    return _mockLanguageApi2.default.getAllLanguages().then(function (languages) {
      dispatch(loadLanguagesSuccess(languages));
    }).catch(function (err) {
      throw err;
    });
  };
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delay = __webpack_require__(22);

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var languages = [{ id: 'en-AU', name: 'English(AU)' }, { id: 'zh-CN', name: '中文（简体）' }];

var LanguageApi = function () {
  function LanguageApi() {
    _classCallCheck(this, LanguageApi);
  }

  _createClass(LanguageApi, null, [{
    key: 'getAllLanguages',
    value: function getAllLanguages() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(Object.assign([], languages));
        }, _delay2.default);
      });
    }
  }, {
    key: 'getCurrentLang',
    value: function getCurrentLang(lang) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          // resolve(Object.assign({}, languages.find(language => language.id === lang)));
          resolve(languages.find(function (language) {
            return language.id === lang;
          }));
        }, _delay2.default);
      });
    }
  }]);

  return LanguageApi;
}();

exports.default = LanguageApi;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 1200;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(6);

var _reducers = __webpack_require__(24);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(28);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(preloadedState) {
  return (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _urlReducer = __webpack_require__(38);

var _urlReducer2 = _interopRequireDefault(_urlReducer);

var _noLangReducer = __webpack_require__(25);

var _noLangReducer2 = _interopRequireDefault(_noLangReducer);

var _langReducer = __webpack_require__(26);

var _langReducer2 = _interopRequireDefault(_langReducer);

var _languageReducer = __webpack_require__(27);

var _languageReducer2 = _interopRequireDefault(_languageReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  url: _urlReducer2.default,
  noLang: _noLangReducer2.default,
  lang: _langReducer2.default,
  languages: _languageReducer2.default
});

exports.default = rootReducer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noLangReducer;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(2);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function noLangReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState2.default.noLang;
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_LANG_FAILURE:
      return action.noLang;
    default:
      return state;
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = langReducer;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(2);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function langReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState2.default.lang;
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_LANG_SUCCESS:
      return action.lang;
    default:
      return state;
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = languageReducer;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(2);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function languageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState2.default.languages;
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_LANGUAGES_SUCCESS:
      return action.languages;
    default:
      return state;
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"Footer"},"zh-CN":{"name":"页脚"}}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"Header","lang":"Language"},"zh-CN":{"name":"页眉","lang":"当前语言"}}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"Home Page"},"zh-CN":{"name":"首页"}}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"404 Not Found"},"zh-CN":{"name":"404 请求的资源不存在"}}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"About Page"},"zh-CN":{"name":"关于页面"}}

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUrlSuccess = loadUrlSuccess;
exports.loadUrlFailure = loadUrlFailure;
exports.loadUrl = loadUrl;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadUrlSuccess(url) {
  return { type: types.LOAD_URL_SUCCESS, url: url };
}

function loadUrlFailure() {
  return { type: types.LOAD_URL_FAILURE };
}

function loadUrl(url) {
  return function (dispatch) {
    dispatch(loadUrlSuccess(url));
  };
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = urlReducer;

var _actionTypes = __webpack_require__(1);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(2);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function urlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState2.default.url;
  var action = arguments[1];

  switch (action.type) {
    case types.LOAD_URL_SUCCESS:
      return action.url;
    default:
      return state;
  }
}

/***/ })
/******/ ]);