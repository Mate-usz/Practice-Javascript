// Calculating result for 3628800
// Fetching from cache for 720
// Fetching from cache for 120
function memoize(fn) {
  let cache = {};
  // ...
  return (x) => 
  {
    if(x in cache){
      console.log(`Fetching from cache for ${x}`);
      return cache[x];
    }

    console.log(`Calculating result for ${x}`);
    let res = fn(x);
    
    // Secondo la traccia andrebbe qui il console log,
    // ma per leggibilità ho scelto di inserirlo prima
    //
    // console.log(`Calculating result for ${res}`);

    cache[x] = res;
    return cache[x];
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));