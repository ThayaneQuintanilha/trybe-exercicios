// // 1 - 
// // Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let soma = 0;

// for (index = 1; index <= 50; index += 1) {
//   soma += index
//   if (index === 50) {
//     console.log(soma);
//   }
// }
// console.log (soma)

// *****************************

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let count = 0;
// // let result = true;

// for (index = 2; index <= 150; index += 1) {
//   if (index %3 === 0) {

//     count += 1

//     if (count === 50) {
//       // result === true
//       console.log('Mensagem secreta');
//     }
//   }
// }
// console.log('Numeros divisíveis',count);

// *****************************

// 3- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'trybe'
// let word2 = [];

// for (index = word.length -1; index >= 0; index -= 1) {
//   word2.push(word[index]);
// }
// console.log(word2);


// 4 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let array = ["pedra, papel, tesoura"];
// let player1;
// let player2;

// player1 = array[Math.random * 2]
// player2 = array[Math.random * 2]

// for (let index = 0; index < array.length; index += 1) {
//   for (let index2 = 0; index2 < array.length; index2 += 1){
//     if (array[index] === array[index2[1]]) {
//     } 
//     }
//   }