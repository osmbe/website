"use strict";

import Stripe from 'stripe';

export async function fetchStripe(method: "POST", url: string, data: StripeAPIPlanData | StripeAPIDonationData): Promise<Stripe.Checkout.Session> {
  let options: RequestInit = {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8"
    },
    redirect: "follow",
    referrer: "no-referrer"
  };

  if (typeof data !== "undefined") {
    Object.assign(options, {
      body: JSON.stringify(data)
    });
  }

  const response = await fetch(url, options);
  const json = await response.json();

  if (response.ok !== true) {
    throw new Error(json.detail);
  }

  return json;
}
