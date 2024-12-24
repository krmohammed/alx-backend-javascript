const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('It return the sum of two positive numbers', () => {
    const result = calculateNumber(5, 3);
    assert.strictEqual(result, 8);
  });
  it('It return the sum of two negative numbers', () => {
    const result = calculateNumber(-3, -5);
    assert.strictEqual(result, -8);
  });
  it('It round and return the sum of a negative and positive integer', () => {
    const result = calculateNumber(7, -2);
    assert.strictEqual(result, 5);
  });
  it('It round up two positive decimals and return their sum', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });
  it('It round up two negative decimals ', () => {
    assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
  });
  it('It round and sum a positive and a negative number', () => {
    const result = calculateNumber(7.2, -1.5);
    assert.strictEqual(result, 6);
  });
  it('It return 2 when true are passed to each paramter', () => {
    assert.strictEqual(calculateNumber(true, true), 2);
  })
  it('It return 0 when false is passed for both params', () => {
    assert.strictEqual(calculateNumber(false, false), 0);
  })
  it('It return NaN when undefined is passed to both params', () => {
    assert.strictEqual(calculateNumber(undefined, undefined), NaN);
  })
  it('It round up an integer and a decimal', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  })
  it('float whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('Rounds down b\'s float fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('Rounds down a and b\'s float fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('Rounds down a\'s float fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('Rounds up b\'s float fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('Rounds up a and b\'s float fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('Rounds up a\'s float fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('Rounds down a and b float fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
