const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe("sendPaymentRequestToApi", function() {
  it('test whether sendPaymentRequestToApi returns same as Utils.calculateNumber', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
