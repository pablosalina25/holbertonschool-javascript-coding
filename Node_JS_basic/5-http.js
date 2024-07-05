// This program creates a small HTTP server using the http module.

const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databasePath)
      .then((data) => {
        res.end(`List of students:\n${data}`);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const PORT = 1245;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});

module.exports = server;
