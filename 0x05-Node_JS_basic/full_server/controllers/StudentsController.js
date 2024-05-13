import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((students) => {
        let response = 'This is the list of our students';
        for (const field in students) {
          if (Object.prototype.hasOwnProperty.call(students, field)) {
            response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
          }
        }
        response = response.slice(0, -1);
        res.status(200).send(`${response}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        let response = '';
        for (const field in students) {
          if (field === major) {
            response += `List: ${students[field].join(', ')}`;
          }
        }
        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
