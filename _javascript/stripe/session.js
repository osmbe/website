'use strict';

import fetch from './fetch';

export default function (data) {
    const webtask = process.env.WEBTASK_URL;

    return fetch('POST', `${webtask}/session`, data)
        .then(response => response.json());
}