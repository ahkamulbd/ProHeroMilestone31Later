const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0);
//console.log(fives);

const fivesAll = numbers.filter(num => num % 5 === 0);
//console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'tab', price: 25000 },
    { id: 3, name: 'desktop', price: 35000 },
    { id: 4, name: 'camera', price: 15000 },
    { id: 5, name: 'mobile', price: 20000 },
]
const cheap = products.find(product => product.price < 30000);
const cheapAll = products.filter(product => product.price < 30000);

console.log(cheap);
console.log(cheapAll);