import { getSubscription, createSubscription } from './stripe/subscription';
import createPayment from './stripe/payment';

(function () {
    getSubscription();

    ['change', 'blur', 'keyup'].forEach(type => {
        document.getElementById('donation-amount').addEventListener(type, event => {
            const amount = parseInt(event.target.value);

            if (amount > 0) {
                document.getElementById('donation-submit').removeAttribute('disabled');
            } else {
                document.getElementById('donation-submit').setAttribute('disabled', '');
            }
        });
    });

    document.getElementById('donation-submit').addEventListener('click', event => {
        const amount = parseInt(document.getElementById('donation-amount').value);

        event.preventDefault();

        createPayment(amount);
    });

    document.querySelectorAll('.donation-btn').forEach(element => {
        element.addEventListener('click', event => {
            const amount = parseFloat(element.dataset.amount);
            const plan = element.dataset.id;

            event.preventDefault();

            if (typeof plan !== 'undefined') {
                createSubscription(plan);
            } else {
                createPayment(amount);
            }
        });
    });

    if (window.location.hash === '#success') {
        document.getElementById('donation-result-success').style.display = '';
    } else if (window.location.hash === '#cancel') {
        document.getElementById('donation-result-cancel').style.display = '';
    }
})();