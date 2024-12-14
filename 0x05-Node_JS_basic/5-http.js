const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(process.argv[2])
      .then((data) => {
        console.log(data);
      });
    res.end();
  }
});

app.listen(port);

module.exports = app;
