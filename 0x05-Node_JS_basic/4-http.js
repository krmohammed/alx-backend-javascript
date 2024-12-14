const { createServer } = require('http');

const port = 1245;

const app = createServer((req, res) => {
  res.write('Hello ALX!');
  res.end();
});

app.listen(port);
