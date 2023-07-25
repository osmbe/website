"use strict";

import Stripe from 'stripe';

import { fetchStripe } from "../fetchStripe";

export async function createSessionDonation(donation: StripeDonationData): Promise<Stripe.Checkout.Session> {
  const data: StripeAPIDonationData = {
    locale: donation.lang,
    successUrl: `${donation.url}/${donation.lang}/support.html#success`,
    cancelUrl: `${donation.url}/${donation.lang}/support.html#cancel`,
    amount: donation.amount * 100,
    currency: "eur",
  };

  if (donation.message !== null && donation.message.length > 0) {
    data.message = donation.message;
  }

  return await fetchStripe("POST", `${process.env.STRIPE_API}/checkout/session/payment`, data);
}
