// const totalPrice = items.reduce((total, item) => {
//   return total + item.price
// }, 0)

const women = [
  { fullName: 'Margaret Hamilton', email: 'magarethamilton@mulheres.br' },
  { fullName: 'Larissa Machado', email: 'anitta@mulheres.com.br' },
  { fullName: 'Frida Kahlo', email: 'fdKahlo@mulheres.br' },
  { fullName: 'Ada Lovelace', email: 'adalovelace@mulheres.br' },
];

const newWoman = women.reduce((acumulador, item) => {

  acumulador[item.fullName] = item.email

  return acumulador
}, {})

console.log(newWoman);