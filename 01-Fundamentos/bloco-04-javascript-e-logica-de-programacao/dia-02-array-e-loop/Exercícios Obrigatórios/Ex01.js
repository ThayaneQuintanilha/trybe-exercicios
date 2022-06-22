// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log (numbers[index])
// }


// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];

// }
// console.log (soma)


// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;
// let div = 0;


// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
//   div = soma / numbers.length
// }
// console.log (div)


// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;
// let div = 0;


// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
//   div = soma / numbers.length
// }

// if (div > 20) {
//   console.log ("valor maior que 20")
// } else {
//   console.log ("valor menor ou igual a 20")
// }

// console.log (div)

// 5- 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let comparar = numbers[0];

// for (i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > comparar) {
//     comparar = numbers[i]
//   }
// }
// console.log (comparar)


// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let results = 0;
// 
// for (index = 0; index < numbers.length; index += 1) {
  // if (numbers[index] %2 !== 0) {
    // 
    // results++
  // } 
// }
// if (results !== 0){
  // console.log (results)
// }
// else {
  // console.log ("nenhum valor ímpar encontrado")
// }


// 7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// count = numbers[0];

// for (i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < count) {
//     count = numbers[i]
//   }
// }
// console.log (count)

// 8- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// for (index = 0; index < numbers.length; index += 1) {
//   console.log (numbers[index])
// }

// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// // let div = numbers[0]

// for (index = 0; index < numbers.length; index += 1) {
//   console.log (numbers[index] / 2)
// }