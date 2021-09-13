const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
for(prop of Object.keys(person)){
  console.log(`${prop}: ${person[prop]}`);
}

// Senza Object.keys
/*
for(prop in person){
  console.log(`${prop}: ${person[prop]}`);
}
*/