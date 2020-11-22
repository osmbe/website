"use strict";

import fetch from "../fetch";

export default async function (amount, url, message, lang) {
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

  const json = await fetch(
    "POST",
    `${process.env.STRIPE_API}/checkout/session/donation`,
    data
  );

  return json;
}
