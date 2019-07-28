require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const headers = {
  'Access-Control-Allow-Origin': process.env.FRONTEND_URL,
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 200,
      headers,
      body: 'Invalid request method.',
    };
  }

  const { token, amount } = JSON.parse(event.body);

  if (!token && !amount) {
    return {
      statusCode: 500,
      headers,
      body: 'Invalid request.',
    };
  }

  const body = {
    source: token.id,
    amount: amount,
    currency: 'eur',
  };

  try {
    const charge = await stripe.charges.create(body);
    const status =
      charge === null || charge.status !== 'succeeded'
        ? 'failed'
        : charge.status;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status,
        message: 'Charge successfully created!',
      }),
    };
  } catch (error) {
    return {
      statusCode: 424,
      headers,
      body: JSON.stringify({
        status: 'failed',
        error,
      }),
    };
  }
};
