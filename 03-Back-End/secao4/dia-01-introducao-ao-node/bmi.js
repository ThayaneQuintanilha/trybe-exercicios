function calculaImc(weight, height) {
  return weight / (height*height);
};

module.exports = { calculaImc };
