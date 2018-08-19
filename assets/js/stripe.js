window.app = {
    amount: 0,
    id: null
};

const webtask = 'https://wt-db442aaaa0511f3885fb43b4f75f999f-0.sandbox.auth0-extend.com/stripe-payment-test';

let handler = StripeCheckout.configure({
    allowRememberMe: false,
    image: 'https://www.osm.be/assets/images/logo.png',
    key: 'pk_test_6x3uarR1wYsEoIFq8XWYisWS',
    locale: 'auto',
    token: function(token) {
        $('#donation-result > span').hide();
        $('#donation-loading').show();

        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        let data = {
            email: token.email,
            stripeToken: token.id,
        };

        if (window.app.id === null) {
            data.amount = Math.floor(window.app.amount * 100);
        } else {
            data.plan = window.app.id;
        }

        fetch(webtask + '/payment', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).
            then(function (response) {
                return response.json();
            }).
            then(function (data) {
                if (data.error) {
                    throw new Error(data.error);
                }

                $('#donation-loading').hide();
                $('#donation-result-success').show();
            }).
            catch(function (error) {
                $('#donation-loading').hide();
                $('#donation-result-error').show();

                console.error('There has been a problem with your fetch "/payment" operation: ', error.message);
            });
    }
});

$(document).ready(function() {
    fetch(webtask + '/subscriptions', {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
    }).
        then(function (response) {
            return response.json();
        }).
        then(function (data) {
            for (let i = 0; i < data.monthly.length; i++) {
                $('#donation-monthly-items').append('<li class="donation-btn" data-id="' + data.monthly[i].id + '" data-amount="' + data.monthly[i].amount / 100 + '">' + data.monthly[i].amount / 100 + ' &euro; / month</li>')
            }
            for (let i = 0; i < data.yearly.length; i++) {
                $('#donation-yearly-items').append('<li class="donation-btn" data-id="' + data.yearly[i].id + '" data-amount="' + data.yearly[i].amount / 100 + '">' + data.yearly[i].amount / 100 + ' &euro; / year</li>')
            }
        }).
        catch(function (error) {
           console.error('There has been a problem with your fetch "/subscription" operation: ', error.message);
        });

    $('#donation-amount').on('change blur keyup', function(event) {
        window.app.amount = parseFloat($(this).val());
        window.app.id = null;

        if (window.app.amount > 0) {
            $('#donation-submit').prop('disabled', false);
        } else {
            $('#donation-submit').prop('disabled', true);
        }
    });
    $('#donation-submit').on('click', function(event) {
        window.app.amount = parseFloat($('#donation-amount').val());
        window.app.id = null;

        handler.open({
            name: 'OpenStreetMap Belgium',
            description: 'Donation to OpenStreetMap Belgium',
            currency: 'eur',
            amount: window.app.amount * 100
        });
        event.preventDefault();
    });
});

$(document).on('click', '.donation-btn', function(event) {
    const id = $(this).data('id');

    window.app.amount = parseFloat($(this).data('amount'));
    window.app.id = typeof id === 'undefined' ? null : id;

    handler.open({
        name: 'OpenStreetMap Belgium',
        description: 'Donation to OpenStreetMap Belgium',
        currency: 'eur',
        amount: window.app.amount * 100
    });
    event.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
    handler.close();
});
