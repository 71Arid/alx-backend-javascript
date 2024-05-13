const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8').split('\n').filter(line => line.trim() !== '');
    data = data.slice(1);
    const students = {};
        
    data.forEach(row => {
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
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
