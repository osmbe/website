---
title: "Free Belgium Baselayers"
featured: images/belgium-basemap1.png
layout: project
author: Ben Abelshausen
project_lead: Jonathan Belliën
lang: en
---

The goal for this project is to offer a OpenStreetMap baselayer for Belgium. This baselayer will be available for anyone using OpenLayers, Leaflet, ... Most tile servers have a [usage policy](http://wiki.openstreetmap.org/wiki/Tile_usage_policy) meaning you have to use commercial tiles servers (like Mapbox, Stamen, ...) or host your tiles server yourself. We want to provide you with a third option, at least for Belgium, that is both open, free and easy to use.

This project aims to host for you a custom OpenStreetMap tile rendering for Belgium so you can use OpenStreetMap in your application without depending on a commercial service and without having to know anything about hosting. We also provide Belgium-specific renderings, like custom icons for train stations and bus stops for example. This helps keep OpenStreetMap in Belgium open and free for everyone.

This custom OpenStreetMap rendering will be available in 4 languages : 
* Default "name" tag.
* In French, with "name:fr" tag.
* In Dutch, with "name:nl" tag.
* In German, with "name:de" tag.

### Project key events

1. First try on using VectorTiles for OSMBE baselayer ; it works quite well but I do not think the technology is ready yet.
1. Back to good old raster tiles with [https://switch2osm.org/](https://switch2osm.org/).
  1. Fork of [https://github.com/gravitystorm/openstreetmap-carto](https://github.com/gravitystorm/openstreetmap-carto).
  1. Edit default parameters for Belgium languages.
  1. Host test on [http://tile.openstreetmap.be/](http://tile.openstreetmap.be/)

### Project documentation

* Custom OSMBE style : https://github.com/jbelien/openstreetmap-carto-be
* Documentation : https://github.com/jbelien/openstreetmap-carto-be/wiki

### Project key contributors

* Jonathan Beliën:
  * https://github.com/jbelien
  * https://twitter.com/jbelien
* Thibaut Philippart: help with VectorTiles.
