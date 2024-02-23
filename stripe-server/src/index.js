import { config } from "dotenv";
import { app } from "./api.js";

if (process.env.NODE_ENV !== "production") {
  config();
}

// Initialize Stripe
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2023-10-16",
});

// Start the api with express
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
