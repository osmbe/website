/**
 * Data sent from the form
 */
declare type StripeData = {
  lang: string;
  url: string;
}

declare type StripePlanData = StripeData & {
  plan: string;
}

declare type StripeDonationData = StripeData & {
  amount: number;
  message: string;
}

/**
 * Data sent to stripe.osm.be API
 */
declare type StripeAPIData = {
  successUrl: string,
  cancelUrl: string,
  locale?: string,
}

declare type StripeAPIPlanData = StripeAPIData & {
  plan: string;
}

declare type StripeAPIDonationData = StripeAPIData & {
  amount: number,
  currency: string,
  message?: string;
}