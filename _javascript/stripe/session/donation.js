"use strict";

import fetch from "../fetch";

export default async function(amount, url, lang) {
  const json = await fetch(
    "POST",
    "https://stripe.osm.be/checkout/session/donation",
    {
      locale: lang,
      successUrl: `${url}/${lang}/support.html#success`,
      cancelUrl: `${url}/${lang}/support.html#cancel`,
      amount: amount * 100,
      currency: "eur"
    }
  );

  return json;
}
