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


function renderMarkup(url, store) {
  const context = {};

  const rendered = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const initialData = store.getState();
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

  return markup;
}


app.get('*', (req, res, next) => {
  const url = req.url;
  // const lang = url.split('/')[1];

  const store = configureStore();

  client.get(url, (err, data) => { // redis client
    if (err) throw err;

    if (data != null) { // check available cache in redis first
      res.send(data);
    } else { // server-side rendering through React's renderToString

      Promise.resolve(store.dispatch(App.initialAction()))
        .then(() => {
          const markup = renderMarkup(url, store);
          // store ssr markup result in redis cache
          client.set(url, markup);
          // send ssr markup result to browser
          res.send(markup);
        }) // .then()
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
