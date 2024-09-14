
let num = [1, 2, 3]
num[0] = 10
console.log(num) // [10, 2, 3]

//-----------------------------------------------

let num = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(num == numbersCopy) // false

//-----------------------------------------------

let userOne = {
    name: 'Firmansyah',
    age: '20',
    negara: 'Indonesia'
}
let userTwo = {
    name: 'Firmansyah',
    age: '20',
    negara: 'Indonesia'
}
console.log(userOne == userTwo) // false

//-----------------------------------------------

let numbers2 = num 
console.log(num == numbers2) // true

//-----------------------------------------------

let userOne2 = {
    name: 'Firmansyah',
    age: '20',
    negara: 'Indonesia'
}
let userTwo2 = userOne2
    console.log(userOne2 == userTwo2)  // true