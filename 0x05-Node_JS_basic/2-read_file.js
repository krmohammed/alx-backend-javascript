const fs = require('node:fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\r\n');
    const valid = lines.filter((line) => line.trim() !== "");
    valid.shift();

    if (valid.length <= 0) {
      console.log('Number of students: 0');
      return;
    }

    const studentsField = {};
    valid.forEach((line) => {
      const fields = line.split(',');
      const fname = fields[0];
      const field = fields[3];

      if (!studentsField[field]) {
        studentsField[field] = [];
      }
      studentsField[field].push(fname);
    });

    console.log(`Number of students: ${valid.length}`);
    for (const [field, students] of Object.entries(studentsField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
