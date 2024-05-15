const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');


describe("sendPaymentRequestToApi", function() {
  it('test whether sendPaymentRequestToApi returns same as Utils.calculateNumber', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const calculateNumberSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.firstCall.args[0]).to.equal('The total is: 10');
    calculateNumberStub.restore();
    calculateNumberSpy.restore();
  });
});
