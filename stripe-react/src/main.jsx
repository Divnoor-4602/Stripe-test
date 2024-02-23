import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51OmaORSF1rQvBwM9stOGpvmEAEiqwyXXgsO9wpd8sOJSqfVRKIx61GKDckrN08fosSYSkX7zEj3yof4yD21t6bCw00LBLpzk4O"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
