---
title: Gratis basiskaart van België
lead: Jonathan Beliën
cover: belgium-basemap1.png
weight: 50
aliases: ["/2017/01/06/nl-project-belgium-baselayer.html"]
---

Met dit project bieden we een gratis OpenStreetMap basiskaart aan voor België. Deze laag is beschikbaar voor iedereen in projecten met OpenLayers, Leaflet en dergelijke. De meeste tile servers hebben een restrictief [gebruiksbeleid](http://wiki.openstreetmap.org/wiki/Tile_usage_policy), wat betekent dat je in de praktijk commerciële dienstverleners moet gebruiken (zoals Mapbox, Stamen, ...) of zelf tiles moet hosten.
Met OpenStreetMap Belgium willen we een derde optie aanbieden, zodat je voor België een open, gratis en gemakkelijk alternatief hebt.

Met de project hosten we de standaard OpenStreetMap achtergrondkaart lichtjes aangepast op maat van België. Je hoeft dus geen technische kennis te hebben en je moet niet afhankelijk zijn van commerciële dienstverleners. In de Belgische stijl tonen we aangepaste iconen voor bijvoorbeeld treinstations en bushaltes. Maar het belangrijkste is dat we de kaart aanbieden in drie talen:

* Met de standaard `name` tag;
* In het Frans op basis van de `name:fr` tag;
* In het Nederlands op basis van de `name:nl` tag;

Met de standaard _name_ of naam toon je plaatsnamen en straten met de naam in de lokale taal. In Brussel en sommige faciliteitengemeenten betekent dit dat de namen tegelijk in het Frans en het Nederlands getoond worden.
De Franse en Nederlandse versie geven voorkeur aan die taal, indien beschikbaar. In Brussel maakt dit de kaart veel leesbaarder. In de rest van het land krijg je dan bijvoorbeeld Grammont te zien voor Geraardsbergen in de Franstalige versie, of Bergen voor Mons in de Nederlandstalige versie.

## Specifieke iconen

* Icoon voor `amenity=fast_food` + `cuisine=friture`
* Icoon voor `craft=brewery` or `industrial=brewery`

## Hoe de basiskaart gebruiken?

Je kan de versies van de basiskaart hier zien: <https://tile.osm.be/>.

Iedereen kan en mag de tiles gebruiken in hun eigen toepassingen, bijvoorbeeld via _OpenLayers_ of _Leaflet_.
Gedetailleerde info om ze via _[OpenLayers](https://openlayers.org/)_ of _[Leaflet](http://leafletjs.com/)_, te gebruiken, vind je hier: [How to use free OpenStreetMap Belgium baselayer]({{% ref lang="en" path="posts/2019-03-24-how-to-create-a-simple-map-with-a-marker-based-on-openstreetmap.md" %}}) (EN)

**We vragen wel de [gebruiksvoorwaarden](https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy) te respecteren!**

## Project documentatie

* Aangepaste OSMBE kaartstijl: <https://github.com/jbelien/openstreetmap-carto-be>
* Documentatie: <https://github.com/jbelien/openstreetmap-carto-be/wiki>
* Gebruiksvoorwaarden: <https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy>

## Project key events

We hebben eerst geprobeerd om de OSMBE basemap te maken als VectorTiles, maar de technologie was daar toen nog niet rijp voor. Dus we gebruiken de klassieke rastertiles op basis van de documentatie op <https://switch2osm.org/>:

* We maakten een fork van <https://github.com/gravitystorm/openstreetmap-carto>;
* Parameters om om te gaan met de talen. Toon enkel de `name` indien `name:fr`, respectievelijk `name:nl` niet beschikbaar is
* Toevoegen lokale iconen
* Tileset gehost op <https://tile.osm.be/>
* Documentatie uitgeschreven op <https://github.com/jbelien/openstreetmap-carto-be/wiki>
* 2017: eerste publicatie van de tegels
* 2019, 2020 en 2022: updates door Geo-6
* 2024: onderhoud van de tegels wordt overgenomen door onze partner [Champs-Libres](https://champs-libres.coop) ([nieuwspost]({{< ref "posts/2024-04-25-tiles-updated.md" >}})). Aanvulling historische lagen op [onze historische kaart](https://play.osm.be/historischekaart.html#17/50.73016/4.23513/OSMBelgiumArchiveMarch2019-OSMroads).
