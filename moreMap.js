const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
//console.log(half);

const double = numbers.map(d => d * 2);
//console.log(double);

// Using map in string

const friends = ['Abu Jaki', 'Abu Malek', 'Abu Khalek', 'Abu Ubayed', 'Shafiul Alam', 'Mazhar Polash'];
const firstLetters = friends.map(friend => friend[0]);
//console.log(firstLetters);

const nameLengths = friends.map(name => name.length);
//console.log(nameLengths);

// map with objects

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'tab', price: 25000 },
    { id: 3, name: 'desktop', price: 35000 },
    { id: 4, name: 'camera', price: 15000 },
    { id: 5, name: 'mobile', price: 20000 },
]

//const items = products.map(product => console.log(product.name));
//console.log(items);     // output : undefined

const items = products.map(p => p.price);
//console.log(items);




