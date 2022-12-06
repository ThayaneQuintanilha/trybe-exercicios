const bmi = require('./bmi');
const readlineSync = require('readline-sync');

const weight = readlineSync.questionInt("What's your weight?");
const height = readlineSync.questionFloat("What's your height?");

const result = bmi.calculaImc(weight, height).toFixed(2);

console.log(result);
