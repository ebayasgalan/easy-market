// @ts-nocheck
'use client';

import './styles/checkOutStyles.scss';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
// import nProgress from 'nprogress';
import { useCart } from '../lib/cartState';
import { checkOutCart } from '../lib/server-actions';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm({ totalPrice, userId, cartItems }) {
  const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { closeCart } = useCart();
  
  async function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    // setLoading(true);
    // 2. Start the page transition
    // nProgress.start();
    // 3. Create the payment method via stripe (Token comes back here if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    console.log('paymentMethod: ',paymentMethod);
    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      // nProgress.done();
      return; // stops the checkout from happening
    }
    // 5. Send the token from step 3 to server, via server-action!
    const order = await checkOutCart(paymentMethod.id, totalPrice, userId, cartItems);
    console.log(`Finished with the order!!`, order);

    // 7. Clear and close the cart
    closeCart();

    // 8. turn the loader off
    // setLoading(false);
    // nProgress.done();
  }

  return (
    <form className='checkOutForm' onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      <CardElement />
      <button className='sickButton' type="submit">Check Out Now</button>
    </form>
  );
}

function Checkout({ totalPrice, userId, cartItems }) {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm totalPrice={totalPrice} userId={userId} cartItems={cartItems} />
    </Elements>
  );
}

export { Checkout };