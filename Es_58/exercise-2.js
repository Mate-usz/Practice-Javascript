const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = persons.find(item => item.id === id);
      
      if(person) return resolve(person);

      return reject("Questa persona non fa parte di questo gruppo!");
    }
    , 1000);
  });
}

fetchPersonById(6).then((person) => console.log(person)).catch(err => console.log(err));

// Con la funzione usata nell'esercizio precedente sarebbe bastato
// usare il metodo catch dopo la chiamata a fetchPersonAux