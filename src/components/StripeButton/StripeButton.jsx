import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Xk57za8ISZYBJEaWM0pgc8UN';

  const ontoken = async token => {
    try {
      const res = await axios('/.netlify/functions/payment', {
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      console.log('Payment okay: ', res);
    } catch (error) {
      console.log('Payment error', error);
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now."
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
