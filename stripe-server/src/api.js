import express from "express";
import cors from "cors";
export const app = express();
import { createStripeCheckoutSession } from "./checkout.js";

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/test", (req, res) => {
  const amount = req.body.amount;
  res.status(200).send({ with_tax: amount * 7 });
});

// Checkouts endpoint
app.post("/checkouts/", async (req, res, next) => {
  res.send(await createStripeCheckoutSession(req.body.line_items));
});
