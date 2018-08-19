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

/**
 * Create Charge or Subscription
 */
app.post('/payment', (request, response) => {
  const ctx = request.webtaskContext;
  const STRIPE_SECRET_KEY = ctx.secrets.STRIPE_SECRET_KEY;

  /**
   * Recurring payment :
   * - Create Customer
   * - Create Subscription
   */
  if (typeof request.body.plan !== 'undefined') {
    // Create Customer
    stripe(STRIPE_SECRET_KEY).customers.create({
      email: request.body.email,
      source: request.body.stripeToken
    }, {
      stripe_account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
    }, (errorCustomer, customer) => {
      if (errorCustomer) {
        response.status(400).json({ 'error': errorCustomer.message });
      } else {
        // Create Subscription
        stripe(STRIPE_SECRET_KEY).subscriptions.create({
          application_fee_percent: 5,
          customer: customer.id,
          items: [
            {
              plan: request.body.plan,
            },
          ]
        }, {
          stripe_account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
        }, function(errorSubscription, subscription) {
          if (errorSubscription) {
            response.status(400).json({ 'error': errorSubscription.message });
          } else {
            response.json({ 'success': 'Subscription done!' });
          }
        });
      }
    });
  }
  /**
   * Single donation :
   * - Create Charge
   */
  else {
    stripe(STRIPE_SECRET_KEY).charges.create({
      amount: request.body.amount,
      application_fee: request.body.amount * 0.05,
      currency: 'eur',
      statement_descriptor: 'Donation to OSMBE', // Max. 22 characters
      /*destination: {
        account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
        amount: request.body.amount * 0.95
      },*/
      receipt_email: request.body.email,
      source: request.body.stripeToken
    }, {
      stripe_account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
    }, (errorCharge, charge) => {
      if (errorCharge) {
        response.status(400).json({ 'error': errorCharge.message });
      } else {
        response.json({ 'success': 'Payment done!' });
      }
    });
  }
});

/**
 * Get Subscriptions (monthly & yearly)
 */
app.get('/subscriptions', (request, response) => {
  const ctx = request.webtaskContext;
  const STRIPE_SECRET_KEY = ctx.secrets.STRIPE_SECRET_KEY;

  stripe(STRIPE_SECRET_KEY).plans.list({
  }, {
    stripe_account: ctx.secrets.STRIPE_CONNECT_ACCOUNT,
  }, (errorSubscriptions, plans) => {
    if (errorSubscriptions) {
      response.status(400).json({ 'error': errorSubscriptions.message });
    } else {
      let result = {
        monthly: [],
        yearly: []
      };

      plans.data.map((plan) => {
        const { id, amount, interval, interval_count, metadata } = plan;

        if (typeof metadata.hidden === 'undefined') {
          if (interval === 'year' && interval_count === 1) {
            result.yearly.push({
              id,
              amount
            });
          } else if (interval === 'month' && interval_count === 1) {
            result.monthly.push({
              id,
              amount
            });
          }
        }
      });

      result.monthly.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
      result.yearly.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));

      response.json(result);
    }
  });
});

module.exports = fromExpress(app);  
```
