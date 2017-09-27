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
import urlApi from '../api/mockUrlApi';

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
  const context = {};

  const rendered = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
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

  return markup;
}


function processReqUrl(reqUrl, urls) {
  const defaultLang = 'en-AU';

  if (reqUrl.search('//') !== -1) {
    reqUrl = `/${defaultLang}/404`;
    return reqUrl;
  }
  if (reqUrl.slice(-1) === '/') {
    reqUrl = reqUrl.slice(0, -1);
  }
  let reqLang = reqUrl.split('/')[1];
  let reqRoute = reqUrl.split('/')[2];
  if (!reqLang) {
    reqLang = defaultLang;
  }
  if (!reqRoute) {
    reqRoute = 'home';
  }
  let matchedUrl = urls.find(url => url === `/${reqLang}/${reqRoute}`);
  if (matchedUrl) {
    return matchedUrl;
  } else {
    return `/${defaultLang}/404`;
  }
}

// Process requests before hitting ssr React and cache
app.use((req, res, next) => {
  client.hgetall("urls", (err, res) => {
    if (err) throw err;

    if (res == null) { // check available urls cache in redis first
      Promise.resolve(urlApi.getAllUrls())
        .then((resUrls) => {
          resUrls.map((url) => {
            client.hset("urls", url, url);
          });
          req.url = processReqUrl(req.url, resUrls);
          next();
        });
    } else {
      let urls = []
      for (let url in res) {
        urls.push(res[url]);
      }
      req.url = processReqUrl(req.url, urls);
      next();
    }
  });
});


app.get('*', (req, res) => {
  let url = req.url;
  console.log(url);
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
          const markup = renderMarkup(url, store);
          res.send(markup); // send ssr markup result to browser
          client.set(url, markup); // store ssr markup result in redis cache
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
