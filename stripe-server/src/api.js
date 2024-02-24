import express from "express";
import cors from "cors";
export const app = express();
import { createStripeCheckoutSession } from "./checkout.js";
import { createPaymentIntent } from "./payments.js";
import { handleStripeWebhook } from "./webhooks.js";

app.use(express.json());
app.use(cors({ origin: true }));

// sets rawbody for webhook handling
app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);

app.post("/test", (req, res) => {
  const amount = req.body.amount;
  res.status(200).send({ with_tax: amount * 7 });
});

// Checkouts endpoint
app.post("/checkouts/", async (req, res, next) => {
  res.send(await createStripeCheckoutSession(req.body.line_items));
});

// payment intent endpoint
app.post("/payments", async (req, res, next) => {
  res.send(await createPaymentIntent(req.body.amount));
});

// webhooks endpoint
app.post("/hooks", async(handleStripeWebhook));
