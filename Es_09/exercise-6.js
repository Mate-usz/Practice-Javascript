function getKeys(obj) {
  // ...
  let arr = [];
  for(let prop in obj)
    arr.push(prop);
  
  return arr;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);