// From arr
const arr = [1, 2, 3, 4, 5, 6]

// Create a variable x which receives the position 0
// Create a variable y which receives the rest of the array
const [x, ...y] = arr

console.log(x) // 1
console.log(y) // [2 ,3 ,4, 5, 6]

// From object
const user = {
  name: 'Diego',
  age: 23,
  address: {
    city: 'Rio do Sul',
    state: 'SC',
    country: 'Brazil',
  },
}

// Create a variable user2 which contains all the user data but the name is Gabriel
const user2 = {...user, name: 'Gabriel'}
console.log(user2)

// Create a variable user3 which contains all the user data but the city is Lontras
const user3 = {...user, address: { ...user.address, city: 'Lontras'}}
console.log(user3)