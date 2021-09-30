
  // Il tipo symbol viene omesso nella conversione in JSON
  //[Symbol("firstName")]: 'Mario',
  //[Symbol("lastName")]: 'Rossi',
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function replacer(key, value) {
  if (typeof value !== 'number' && 
      typeof value !== 'object') {
    return undefined;
  }
  return value;
}

const json = JSON.stringify(person, replacer);

console.log(json); // Should return: { id: 1, age: 25 }