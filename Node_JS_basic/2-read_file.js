// This function reads a file synchronously to get student data,
// processes the data to count the number of students and groups them by their field of study,
// then logs the total number of students and the number of students
// in each field along with their names.
const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\n').slice(1).filter((line) => line);

  const fields = students.reduce((acc, student) => {
    const [firstName, , , field] = student.split(',');

    if (!acc[field]) {
      acc[field] = [];
    }

    acc[field].push(firstName);
    return acc;
  }, {});

  console.log(`Number of students: ${students.length}`);

  Object.entries(fields).forEach(([field, names]) => {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;
