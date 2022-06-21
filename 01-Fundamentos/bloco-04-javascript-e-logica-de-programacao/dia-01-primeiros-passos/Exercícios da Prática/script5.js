const num1 = 60;
const num2 = 60;
const num3 = 60;

let sumNumbers = (num1 + num2 + num3)

let positive = num1 > 0 && num2 > 0 && num3 > 0;

if (positive) {
  if (sumNumbers === 180) {
    console.log (true)
  } else {
    console.log (false)
  }
} else {
  console.log ('error')
}