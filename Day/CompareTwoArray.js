//match two array value or index
const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];

// method 1
// const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// method 2
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v=== b[i]);
console.log(isEqual(a, b));