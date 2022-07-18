const sum = require('./script');

describe('Exercício 1', () => {
  it('Retorna a soma de 4 + 5 é 9', () => {
    expect(sum(4,5)).toEqual(9)
  })
}) 

describe('Exercício 2', () => {
  it('Retorna a soma de 0 + 0 é 0', () => {
    expect(sum(0,0)).toEqual(0)
  })
}) 