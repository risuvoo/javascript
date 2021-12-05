// check two array value is equal
const a = [1, 2, 3, 4];
const b = [1, '2', 3, 4];
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort())
console.log(isEqual(a,b))