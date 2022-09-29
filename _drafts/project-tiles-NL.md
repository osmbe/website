IN PROGRESS

---
title: Gratis basiskaart van België
layout: project
lang: nl
featured: belgium-basemap1.png
lead: Jonathan Beliën
redirect_from: /2017/01/06/en-project-belgium-baselayer.html
---

Met dit project bieden we een gratis OpenStreetMap basiskaart aan voor België. Deze laag is beschikbaar voor iedereen in projecten met OpenLayers, Leaflet en dergelijke. De meeste tile servers hebben een restrictief [gebruiksbeleid](http://wiki.openstreetmap.org/wiki/Tile_usage_policy), wat betekent dat je in de praktijk commerciële dienstverleners moet gebruiken (zoals Mapbox, Stamen, ...) of zelf tiles moet hosten.
Met OpenStreetMap Belgium willen we een derde optie aanbieden, zodat je voor België een open, gratis en gemakkelijk alternatief hebt.

Met de project hosten we de standaard OpenStreetMap achtergrondkaart lichtjes aangepast op maat van België. Je hoeft dus geen technische kennis te hebben en je moet niet afhankelijk zijn van commerciële dienstverleners. In de Belgische stijl tonen we aangepaste iconen voor bijvoorbeeld treinstations en bushaltes. Maar het belangrijkste is dat we de kaart aanbieden in drie talen:

* Met de standaard `name` tag;
* In het Frans op basis van de `name:fr` tag;
* In het Nederlands op basis van de `name:nl` tag;

Met de standaard _name_ of naam toon je plaatsnamen en straten met de naam in de lokale taal. In Brussel en sommige faciliteitengemeenten betekent dit dat de namen tegelijk in het Frans en het Nederlands getoond worden. 
De Franse en Nederlandse versie geven voorkeur aan die taal, indien beschikbaar. In Brussel maakt dit de kaart veel leesbaarder. In de rest van het land 

The French and Dutch name versions give preference to that language, if available. In Brussels, this will make the map a lot easier to read. In the rest of the country, for example, Grammont will be shown for Geraardsbergen in the French version, and Bergen will be shown for Mons in the Dutch version.

### Project key events

We first tried using VectorTiles for OSMBE baselayer; it works quite well but the technology was not quite ready yet.

So we went back to good old raster tiles with <https://switch2osm.org/>:

- Fork of <https://github.com/gravitystorm/openstreetmap-carto>;
- Edit parameters for Belgium languages; if the `name:fr` (or `name:nl`) is not available, the `name` will be displayed;
- Add custom icons/rendering
- Host the tile server on <https://tile.osm.be/>
- Wrote the documentation: <https://github.com/jbelien/openstreetmap-carto-be/wiki>

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
