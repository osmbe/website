"use strict";

import { loadStripe } from '@stripe/stripe-js';

import { createSessionPlan } from "./session/plan";
import { createSessionDonation } from "./session/donation";

export async function redirect(data: StripePlanData | StripeDonationData) {
  if (typeof data === 'undefined' || typeof data !== 'object') return;

  const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY, {
    stripeAccount: process.env.STRIPE_CONNECT_ACCOUNT
  });

  document
    .querySelectorAll("#donation-result > div")
    .forEach(element => ((element as HTMLDivElement).style.display = "none"));

  (document.querySelector(".overlay") as HTMLElement).style.display = "";

  try {
    let session;
    if (data.hasOwnProperty('plan') && typeof (data as StripePlanData).plan !== "undefined") {
      session = await createSessionPlan((data as StripePlanData));
    } else if (data.hasOwnProperty('amount') && typeof (data as StripeDonationData).amount !== "undefined") {
      session = await createSessionDonation((data as StripeDonationData));
    }

    if (typeof session === 'undefined') {
      throw 'Unable to initialize Stripe session';
    }

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
  } catch (error) {
    (document.querySelector(".overlay") as HTMLElement).style.display = "none";

    document.getElementById("error-message").innerText = error;
    document.getElementById("donation-result-error").style.display = "";

    document.getElementById("donation-result-error").scrollIntoView();
  }
}
