//way 1
/* const arrayOfStringToNumber = (arr) => arr.map(Number);
console.log(arrayOfStringToNumber(['2', '3', '4'])); */

//way 2
const arrayOfStringToNumber = (arr) => arr.map((i)=>console.log(`without convert: ${typeof(i)}, with convert: ${typeof(+i)}, main item: ${i}`));
arrayOfStringToNumber(['2', '3', '4']);

