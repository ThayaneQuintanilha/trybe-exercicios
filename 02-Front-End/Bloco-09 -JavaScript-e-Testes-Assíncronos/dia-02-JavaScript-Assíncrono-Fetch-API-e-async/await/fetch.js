function getPokemon() {
  fetch('url').then(response => response.json()).then(data => console.log(data))
}

async function getPokemon1() {
  const response = await fetch('url');
  const json = await response.json();
  const pokemon = {
    name: json.name,
    imageURL: json.sprites.front_default
  }
  console.log(pokemon);
}