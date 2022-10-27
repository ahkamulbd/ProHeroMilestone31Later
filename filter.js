const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const bigNums = numbers.filter(number => number > 20);
//console.log(bigNums);

const tinyNumber = numbers.filter(number => number < 20);
//console.log(tinyNumber);

const even = numbers.filter(n => n % 2 === 0);
//console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'tab', price: 25000 },
    { id: 3, name: 'desktop', price: 35000 },
    { id: 4, name: 'camera', price: 15000 },
    { id: 5, name: 'mobile', price: 20000 },
]
const expensive = products.filter(product => product.price > 30000);
console.log(expensive);
