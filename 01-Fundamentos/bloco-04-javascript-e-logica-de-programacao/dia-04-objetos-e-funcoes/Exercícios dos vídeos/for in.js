let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let names2 in names) {
  console.log(names[names2]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key, car[key]);
}

// FOR IN PERCORRE AS POSIÇÕES
// FOR OF PERCORRE OS VALORES