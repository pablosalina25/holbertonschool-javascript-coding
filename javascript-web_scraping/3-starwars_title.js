// This program shows the title of a Star Wars movie with a given number.

#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(apiUrl, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  const movieData = JSON.parse(response.body);
  console.log(movieData.title);
});
