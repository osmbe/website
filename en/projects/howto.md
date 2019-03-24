---
title: How To ... ?
layout: project
lang: en
highlight: true
---

You'll find here a list of "How to" tutorials related to OpenStreetMap.

- [How to see the map](#how-to-see-the-map)
- [How to create a simple map (with a marker) based on OpenStreetMap](#how-to-create-a-simple-map-with-a-marker-based-on-openstreetmap)
- [How to use free OpenStreetMap Belgium baselayer](#how-to-use-free-openstreetmap-belgium-baselayer)

---

## How to see the map

You can check the map here : [https://www.openstreetmap.org/](https://www.openstreetmap.org/#map=8/50.5157/4.45) !

---

## How to create a simple map (with a marker) based on OpenStreetMap

There are 2 most common open-source JavaScript libraries used to display a map : [Leaflet](https://leafletjs.com/) and [OpenLayers](https://openlayers.org/).

- [Build a simple map using Leaflet](./howto/leaflet.html)
- [Build a simple map using OpenLayers](./howto/openlayers.html)

You can also have a look at [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/examples/).

---

## How to use free OpenStreetMap Belgium baselayer

It is quite easy and it's completely free!  
We just ask you to use the required credits/attributions : [OpenStreetMap](https://openstreetmap.org/) contributors for the data and [SPRL GEO-6 BVBA](https://geo6.be/) for the tiles hosting.

You can have a look at our baselayer here : [https://tile.openstreetmap.be/](https://tile.openstreetmap.be/#map=8/50.5157/4.45)

Here are 2 examples using the most common open-source JavaScript libraries ([Leaflet](https://leafletjs.com/) and [OpenLayers](https://openlayers.org/)).  
If you're not familiar to those libraries, have a look at "[How to create a simple map (with a marker) based on OpenStreetMap ?](#simple-map)".

Our baselayer is available with the default names but also with French or Dutch only names (if available):

- To use French only names, use `https://tile.openstreetmap.be/osmbe-fr/{z}/{x}/{y}.png` (**``osmbe-fr``** instead of ``osmbe`` in following examples) ;
- To use Dutch only names, use `https://tile.openstreetmap.be/osmbe-nl/{z}/{x}/{y}.png` (**``osmbe-nl``** instead of ``osmbe`` in following examples) ;

If you're using [Leaflet](https://leafletjs.com/):

```js
var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
    ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
  maxZoom: 18
}).addTo(map);
```

If you're using [OpenLayers](https://openlayers.org/):

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
    center: [0, 0],
    maxZoom: 18,
    zoom: 2
  })
});
```
