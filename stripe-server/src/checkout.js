import { stripe } from "./index.js";

// Creates a Stripe Checkout Session with line items
export async function createStripeCheckoutSession(line_items) {
  const url = process.env.WEBAPP_URL;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/failed`,
    mode: "payment",
  });

  return session;
}
