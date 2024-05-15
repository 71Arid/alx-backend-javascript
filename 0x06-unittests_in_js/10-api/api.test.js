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

describe('Cart page', function() {
  it('Correct status code when :id is a number', function(done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct results when :id is a number', function(done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('Correct status code when :id is a number', function(done) {
    request('http://localhost:7865/cart/sema', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
})

describe('login endp', function() {
  it('returns response when right userName is passed', function(done) {
    request.post(
      {
        url: 'http://localhost:7865/login', 
        json: {userName: 'Betty'}
      }, function (_error, response, body) {
      expect(body).to.equal('Welcome Betty');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('available_payments endp', function() {
  it('returns correct response', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(JSON.parse(body)).to.deep.equal(
        {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }
      );
      done();
    });
  });
  it('return correct status code', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    })
  })
});
