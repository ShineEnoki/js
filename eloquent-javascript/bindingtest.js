const outerFun = factor => {
  return number => {
    const result = number * factor;
    console.log('result value is:',result);
    return result;
  };
}

const twice = outerFun(5);


console.time("myFunction"); // Start the timer

console.log(twice(2))

console.timeEnd("myFunction"); // Stop the timer and display the elapsed time
