const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function countStudents (path) {
  let content;
  try {
    content = await readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = content.split(/\r?\n/).filter(Boolean).slice(1);
  console.log(`Number of students: ${students.length}`);

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
    console.log(`Number of students in ${k}: ${v[0]}. List: ${first_names}`);
  }

  return readFile(path);
}

module.exports = countStudents;
