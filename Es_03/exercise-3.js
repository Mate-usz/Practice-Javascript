const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  // ...
  // Non possiamo assegnare direttamente un nuovo elemento alla variabile
  // perché ci restituirà errore ma dobbiamo utilizzare i metodi che offre.
  // Non è possibile riassegnare un valore a 'students' dato che è const, ma
  // possiamo modificare i suoi valori.
  students.push(student);
}

addStudent('Marco');
console.log(students);