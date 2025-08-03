console.log("Hello from algo playground!");

function sumTo(n) {
    return n > 1 ? n + sumTo(n - 1) : n;
}

// Arithmetic series formula: sum of first n natural numbers
// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
function fib(n) {
    return n > 1 ? fib(n-1) + fib(n-2) : 1;
}

function power(base, exp) {
    return exp > 0 ? base * power(base, exp-1) : 1;
}

var arr = [2, 2, 3, 10];
// console.log(arr.filter((x) => x < 7));
// console.log(arr.reduce((acc, x) => acc * x));

function productOfArray(arr) {
    return arr.length > 0 ? arr.shift() * productOfArray(arr) : 1;
}

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// function contains(obj, value) {
//     for (let key in obj) {
//         if (obj[key] === value) return true;
//         if (typeof obj[key] === 'object') return contains(obj[key], value);
//     }
//     return false;
// }

// console.log(contains(nestedObject, 'foo')); // true

// function totalIntegers(arr) {
//     // let count = 0;
//     // arr.forEach((x) => {
//     //     if (typeof x === 'number') count++;
//     //     if (Array.isArray(x)) count += totalIntegers(x);
//     // });
//     // return count;
//     return arr.reduce((acc, x) => {
//         if (typeof x === 'number') acc++;
//         if (Array.isArray(x)) acc += totalIntegers(x);
//         return acc;
//     }, 0);
// }

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); 

// function sumSquares(arr) {
//     return arr.reduce((acc, x) => {
//         if (typeof x === 'number') acc += x * x;
//         if (Array.isArray(x)) acc += sumSquares(x);
//         return acc;
//     }, 0);
// }

// console.log(sumSquares([10,[[10],10],[10]]));

function replicate(times, value) {
    if (times <= 0) return [];    
    return [value].concat(replicate(times - 1, value));
}

console.log(replicate(5, 'foo')); // ['foo', 'foo', 'foo', 'foo', 'foo']