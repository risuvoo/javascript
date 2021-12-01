// Check if an array is empty

const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0

let a = [];
let b = [10];

console.log(isEmpty(a));
console.log(isEmpty(b));


