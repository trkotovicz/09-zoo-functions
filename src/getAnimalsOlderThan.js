const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Função que busca (.find()) o animal informado com a propriedade name igual.
  return data.species.find((element) => element.name === animal)
    .residents.every((animaisVelhos) => animaisVelhos.age >= age);
  // Depois pega todo (.every()) animal que tenha a idade passada ou mais.
}

module.exports = getAnimalsOlderThan;
