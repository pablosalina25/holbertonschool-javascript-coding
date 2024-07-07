// This program creates a small HTTP server using the http module.

const http = require('http');
const fs = require('fs').promises;
const url = require('url');

async function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const str = data.toString();
      const arr = str.split('\n').slice(1);
      const filter = arr.filter((line) => line !== '');
      const namesByField = {};
      filter.forEach((line) => {
        const elements = line.split(',');
        const firstName = elements[0];
        const field = elements[3];

        if (!namesByField[field]) {
          namesByField[field] = [];
        }
        namesByField[field].push(firstName);
      });
      const results = [`Number of students: ${filter.length}`];
      const fields = Object.keys(namesByField);
      for (const field of fields) {
        const names = namesByField[field];
        const count = names.length;
        const list = names.join(', ');
        results.push(`Number of students in ${field}: ${count}. List: ${list}`);
      }
      return results;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (reqUrl === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    const path = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(path)
      .then((data) => {
        res.end(data.join('\n'));
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});
// eslint-disable-next-line jest/require-hook
app.listen(1245);

module.exports = app;