let amount = 0;

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
            amount: Math.floor(amount * 100),
            email: token.email,
            stripeToken: token.id,
        };

        fetch('https://wt-db442aaaa0511f3885fb43b4f75f999f-0.sandbox.auth0-extend.com/stripe-payment-test/payment', {
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

                console.log('There has been a problem with your fetch operation: ', error.message);
            });
    }
});

$('.donation-btn').on('click', function(event) {
    amount = parseFloat($(this).data('amount'));

    handler.open({
        name: 'OpenStreetMap Belgium',
        description: 'Donation to OpenStreetMap Belgium',
        currency: 'eur',
        amount: amount * 100
    });
    event.preventDefault();
});

$('#donation-amount').on('change blur keyup', function(event) {
    amount = parseFloat($(this).val());

    if (amount > 0) {
        $('#donation-submit').prop('disabled', false);
    } else {
        $('#donation-submit').prop('disabled', true);
    }
});
$('#donation-submit').on('click', function(event) {
    amount = parseFloat($('#donation-amount').val());

    handler.open({
        name: 'OpenStreetMap Belgium',
        description: 'Donation to OpenStreetMap Belgium',
        currency: 'eur',
        amount: amount * 100
    });
    event.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
    handler.close();
});
