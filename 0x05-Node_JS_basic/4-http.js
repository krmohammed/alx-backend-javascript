const { createServer } = require('http');

const port = 1245;

const app = createServer((req, res) => {
  if (req.url) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
});

app.listen(port);
