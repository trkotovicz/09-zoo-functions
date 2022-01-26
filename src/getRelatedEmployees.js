const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // verifica se tem algum manager com id igual ao informado no parâmetro
  return managers.some((manager) => id === manager);
}

function getRelatedEmployees(managerId) {
  // esse if é para verificar se o isManager é falso, se for falso lança o erro
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  // função para filtrar todos os emplyees, e dentro dos employees filtrados vou encontrar o elemento (gerente) que seja igual ao parâmetro informado (managerId)
  const empregados = data.employees.filter((employee) =>
    employee.managers.find((gerente) => gerente === managerId));

  // mapeia os empregados daquele gerente e retorna um array (map) com nome e sobrenome de cada elemento
  return empregados.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
}

// Recebi ajuda do Pedro Fideles para chegar no resultado

module.exports = { isManager, getRelatedEmployees };
