const express = require('express');
const fs = require('fs').promises;

const app = express();
const path = process.argv[2];
const port = 1245;

async function countStudents(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');
    const data = content.trim().split('\r\n');
    data.shift();

    const inner = [];
    data.forEach((val) => {
      const a = val.trim();
      const b = a.split(',');
      inner.push(b);
    });
    const fields = [];
    inner.forEach((val) => {
      if (!fields.includes(val[val.length - 1])) {
        fields.push(val[val.length - 1]);
      }
    });
    const studentsByFields = {};
    fields.forEach((val) => {
      const b = inner.filter((v) => v.includes(val));
      const c = [];
      b.forEach((v) => {
        c.push(v[0]);
      });
      studentsByFields[val] = c;
    });
    const students = inner.length;
    const result = [`Number of students: ${students}`];
    for (const a in studentsByFields) {
      if (Object.hasOwn(studentsByFields, a)) {
        result.push(`Number of students in ${a}: ${studentsByFields[a].length}. List: ${studentsByFields[a].join(', ')}`);
      }
    }
    return result.join('\n');
  } catch (error) {
    return new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let data = 'This is the list of our students\n';
  countStudents(path)
    .then((e) => {
      data += e;
      res.send(data);
    });
});

app.listen(port);

module.exports = app;
