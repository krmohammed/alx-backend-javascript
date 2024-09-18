const { createServer } = require('http');
const countStudents = require('./3-read_file_async.js');
const path = process.argv[2];

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School');
  }
  if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    countStudents(path)
    .then(() => {
      res.end('This is the list of our students\n');
    })
    .catch((err) => {
      res.end(err);
    });
  }
  res.end();
});

app.listen(1245);

module.exports = app;
