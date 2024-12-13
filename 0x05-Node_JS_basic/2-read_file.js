const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf-8').trim();
    const data = content.split('\r\n');
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
      const b = inner.filter(v => v.includes(val));
      const c = [];
      b.forEach((v) => {
        c.push(v[0]);
      });
      studentsByFields[val] = c;
    })
    const students = inner.length;
    console.log(`Number of students: ${students}`);
    for (const a in studentsByFields) {
      console.log(`Number of students in ${a}: ${studentsByFields[a].length}. List: ${studentsByFields[a].join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
