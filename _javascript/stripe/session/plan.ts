"use strict";

import Stripe from 'stripe';

import { fetchStripe } from "../fetchStripe";

export async function createSessionPlan(plan: StripePlanData): Promise<Stripe.Checkout.Session> {
  const data: StripeAPIPlanData ={
    locale: plan.lang,
    successUrl: `${plan.url}/${plan.lang}/support.html#success`,
    cancelUrl: `${plan.url}/${plan.lang}/support.html#cancel`,
    plan: plan.plan
  };

  return await fetchStripe("POST", `${process.env.STRIPE_API}/checkout/session/payment`, data);
}
