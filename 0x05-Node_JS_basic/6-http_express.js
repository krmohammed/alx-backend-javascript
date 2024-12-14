const express = require('express');
const app = express();
const port = 1245;

app.get('/', (res, req) => {
  res.send('Hello Holberton School!');
});

app.listen(port);
