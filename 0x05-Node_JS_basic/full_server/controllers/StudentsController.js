import readDatabase from '../utils';

const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((data) => {
        let reply = 'This is the list of our students\n';
        let mine = '';
        if (typeof data === 'object') {
          response.status(500).send('Cannot load the database');
        } else {
          Object.entries(data).sort().forEach((val) => {
            mine += `Number of students in ${val[0]}: ${val[1].length}. `;
            mine += `List: ${val[1].join(', ')}\n`;
          });
          reply += mine;
          response.status(200).send(reply);
        }
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((data) => {
        if (typeof data === 'object') {
          response.status(500).send('Cannot load database');
        } else {
          const names = data[major];
          response.status(200).send(`List: ${names.join(', ')}`);
        }
      });
  }
}

export default StudentsController;
