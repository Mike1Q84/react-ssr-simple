import express from 'express';
import redis from 'redis';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import App from '../shared/App';

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

import serialize from "serialize-javascript";

// import languageApi from '../api/mockLanguageApi';

/* eslint-disable no-console */

const NODE_PORT = 3000;
// const REDIS_PORT = 6379;
const app = express();
const client = redis.createClient({
  host: 'redis' // ECONNREFUSED https://github.com/docker-library/redis/issues/45
});

app.use(express.static('dist'));

function initAllLangActions(lang) {
  return (dispatch) => Promise.all([
    dispatch(App.initLang(lang)),
    dispatch(App.initLanguages())
  ]);
}

function renderMarkup(url, store) {
  const initialData = store.getState();
  let newUrl = url;
  const context = {};

  const rendered = renderToString(
    <Provider store={store}>
      <StaticRouter location={newUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();

  const markup = `<!DOCTYPE html>
  <head>
    ${helmet.meta.toString()}
    ${helmet.title.toString()}
    <link rel="stylesheet" href="/css/main.css">
    <script src="/bundle.js" defer></script>
    <script>window.__initialData__ = ${serialize(initialData)}</script>
  </head>
  <body>
    <div id="root">${rendered}</div>
  </body>
</html>`;

  return {newUrl, markup};
}

const languages = [
  { id: 'en-AU', name: 'English(AU)' },
  { id: 'zh-CN', name: '中文（简体）' }
];

const routes = [
  { route: 'home', hasChildren: false },
  { route: 'services', hasChildren: false },
  { route: 'service', hasChildren: true },
  { route: 'about', hasChildren: false },
  { route: '404', hasChildren: false }
];

// Process requests before hitting ssr React and cache
app.use((req, res, next) => {
  // console.log(req.url);
  const defaultLang = 'en-AU';

  if (req.url.search('//') !== -1) {
    req.url = `/${defaultLang}/404`;
  }
  if (req.url.slice(-1) === '/') {
    req.url = req.url.slice(0, -1);
  }
  let reqLang = req.url.split('/')[1];
  let reqRoute = req.url.split('/')[2];
  let reqRestTokens = req.url.split('/').slice(3);
  let reqRest = reqRestTokens.join('/');
  // console.log(reqRest);

  if (!reqLang || !languages.find(language => language.id === reqLang)) {
    reqLang = defaultLang;
  }
  if (!reqRoute) {
    reqRoute = 'home';
  }
  let matchedRoute = routes.find(route => route.route === reqRoute);
  // console.log(matchedRoute);

  if (matchedRoute) {
    if (matchedRoute.hasChildren) {
      // console.log('200 Pass Route with Children');
      req.url = `/${reqLang}/${reqRoute}/${reqRest}`;
    } else {
      if (!reqRest) {
        // console.log('200 Pass Route without Children');
        req.url = `/${reqLang}/${reqRoute}`;
      } else {
        // console.log('404 Extra Routes');
        req.url = `/${reqLang}/404`;
      }
    }
  } else {
    // console.log('404 No Matched Routes');
    req.url = `/${reqLang}/404`;
  }

  next();
});


app.get('*', (req, res) => {
  let url = req.url;
  let lang = url.split('/')[1];
  const store = configureStore();
  store.dispatch(App.initUrl(url));

  client.get(url, (err, data) => { // redis client
    if (err) throw err;

    if (data != null) { // check available cache in redis first
      res.send(data);
    } else { // server-side rendering through React's renderToString
      store.dispatch(initAllLangActions(lang))
        .then(() => {
          const {newUrl, markup} = renderMarkup(url, store);
          console.log(newUrl);
          res.send(markup); // send ssr markup result to browser
          client.set(newUrl, markup); // store ssr markup result in redis cache
        });
    } // server-side rendering through React's renderToString
  }); // redis client
});

if (!module.parent) { // Make sure test DOES NOT listen port 3000 THE SECOND TIME
  app.listen(process.env.PORT || NODE_PORT, () => {
    console.log(`Server is listening on port: ${NODE_PORT}`)
  });
}

export default app;
