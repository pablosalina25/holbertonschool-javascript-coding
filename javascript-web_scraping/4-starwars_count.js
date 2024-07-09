#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');
const apiUrl = process.argv[2];
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body).results;
  let count = 0;
  data.forEach(film => {
    film.characters.forEach(characterUrl => {
      if (characterUrl.includes('18')) {
        count++;
      }
    });
  });
  console.log(count);
});
