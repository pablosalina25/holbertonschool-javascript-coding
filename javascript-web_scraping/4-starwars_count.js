// This program shows the number of movies that include the character "Wedge Antilles".

#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const targetCharacterId = '18';

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  let characterCount = 0;
  data.results.forEach(movie => {
    movie.characters.forEach(characterUrl => {
      if (characterUrl.includes(targetCharacterId)) {
        characterCount += 1;
      }
    });
  });
  console.log(characterCount);
});
