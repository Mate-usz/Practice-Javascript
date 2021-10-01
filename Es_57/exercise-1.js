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
  // code here
  return new Promise((resolve, reject) => {
    setTimeout( () =>{
      resolve(persons.find(p => p.id === id));
    }, 1000);
  });
}

// code here

// codice per debugging
// scrive in console la persona con l'id ricercato
// dopo che la Promise conclude la sua esecuzione
async function fetchPersonAux(id){
  let person = await fetchPersonById(id);
  console.log(person);
}

fetchPersonAux(1);