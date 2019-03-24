---
title: How to create a simple map (with a marker) using Leaflet ?
layout: project
lang: en
highlight: true
---

This tutorial is based on [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) and uses version `1.4.0` of the library. I suggest you check if there is a more up-to-date version before proceeding.

1. Include the Leaflet stylesheet in the `<head>` section of your HTML page

    ```html
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
        integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
        crossorigin="">
    ```

2. Include the Leaflet JavaScript library at the end of the `<body>` section of your HTML page

    ```html
    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
        integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
        crossorigin=""></script>
    ```

3. Put a `<div id="map">` element where you want your map to be

    ```html
    <div id="map" style="width: 600px; height: 400px;"></div>
    ```

4. Now you can add a `<script>` section at the end of the `<body>` section (after the `<script>` that loads Leaflet JavaScript library). All the following JavaScript code needs to go in that new `<script>` section.

5. Initialize the map

    ```js
    var map = L.map('map').setView([50.84673, 4.35247], 12);
    ```

    The map will be displayed in `<div id="map">` element and will be centered on Brussels (Latitude = 50.84673, Longitude = 4.35247) at zoom level 12.

6. Add the OpenStreetMap Belgium baselayer

    ```js
    L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
            ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
    }).addTo(map);
    ```

7. You can add a marker at a specific location

    ```js
    var marker = L.marker([50.84673, 4.35247]).addTo(map);
    ```

8. And bind a popup to that marker.

    ```js
    var popup = marker.bindPopup('<b>Hello world!</b><br />I am a popup.');
    ```

    By default, the popup will open if you click on the marker.  
    If you want the popup to open automatically when the map is loaded, you can add

    ```js
    popup.openPopup();
    ```

Now, you can check [the result](./leaflet-demo.html)!

---

Documentation:

- Leaflet Map : <https://leafletjs.com/reference-1.4.0.html#map>
- Leaflet TileLayer : <https://leafletjs.com/reference-1.4.0.html#tilelayer>
- Leaflet Marker : <https://leafletjs.com/reference-1.4.0.html#marker>
- Leaflet Popup : <https://leafletjs.com/reference-1.4.0.html#popup>
