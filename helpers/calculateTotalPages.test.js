const calculateTotalPages = require('./calculateTotalPages');

describe('test helper - calculateTotalPages', () => {
  test('calculates 4 pages from 38 transactions', () => {
    expect(calculateTotalPages(38)).toBe(4);
  });

  test('calculates 1 page from 9 transactions', () => {
    expect(calculateTotalPages(9)).toBe(1);
  });
})
