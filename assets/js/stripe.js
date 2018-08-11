let handler = StripeCheckout.configure({
    allowRememberMe: false,
    image: 'https://www.osm.be/assets/images/logo.png',
    key: 'pk_test_6x3uarR1wYsEoIFq8XWYisWS',
    locale: 'auto',
    token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        let data = {
            amount: Math.floor(document.getElementById('donateAmount').value * 100),
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
                console.log(response);
                return response.json();
            }).
            then(function (data) {
                console.log(data);
            });
    }
});

document.getElementById('donateButton').addEventListener('click', function(e) {
    // Open Checkout with further options:
    handler.open({
        name: 'OpenStreetMap Belgium',
        description: 'Donation to OpenStreetMap Belgium',
        currency: 'eur',
        amount: document.getElementById('donateAmount').value * 100
    });
    e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
    handler.close();
});
