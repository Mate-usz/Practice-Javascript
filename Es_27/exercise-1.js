const person = {
  firstName: 'John',
  lastName: 'Doe'
};

// Possiamo utilizzare il punto interrogativo '?' serve a punto
// a evitare eventuali errori in caso le proprietà alle quali si
// vuole accedere non esistano.

console.log(person?.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person?.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined