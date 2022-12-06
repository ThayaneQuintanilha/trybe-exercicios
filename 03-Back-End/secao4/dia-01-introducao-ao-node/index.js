const bmi = require('./bmi');
const readlineSync = require('readline-sync');

const weight = readlineSync.questionInt("What's your weight?");
const height = readlineSync.questionFloat("What's your height?");

const result = bmi.calculaImc(weight, height).toFixed(1);

switch(result > 0) {
  case result < 18.5:
    console.log('Abaixo do peso (magreza)')
    break;
  case result > 18.5 && result < 24.9:
    console.log('Peso normal')
    break;
  case result > 25.0 && result < 29.9:
    console.log('Acima do peso (sobrepeso)')
    break;
  case result > 30.0 && result < 34.9:
    console.log('Obesidade grau I')
    break;
  case result > 35.0 && result < 39.9:
    console.log('Obesidade grau II')
    break;
  case result > 40.0:
    console.log('Obesidade graus III e IV')
    break;
  default:
    console.log(result);
    break;
}
