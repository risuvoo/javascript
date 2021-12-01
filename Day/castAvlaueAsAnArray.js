//Cast a value as an array

const castArray = (value) => (Array.isArray(value) ? value : [value])

let a = 10;
let b = [10];

console.log(castArray(b));
