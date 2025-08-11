const numbers = [23, 45, 56, 43, 11]
// console.log(numbers.sort((a, b) => a-b));
let num = numbers.sort(function(a, b){return b - a})
console.log(num);