const { MAX_TRANSACTIONS_PER_PAGE } = require('../constants/constants');

// INPUT:   a count of number of transactions for an account
// OUTPUT:  returns an integer representing the amount of transaction pages to paginate through
// EFFECT:  no effect
const calculateTotalPages = (count) => {
  return Math.ceil(count / MAX_TRANSACTIONS_PER_PAGE);
}

module.exports = calculateTotalPages;