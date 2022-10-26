const users = [
    { id: 1, name: 'abul', job: 'doctor' },
]

//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'doctor' },
        { id: 2, name: 'dabul', job: 'mastan' },
    ]
}
//console.log(data.data[1].job);

const user = {
    id: 5001,
    name: 'Thomas',
    address: {
        street: {
            first: '10/A',
            second: '20/B',
            third: '30/C'
        },
        postOffice: 'Ctg',
        city: 'Chattogram'
    }
}
console.log(user.address.street.third);