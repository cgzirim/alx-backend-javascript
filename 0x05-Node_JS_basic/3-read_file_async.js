const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const response = [];
      const content = data.toString().split('\n');

      const students = content.filter(Boolean).slice(1);
      let message = `Number of students: ${students.length}`;
      console.log(message);

      response.push(message);

      const fields = {};
      for (const student of students) {
        const st_data = student.split(',');

        const st_first_name = st_data[0];
        const st_field = st_data[st_data.length - 1];

        if (fields[st_field]) {
          fields[st_field][0] += 1;
          fields[st_field].push(st_first_name);
        } else {
          fields[st_field] = [1, st_first_name];
        }
      }
      for (const [k, v] of Object.entries(fields)) {
        const first_names = v.slice(1).join(', ');
        message = `Number of students in ${k}: ${v[0]}. List: ${first_names}`;
        console.log(message);
        response.push(message);
      }

      resolve(response);
    });
  });
}

module.exports = countStudents;
