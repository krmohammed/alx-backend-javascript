const express = require('express');
const countStudents = require('./3-read_file_async.js');
const path = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.send('This is the list of our students');
  countStudents(path)
  .then(() => {
    res.end('This is the list of our students\n');
  })
  .catch((err) => {
    res.end(err);
  });
});

app.listen(1245);

module.exports = app;
