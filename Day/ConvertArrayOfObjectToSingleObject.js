const arrayOfObject = [
    { id: '1', name: 'Alpha', gender: 'Male' },
    { id: '2', name: 'Bravo', gender: 'Male' },
    { id: '3', name: 'Charlie', gender: 'Female' },
];
// const toObject = (arr, key) => arr.reduce((a, b) => (console.log(a)),{});
// console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => (console.log(b)),{});
// console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => (console.log(a,b)),{});
// console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => (console.log({...a})),{});
// console.log(toObject(arrayOfObject, 'id'))

// const toObject = (arr, key) => arr.reduce((a, b) => (console.log({b})),{});
// console.log(toObject(arrayOfObject, 'id'))
// const info = { id: '1', name: 'Alpha', gender: 'Male' };
// console.log({ info })
// const info2 = {info}
// console.log(info2)

// const toObject = (arr, key) => arr.reduce((a, b) => (console.log({ a },{b})),{});
// console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => (console.log({ a },{...a},[b])),{});
// console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => (console.log({...a},[b[key]])),{});
// console.log(toObject(arrayOfObject, 'id'))
const toObject = (arr, key) => arr.reduce((a, b) => ({...a,[b[key]]:b}),{});
console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => ({ [b[key]]:b }),{});
// console.log(toObject(arrayOfObject, 'id'))
// const toObject = (arr, key) => arr.reduce((a, b) => ({...a,[b[key]]:b }),{});
// console.log(toObject(arrayOfObject, 'id'))
