const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Index page', function() {
  it('correct status code', function(done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('correct results', function(done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
