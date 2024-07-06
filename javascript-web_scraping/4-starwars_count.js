#!/usr/bin/node

// This script prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body);
  const count = films.results.filter((film) => film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)).length;
  
  console.log(count);
});
