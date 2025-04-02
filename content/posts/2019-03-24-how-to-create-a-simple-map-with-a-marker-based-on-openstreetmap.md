---
categories: ["howto"]
title: How to create a simple map (with a marker) based on OpenStreetMap
---

## Introduction

There are 2 most common open-source JavaScript libraries used to display a map : [Leaflet](https://leafletjs.com/) and [OpenLayers](https://openlayers.org/).

## Build a simple map using Leaflet

This tutorial is based on [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) and uses version `1.4.0` of the library. I suggest you check if there is a more up-to-date version before proceeding.

1. Include the Leaflet stylesheet in the `<head>` section of your HTML page

    ```html
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
        integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
        crossorigin="">
    ```

1. Include the Leaflet JavaScript library at the end of the `<body>` section of your HTML page

    ```html
    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
        integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
        crossorigin=""></script>
    ```

1. Put a `<div id="map">` element where you want your map to be

    ```html
    <div id="map" style="width: 600px; height: 400px;"></div>
    ```

1. Now you can add a `<script>` section at the end of the `<body>` section (after the `<script>` that loads Leaflet JavaScript library). All the following JavaScript code needs to go in that new `<script>` section.

1. Initialize the map

    ```js
    var map = L.map('map').setView([50.84673, 4.35247], 12);
    ```

    The map will be displayed in `<div id="map">` element and will be centered on Brussels (Latitude = 50.84673, Longitude = 4.35247) at zoom level 12.

1. Add the OpenStreetMap Belgium baselayer

    ```js
    L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
            ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
        maxZoom: 18
    }).addTo(map);
    ```

1. You can add a marker at a specific location

    ```js
    var marker = L.marker([50.84673, 4.35247]).addTo(map);
    ```

1. And bind a popup to that marker.

    ```js
    var popup = marker.bindPopup('<b>Hello world!</b><br />I am a popup.');
    ```

    By default, the popup will open if you click on the marker.  
    If you want the popup to open automatically when the map is loaded, you can add

    ```js
    popup.openPopup();
    ```

Now, you can check [the result](/leaflet-demo.html)!

### Documentation

- Leaflet Map : <https://leafletjs.com/reference-1.4.0.html#map>
- Leaflet TileLayer : <https://leafletjs.com/reference-1.4.0.html#tilelayer>
- Leaflet Marker : <https://leafletjs.com/reference-1.4.0.html#marker>
- Leaflet Popup : <https://leafletjs.com/reference-1.4.0.html#popup>

## Build a simple map using OpenLayers

This tutorial is based on [OpenLayers Quick Start Guide](https://openlayers.org/en/latest/doc/quickstart.html) and the [OpenLayers Popup Example](https://openlayers.org/en/latest/examples/popup.html) and uses version `5.3.0` of the library. I suggest you check if there is a more up-to-date version before proceeding.

The OpenLayers library is more powerful than the Leaflet library and offers more built-in functionalities than Leaflet but because of that, the simple things tend to be more complicated.

1. Include the OpenLayers stylesheet in the `<head>` section of your HTML page

    ```html
    <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css">
    ```

1. Include the OpenLayers JavaScript library at the end of the `<body>` section of your HTML page

    ```html
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
    ```

1. Put a `<div id="map">` element where you want your map to be

    ```html
    <div id="map" style="width: 600px; height: 400px;"></div>
    ```

1. Now you can add a `<script>` section at the end of the `<body>` section (after the `<script>` that loads OpenLayers JavaScript library). All the following JavaScript code needs to go in that new `<script>` section.

1. Initialize the map with the OpenStreetMap Belgium baselayer

    ```js
    var attribution = new ol.control.Attribution({
        collapsible: false
    });

    var map = new ol.Map({
        controls: ol.control.defaults({attribution: false}).extend([attribution]),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                    attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                    maxZoom: 18
                })
            })
        ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.fromLonLat([4.35247, 50.84673]),
            maxZoom: 18,
            zoom: 12
        })
    });
    ```

    The map will be displayed in `<div id="map">` element and will be centered on Brussels (Latitude = 50.84673, Longitude = 4.35247) at zoom level 12.

1. You can add a marker at a specific location

    ```js
    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([4.35247, 50.84673]))
                })
            ]
        })
    });
    map.addLayer(layer);
    ```

1. You can create a new `<div id="popup">` element right after the `<div id="map">` element

    ```html
    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
    </div>
    ```

1. Initialize the popup (the following JavaScript code needs to go in the `<script>` section)

    ```js
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    map.addOverlay(overlay);

    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };
    ```

1. Add the function to open the popup when you click on the marker

    ```js
    map.on('singleclick', function (event) {
        if (map.hasFeatureAtPixel(event.pixel) === true) {
            var coordinate = event.coordinate;

            content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
            overlay.setPosition(coordinate);
        } else {
            overlay.setPosition(undefined);
            closer.blur();
        }
    });
    ```

    By default, the popup will open if you click on the marker.
    If you want the popup to open automatically when the map is loaded, you can add

    ```js
    content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
    overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));
    ```

Now, you can check [the result](/openlayers-demo.html)!

### Documentation

- OpenLayers Map : <https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html>
- OpenLayers Attribution : <https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html>
- OpenLayers View : <https://openlayers.org/en/latest/apidoc/module-ol_View-View.html>
- OpenLayers TileLayer : <https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html>
- OpenLayers OSMSource : <https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html>
- OpenLayers VectorLayer : <https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html>
- OpenLayers VectorSource : <https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html>
- OpenLayers Feature : <https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html>
- OpenLayers Overlay : <https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html>

## Other libraries

You can also have a look at [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/examples/).
