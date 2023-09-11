const initialDeposit = 100000;

const interest = (amount, rate = 8) => {
  return amount / 150 ;
}

const totalAmount = (initialAmount) => {
  return initialAmount + interest(initialAmount)
}

const finalAmount = (initialDeposit, continuesDeposit, numOfMonth) => {
  let initialAmount = initialDeposit;
  let finalAmount = 0;
  for (let i = 0; i < numOfMonth ; i++){
    finalAmount = totalAmount(initialAmount + continuesDeposit);
    initialAmount = finalAmount;
  }

  return finalAmount;
}

console.log(finalAmount(initialDeposit, 0, 12));