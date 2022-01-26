const data = require('../data/zoo_data');

function countEntrants(entrants) {
  entrants.reduce((accumulator, currentValue) => {
    if (currentValue.age < 18) {
      accumulator.child += 1;
    } else if (currentValue.age < 50) {
      accumulator.adult += 1;
    } else {
      accumulator.senior += 1;
    }
    return accumulator;
  // aqui eu coloco o parâmetro para o acumulador começar sendo esse objeto com as propriedades que preciso. Cada vez que o currentValue entrar em uma condição de idade, ele será adicionado na propriedade respectiva.
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const countedEntrants = countEntrants(entrants);
  return ((countedEntrants.child * data.prices.child)
  + (countedEntrants.adult * data.prices.adult)
  + (countedEntrants.senior * data.prices.senior));
}

/*
Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.
Ou seja, ele vai acessar todas as chaves (propriedades) do objeto e, se o objeto tiver o 'length' igual a 0, será um objeto vazio.
*/

module.exports = { calculateEntry, countEntrants };
