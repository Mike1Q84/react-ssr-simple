import express from 'express';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
<head>
  <title>React SSR Simple</title>
</head>
<body>
  <h1>Hello World!</h1>
  <script src="/bundle.js" defer></script>
</body>`)
});

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port: ${port}`)
})
