import { stripe } from "./index.js";

// Create a payment intent with a specific amount
export async function createPaymentIntent(amount) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });

  return paymentIntent;
}
