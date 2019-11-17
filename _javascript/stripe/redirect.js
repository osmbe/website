"use strict";

import createSession from "./session";

export default function(data) {
  const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY, {
    stripeAccount: process.env.STRIPE_CONNECT_ACCOUNT
  });

  document
    .querySelectorAll("#donation-result > div")
    .forEach(element => (element.style.display = "none"));

  document.querySelector(".overlay").style.display = "";

  createSession(data)
    .then(session => {
      if (session.error) {
        throw session.error;
      }

      stripe
        .redirectToCheckout({
          sessionId: session.id
        })
        .then(result => {
          if (result.error) {
            throw result.error.message;
          }
        });
    })
    .catch(error => {
      document.querySelector(".overlay").style.display = "none";

      document.getElementById("error-message").innerText = error;
      document.getElementById("donation-result-error").style.display = "";

      document.getElementById("donation-result-error").scrollIntoView();
    });
}
