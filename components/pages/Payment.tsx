"use client";

import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { useShoppingCart } from "../context/ShoppingCart";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Payment() {
  const [clientSecret, setClientSecret] = React.useState("");
  const { cart } = useShoppingCart();

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "items": cart }),
    })
      .then(async (clientSecret) => {
        const data = await clientSecret.json();
        setClientSecret(data.secret);
  })
      .catch((e) => {
        return e;
      });
  });

  return (
    <EmbeddedCheckoutProvider options={{
      clientSecret: clientSecret,
    }} stripe={stripePromise} >
      <EmbeddedCheckout>
      </EmbeddedCheckout>
    </EmbeddedCheckoutProvider>
  );
}