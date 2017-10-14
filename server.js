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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function Hero(_ref) {
  var lang = _ref.lang,
      title = _ref.title,
      hero640 = _ref.hero640,
      hero960 = _ref.hero960,
      hero1280 = _ref.hero1280,
      hero1920 = _ref.hero1920,
      hero2560 = _ref.hero2560,
      hero3840 = _ref.hero3840;

  return _react2.default.createElement(
    'div',
    { className: 'hero' },
    _react2.default.createElement(
      'picture',
      { className: 'hero__img-div' },
      _react2.default.createElement('source', { media: '(min-width: 2561px)', srcSet: '' + hero3840 }),
      _react2.default.createElement('source', { media: '(min-width: 1921px)', srcSet: '' + hero2560 }),
      _react2.default.createElement('source', { media: '(min-width: 1281px)', srcSet: '' + hero1920 }),
      _react2.default.createElement('source', { media: '(min-width: 961px)', srcSet: '' + hero1280 }),
      _react2.default.createElement('source', { media: '(min-width: 641px)', srcSet: '' + hero960 }),
      _react2.default.createElement('img', { src: hero640, alt: title, className: 'hero__image' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'hero__txt-div' },
      _react2.default.createElement(
        'h1',
        { className: 'hero__title' },
        title
      )
    )
  );
};

Hero.propTypes = {
  lang: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string.isRequired,
  hero640: _propTypes2.default.string.isRequired,
  hero960: _propTypes2.default.string.isRequired,
  hero1280: _propTypes2.default.string.isRequired,
  hero1920: _propTypes2.default.string.isRequired,
  hero2560: _propTypes2.default.string.isRequired,
  hero3840: _propTypes2.default.string.isRequired
};

exports.default = Hero;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 600;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _redis = __webpack_require__(13);

var _redis2 = _interopRequireDefault(_redis);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(5);

var _reactHelmet = __webpack_require__(2);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(3);

var _configureStore = __webpack_require__(66);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _serializeJavascript = __webpack_require__(73);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _mockUrlApi = __webpack_require__(74);

var _mockUrlApi2 = _interopRequireDefault(_mockUrlApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var NODE_PORT = 3000;
// const REDIS_PORT = 6379;


// import languageApi from '../api/mockLanguageApi';
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
  var context = {};

  var rendered = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: url, context: context },
      _react2.default.createElement(_App2.default, null)
    )
  ));
  var helmet = _reactHelmet.Helmet.renderStatic();

  var markup = '<!DOCTYPE html>\n  <head>\n    ' + helmet.meta.toString() + '\n    ' + helmet.title.toString() + '\n    <link rel="stylesheet" href="/css/main.css">\n    <script src="/bundle.js" defer></script>\n    <script>window.__initialData__ = ' + (0, _serializeJavascript2.default)(initialData) + '</script>\n  </head>\n  <body>\n    <div id="root">' + rendered + '</div>\n  </body>\n</html>';

  return markup;
}

function processReqUrl(reqUrl, urls) {
  var defaultLang = 'en-AU';

  if (reqUrl.search('//') !== -1) {
    reqUrl = '/' + defaultLang + '/404';
    return reqUrl;
  }
  if (reqUrl.slice(-1) === '/') {
    reqUrl = reqUrl.slice(0, -1);
  }
  var reqLang = reqUrl.split('/')[1];
  var reqRestTokens = reqUrl.split('/').slice(2);
  var reqRest = reqRestTokens.join('/');
  if (!reqLang) {
    reqLang = defaultLang;
  }
  if (!reqRest) {
    reqRest = 'home';
  }
  var matchedUrl = urls.find(function (url) {
    return url === '/' + reqLang + '/' + reqRest;
  });
  if (matchedUrl) {
    return matchedUrl;
  } else {
    return '/' + defaultLang + '/404';
  }
}

// Process requests before hitting ssr React and cache
app.use(function (req, res, next) {
  client.hgetall("urls", function (err, res) {
    if (err) throw err;

    if (res == null) {
      // check available urls cache in redis first
      Promise.resolve(_mockUrlApi2.default.getAllUrls()).then(function (resUrls) {
        resUrls.map(function (url) {
          client.hset("urls", url, url);
        });
        req.url = processReqUrl(req.url, resUrls);
        next();
      });
    } else {
      var urls = [];
      for (var url in res) {
        urls.push(res[url]);
      }
      req.url = processReqUrl(req.url, urls);
      next();
    }
  });
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
        var markup = renderMarkup(url, store);
        res.send(markup); // send ssr markup result to browser
        client.set(url, markup); // store ssr markup result in redis cache
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(16);

var _lang2 = _interopRequireDefault(_lang);

__webpack_require__(17);

var _Header = __webpack_require__(18);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(20);

var _Footer2 = _interopRequireDefault(_Footer);

var _routes = __webpack_require__(22);

var _routes2 = _interopRequireDefault(_routes);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _urlActions = __webpack_require__(63);

var _languageActions = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_Component) {
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
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          {
            titleTemplate: "%s | " + _lang2.default[lang.id].title
          },
          _react2.default.createElement('meta', { charSet: 'utf-8' })
        ),
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
/* 16 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"AI Data"},"zh-CN":{"title":"爱数据"}}

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lang = __webpack_require__(19);

var _lang2 = _interopRequireDefault(_lang);

var _reactRouterDom = __webpack_require__(5);

__webpack_require__(75);

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
      'span',
      { className: 'navbtn' },
      _react2.default.createElement('span', { className: 'navbtn__line1' }),
      _react2.default.createElement('span', { className: 'navbtn__line2' }),
      _react2.default.createElement('span', { className: 'navbtn__line3' })
    ),
    _react2.default.createElement(
      'nav',
      { className: 'navbar' },
      _react2.default.createElement(
        'ul',
        { className: 'navlink' },
        _react2.default.createElement(
          'li',
          { className: 'navlink__item' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' + lang.id + '/' + _lang2.default[lang.id].nav.home.id },
            _lang2.default[lang.id].nav.home.name
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'navlink__item' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' + lang.id + '/' + _lang2.default[lang.id].nav.about.id },
            _lang2.default[lang.id].nav.about.name
          )
        )
      )
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"Header","lang":"Language","nav":{"home":{"id":"home","name":"Home Page"},"about":{"id":"about","name":"About Page"}}},"zh-CN":{"name":"页眉","lang":"当前语言","nav":{"home":{"id":"home","name":"网站主页"},"about":{"id":"about","name":"关于我们"}}}}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lang = __webpack_require__(21);

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
/* 21 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"name":"Footer"},"zh-CN":{"name":"页脚"}}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomePage = __webpack_require__(23);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(26);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _ServicesPage = __webpack_require__(28);

var _ServicesPage2 = _interopRequireDefault(_ServicesPage);

var _DevOpsPage = __webpack_require__(30);

var _DevOpsPage2 = _interopRequireDefault(_DevOpsPage);

var _SysAdminPage = __webpack_require__(39);

var _SysAdminPage2 = _interopRequireDefault(_SysAdminPage);

var _WebDesignPage = __webpack_require__(47);

var _WebDesignPage2 = _interopRequireDefault(_WebDesignPage);

var _BlogsPage = __webpack_require__(55);

var _BlogsPage2 = _interopRequireDefault(_BlogsPage);

var _NotFoundPage = __webpack_require__(61);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ path: "/", component: _HomePage2.default, exact: true }, { path: "/:lang/", component: _HomePage2.default, exact: true }, { path: "/:lang/home", component: _HomePage2.default, exact: true }, { path: "/:lang/about", component: _AboutPage2.default, exact: true }, { path: "/:lang/blog", component: _BlogsPage2.default }, { path: "/:lang/services", component: _ServicesPage2.default, exact: true }, { path: "/:lang/service/devops", component: _DevOpsPage2.default, exact: true }, { path: "/:lang/service/sysadmin", component: _SysAdminPage2.default, exact: true }, { path: "/:lang/service/webdesign", component: _WebDesignPage2.default, exact: true }, { path: "/:lang/404", component: _NotFoundPage2.default, exact: true }, { path: "*", component: _NotFoundPage2.default }];

exports.default = routes;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(24);

var _lang2 = _interopRequireDefault(_lang);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = exports.HomePage = function (_Component) {
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
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: 'home__title' },
          _lang2.default[lang.id].title
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
/* 24 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"Home Page"},"zh-CN":{"title":"网站首页"}}

/***/ }),
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(27);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPage = exports.AboutPage = function (_Component) {
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
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: 'about__title' },
          _lang2.default[lang.id].title
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"About Page"},"zh-CN":{"title":"关于页面"}}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServicesPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(29);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServicesPage = exports.ServicesPage = function (_Component) {
  _inherits(ServicesPage, _Component);

  function ServicesPage() {
    _classCallCheck(this, ServicesPage);

    return _possibleConstructorReturn(this, (ServicesPage.__proto__ || Object.getPrototypeOf(ServicesPage)).apply(this, arguments));
  }

  _createClass(ServicesPage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'services' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: 'services__title' },
          _lang2.default[lang.id].title
        )
      );
    }
  }]);

  return ServicesPage;
}(_react.Component);

ServicesPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ServicesPage);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"Services Page"},"zh-CN":{"title":"服务页面"}}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevOpsPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(31);

var _lang2 = _interopRequireDefault(_lang);

var _devops640w = __webpack_require__(32);

var _devops640w2 = _interopRequireDefault(_devops640w);

var _devops960w = __webpack_require__(33);

var _devops960w2 = _interopRequireDefault(_devops960w);

var _devops1280w = __webpack_require__(34);

var _devops1280w2 = _interopRequireDefault(_devops1280w);

var _devops1920w = __webpack_require__(35);

var _devops1920w2 = _interopRequireDefault(_devops1920w);

var _devops2560w = __webpack_require__(36);

var _devops2560w2 = _interopRequireDefault(_devops2560w);

var _devops3840w = __webpack_require__(37);

var _devops3840w2 = _interopRequireDefault(_devops3840w);

var _Hero = __webpack_require__(7);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DevOpsPage = exports.DevOpsPage = function (_Component) {
  _inherits(DevOpsPage, _Component);

  function DevOpsPage() {
    _classCallCheck(this, DevOpsPage);

    return _possibleConstructorReturn(this, (DevOpsPage.__proto__ || Object.getPrototypeOf(DevOpsPage)).apply(this, arguments));
  }

  _createClass(DevOpsPage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'devops' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(_Hero2.default, { lang: lang, title: _lang2.default[lang.id].title,
          hero640: _devops640w2.default, hero960: _devops960w2.default, hero1280: _devops1280w2.default,
          hero1920: _devops1920w2.default, hero2560: _devops2560w2.default, hero3840: _devops3840w2.default })
      );
    }
  }]);

  return DevOpsPage;
}(_react.Component);

DevOpsPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DevOpsPage);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"DevOps Service"},"zh-CN":{"title":"开发运维服务"}}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "/img/devops-640w.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "/img/devops-960w.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "/img/devops-1280w.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "/img/devops-1920w.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "/img/devops-2560w.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "/img/devops-3840w.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports) {



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SysAdminPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(40);

var _lang2 = _interopRequireDefault(_lang);

var _sysadmin640w = __webpack_require__(41);

var _sysadmin640w2 = _interopRequireDefault(_sysadmin640w);

var _sysadmin960w = __webpack_require__(42);

var _sysadmin960w2 = _interopRequireDefault(_sysadmin960w);

var _sysadmin1280w = __webpack_require__(43);

var _sysadmin1280w2 = _interopRequireDefault(_sysadmin1280w);

var _sysadmin1920w = __webpack_require__(44);

var _sysadmin1920w2 = _interopRequireDefault(_sysadmin1920w);

var _sysadmin2560w = __webpack_require__(45);

var _sysadmin2560w2 = _interopRequireDefault(_sysadmin2560w);

var _sysadmin3840w = __webpack_require__(46);

var _sysadmin3840w2 = _interopRequireDefault(_sysadmin3840w);

var _Hero = __webpack_require__(7);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SysAdminPage = exports.SysAdminPage = function (_Component) {
  _inherits(SysAdminPage, _Component);

  function SysAdminPage() {
    _classCallCheck(this, SysAdminPage);

    return _possibleConstructorReturn(this, (SysAdminPage.__proto__ || Object.getPrototypeOf(SysAdminPage)).apply(this, arguments));
  }

  _createClass(SysAdminPage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'sysadmin' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(_Hero2.default, { lang: lang, title: _lang2.default[lang.id].title,
          hero640: _sysadmin640w2.default, hero960: _sysadmin960w2.default, hero1280: _sysadmin1280w2.default,
          hero1920: _sysadmin1920w2.default, hero2560: _sysadmin2560w2.default, hero3840: _sysadmin3840w2.default })
      );
    }
  }]);

  return SysAdminPage;
}(_react.Component);

SysAdminPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SysAdminPage);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"SysAdmin Service"},"zh-CN":{"title":"系统管理服务"}}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "/img/sysadmin-640w.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "/img/sysadmin-960w.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "/img/sysadmin-1280w.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "/img/sysadmin-1920w.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "/img/sysadmin-2560w.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "/img/sysadmin-3840w.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebDesignPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(48);

var _lang2 = _interopRequireDefault(_lang);

var _webdesign640w = __webpack_require__(49);

var _webdesign640w2 = _interopRequireDefault(_webdesign640w);

var _webdesign960w = __webpack_require__(50);

var _webdesign960w2 = _interopRequireDefault(_webdesign960w);

var _webdesign1280w = __webpack_require__(51);

var _webdesign1280w2 = _interopRequireDefault(_webdesign1280w);

var _webdesign1920w = __webpack_require__(52);

var _webdesign1920w2 = _interopRequireDefault(_webdesign1920w);

var _webdesign2560w = __webpack_require__(53);

var _webdesign2560w2 = _interopRequireDefault(_webdesign2560w);

var _webdesign3840w = __webpack_require__(54);

var _webdesign3840w2 = _interopRequireDefault(_webdesign3840w);

var _Hero = __webpack_require__(7);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebDesignPage = exports.WebDesignPage = function (_Component) {
  _inherits(WebDesignPage, _Component);

  function WebDesignPage() {
    _classCallCheck(this, WebDesignPage);

    return _possibleConstructorReturn(this, (WebDesignPage.__proto__ || Object.getPrototypeOf(WebDesignPage)).apply(this, arguments));
  }

  _createClass(WebDesignPage, [{
    key: 'render',
    value: function render() {
      var lang = this.props.lang;


      return _react2.default.createElement(
        'div',
        { className: 'webdesign' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(_Hero2.default, { lang: lang, title: _lang2.default[lang.id].title,
          hero640: _webdesign640w2.default, hero960: _webdesign960w2.default, hero1280: _webdesign1280w2.default,
          hero1920: _webdesign1920w2.default, hero2560: _webdesign2560w2.default, hero3840: _webdesign3840w2.default })
      );
    }
  }]);

  return WebDesignPage;
}(_react.Component);

WebDesignPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WebDesignPage);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"Web Design Service"},"zh-CN":{"title":"网页设计服务"}}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "/img/webdesign-640w.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "/img/webdesign-960w.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "/img/webdesign-1280w.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "/img/webdesign-1920w.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "/img/webdesign-2560w.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "/img/webdesign-3840w.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogsPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(56);

var _lang2 = _interopRequireDefault(_lang);

var _BlogCategoryPage = __webpack_require__(57);

var _BlogCategoryPage2 = _interopRequireDefault(_BlogCategoryPage);

var _BlogDetailPage = __webpack_require__(59);

var _BlogDetailPage2 = _interopRequireDefault(_BlogDetailPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogsPage = exports.BlogsPage = function (_Component) {
  _inherits(BlogsPage, _Component);

  function BlogsPage() {
    _classCallCheck(this, BlogsPage);

    return _possibleConstructorReturn(this, (BlogsPage.__proto__ || Object.getPrototypeOf(BlogsPage)).apply(this, arguments));
  }

  _createClass(BlogsPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          lang = _props.lang;

      var n = url.lastIndexOf('/');
      var is404 = url.substring(n + 1) === '404';

      return _react2.default.createElement(
        'div',
        { className: 'blogs' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: 'blogs__title' },
          _lang2.default[lang.id].title
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:lang/blog',
            render: function render() {
              return _react2.default.createElement(_BlogCategoryPage2.default, { lang: lang });
            }, exact: true }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:lang/blog/:entry',
            render: function render() {
              return _react2.default.createElement(_BlogDetailPage2.default, { lang: lang });
            } })
        )
      );
    }
  }]);

  return BlogsPage;
}(_react.Component);

BlogsPage.propTypes = {
  url: _propTypes2.default.string.isRequired,
  lang: _propTypes2.default.object.isRequired
};

function mapStateToProps(state) {
  return {
    url: state.url,
    lang: state.lang
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BlogsPage);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"Blogs Page"},"zh-CN":{"title":"博客页面"}}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(58);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogCategoryPage = function BlogCategoryPage(_ref) {
  var lang = _ref.lang;

  return _react2.default.createElement(
    'div',
    { className: 'blog-category' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        _lang2.default[lang.id].title
      )
    ),
    _react2.default.createElement(
      'h1',
      { className: 'blog-category__title' },
      _lang2.default[lang.id].title
    )
  );
};

BlogCategoryPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

exports.default = BlogCategoryPage;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"Blog Category Page"},"zh-CN":{"title":"博客分类页面"}}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(60);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogDetailPage = function BlogDetailPage(_ref) {
  var lang = _ref.lang;

  return _react2.default.createElement(
    'div',
    { className: 'blog-detail' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        _lang2.default[lang.id].title
      )
    ),
    _react2.default.createElement(
      'h1',
      { className: 'blog-detail__title' },
      _lang2.default[lang.id].title
    )
  );
};

BlogDetailPage.propTypes = {
  lang: _propTypes2.default.object.isRequired
};

exports.default = BlogDetailPage;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"Blog Detail Page"},"zh-CN":{"title":"博客详情页面"}}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _lang = __webpack_require__(62);

var _lang2 = _interopRequireDefault(_lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundPage = exports.NotFoundPage = function (_Component) {
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
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            _lang2.default[lang.id].title
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: 'not-found__title' },
          _lang2.default[lang.id].title
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
/* 62 */
/***/ (function(module, exports) {

module.exports = {"en-AU":{"title":"404 Not Found"},"zh-CN":{"title":"404 请求的资源不存在"}}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUrlSuccess = loadUrlSuccess;
exports.loadUrlFailure = loadUrlFailure;
exports.loadUrl = loadUrl;

var _actionTypes = __webpack_require__(4);

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
/* 64 */
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

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _mockLanguageApi = __webpack_require__(65);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delay = __webpack_require__(8);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(9);

var _reducers = __webpack_require__(67);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = __webpack_require__(72);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(preloadedState) {
  return (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _urlReducer = __webpack_require__(68);

var _urlReducer2 = _interopRequireDefault(_urlReducer);

var _noLangReducer = __webpack_require__(69);

var _noLangReducer2 = _interopRequireDefault(_noLangReducer);

var _langReducer = __webpack_require__(70);

var _langReducer2 = _interopRequireDefault(_langReducer);

var _languageReducer = __webpack_require__(71);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = urlReducer;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(6);

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

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noLangReducer;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(6);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = langReducer;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(6);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = languageReducer;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _initState = __webpack_require__(6);

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
/* 72 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delay = __webpack_require__(8);

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var urls = ['/en-AU/home', '/zh-CN/home', '/en-AU/about', '/zh-CN/about', '/en-AU/blogs', '/zh-CN/blogs', '/en-AU/blog', '/zh-CN/blog', '/en-AU/blog/1', '/zh-CN/blog/1', '/en-AU/blog/2', '/zh-CN/blog/2', '/en-AU/blog/3', '/zh-CN/blog/3', '/en-AU/services', '/zh-CN/services', '/en-AU/service/devops', '/zh-CN/service/devops', '/en-AU/service/sysadmin', '/zh-CN/service/sysadmin', '/en-AU/service/webdesign', '/zh-CN/service/webdesign', '/en-AU/404', '/zh-CN/404'];

var UrlApi = function () {
  function UrlApi() {
    _classCallCheck(this, UrlApi);
  }

  _createClass(UrlApi, null, [{
    key: 'getAllUrls',
    value: function getAllUrls() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(Object.assign([], urls));
        }, _delay2.default);
      });
    }
  }]);

  return UrlApi;
}();

exports.default = UrlApi;

/***/ }),
/* 75 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);