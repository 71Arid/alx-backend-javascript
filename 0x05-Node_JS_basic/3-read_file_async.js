const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const filedata = await fs.readFile(path, 'utf-8');
    const lines = filedata.split('\n');
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

    console.log(`Number of students: ${data.length}`);

    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents
