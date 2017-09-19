import express from 'express';
import redis from 'redis';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

import serialize from "serialize-javascript";

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
  if (!store.getState().lang.hasOwnProperty('id')) {
    const lang = 'en-AU';
    newUrl = `/${lang}/404`;
    // newUrl = `/${lang}`;

    initialData.lang = initialData.languages.find(language => language.id === lang);
  }

  const context = {};

  const rendered = renderToString(
    <Provider store={store}>
      <StaticRouter location={newUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const markup = `<!DOCTYPE html>
  <head>
    <title>React SSR Simple</title>
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


app.get('*', (req, res, next) => {
  let url = req.url;
  let lang = url.split('/')[1];
  if (!lang) {
    lang = 'en-AU';
    url = `/${lang}`;
  }

  const store = configureStore();

  client.get(url, (err, data) => { // redis client
    if (err) throw err;

    if (data != null) { // check available cache in redis first
      res.send(data);
    } else { // server-side rendering through React's renderToString
      // const p1 = Promise.resolve(store.dispatch(App.initLang(lang)));
      // const p2 = Promise.resolve(store.dispatch(App.initLanguages()));
      // Promise.all([p1,p2])
      store.dispatch(initAllLangActions(lang))
        .then(() => {
          const {newUrl, markup} = renderMarkup(url, store);
          res.send(markup); // send ssr markup result to browser
          // console.log(newUrl);
          client.set(newUrl, markup); // store ssr markup result in redis cache
        })
        .catch(next);
    } // server-side rendering through React's renderToString
  }); // redis client
});

if (!module.parent) { // Make sure test DOES NOT listen port 3000 THE SECOND TIME
  app.listen(process.env.PORT || NODE_PORT, () => {
    console.log(`Server is listening on port: ${NODE_PORT}`)
  });
}

export default app;
