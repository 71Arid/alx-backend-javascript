const express = require('express');

const app = express();
app.use(express.json()); // enables parsing json requests

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.status(200).send(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
  );
});

app.post('/login', (req, res) => {
  let username = req.body.userName;
  res.status(200).send(`Welcome ${username}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
