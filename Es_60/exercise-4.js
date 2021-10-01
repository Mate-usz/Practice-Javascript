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
    resolve(persons.find(p => p.id === id))
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) =>{
    let job = jobs.find(j => j.id === id);
    resolve(job.jobTitle)
  });
}

let res1 = fetchPersonById(1);
let res2 = fetchJobById(2);
Promise.all([res1, res2]).then((res) => console.log(res[0], res[1]));