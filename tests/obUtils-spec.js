const chai = require('chai');
const obUtils = require('../obUtils');

const should = chai.should();
const expect = chai.expect;

describe('canary test', () => {
  it('5 should be 5', () => {
    const five = 5;
    five.should.equal(5);
  });
});

describe('getHighestOrder', () => {
  it('should return the highest order', () => {
    const asks = [
      ["342.85", "1", 1],
      ["341.85", "1", 1],
      ["349.85", "1", 1],
      ["348.85", "1", 1],
      ["32.85", "1", 1],
      ["3412.85", "1", 1],
    ];

    obUtils.getHighestOrder(asks).should.equal("3412.85");
  });

  it('should throw an error if not passed an array', () => {
    const asks = {};
    
    should.throw(() => obUtils.getHighestOrder());
  });
});

describe('getLowestOrder', () => {
  it('should return the lowest order', () => {
    const asks = [
      ["342.85", "1", 1],
      ["341.85", "1", 1],
      ["349.85", "1", 1],
      ["348.85", "1", 1],
      ["32.85", "1", 1],
      ["3412.85", "1", 1],
    ];

    obUtils.getLowestOrder(asks).should.equal('32.85');
  });

  it('should throw an error when not passed in an array', () => {
    const asks = {};

    should.throw(() => obUtils.getLowestOrder(asks))
  });
});
