'use strict';

import redirect from '../redirect';

export default function (plan) {
    redirect({
        lang: (window.app.lang || 'en'),
        plan: plan,
        url: (window.app.url || 'https://openstreetmap.be')
    });
}