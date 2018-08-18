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

- `STRIPE_SECRET_KEY`
- `STRIPE_CONNECT_ACCOUNT`

Here is the webtask source code :

```javascript
'use latest';

import express from 'express';
import { fromExpress } from 'webtask-tools';
import bodyParser from 'body-parser';
import stripe from 'stripe';

bodyParser.json();

const app = express();
app.use(bodyParser.json());

app.post('/payment', (request, response) => {
  const ctx = request.webtaskContext;
  const STRIPE_SECRET_KEY = ctx.secrets.STRIPE_SECRET_KEY;

  stripe(STRIPE_SECRET_KEY).charges.create({
    amount: request.body.amount,
    application_fee: request.body.amount * 0.05,
    currency: 'eur',
    description: 'Donation to OpenStreetMap Belgium',
    /*
    destination: {
      account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
      amount: request.body.amount * 0.95
    },
    */
    receipt_email: request.body.email,
    source: request.body.stripeToken
  }, {
    stripe_account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
  }, (error, charge) => {
    if (error) {
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ 'error': error.message }));
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({ 'success': 'Payment done!' }));
    }
    response.end();
  });
});

module.exports = fromExpress(app);  
```
