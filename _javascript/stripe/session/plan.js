"use strict";

import { fetchStripe } from "../fetchStripe";

export async function createSessionPlan(plan, url, lang) {
  const json = await fetchStripe(
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
