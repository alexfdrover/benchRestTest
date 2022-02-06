// INPUT:   takes an array of transaction objects
// OUTPUT:  no output
// EFFECT:  updates txHash. Adds amount of each transaction to the entry for that transaction dates key's value

const updateTxHash = (txHash, transactions) => {
  transactions.forEach(tx => {
    if (txHash[tx.Date] === undefined) txHash[tx.Date] = 0;
    txHash[tx.Date] += Number(tx.Amount);
  });
}

module.exports = updateTxHash;