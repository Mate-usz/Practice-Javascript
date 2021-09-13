const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  // Possiamo aggiungere un elemento all'array tramite il metodo "push"
  // anche dichiarando la variabile tramite const.
  // Questa operazione è consentita poiché non stiamo effettuando una riassegnazione,
  // ma stiamo semplicemente mutando l'array a cui la variabile si riferisce
  students.push(student);
}

addStudent('Marco');
console.log(students);