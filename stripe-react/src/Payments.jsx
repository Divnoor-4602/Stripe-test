import React, { useState } from "react";
import { fetchFromApi } from "./helpers.js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Payments() {
  const stripe = useStripe();
  const elements = useElements();

  const [amount, setAmount] = useState(0);
  const [paymentIntent, setPaymentIntent] = useState();

  return <div>Payments</div>;
}
