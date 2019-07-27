const functions = require('firebase-functions');
const cors = require('cors')({ origin: process.env.FRONTEND_URL });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const paymentFn = (req, res) => {
  const { token, amount } = req.body;

  if (!token && !amount) {
    return res.status(500).send({ error: 'Token/Amount invalid' });
  }

  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'eur',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      return res.status(500).send({ error: stripeErr });
    }

    return res.status(200).send({ success: stripeRes });
  });
};

exports.payment = functions.https.onRequest((req, res) => {
  return cors(req, res, () => paymentFn(req, res));
});
