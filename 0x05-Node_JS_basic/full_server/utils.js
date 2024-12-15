const fs = require('fs').promises;

async function readDatabase(path) {
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

    return studentsByFields;
  } catch (error) {
    return new Error('Cannot load the database');
  }
}

export default readDatabase;
