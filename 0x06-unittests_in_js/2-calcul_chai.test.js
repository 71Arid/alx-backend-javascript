const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('when type is `SUM` a < .5, b > .5', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('when type is `SUM` a > .5, b < .5', function() {
    expect(calculateNumber('SUM', 1.5, 4.4)).to.equal(6);
  });
  it('when type is `SUBTRACT` a < .5, b > .5', function(){
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('when type is `SUBTRACT` a > .5, b < .5', function(){
    expect(calculateNumber('SUBTRACT', 1.5, 4.4)).to.equal(-2);
  });
  it('when type is `DIVIDE`', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('when type is `DIVIDE` when b is 0', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
