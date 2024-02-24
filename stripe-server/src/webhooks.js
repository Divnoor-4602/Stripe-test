import { stripe } from "./index.js";
import Stripe from "stripe";

// webhooks handler, fullfill a user purchase
const webhookHandlers = {
  "payment_intent.succeeded": async () => {
    return;
  },
  "payment_intent.failed": async () => {
    return;
  },
};

/***
 * Validate the stripe webhook secret, then call the handler for the event type
 */
export const handleStripeWebhook = async (req, res) => {
  const signatureStipe = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req["rawBody"],
    signatureStipe,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  try {
    await webhookHandlers[event.type](event.data.object);
    res.send({ recieved: true });
  } catch (error) {
    console.log(error);
    res.status(400).send("Webhook Error");
  }
};
