// This script makes a function called readDatabase that takes a file path

const { readFile } = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = {};
    for (const line of lines) {
      const [, , , field] = line.split(',');
      if (field in students) {
        students[field].push(line.split(',')[0]);
      } else {
        students[field] = [line.split(',')[0]];
      }
    }
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
