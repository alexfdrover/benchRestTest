const { STARTING_ACCOUNT_BALANCE } = require('../constants/constants');

// INPUT:   a sorted array of unique transaction dates
// OUTPUT:  no output
// EFFECT:  logs to console the end-of-day balance of the account of the form `${date} ${balance.toFixed(2)}`
const logBalancesToConsole = (txHash, dates) => {
  let balance = STARTING_ACCOUNT_BALANCE;
  dates.forEach(date => {
    let amount = txHash[date];
    balance += amount;
    console.log(`${date} ${balance.toFixed(2)}`);
  });
}

module.exports = logBalancesToConsole;