#!/usr/bin/node

// Script that gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

function getContent(url, filepath) {
  request(url, { encoding: 'utf8' }, (error, response, body) => {
    if (error) {
      console.error('Error fetching webpage:', error);
      return;
    }
    fs.writeFile(filepath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log(`Webpage content successfully saved to ${filepath}`);
    });
  });
}

getContent(url, filePath);
