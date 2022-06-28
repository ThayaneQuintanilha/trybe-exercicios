// - 1
document.getElementsByTagName('p')[1].innerText = 'Em 2 gostaria de estar em uma grande empresa, continuar aprendendo outras linguagem e frameworks.';

// - 2
document.getElementsByClassName('main-content')[0].style = 'background-color: green;'

// - 3
document.getElementsByClassName('center-content')[0].style = 'background-color: white'

// - 4
document.getElementsByTagName('h1')[0].innerText = 'Manipulação de Elementos'

// - 5
let tagP = document.getElementsByTagName('p');
for (let uppercase = 0; uppercase < tagP.length; uppercase += 1) {
  tagP[uppercase].style = 'text-transform: uppercase;'
}

// - 6
let printP = document.getElementsByTagName('p');
for (let index = 0; index < printP.length; index++) {
  console.log(printP[index].innerText);
}