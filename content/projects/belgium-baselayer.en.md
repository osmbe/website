---
title: Free Belgium Baselayers
lead: Jonathan Beliën
cover: belgium-basemap1.png
weight: 50
aliases: ["/2017/01/06/en-project-belgium-baselayer.html"]
---

Through this project we offer a OpenStreetMap baselayer for Belgium. This baselayer is be available for anyone using OpenLayers, Leaflet, ... for free.
Most tile servers have a [usage policy](http://wiki.openstreetmap.org/wiki/Tile_usage_policy) meaning you have to use commercial tiles servers (like Mapbox, Stamen, ...) or host your tiles server yourself.
We want to provide you with a third option, at least for Belgium, that is both open, free and easy to use.

This project hosts a custom OpenStreetMap tile rendering for Belgium so you can use OpenStreetMap in your application without depending on a commercial services and without having to know anything about hosting.
We also provide Belgium-specific renderings, like custom icons for train stations and bus stops for example. This helps keep OpenStreetMap in Belgium open and free for everyone.

This custom OpenStreetMap rendering is available in 3 languages:

* Default `name` tag;
* In French, with `name:fr` tag;
* In Dutch, with `name:nl` tag;

The default name means that all names of streets and places will be shown in the local language. In Brussels (and to some degree in the facility municipalities) this means both the Dutch and the French name will be shown.
The French and Dutch name versions give preference to that language, if available. In Brussels, this will make the map a lot easier to read. In the rest of the country, for example, Grammont will be shown for Geraardsbergen in the French version, and Bergen will be shown for Mons in the Dutch version.

### Custom icons/rendering

* Icon for `amenity=fast_food` + `cuisine=friture`
* Icon for `craft=brewery` or `industrial=brewery`

### How to use it?

You can see the baselayers available here: <https://tile.osm.be/>.

Everyone can use the tiles inside their own applications by using *OpenLayers*, *Leaflet* or any other library.  
If you want to use it with *[OpenLayers](https://openlayers.org/)* or *[Leaflet](http://leafletjs.com/)*, check this page : <https://openstreetmap.be/en/projects/howto.html#how-to-use-free-openstreetmap-belgium-baselayer>

**Please respect the [usage policy](https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy)!**

### Project documentation

* Custom OSMBE style: <https://github.com/jbelien/openstreetmap-carto-be>
* Documentation: <https://github.com/jbelien/openstreetmap-carto-be/wiki>
* Usage policy: <https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy>

### Project key events

We first tried using VectorTiles for OSMBE baselayer; it works quite well but the technology was not quite ready yet.

So we went back to good old raster tiles with <https://switch2osm.org/>:

* Fork of <https://github.com/gravitystorm/openstreetmap-carto>;
* Edit parameters for Belgium languages; if the `name:fr` (or `name:nl`) is not available, the `name` will be displayed;
* Add custom icons/rendering
* Host the tile server on <https://tile.osm.be/>
* Wrote the documentation: <https://github.com/jbelien/openstreetmap-carto-be/wiki>
* 2017: first publication of the tiles
* 2019, 2020 and 2022: updates by Geo-6
* 2024: maintenance of the tiles taken over by our partner [Champs-Libres](https://champs-libres.coop) ([news post](https://openstreetmap.be/nl/2024/04/25/tiles-updated.html)). Addition of historical layers to [our historical map](https://play.osm.be/historischekaart.html#17/50.73016/4.23513/OSMBelgiumArchiveMarch2019-OSMroads).
