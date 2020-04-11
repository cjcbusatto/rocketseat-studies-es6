const users = [
  {name: 'Diego', age: 23, company: 'Rocketseat'},
  {name: 'Gabriel', age: 15, company: 'Rocketseat'},
  {name: 'Lucas', age: 30, company: 'Facebook'},
]

// Create a variable ages containing the array of users' ages
const ages = users.map((user) => user.age)
console.log(ages) // [23, 15, 30]

// Create a variable containing:
// - the employees of Rocketseat with age greater than 18
const employees = users.filter(
  (user) => user.company === 'Rocketseat' && user.age > 18,
)
console.log(employees) // [{name: 'Diego', age: '23', company: 'Rocketseat'}]

// Using find, look for a user working at Google
const googleEmployee = users.find((user) => user.company === 'Google')
console.log(googleEmployee) // undefined

// Multiply the age of all users by 2 and then apply a filter in the users which
// are younger than 50
const res = users
  .map(({name, age, company}) => ({name, age: age * 2, company}))
  .filter((user) => user.age < 50)
console.log(res); // [{name: 'Diego', age: 46, company: 'Rocketseat'}, {name: 'Gabriel', age: 30, company: 'Rocketseat'}]