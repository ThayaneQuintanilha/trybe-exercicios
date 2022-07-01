document.getElementById('header-container').style = 'background-color: green;'

var colorH3 = document.querySelectorAll('.emergency-tasks div h3');
for (let index = 0; index < colorH3.length; index++) {
  colorH3[index].style = 'background-color: purple;'
}

document.querySelectorAll('.emergency-tasks')[0].style = 'background-color: salmon;'

document.querySelectorAll('.no-emergency-tasks')[0].style = 'background-color: yellow;'

var colorH3Black = document.querySelectorAll('.no-emergency-tasks div h3');

for (let index = 0; index < colorH3Black.length; index++) {
  colorH3Black[index].style = 'background-color: black;'
}

var rodape = document.querySelectorAll('#footer-container div');

for (let index = 0; index < rodape.length; index++) {
  rodape[index].style = 'background-color: darkgreen; padding: 20px 0; display: flex; justify-content: center'
}