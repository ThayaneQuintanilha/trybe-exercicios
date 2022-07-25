// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeName = (name, index) => index.filter((estudante) => estudante !== name);

// const newListStudent = removeName('Wilson', arrayMyStudents);
// console.log(newListStudent);


// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`)

// console.log(fullNames);

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listaProdutos, listaPrecos) => listaProdutos.map((produtos, indice) => {
  return {[produtos]: listaPrecos[indice]}
})

const listProducts = updateProducts(products, prices);
console.log(listProducts);