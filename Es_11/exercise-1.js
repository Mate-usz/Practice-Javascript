// Dato che l'operazione è direttamente un return
// possiamo togliere le parentesi e il return
const sum = (a, b) => a + b;

const log = (value) => console.log(value);

log(sum(2, 5));