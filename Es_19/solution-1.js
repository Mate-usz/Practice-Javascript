const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';

// Modificando l'oggetto person2 viene modificato anche l'oggetto person1.
// Questo avviene perché a person2 è stato assegnato il riferimento di person1
// pertanto entrambi gli oggetti puntano alla stessa locazione di memoria
console.log(person1);
console.log(person2);