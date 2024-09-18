const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\r\n');
      const valid = lines.filter((line) => line.trim() !== '');
      valid.shift();

      if (valid.length <= 0) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const fieldStudents = {};
      valid.forEach((line) => {
        const fields = line.split(',');
        const fname = fields[0];
        const field = fields[3];

        if (!fieldStudents[field]) {
          fieldStudents[field] = [];
        }
        fieldStudents[field].push(fname);
      });

      console.log(`Number of students: ${valid.length}`);
      for (const [field, students] of Object.entries(fieldStudents)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
