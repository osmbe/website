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

### Setup back-end

We use <https://github.com/jbelien/stripe-apigility> to run the Stripe "component" for the donation page.

...

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
