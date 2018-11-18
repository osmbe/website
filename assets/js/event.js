$(document).ready(() => {
    var map = L.map('map').setView([
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
});
