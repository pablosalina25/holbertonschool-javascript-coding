// Write a script that reads and prints the content of a file.

#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

function readFile(path) {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}
readFile(filePath);