// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'melancia', 'abacaxi'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['prata', 'doce', 'descascado'];

// const fruitSalad = (fruit, additional) => {
//   return fruit + additional
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;

// console.log(workDays, weekend);

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: nome, b: turma, c: materia } = student;

// console.log(nome, turma, materia);


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const { name, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos

const result = `"Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
console.log(result);
