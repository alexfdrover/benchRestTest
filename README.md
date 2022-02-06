# README

## How to install and use
1. Clone or download repository to local machine
2. Download Node (this was developed using v14.16.0)
3. Navigate to repository folder
4. Run `npm install`
5. Run `node app.js`

## Assumptions:
### Transaction object
1. 'Date' value is a string representation of the date in ISO form YYYY-MM-DD
2. 'Ledger' value is a string, can contain special characters, e.g. '-', '&'
3. 'Amount' value is a string representation of a number with maximum of 2 trailing digits
4. 'Company' value is a string, can contain special characters (e.g. '-') and is capitalized
5. Maximum 10 transactions per array
6. Minimum 1 transaction per array if a 'valid request'

### Logged output
1. Of form YYYY-MM-DD XX.XX
2. Amount has a leading '-' if it is a negative number
3. Amount does not have a leading '+' if it is a positive number
4. Each daily balance should be logged to its own line on the console

### API Behaviour
1. Valid pages start at 1, not 0
2. No assurance that transaction data returned from server are ordered chronologically
3. totalCount property is correct
4. If response status is 4XX or 5XX, throw error

### Misc
1. Assume the account balance begins at 0.00

## Limitations / Missing
1. Expected base URL and pagination pattern is hard-coded E.g. `https://resttest.bench.co/transactions/:pageNumber.json`
2. If any 'valid' request fails, an error is thrown
3. Missing tests for following helpers: logBalancesToConsole, errorHandler, fillPromises

## Improvements
1. More robust response handling (E.g. how to handle every possible response code?)
2. More robust error handling (E.g. what if server response isn't RESTful? 200 OK but no data for some reason? malformed response data?)
3. More robust testing (E.g. wrong input types, edge cases)

## Shortcuts
1. 

## Trade-offs
1. The fillPromises function uses MAX_SIMUL_WORKERS to balance between speed and space constraints.
- High MAX_SIMUL_WORKERS allows for many simultaneous page reads, increasing memory required to store server responses but decreasing overall processing time
- Low MAX_SIMUL_WORKERS minimizes memory required to store server responses but increases overall processing time