const pushNumbers = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumbers(numbers, 1), 3000)
pushNumbers(numbers, 1);

console.log(numbers);