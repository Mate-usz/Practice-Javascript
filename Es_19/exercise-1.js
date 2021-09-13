const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';
console.log(person1);
console.log(person2);

// Risposta
//
// Quando andiamo ad assegnare a person2 person1, quel che succede
// è che non viene creata una copia ma semplicemente la variabile
// person2 punta al valore di person1.
//
// Invece per copiarlo/clonarlo possiamo utilizzare il metodo "Object.assign({}, person1);"