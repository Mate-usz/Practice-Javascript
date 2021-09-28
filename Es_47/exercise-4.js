const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Sarebbe stato possibile risolvere il problema
// iterando su person se fosse stato creato con Map
// e avente coppie chiave-valore
// person = new Map(); person.set(...);

// for (let [key, value] of person) {
//   console.log(`${key}: ${value}`);
// }