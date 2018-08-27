---
title: "Free Belgium Baselayers"
featured: images/project/belgium-basemap1.png
layout: project
category: project
author: Jonathan Beliën
project_lead: Jonathan Beliën
lang: fr
---

Le but de ce projet est d'offrir un fond de carte OpenStreetMap pour la Belgique. Ce fond de carte est disponible pour tout utilisateur de OpenLayers, Leaflet, QGIS, ...
La plupart des serveurs de *tiles* ont des [conditions d'utilisation](https://operations.osmfoundation.org/policies/tiles/) précisant que vous devez utiliser un serveur de *tiles* commercial (comme Mapbox, Stamen, ...) ou héberger vous même votre propre serveur de *tiles*.
OpenStreetMap Belgique souhaite offrir une 3ème option, du moins pour le territoire belge, qui est à la fois *open*, gratuit et facile à utiliser.

Ce projet héberge pour vous un système de génération de *tiles* personnalisé pour la Belgique pour que vous puissiez utiliser le fond de carte OpenStreetMap dans votre propre application sans devoir dépendre d'un service commercial et sans devoir vous prendre la tête à héberger tout ça vous même. Cela permet de garder le fond de carte OpenStreetMap *open* et libre d'utilisation pour tout le monde en Belgique.
Nous fournissons également des fonds de carte personnalisé, comme par exemple l'icône des pharmacies.

Ce fond de carte est disponible en 4 versions linguistiques :

* Le tag `name` par défaut (c'est ce qui est utilisé sur <https://openstreetmap.org/>) ;
* En Français, avec le tag `name:fr` ;
* En Néérlandais, avec le tag `name:nl` ;
* En Allemand, avec le tag `name:de` ;

### Evénements clés

Nous avons d'abord essayé d'utiliser la technologie des *VectorTiles* pour le fond de carte, en 2016 ; cela fonctionne bien mais est assez lourd à mettre en place, l'idée a donc été abandonnée.

Nous avons donc décidé de retourner un bon vieux *raster* en suivant la procédure décrite par <https://switch2osm.org/> :

- Fork du dépôt <https://github.com/gravitystorm/openstreetmap-carto> ;
- Edition de la procédure pour extraire les données nécessaires ; si le `name:fr` (ou `name:nl` ou `name:de`) n'est pas disponible, le `name` est affiché ;
- Ajout des icônes propres à la Belgique (voir ci-dessous) ;
- Hébergement du serveur sur <https://tile.osm.be/> ;
- Ecriture de la documentation : <https://github.com/jbelien/openstreetmap-carto-be/wiki> ;
- Activation de la mise à jour automatique des fonds de carte (une fois par semaine, tous les Dimanches) ;

**Mise à jour mi-2017 :** Grâce au projet [OpenMapTiles](https://openmaptiles.org/), cela devrait être beaucoup plus simple de mettre en place les *VectorTiles* pour la Belgique. Cela sera déployé dans un futur proche.

### Icônes propres aux fonds de carte OpenStreetMap Belgique

- Pharmacie : signe "+" vert ;

### Comment utiliser le fond de carte ?

Vous pouvez visualiser les fonds de carte ici : <https://tile.osm.be/>.

Tout le monde peut utiliser les *tiles* dans leur propre application en utilisant *OpenLayes*, *Leaflet* ou toute autre libraire :

- Si vous souhaitez utiliser *[OpenLayers](https://openlayers.org/)*, allez voir la documentation <https://github.com/jbelien/openstreetmap-carto-be/wiki/> ;
- La documentation pour *[Leaflet](http://leafletjs.com/)* doit encore être écrite ;

**Veuillez respecter les [conditions d'utilisation](https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy) !**

### Documentation

- Dépôt GitHub du project : <https://github.com/jbelien/openstreetmap-carto-be>
- Documentation : <https://github.com/jbelien/openstreetmap-carto-be/wiki>
- Conditions d'utilisation : <https://github.com/jbelien/openstreetmap-carto-be/wiki/Tile-Usage-Policy>
