const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // primeiro procura os funcionários e compara a id com a id informada.
  // depois acessa as informações da primeira espécie de animal que o funcionário cuida.
  const findEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  // compara a id do animal retornado com a id das espécies.
  // depois verifica qual animal é o mais velho dessa espécie.
  const findAnimal = data.species.find((animal) => animal.id === findEmployee).residents
    .sort((a, b) => b.age - a.age);

  return [`${findAnimal[0].name}`, `${findAnimal[0].sex}`, findAnimal[0].age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); // 0938aa23-f153-4937-9f88-4858b24d6bce (lionId)

module.exports = getOldestFromFirstSpecies;
