const input = document.querySelector('#input');
const pokeImg = document.querySelector('#pokemon-image');

const apiPokemon = async (name) => {
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const jsonApi = await api.json();
  const valor = input.value;
  console.log(jsonApi);
};

apiPokemon('ditto')