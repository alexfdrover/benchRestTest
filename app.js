// IMPORTS
const axios = require('axios');
const updateTxHash = require('./helpers/updateTxHash');
const calculateTotalPages = require('./helpers/calculateTotalPages');
const logBalancesToConsole = require('./helpers/logBalancesToConsole');
const errorHandler = require('./helpers/errorHandler');
const fillPromises = require('./helpers/fillPromises');

// CONSTANTS
const { BASE_URL, MAX_SIMUL_WORKERS } = require('./constants/constants');


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
      updateTxHash(txHash, result.data.transactions);
    })
    .catch(errorHandler);
  
  // Fetches data from server multiple pages at a time
  // When MAX_SIMUL_WORKERS amount of pages are loaded (or when there are no longer valid pages), processes data
  // Repeats this process until out of valid pages
  for (let currentPage = 2; currentPage <= totalPages; currentPage += MAX_SIMUL_WORKERS) {
    let promises = fillPromises(currentPage, totalPages);
    await Promise
     .all(promises)
     .then(results => {
       results.forEach(result => {
         let transactions = result.data.transactions;
         updateTxHash(txHash, transactions);
       });
     })
     .catch(errorHandler);
  }
  
  // Generates a sorted array of unique transaction dates (ascending)
  let dates = Object.keys(txHash);
  dates.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  logBalancesToConsole(txHash, dates);
}

const txHash = {};
main();
