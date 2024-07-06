// This program shows the title of a Star Wars movie with a given number.

#!/usr/bin/node

const request = require('request');

request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (err, response, body) => {
  if (err) {
    return console.log(err);
  }
  console.log(JSON.parse(body).title);
});
