// 6 way to shallo copy an array

const a = [1, 2, 3, 4, 5, 6];

//method 1
// const cloneArray = (arr) =>  arr.slice()
// let result = cloneArray(a);
// console.log(result)

//method 2
// const cloneArray = (arr) => [...arr]
// let result = cloneArray(a)
// console.log(result)

//method 3
// const cloneArray = (arr) => Array.from(arr) // syntex:Array.from(arr,arrValue=>{return anything...}
// let result = cloneArray(a)
// console.log(result)

//method 4 
// const cloneArray = (arr) => arr.map((x) => x)
// const result = cloneArray(a)
// console.log(result)

//method 5 
// const cloneArray = (arr) => JSON.parse(JSON.stringify(arr));
// const result = cloneArray(a)
// console.log(result)

// method 6
const cloneArray = (arr) => arr.concat([])
const result = cloneArray(a)
console.log(result)
