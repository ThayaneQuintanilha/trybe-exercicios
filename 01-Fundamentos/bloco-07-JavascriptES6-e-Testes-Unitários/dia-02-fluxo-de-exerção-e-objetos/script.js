const sum = (value1, value2) => value1 + value2;
console.log(sum(2,3));

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const soma = (value1, value2) => {
  try {
    verifyIsNumber(value1,value2);
    return value1 + value2
  }
  catch (erro) {
    return erro.message;
  }
}

console.log(soma(5, 5));

