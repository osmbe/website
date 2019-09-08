const stripe = Stripe('pk_live_mFpKP0JmQWp9mQ2FjetxyzlH', {
    stripeAccount: 'acct_1DDvHwEKdKUBXjXu'
});
const webtask = 'https://wt-db442aaaa0511f3885fb43b4f75f999f-0.sandbox.auth0-extend.com/stripe-payment-sca';

function loadSubscriptions() {
    fetch(`${webtask}/subscriptions`, {
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
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.monthly.length; i++) {
                $('#donation-monthly-items').append('<li class="donation-btn" data-id="' + data.monthly[i].id + '" data-amount="' + data.monthly[i].amount / 100 + '">' + data.monthly[i].amount / 100 + ' &euro; per month</li>')
            }
            for (let i = 0; i < data.yearly.length; i++) {
                $('#donation-yearly-items').append('<li class="donation-btn" data-id="' + data.yearly[i].id + '" data-amount="' + data.yearly[i].amount / 100 + '">' + data.yearly[i].amount / 100 + ' &euro; per year</li>')
            }
        })
        .catch(function (error) {
            console.error('There has been a problem with your fetch "/subscription" operation: ', error.message);
        });

}

function handleError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('donation-result-error').style.display = '';
}

function createSubscription(plan) {
    fetch(`${webtask}/session`, {
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
        body: JSON.stringify({
            lang: (window.app.lang || 'en'),
            plan: plan,
            url: (window.app.url || 'https://openstreetmap.be')
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (session) {
            if (session.error) {
                handleError(session.error);
            } else {
                stripe.redirectToCheckout({
                    sessionId: session.id
                }).then(function (result) {
                    if (result.error) {
                        handleError(result.error.message);
                    }
                });
            }
        });
}

function createPayment(amount) {
    fetch(`${webtask}/session`, {
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
        body: JSON.stringify({
            amount: amount * 100,
            lang: (window.app.lang || 'en'),
            url: (window.app.url || 'https://openstreetmap.be')
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (session) {
            if (session.error) {
                handleError(session.error);
            } else {
                stripe.redirectToCheckout({
                    sessionId: session.id
                }).then(function (result) {
                    if (result.error) {
                        handleError(result.error.message);
                    }
                });
            }
        });
}

$(document).on('click', '.donation-btn', function (event) {
    const amount = parseFloat($(this).data('amount'));
    const plan = $(this).data('id');

    event.preventDefault();

    document.querySelectorAll('#donation-result > div').forEach(element => element.style.display = 'none');
    $('.overlay').show();

    if (typeof plan !== 'undefined') {
        createSubscription(plan);
    } else {
        createPayment(amount);
    }
});

$(document).ready(function () {
    loadSubscriptions();

    $('#donation-amount').on('change blur keyup', function (event) {
        const amount = parseInt($(this).val());

        if (amount > 0) {
            $('#donation-submit').prop('disabled', false);
        } else {
            $('#donation-submit').prop('disabled', true);
        }
    });
    $('#donation-submit').on('click', function (event) {
        const amount = parseInt($('#donation-amount').val());

        event.preventDefault();

        document.querySelectorAll('#donation-result > div').forEach(element => element.style.display = 'none');
        $('.overlay').show();

        createPayment(amount);
    });

    if (window.location.hash === '#success') {
        document.getElementById('donation-result-success').style.display = '';
    } else if (window.location.hash === '#cancel') {
        document.getElementById('donation-result-cancel').style.display = '';
    }
});
