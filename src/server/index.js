import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`<!DOCTYPE html>
  <head>
    <title>React SSR Simple</title>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/bundle.js" defer></script>
  </head>
  <body>
    <div id="root">${markup}</div>
  </body>
</html>`);
});

if (!module.parent) { // Make sure test DOES NOT listen port 3000 THE SECOND TIME
  app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port: ${port}`)
  });
}

export default app;
