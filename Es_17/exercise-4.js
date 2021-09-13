function calculate() {
  // ...
  let res = 0;

  let obj = {
    add(num) {
      res += num;
      return this;
    },
    multiply(num){
      res *= num;
      return this;
    },
    sub(num){
      res -= num;
      return this;
    },
    divide(num){
      res /= num;
      return this;
    },
    printResult() {
      console.log(res);
    }
  };

  return obj;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7