const axios = require('axios');
const { MAX_SIMUL_WORKERS, BASE_URL } = require('../constants/constants');

// INPUT:   a page number and the previously calculated totalPages
// OUTPUT:  an array of promises of responses from BASE_URL/:page
// EFFECT:  sends GET requests to BASE_URL/:page
const fillPromises = (page, totalPages) => {
  const arr = [];
  for (let i = 0; i < MAX_SIMUL_WORKERS && page <= totalPages; i += 1) {
    arr.push(axios.get(`${BASE_URL}/${page++}.json`))
  }
  return arr;
}

module.exports = fillPromises;