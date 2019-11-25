"use strict";

import fetch from "./fetch";

export default async function(name, email, amount, url, lang) {
  const json = await fetch("POST", "https://stripe.osm.be/source/bancontact", {
    locale: lang,
    returnUrl: `${url}/${lang}/support.html`,
    amount: amount * 100,
    currency: "eur",
    ownerName: name,
    ownerEmail: email
  });

  return json;
}
