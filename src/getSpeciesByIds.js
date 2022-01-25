const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Se o parâmetro for indefinido, retorna array vazio.
  if (ids === undefined) {
    return [];
  }
  // Caso contrário, filtra (.filter()) o array 'species' e procura (.find()) o elemento com o id informado. Retorna o elemento inteiro (objeto).
  return data.species.filter((specie) => ids.find((id) => (specie.id === id)));
  // O spread (...) serve para caso de informarmos mais de um id, retornar todos juntos em um único array.
}

module.exports = getSpeciesByIds;
