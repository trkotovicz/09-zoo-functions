const data = require('../data/zoo_data');

// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis; ----->    RETORNA  operatingHours
// Se não for nem um animal e nem um dia, retorna igual o de cima;         ------>                  RETORNA  operatingHours
// DIA, retorna os horários para aquele dia e quais animais estarão disponíveis;       ------>      RETORNA  availableDay
// ANIMAL, deverá retornar um array com os dias em que ele estará em exibição.       ------>        RETORNA  availableAnimal

const days = Object.keys(data.hours); // Object.keys pega as chaves de hours, que no caso são os dias.
const animals = data.species.map((element) => element.name); // array de animais.

const availableDay = (day) => {
  const objetoDia = {};
  if (day === 'Monday') {
    objetoDia[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    objetoDia[day] = {
      officeHour:
          `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition:
      // verifica se o animal está disponível no dia informado e pega o nome do animal. O includes serve para ver se na propriedade availability o dia está incluso.
          data.species.filter((element) => element.availability.includes(day))
            .map((element) => element.name),
    };
  }
  return objetoDia;
};

const availableAnimal = (animal) => data.species
  .find((element) => element.name === animal).availability;
// verifica nas espécies o animal informado e mostra os dias que ele está disponível

/* Verifica o horário semanal de funcionamento do zoo e os animais disponíveis em cada dia.
O reduce irá percorrer e verificar os dias da semana, se o valor atual for segunda-feira, o zoo está fechado
Se não, o acumulador na posição do valor atual vai retornar:
officeHour: que vai ser a hora de abertura e de fechamento do currentValue,
exhibition: que vai filtrar as espécies e verificar se a posição do elemento da const days é igual (includes) ao currentValue do array species, e depois mapear em um novo array, o nome dos animais disponíveis no dia.
*/
const operatingHours = () => {
  const day = days.reduce((accumulator, currentValue) => {
    if (currentValue === 'Monday') {
      accumulator[currentValue] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      accumulator[currentValue] = {
        officeHour:
          `Open from ${data.hours[currentValue].open}am until ${data.hours[currentValue].close}pm`,
        exhibition:
          data.species.filter((element) => element.availability.includes(currentValue))
            .map((element) => element.name),
      };
    }
    return accumulator;
  }, {});
  return day;
};

function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    return availableDay(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return availableAnimal(scheduleTarget);
  }
  return operatingHours();
}

/*
Referência
.includes
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Tive ajuda do Imar Mendes para realização do exercício
 */

module.exports = getSchedule;
