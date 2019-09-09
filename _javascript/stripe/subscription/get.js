'use strict';

import fetch from '../fetch';
import createSubscription from './create';

function createElementLi(id, amount, text) {
    const li = document.createElement('li');

    li.className = 'donation-btn';
    li.dataset.id = id;
    li.dataset.amount = amount;
    li.innerHTML = text;

    li.addEventListener('click', event => {
        const plan = event.target.dataset.id;

        event.preventDefault();

        createSubscription(plan);
    });

    return li;
}

export default function () {
    const webtask = process.env.WEBTASK_URL;

    return fetch('GET', `${webtask}/subscriptions`)
        .then(response => response.json())
        .then(data => {
            data.monthly.forEach(subscription => {
                const amount = subscription.amount / 100;
                const li = createElementLi(subscription.id, amount, `${amount} &euro; per month`);

                document.getElementById('donation-monthly-items').append(li);
            });

            data.yearly.forEach(subscription => {
                const amount = subscription.amount / 100;
                const li = createElementLi(subscription.id, amount, `${amount} &euro; per year`);

                document.getElementById('donation-yearly-items').append(li);
            });
        })
        .catch(function (error) {
            console.error('There has been a problem with your fetch "/subscription" operation: ', error.message);
        });
}