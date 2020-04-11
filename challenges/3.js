// Convert the following functions into arrow functions
const arr = [1, 2, 3, 4, 5]

// arr.map(function(item) {
//  return item + 10;
// });
const arr2 = arr.map((item) => item + 10)

// function printUserAge(user) {
//   return user.age
// }
const printUserAge = ({age}) => age
console.log(printUserAge({name: 'Diego', age: '23'}))

const name = 'Diego'
const age = 23
// function showUser(name = 'Diego', age = 18) {
//     return { name, age };
// }
const printUser = (name = 'Diego', age = 18) => ({name, age})

console.log(printUser(name, age))
console.log(printUser(name))

//  const promise = function() {
//      return new Promise(function(resolve, reject)){
//          return resolve();
//      }
//  }
const promise = () => new Promise((resolve) => resolve("Refactored function"))
promise().then(console.log) // Refactored function
