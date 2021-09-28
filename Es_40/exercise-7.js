class Person {
  // ...
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  
  get firstName(){
    return this._firstName;
  }

  set firstName(newName){
    this._firstName = newName;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(newName){
    this._lastName = newName;
  }

  get age(){
    return this._firstName;
  }

  set age(newAge){
    this._age = newAge;
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);