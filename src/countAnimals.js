const data = require('../data/zoo_data');

function countAnimals(animal) {
  // Se receber um parâmetro vazio, deve retornar um objeto com todas as espécies e a quantidade de residentes de cada uma. O forEach varre o array das especieis e pega os parâmetros 'nome' e 'residentes' de todos os animais e salva na variável de objeto.
  if (animal === undefined) {
    const retornaObjeto = {};
    data.species.forEach((animais) => { retornaObjeto[animais.name] = animais.residents.length; });
    // atribui uma propriedade ao objeto com seu respectivo valor, no caso a propriedade é o animal e o valor é o número de residentes
    return retornaObjeto;
  }

  const findSpecie = data.species.find((especie) => especie.name === animal.specie);
  // encontra a espécie informada e se a propriedade sexo não for informada, retorna o número de residentes daquela espécie
  if (animal.sex === undefined) {
    return findSpecie.residents.length;
  }
  // caso seja informado o sexo do  animal, ele filtra dentro dos residentes encontrados os animais daquele sexo e retorna o número
  return findSpecie.residents.filter((residente) => residente.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'giraffes' }));
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

// return data.species.map((animais) => `${animais.name}: ${animais.residents.length}`);
// está retornando um array, preciso que retorne um objeto

module.exports = countAnimals;
