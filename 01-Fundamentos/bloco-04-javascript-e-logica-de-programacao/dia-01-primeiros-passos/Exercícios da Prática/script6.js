const horse = 'PEÃO'

switch (horse.toLowerCase()) {
  case ('cavalo'):
    console.log ('O movimento do cavalo forma um “L”');
    break;

  case ('rainha'):
    console.log ('A rainha se move como a torre e o bispo combinados.');
    break;

  case ('rei'):
    console.log ('Se move horizontalmente, verticalmente ou diagonalmente');
    break;

  case ('torre'):
    console.log ('A torre se move em linha reta horizontalmente e verticalmente');
    break;

  case ('bispo'):
    console.log ('O bispo se move em uma linha reta diagonalmente no tabuleiro.');
    break;

  case ('peão'):
    console.log ('De maneira geral, os peões se movem somente para frente, uma casa por vez. ');
    break;

  default:
    console.log ('Error')
}