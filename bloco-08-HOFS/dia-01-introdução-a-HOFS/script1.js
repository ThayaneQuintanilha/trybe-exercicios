// // EXERCÍCIOS DA AULA PRÁTICA

// const newEmployees = () => {
//   const employees = {
//     id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const tei = (eu) => `Fala tu, você é a ${eu}?`
// const thigas = (eu) => `Thiago tu é muito doido, quem disse isso foi a ${eu}.`
// const ritta = (eu) => `A ${eu}, disse que o ritta é muito nerd!`

// const cumprimentar = (como) => {
//   const eu = 'Thay';
//   return como(eu)
// }

// console.log(cumprimentar(ritta));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDE_ANSWERS = ['A', 'N', 'B', 'D', 'A', 'C', 'N', 'A', 'D', 'B'];

// const compareResult = (gabarito, resposta) =>{
//     let soma = 0;
//     for(let i in gabarito){
//         let first = gabarito[i];
//         for(let ind in resposta){
//             if(i === ind){
//             resposta[ind] === first ? soma += 1 : soma -0.5;
//             }
//         }
//     }
//     return soma;
// };

console.log(compareResult(RIGHT_ANSWERS, STUDE_ANSWERS))
