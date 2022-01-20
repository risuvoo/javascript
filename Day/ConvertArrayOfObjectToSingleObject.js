const arrayOfObject = [
    { id: '1', name: 'Alpha', gender: 'Male' },
    { id: '2', name: 'Bravo', gender: 'Male' },
    { id: '3', name: 'Charlie', gender: 'Female' },
];

//method 1
    
// const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

// console.log(toObject(arrayOfObject, 'id'));

//method 2

const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));