const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (let item of Object.values(person)) {
  console.log(item);
}