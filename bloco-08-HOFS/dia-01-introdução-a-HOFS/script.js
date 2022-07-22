// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }

// const initialSum = sumFixAmount(15)
// console.log(initialSum(5));

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);


// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(numberGenerator());

// const sum = (number1, number2) => number1 + number2;

// const calcule = (result) => result(5,9)
// console.log(calcule(sum));

// const wake = () => 'Acordando!!';
// const coffee = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';

// const doingThings = (result) => result();

// // doingThings é uma HOF, wake/coffee/sleep são callbacks.
// // A HOF recebe a função callback como parâmetro.
// console.log(doingThings(wake)); 