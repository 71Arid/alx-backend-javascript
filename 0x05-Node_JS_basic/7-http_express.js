const { promises: fs } = require('fs');
const express = require('express');

async function countStudents(path) {
  try {
    const filedata = await fs.readFile(path, 'utf-8');
    const lines = filedata.split('\n');
    let response = '';
    let data = lines.filter((line) => line.trim() !== '');
    data = data.slice(1);
    const students = {};
    data.forEach((row) => {
      const fields = row.split(',');
      const field = fields[fields.length - 1];
      if (students[field]) {
        students[field].push(fields[0]);
      } else {
        students[field] = [fields[0]];
      }
    });

    response += `Number of students: ${data.length}\n`;

    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }
    }
    return response.slice(0, -1);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((content) => {
      res.send(`This is the list of our students\n${content}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);
module.exports = app;
