// Simple destructuring
const company = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC',
  },
}

// Use destructuring to transform name, city and state in variables
const { name, address: { city, state } } = company;
console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(state); // SC

// Parameters destructuring
// function showInfo(user){
//     return `${user.name} is ${user.age} y/o.`;
// }

function showInfo({name, age}){
    return `${name} is ${age}`;
}
console.log(showInfo({name: 'Diego', age: 23})) // Diego is 23