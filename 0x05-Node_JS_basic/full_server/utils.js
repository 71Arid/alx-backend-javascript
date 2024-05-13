const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((filedata) => {
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
        resolve(students);
    })
    .catch((err) => {
      reject(new Error('Cannot load the database'));
    });
  });
}

module.exports = readDatabase;
