const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('SendPaymentRequestToApi', function() {
  let sendpaySpy;
  beforeEach(() => {
    sendpaySpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    sendpaySpy.restore();
  });
  it('', function() {
    sendPaymentRequestToApi(100, 20);
    expect(sendpaySpy.firstCall.args[0]).to.equal('The total is: 120');
    expect(sendpaySpy.calledOnce).to.be.true;
  });
  it('', function() {
    sendPaymentRequestToApi(10, 10);
    expect(sendpaySpy.firstCall.args[0]).to.equal('The total is: 20');
    expect(sendpaySpy.calledOnce).to.be.true;
  });
});
