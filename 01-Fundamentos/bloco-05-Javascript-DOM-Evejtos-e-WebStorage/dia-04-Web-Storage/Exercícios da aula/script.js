let blue = document.getElementsByClassName('blue')[0];
let red = document.getElementsByClassName('red')[1];

let btn = document.getElementsByClassName['btn']
let resetButton = document.querySelector('.reset-color');

// SELECIONAR A COR , CRIA UMA BORDA 2PX SOLID BLACK 

blue.addEventListener("click", function(){
  blue.style.border = '2px solid black'
})

resetButton.addEventListener("click", function(){
  blue.style.border = '0px'
})
