# INSTALL

## Requirements

- [Ruby](https://www.ruby-lang.org/)
- [RubyGems](https://rubygems.org/)
- [Jekyll](https://jekyllrb.com/)
- [Bundler](https://bundler.io/)

See <https://jekyllrb.com/docs/installation/>

## Install & Run

    git clone https://github.com/osmbe/website

    bundle install
    bundle exec jekyll serve

## Donation page back-end

### Create Stripe Connect account

See <https://stripe.com/docs/api/curl#account>.

    curl https://api.stripe.com/v1/accounts \
        -u <secret_key>: \
        -d type=standard \
        -d country=BE \
        -d email="<email_address>"

Replace `<secret_key>` by your secret key and `<email_address>` by the email address of the new account.

### Setup Webtask

We use <https://webtask.io/> to run the Stripe "component" for the donation page.

You will have to configure :

- `STRIPE_SECRET_KEY` (secret API key from "parent" account)
- `STRIPE_CONNECT_ACCOUNT` (your acount)

Here is the webtask source code :

```javascript
"use latest";

import express from "express";
import { fromExpress } from "webtask-tools";
import bodyParser from "body-parser";
import stripe from "stripe";

bodyParser.json();

const app = express();
app.use(bodyParser.json());

/**
 * Create Checkout session
 */
app.post("/session", (request, response) => {
  const ctx = request.webtaskContext;
  const STRIPE_SECRET_KEY = ctx.secrets.STRIPE_SECRET_KEY;

  const amount = request.body.amount;
  const plan = request.body.plan;
  const url = request.body.url || "https://openstreetmap.be";
  const lang = request.body.lang || "en";

  let options = {
    success_url: `${url}/${lang}/support.html#success`,
    cancel_url: `${url}/${lang}/support.html#cancel`,
    payment_method_types: ["card"]
  };

  if (typeof plan !== "undefined") {
    Object.assign(options, {
      subscription_data: {
        items: [
          {
            plan: plan
          }
        ],
        application_fee_percent: 5
      }
    });
  } else if (amount !== "undefined") {
    Object.assign(options, {
      payment_intent_data: {
        application_fee_amount: amount * 0.05
      },
      line_items: [
        {
          name: "Single donation",
          amount: amount,
          currency: "eur",
          quantity: 1
        }
      ]
    });
  }

  stripe(STRIPE_SECRET_KEY).checkout.sessions.create(
    options,
    {
      stripe_account: ctx.secrets.STRIPE_CONNECT_ACCOUNT
    },
    (err, session) => {
      if (err) {
        response.status(400).json({ error: err.message });
      } else {
        response.json(session);
      }
    }
  );
});

module.exports = fromExpress(app);
```

## Build JS bundles

### Event page

```bash
npm install
npm run build:event
```

### Support page

Create `.env` file:

```
STRIPE_CONNECT_ACCOUNT =
STRIPE_PUBLISHABLE_KEY =
WEBTASK_URL =
```

```bash
npm install
npm run build:stripe
```
