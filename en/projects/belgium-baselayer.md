---
title: Free Belgium Baselayers
layout: project
lang: en
featured: belgium-basemap1.png
lead: Jonathan Beliën
redirect_from: /2017/01/06/en-project-belgium-baselayer.html
---

The goal for this project is to offer a OpenStreetMap baselayer for Belgium. This baselayer will be available for anyone using OpenLayers, Leaflet, ...
Most tile servers have a [usage policy](http://wiki.openstreetmap.org/wiki/Tile_usage_policy) meaning you have to use commercial tiles servers (like Mapbox, Stamen, ...) or host your tiles server yourself.
We want to provide you with a third option, at least for Belgium, that is both open, free and easy to use.

This project aims to host for you a custom OpenStreetMap tile rendering for Belgium so you can use OpenStreetMap in your application without depending on a commercial service and without having to know anything about hosting.
We also provide Belgium-specific renderings, like custom icons for train stations and bus stops for example. This helps keep OpenStreetMap in Belgium open and free for everyone.

This custom OpenStreetMap rendering will be available in 4 languages:

* Default `name` tag;
* In French, with `name:fr` tag;
* In Dutch, with `name:nl` tag;

### Project key events

We first tried using VectorTiles for OSMBE baselayer; it works quite well but I do not think the technology is ready yet.

So we went back to good old raster tiles with <https://switch2osm.org/>:

- Fork of <https://github.com/gravitystorm/openstreetmap-carto>;
- Edit parameters for Belgium languages; if the `name:fr` (or `name:nl`) is not available, the `name` will be displayed;
- Add custom icons/rendering
- Host the tile server on <https://tile.osm.be/>
- Write the documentation: <https://github.com/jbelien/openstreetmap-carto-be/wiki>
- Enable auto-update of the tiles

### Custom icons/rendering

- Icon for `amenity=fast_food` + `cuisine=friture`
- Icon for `craft=brewery` or `industrial=brewery`

### How to use it?

You can see the baselayers available here: <https://tile.osm.be/>.

Everyone can use the tiles inside their own applications by using *OpenLayers*, *Leaflet* or any other library.  
If you want to use it with *[OpenLayers](https://openlayers.org/)* or *[Leaflet](http://leafletjs.com/)*, check this page : <https://openstreetmap.be/en/projects/howto.html#how-to-use-free-openstreetmap-belgium-baselayer>

**Please respect the [usage policy](https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy)!**

### Project documentation

- Custom OSMBE style: <https://github.com/jbelien/openstreetmap-carto-be>
- Documentation: <https://github.com/jbelien/openstreetmap-carto-be/wiki>
- Usage policy: <https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy>
