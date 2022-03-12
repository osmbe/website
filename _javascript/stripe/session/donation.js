"use strict";

import { fetchStripe } from "../fetchStripe";

export async function createSessionDonation(amount, url, message, lang) {
  const data = {
    locale: lang,
    successUrl: `${url}/${lang}/support.html#success`,
    cancelUrl: `${url}/${lang}/support.html#cancel`,
    amount: amount * 100,
    currency: "eur",
  };

  if (message !== null && message.length > 0) {
    data.message = message;
  }

  const json = await fetchStripe(
    "POST",
    `${process.env.STRIPE_API}/checkout/session/donation`,
    data
  );

  return json;
}
