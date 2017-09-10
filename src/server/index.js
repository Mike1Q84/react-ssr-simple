import express from 'express';
import redis from 'redis';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';

/* eslint-disable no-console */

const NODE_PORT = 3000;
// const REDIS_PORT = 6379;
const app = express();
const client = redis.createClient({
  host: 'redis' // ECONNREFUSED https://github.com/docker-library/redis/issues/45
});

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const url = req.url;

  client.get(url, (err, data) => {
    if (err) throw err;

    if (data != null) { // check available cache in redis first
      res.send(data);
    } else { // server-side rendering through React's renderToString
      const rendered = renderToString(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      );

      const markup = `<!DOCTYPE html>
  <head>
    <title>React SSR Simple</title>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/bundle.js" defer></script>
  </head>
  <body>
    <div id="root">${rendered}</div>
  </body>
</html>`;

      // store ssr markup result in redis cache
      client.set(url, markup);
      // send ssr markup result to browser
      res.send(markup);
    }
  });
});

if (!module.parent) { // Make sure test DOES NOT listen port 3000 THE SECOND TIME
  app.listen(process.env.PORT || NODE_PORT, () => {
    console.log(`Server is listening on port: ${NODE_PORT}`)
  });
}

export default app;
