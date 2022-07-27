// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'melancia', 'abacaxi'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['prata', 'doce', 'descascado'];

// const fruitSalad = (fruit, additional) => {
//   return fruit + additional
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);