const person = {
  // ...
  set firstName(name){
    this._firstName = name;
  },
  set lastName(name){
    this._lastName = name;
  },
  get firstName(){
    return this._firstName;
  },
  get lastName(){
    return this._lastName;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

let simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins