const fs = require('fs').promises;

async function simpsonsData() {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(response);

  const result = data.map((e) => `${e.id} - ${e.name}`)

  console.log(result);
}

console.log(simpsonsData());