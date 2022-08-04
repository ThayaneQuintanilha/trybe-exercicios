// const meuArray = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// const findNumbers = numbers.find((number) => number % 5 === 0);

// console.log(findNumbers);

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

// const array = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// array.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// })

// meuArray.forEach((elemento) => {
//   if (elemento % 2 === 0) {
//     console.log(`${elemento} é divísivel por 2!`);
//   }
// });

// meuArray.forEach((element) => {
//   if (element % 2 === 0) {
//     console.log(`${element} é divísivel por 2!`);
//   }
// })

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const multipliesFor2 = (element) => {
// //   console.log(`${element} * 2: ${element * 2}`);
// // };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const namesToUppercase = ((name, index) => {
//   names[index] = name.toUpperCase();
// })

// names.forEach(namesToUppercase)
// console.log(names);
// [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList)

// FIND ----------------------------

const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verificarNumeroPar = (number) => number % 2 === 0;
// const seForPar = numbers.find(verificarNumeroPar)
// console.log(seForPar); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2);

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())