function powerWithFun(base, exponent) {
  const values = Array.from({ length: exponent }, () => base);
  const result = values.reduce((accumulator, currentValue) => accumulator * currentValue, 1) ;
  return result;
}

console.time("Function"); 
console.log(powerWithFun(4, 500))
console.timeEnd("Function");

function powerWithLoop(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.time("Loop"); 
console.log(powerWithLoop(4, 500))
console.timeEnd("Loop");
