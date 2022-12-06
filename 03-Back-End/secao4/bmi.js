function calculaImc(weight, height) {
  return weight / (height*height);
};

// function questionImc() {
//   const weight = readlineSync.questionInt("What's your weight?")
//   const height = readlineSync.questionInt("What's your height?")

//   const result = calculaImc(weight, height);
//   return result;
// }

module.exports = { calculaImc };
