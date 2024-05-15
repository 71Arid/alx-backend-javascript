const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('when type is `SUM` a < .5, b > .5', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('when type is `SUM` a > .5, b < .5', function() {
    assert.equal(calculateNumber('SUM', 1.5, 4.4), 6);
  });
  it('when type is `SUBTRACT` a < .5, b > .5', function(){
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('when type is `SUBTRACT` a > .5, b < .5', function(){
    assert.equal(calculateNumber('SUBTRACT', 1.5, 4.4), -2);
  });
  it('when type is `DIVIDE`', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('when type is `DIVIDE` when b is 0', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
