---
title: "Heritage in Flanders and Crowd-Sourced Projects"
featured: images/project/heritage.png
layout: project
category: project
author: escada
lang: fr
---

# Les projets de crowdsourcing appliqué au patrimoine en Belgique

*N.B.: Cet article, intitulé à l'origine “Heritage in Flanders and Crowd-Sourced Projects”, a été écrit en anglais par Marc Gemis et traduit en français.*

## Introduction

Dans cet article, je montrerai comment on peut ajouter des informations
à propos du patrimoine immuable dans des projets collaboratifs comme
[OpenStreetMap](http://www.openstreetmap.org/) et certains des projets
de [Wikimedia](http://www.wikimedia.org/).

En Belgique, des listes des éléments du patrimoine immuable sont maintenues
par 3 agences, une pour la Flandre, une pour Bruxelles et une pour la
Wallonie. En Flandre, l’agence est appelée [Agentschap Onroerend Erfgoed](https://www.onroerenderfgoed.be/). Ils génèrent un catalogue
des éléments du patrimoine et statuent sur leur protection. Ils mettent
également une partie de [leur données](https://www.onroerenderfgoed.be/nl/onderzoek/wetenschappelijke-inventarissen)
comme données ouvertes. Dans leur catalogue, on retrouve des églises,
abbayes, châteaux, mais aussi de petites fermes et bâtisses. De plus, il
inclut de petits éléments tels que des bornes frontières et piloris.
Occasionelllement, le catalogue contient aussi des arbres remarquables sur des
places en milieu urbain.


![Pillory in Aartselaar](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-d6gBQB4/0/X3/Schandpaal%2C_Laar%2C_Aartselaar%20%282%29-X3.jpg)

*Pilori à Aartselaar*

Qu’est-ce qu’un projet de crowdsourcing? C’est un projet dans lequel
chacun peut ajouter des données, a contrario des projets privés
appartenant à des entreprises, où seulement les employés de l’entreprise
peuvent ajouter et modifier des données. Lorsqu’une entreprise détient ces données,
elle peut décider des règles d’utilisation et fixer le prix pour avoir
accès aux données. Dans un projet de crowdsourcing, normalement la base
de données est libre d’accès et d’utilisation. Pour en savoir plus sur
le concept de crowdsourccing, lisez cet [article de
Wikipedia](https://en.wikipedia.org/wiki/Crowdsourcing)
sur le sujet.

Cela explique également pourquoi il est intéressant d’avoir l’ensemble
des éléments du patrimoine immuable dans un projet de crowdsourcing: on
ne dépend plus des agences ou de leurs régles de copyright pour savoir
quand un bâtiment fut construit, ou utiliser une image de moulin dans
une publication, etc.

Alors que le domaine d’intervention d’une agence telle que "Onroerend
Erfgoed" est limité à une région géographique spécifique, les projets de
crowdsourcing présentés ci-dessous ont tous une portée globale.

Voyons voir maintenant quelques-uns de ces projets de crowdsourcing.


### [OpenStreetMap](http://www.openstreetmap.org)

C’est une base de données mondiale d’information géographique. Cette
base de données peut être utilisée pour créer des cartes [OpenStreetMap sur Wikipedia](https://en.wikipedia.org/wiki/OpenStreetMap). A noter que dans OpenStreetMap, on ne peut cartographier que des éléments qui
existent actuellement. Il ne s’agit pas de cartographier des bâtiments
complètement disparus.

### [Wikipedia](http://www.wikipedia.org)

C’est une encyclopédie en ligne de toutes les connaissances humaines. Les sujets sont décrits dans des articles et souvent illustrés avec des images, comme dans une encyclopédie imprimée. [Définition de Wikipedia dans Wikipedia](https://en.wikipedia.org/wiki/Wikipedia)

### [Wikimedia Commons](hhttps://commons.wikimedia.org)

C’est une base de données de fichiers de médias tels que des photos, des vidéos, des sons et des cartes. [Définition de Wikimedia Commons dans Wikipedia](https://en.wikipedia.org/wiki/Wikimedia_Commons)

### [Wikidata](http://www.wikidata.org)

C’est une base de données sur les personnes, faits et objets. [Définition de Wikidata dans Wikipedia](https://en.wikipedia.org/wiki/Wikidata)

## À quoi peut-on contribuer et où?

La localisation et le plan au sol d’un élément du patrimoine, ainsi que
le nom de l’élément et quelques autres informations basiques peuvent
être introduits dans OpenStreetMap. Un article décrivant l’origine et
l’histoire de l’élément peut aller dans Wikipedia. Des photos, des
modèles 3D ou même des vidéos prises avec un drone peuvent
être placées dans Wikimedia Commons. Et finalement, un résumé de ces
informations peut être introduit sous un format “machine” dans
Wikidata.

## Comment collecte-t-on de l’information ?

OpenStreetMap est pour une grande part basé sur des relevés de terrain.
Cela signifie que les contributeurs sortent à l’extérieur et collectent
des informations qui sont uniquement visibles sur le terrain. Wikipedia est largement basé
sur d’autres sources disponibles et, d'ailleurs, chaque article référence
généralement une liste d’articles sources. Pour les fichiers introduits
dans Wikipedia Commons, on doit détenir le copyright du média que l’on
ajoute, ou bien le média doit être non-restreint par un copyright.
Idéalement, chaque élément de Wikidata a une source, donc juste comme
Wikipedia, les données y sont basées sur base du travail d’autres auteurs.

## Comment puis-je collecter de l'information ?

Mon point de départ est la liste du patrimoine immuable sur Wikipedia.
Pour la Flandre, des contributeurs de Wikipedia ont compilé une [liste d'éléments par village](https://nl.wikipedia.org/wiki/Cultureel_erfgoed_in_Belgi%C3%AB).
J’ai écrit un script [Python](https://en.wikipedia.org/wiki/Python_%28programming_language%29)
qui convertit une page de Wikipedia de ce type en un fichier avec des
[waypoints](https://en.wikipedia.org/wiki/Waypoint) qui peut être
utilisé dans un GPS ou dans des applications de navigation sur
smartphone comme [OSMAnd](http://osmand.net/).

![Garmin Dakota 10 with waypoints](https://photos.smugmug.com/OSM/Screenshots/Screenshots-1/i-8ntJtzd/0/O/70.jpg)
![Details on Garmin](https://photos.smugmug.com/OSM/Screenshots/Screenshots-1/i-63Fvk2T/0/O/92%20copy.jpg)

*Garmin Dakota 10 avec des éléments du patrimoine mis en évidence en rouge et bleu**

![OsmAnd](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-4LK2Lp4/0/O/Screenshot_2017-03-27-14-38-59.png)

*Dans OSMAnd, les waypoints sont affichés avec des étoiles
blanches entourés par un cercle rouge. Cliquer sur une étoile montre des
informations additionelles en bas de l’écran. Dans le cas où il y a
plusieurs éléments proches les uns des autres, les détails sont listés
pour chaque élément.*

Cela me permet de faire de petits détours durant mes promenades en vue
de visiter des éléments du patrimoine. Lorsque j’arrive à l’endroit, je
vérifie si l’élément existe toujours et je prends des photos de
l’endroit. Lorsque l’élément n’existe plus, j’en informe
l’agence *Onroerend Erfgoed* de telle sorte qu’ils peuvent mettre à jour
leur base de données également. Je pense qu’ils apprécient ce genre de
feedbacks.

## Comment je traite les données collectées ?
De retour à la maison, je m’assure que les photos sont
[géoréférencées](https://en.wikipedia.org/wiki/Georeferencing) en
utilisant les traces GPS de ma promenade et le moment de prise de la
photo. J’utilise [Geotag](http://geotag.sourceforge.net/) dans ce but.
Les plus belles photos géoréférencées sont uploadées vers Wikimedia
Commons, en y ajoutant un nom, une description et quelques catégories.
Le système de catégories n’est pas toujours facile à comprendre, mais
j’essaye d’y ajouter au moins la référence “Onroerend erfgoed”.

Lorsque cela est terminé, je mets à jour la page Wikipedia avec la liste
des éléments du patrimoine dans une localité avec un lien vers la
nouvelle photo que j’ai uploadée. Bien sûr, cela seulement quand la page
n’avait pas de photo de l’élément auparavant.

J’ajoute également la forme du bâtiment dans OpenStreetMap, ainsi que
les tags nécessaires pour marquer la surface comme élément
historique/protégé, avec une référence à "Onroerend Erfgoed". Lorsqu’un
article Wikipedia ou un élément Wikidata existent, ils sont également
ajoutés dans OpenStreetMap.

Ajouter ces tags est facile dans [JOSM](https://josm.openstreetmap.de/), particulièrement
lorsque vous utilisez le preset pour les éléments historiques du [preset BENELUX](https://josm.openstreetmap.de/wiki/Presets/BENELUX).

![BENELUX Preset for monuments protected by Onroerend Erfgoed](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-pW9ptVd/0/X3/Screen%20Shot%202017-03-27%20at%2015.20.47-X3.png)
*BENELUX Preset pour les monuments protégés par**Onroerend Erfgoed*

Vous pouvez également démarrer l’écriture des articles Wikipedia et
créer un élément Wikidata avec quelques propriétés. J’ai récemment
commencé à ajouter des éléments pour les églises en Flandre basé sur
l’information trouvée dans "Onroerend Erfgoed" et les bases de données
[ODIS](http://www.odis.be/).

## Comment utilisez les données ?

### Wikipedia
Les articles Wikipedia peuvent être lus par n’importe qui et plus
d’informations peuvent être trouvées à travers les articles référencés,
comme cet [article](https://en.wikipedia.org/wiki/Cathedral_of_Our_Lady_%28Antwerp%29) sur la cathédrale d’Anvers.

### OpenStreetMap
Il y a un grand nombre de cartes basées sur OpenStreetMap qui montrent ces éléments du patrimoine:

#### HistOsm
C’est une [carte](http://histosm.org/) créée par l’Université de Heidelberg, GIScience (Geoinformatics) Research Group. Plus
d’[information](https://wiki.openstreetmap.org/wiki/HistOSM)

![HistOsm Map](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-ChHBNKX/0/X3/Screen%20Shot%202017-03-27%20at%2013.54.30-X3.png)
*HistOSM, all data (c) OpenStreetMap Contributors*

#### Historic Places

C’est une [carte](http://gk.historic.place/) développée par des contributeurs allemands passionnés durant leur temps libre. Elle est disponible en plusieurs langues et possède des [fonctionnalités intéressantes](https://wiki.openstreetmap.org/wiki/Historical_Objects) comme la possibilité d’afficher des cartes anciennes à la place des cartes contemporaines basées sur OpenStreetMap.

![Historic Places Map](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-NkHdJQ7/0/X3/Screen%20Shot%202017-03-27%20at%2021.07.04-X3.png)
*Historic Places, all data (c) OpenStreetMap Contributors. Topographical Map Vandermaelen.*

Chaque élément historique a une fenêtre popup qui contient des
informations issues de celles contenus dans la base de données
OpenStreetMap. Le popup peut contenir des liens vers Onroerend Erfgoed
(si le tag est présent …), wikipedia et wikidata. Le tag image est
reconnu et montre une image si celle-ci est disponible sous une licence
ouverte (comme c’est le cas pour les images de Wikimedia Commons). Le
tag wikimedia\_commons est aussi reconnu et le lien vous amènera vers la
page Wikimedia Commons montrant la catégorie avec toutes les images de
l’élément.

Le tag wikidata peut non seulement être exploré sur le site
wikidata.org, mais aussi dans des sites web améliorées comme
[Reasonator](https://tools.wmflabs.org/reasonator/) et
[Sqid](https://tools.wmflabs.org/sqid), quand vous cliquez sur les
icônes à côté du numéro Wikidata.

![Reasonator for Q28464643](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-DxtJ6nf/0/X3/Screen%20Shot%202017-03-27%20at%2013.53.21-X3.png)
*L’église Saint-Pierre de**Rumst**vue sur le site web**Reasonator**avec
des données de**Wikidata*

Si vous regardez à une page Reasonator telle que celle pour la
[Parochiekerk Sint-Pieter (Q28464643)](https://tools.wmflabs.org/reasonator/?q=Q28464643), vous
trouverez un lien vers “Overpass” sous la carte. Cela montrera l’élément
sur OpenStreetMap. Il est donc possible de définir des interfaces sur
Wikidata ou OpenStreetMap pour sauter d’un projet à l’autre.

Le résultat du click sur ce lien [Overpass](http://overpass-turbo.eu/)
de cette page Reasonator montre la page suivante dans laquelle l’église
Saint-Pierre (Sint-Pieterskerk) est mise en évidence et positionnée au
centre de la carte.

![Overpass showing item with Wikidata tag](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-v2vQxHG/0/X3/Screen%20Shot%202017-03-27%20at%2014.00.42-X3.png)
*Interface utilisateur *Overpass**montrant l’élément avec l’identifiant**Wikidata Q28464643*

### Wikidata

Comme les données de Wikidata sont bien structurés, a contrario des
phrases des articles de Wikipedia, on peut interroger de manière
informatique ces données. Cela permet, par exemple, de créer [une ligne du temps](http://tinyurl.com/zso674w) avec les dates de conception des
églises en Belgique, ou bien un [graphique](http://tinyurl.com/myfpwqm)
avec leur style architectural. En cliquant sur les liens dans ce
paragraphe, vous serez amenés au site d’interrogation de Wikidata où
vous pourrez lancer des interrogations et explorer les données
vous-mêmes.

![timeline of Belgian Churches](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-MGNPLd8/0/X3/Screen%20Shot%202017-03-27%20at%2013.51.04-X3.png)
*Ligne du temps de la construction des églises en Belgique*

![bubble chart of architecture of Belgian Churches](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-s544Ndb/0/X2/Screen%20Shot%202017-03-27%20at%2020.45.47-X2.png)
*Les styles architecturaux utilisés dans les églises en Belgique*

Vous pouvez également créer des cartes combinant Wikidata avec
OpenStreetMap. La carte suivante affiche toutes les églises de Belgique
depuis Wikidata lorsque celles-ci ont une date de conception. Elles ont
une couleur différente en fonction de cette date de conception. La forme
de l’église est prise d’OpenStreetMap.

![Wikidata and OpenStreetMap](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-gKKpzrr/0/X2/Screen%20Shot%202017-04-01%20at%2021.33.00-X2.png)
*Combining Wikidata and OpenStreetMap*

Vous pouvez regarder cette carte sur ma page d’[utilisateur](https://www.mediawiki.org/wiki/User:Funkyxian) Wikimedia
et explorer les données vous-mêmes, ou bien regarder au code utilisé
pour générer la carte.

## Conclusion

J’espère que ces exemples vous ont donné une idée du champ des
possibles avec des données collaboratives et ouvertes. Je pense que les
possibilités de connecter Wikidata et OpenStreetMap sont infinies et que
de meilleurs outils d’intégration apparaîtront dans le futur.

Sentez-vous libre de me contacter via marc dot gemis at gmail dot com.
