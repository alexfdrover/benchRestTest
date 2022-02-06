const fillPromises = require('./fillPromises');

describe('test helper - fillPromises', () => {
  // Number of simultaneous page fetches is value of MAX_SIMUL_WORKERS defined in "constants/constants.js"
  // MAX_SIMUL_WORKERS = 3 currently

  test('fetches 3 promises with three simultaneous workers and 4 pages', () => {
    let page = 1;
    let totalPages = 4;
    let arr = fillPromises(page, totalPages);
    expect(arr.length).toBe(3);
  });
  
  test('fetches 2 promises with three simultaneous workers and 2 pages', () => {
    let page = 1;
    let totalPages = 2;
    let arr = fillPromises(page, totalPages);
    expect(arr.length).toBe(2);
  });
  
  test('fetches 0 promises with three simultaneous worker and 0 pages', () => {
    let page = 1;
    let totalPages = 0;
    let arr = fillPromises(page, totalPages);
    expect(arr.length).toBe(0);
  });
});