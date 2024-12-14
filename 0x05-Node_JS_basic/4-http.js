const { response } = require('express');
const { createServer } = require('http');

const port = 1245;

const app = createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(res.statusCode);
  res.end('Hello Holberton School!');
});

app.listen(port);
