const STARTING_ACCOUNT_BALANCE = 0;                           // The assumed account balance at beginning of running daily balances
const BASE_URL = "https://resttest.bench.co/transactions";    // Base URL to fetch data
const MAX_TRANSACTIONS_PER_PAGE = 10;                         // Assumed maximum numbers of transactions within the 'transactions' array returned by server
const MAX_SIMUL_WORKERS = 3;                                  // The number of simultaneous pages you want to fetch. See README for Trade-Offs

module.exports = {
  STARTING_ACCOUNT_BALANCE,
  BASE_URL,
  MAX_TRANSACTIONS_PER_PAGE,
  MAX_SIMUL_WORKERS,
};