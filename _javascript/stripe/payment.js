'use strict';

import redirect from './redirect';

export default function (amount) {
    redirect({
        amount: amount * 100,
        lang: (window.app.lang || 'en'),
        url: (window.app.url || 'https://openstreetmap.be')
    });
}