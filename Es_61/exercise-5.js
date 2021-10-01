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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) =>{
    setTimeout( () => {
      let person = persons.find(p => p.id === id);
      
      if(person){
        return resolve(person);
      }
  
      return reject('Questa persona non esiste!');
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      let job = jobs.find(j => j.id === id);
  
      if(job){
        return resolve(job.jobTitle);
      }
  
      return reject('Non esiste lavoro per questo id!');
    }, 500);
  });
}

let res1 = fetchPersonById(1);
let res2 = fetchJobById(5);
Promise.race([res1, res2])
  .then(res => console.log(res))
  .catch(err => console.log(err));