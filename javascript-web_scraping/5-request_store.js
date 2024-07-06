#!/usr/bin/node

// Script that gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filepath = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error('Error fetching webpage:', error);
    return;
  }

  fs.writeFile(filepath, body, 'utf-8', function (err) {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log(`Webpage content successfully saved to ${filepath}`);
  });
});
