//way 1
/* const arrayOfStringToNumber = (arr) => arr.map(Number);
console.log(arrayOfStringToNumber(['2', '3', '4'])); */

//way 2
const arrayOfStringToNumber = (arr) => arr.map((i) => console.log(`without convert: ${typeof (i)}, with convert: ${typeof (+i)}, main item: ${i}`));
Note:"When use plus operator (+) before value then vule convert a Number"
arrayOfStringToNumber(['2', '3', '4']);

