"use strict";

import fetch from "../fetch";

export default async function (plan, url, lang) {
  const json = await fetch(
    "POST",
    `${process.env.STRIPE_API}/checkout/session/plan`,
    {
      locale: lang,
      successUrl: `${url}/${lang}/support.html#success`,
      cancelUrl: `${url}/${lang}/support.html#cancel`,
      plan: plan
    }
  );

  return json;
}
