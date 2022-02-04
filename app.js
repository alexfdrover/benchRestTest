// IMPORTS
const axios = require('axios');

// CONSTANTS
const STARTING_ACCOUNT_BALANCE = 0;
const BASE_URL = "https://resttest.bench.co/transactions";
const MAX_TRANSACTIONS_PER_PAGE = 10;
const MAX_SIMUL_WORKERS = 3;

// INPUT:   takes an array of transaction objects
// OUTPUT:  no output
// EFFECT:  updates txHash. Adds amount of each transaction to the entry for that transaction dates key's value
const updateTxHash = (transactions) => {
  transactions.forEach(tx => {
    if (txHash[tx.Date] === undefined) txHash[tx.Date] = 0;
    txHash[tx.Date] += Number(tx.Amount);
  });
}

// INPUT:   a count of number of transactions for an account
// OUTPUT:  returns an integer representing the amount of transaction pages to paginate through
// EFFECT:  no effect
const calculateTotalPages = (count) => {
  return Math.ceil(count / MAX_TRANSACTIONS_PER_PAGE);
}

// INPUT:   no input
// OUTPUT:  no output
// EFFECT:  logs to console the end-of-day balance of the account of the form `${date} ${balance.toFixed(2)}`
const logBalancesToConsole = () => {
  let dates = Object.keys(txHash);
  dates.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  let balance = STARTING_ACCOUNT_BALANCE;
  dates.forEach(date => {
    let amount = txHash[date];
    balance += amount;
    console.log(`${date} ${balance.toFixed(2)}`);
  });
}

// INPUT:   an error
// OUTPUT:  no output
// EFFECT:  throws an error
const errorHandler = (error) => {
  let message = "";
  let status = error?.response?.status;

  switch (status) {
    case undefined:
      message += error;
      break;
    default:
      message += `${error.response.data}`;
      break;
  }

  throw new Error(message)
}

// INPUT:   a page number and the previously calculated totalPages
// OUTPUT:  an array of promises of responses from BASE_URL/:page
// EFFECT:  sends GET requests to BASE_URL/:page
const fillPromises = (page, totalPages) => {
  const arr = [];
  for (let i = 0; i < MAX_SIMUL_WORKERS && page <= totalPages; i += 1) {
    arr.push(axios.get(`https://resttest.bench.co/transactions/${page++}.json`))
  }
  return arr;
}

const main = async () => {
  let totalPages;
  
  // Fetches and determines the total number of pages we expect to have to paginate through
  // Also updates txHash while here, avoids having to send a GET to page 1 again later
  await axios
    .get(`${BASE_URL}/1.json`)
    .then(response => {
      totalPages = calculateTotalPages(response.data.totalCount);
      return response
    })
    .then(result => {
      updateTxHash(result.data.transactions);
    })
    .catch(errorHandler);
  
  // Fetches data from server multiple pages at a time
  // When MAX_SIMUL_WORKERS amount of pages are loaded (or when there are no longer valid pages), processes data
  // Repeats this process until out of valid pages
  // Logs data to console at end
  for (let currentPage = 2; currentPage <= totalPages; currentPage += MAX_SIMUL_WORKERS) {
    let promises = fillPromises(currentPage, totalPages);
    await Promise
     .all(promises)
     .then(results => {
       results.forEach(result => {
         let transactions = result.data.transactions;
         updateTxHash(transactions);
       });
     })
     .catch(errorHandler);
  }
      
  logBalancesToConsole();
}

const txHash = {};

main();
