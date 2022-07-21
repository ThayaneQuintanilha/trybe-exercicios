function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  try {
    sum (a, b);
    return a + b;
  } catch (error){
    return error.message
  }
  // return sum;
}

module.exports = sum;