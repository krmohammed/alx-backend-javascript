const { createServer } = require('http');
const fs = require('fs').promises;

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
    const introMsg = `Number of students: ${students}`;
    const bodyMsg = [];
    for (const a in studentsByFields) {
      if (Object.hasOwn(studentsByFields, a)) {
        bodyMsg.push(`Number of students in ${a}: ${studentsByFields[a].length}. List: ${studentsByFields[a].join(', ')}`);
      }
    }
    return `${introMsg}\n${bodyMsg.join('\n')}`;
  } catch (error) {
    return new Error('Cannot load the database');
  }
}

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    let msg = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((data) => {
        if (typeof data === 'object') {
          msg += 'Cannot load the database';
        } else {
          msg += data;
        }
        res.end(msg);
      });
  }
});

app.listen(port);

module.exports = app;
