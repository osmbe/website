'use strict';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

(function () {
    const map = L.map('map').setView([
        window.app.event.latitude,
        window.app.event.longitude
    ], 17);

    L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' +
            ', Tiles courtesy of <a target="_blank" href="https://geo6.be/">GEO-6</a>.',
        maxZoom: 18
    }).addTo(map);

    L.marker([
        window.app.event.latitude,
        window.app.event.longitude
    ]).addTo(map);
})();