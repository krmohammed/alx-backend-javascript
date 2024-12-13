const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf-8').trim();
    const data = content.split('\r\n');
    data.shift();

    const inner = [];
    data.forEach((val) => {
      val = val.trim();
      let b = val.split(',');
      inner.push(b);
    })
    const fields = [];
    inner.forEach((val) => {
      if (!fields.includes(val[val.length - 1])) {
        fields.push(val[val.length - 1]);
      }
    })
    const students_by_fields = {};
    fields.forEach((val) => {
      let b = inner.filter(v => v.includes(val));
      let c = [];
      b.forEach((v) => {
        c.push(v[0]);
      });
      students_by_fields[val] = c;
    })
    students = inner.length;
    console.log(`Number of students: ${students}`);
    for (let a in students_by_fields) {
      console.log(`Number of students in ${a}: ${students_by_fields[a].length}. List: ${students_by_fields[a].join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
