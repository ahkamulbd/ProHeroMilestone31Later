// const numbers = [2, 8, 4, 6, 3];
// const output = [];

// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }
//console.log(output);

// // With Function:
// const numbers = [2, 8, 4, 6, 3];
// function getDoubles(numbers) {   // any parameter can be set e.g. number or parameter
//     const output = [];

//     for (const number of numbers) {
//         const doubled = number * 2;
//         output.push(doubled);
//     }
//     return output;
// }
// const result = getDoubles(numbers);
//console.log(result);


// With Function in calling Function:
const numbers = [2, 8, 4, 6, 3];
function getDoubles(numbers) {   // any parameter can be set e.g. number or parameter
    const output = [];

    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleIt(number) {
    return number * 2;
}

//function doubleIt = number => number * 2;  // Arrow Function is not working i.e. wrong sign shown on '='

const result = getDoubles(numbers);
console.log(result);

// With map Function 
const numbersNew = [1, 2, 3, 4, 5];
const makeDouble = numbersNew.map(doubleIt);
//const makeDoubleDirect = numbersNew.map(number = number * 2);  // Arrow Function not working

console.log(makeDouble);
//console.log(makeDoubleDirect);

const fiveTimes = [10, 20, 30, 40, 50].map(x => x * 5);
console.log(fiveTimes);