// This program shows the title of a Star Wars movie with a given number.

#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = 'https://swapi-api.hbtn.io/api/films/' + movieId + '/';

function fetchMovieTitle(apiUrl) {
  request.get(apiUrl, (err, res, body) => {
    if (err) {
      console.error(err);
      return;
    }
    const movieDetails = JSON.parse(body);
    console.log(movieDetails.title);
  });
}

fetchMovieTitle(apiUrl);
