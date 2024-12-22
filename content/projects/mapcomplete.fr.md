---
title: MapComplete
lead: Pieter Vander Vennet
cover: mapcomplete.png
weight: 60
aliases: ["/fr/projects/mapcomplete.html"]
---

De plus en plus de gens utilisent OpenStreetMap (OSM) comme fonds de carte. Mais OpenStreetMap n'est pas seulement une carte : nous sommes aussi une base de données spatiales. Combien connaissez-vous d'applications qui répertorient les fontaines publiques, les toilettes publiques, les emplacements de camping, les cafés offrant le Wi-Fi, les parkings, etc ? Malheureusement, toutes ces cartes séparées constituent des îlots d'informations. Tout cela peut être créé facilement avec OpenStreetMap !

Rassembler ces données en dehors d'OpenStreetMap présentent des inconvénients majeurs.

* **Celui qui construit une telle app doit tout construire** : un site web, une base de données, la gestion des comptes, diverses applications, une communauté d'utilisateurs, un modèle de maintenance des données, l'hébergement des données, etc.
* Cette multiplication des efforts signifie qu'une énergie considérable doit être consacrée pour garantir le fonctionnement de toutes ces choses. Ceci conduit à des **modèles économiques fermés** où l'application est initialement offerte gratuitement mais devient payante et coûte de plus en plus cher pour accéder aux données. Et ceci est particulièrement tentant si l'on parvient à créer une "audience captive".
* Ces **îlots de données** peuvent même entrer en compétition pour rassembler les mêmes types d'objets. Ceci implique que les mêmes données sont relevées plusieurs fois ou du travail inutile pour tenter de fusionner des jeux de données.
* Etant donné qu'il s'agit d'initiatives relativement petites, il y a un vrai **risque que les données soient perdues**.

Mais pourquoi tout le monde n'utilise pas OpenStreetMap, alors ? Chacun peut utiliser notre base de données et notre système de gestion des utilisateurs. Il vous est possible de créer un modèle d'entreprise autours de nos données. Vos données seront maintenues par une large communauté. Et vos données seront enrichies par des personnes qui partagent des intérêts similaires et utilisent d'autres apps.

A vrai dire, nous sommes aussi étonnés. Nous pensons qu'il y a deux éléments sur lesquels nous pouvons agir:

* Ajouter des données à OpenStreetMap exige les apprentissages élémentaires pour contribuer n'importe quel type de données, ce qui signifie qu'il faut apprendre les bases de la cartographie en général et pas simplement sur le sujet qui vous intéresse. Notre modèle de données est assez complexe et documenté dans des pré-configurations logicielles et des pages sur le Wiki qui peuvent être difficiles à lire.
* Les utilisateurs sont habitués à des fonds de carte qui ne permettent pas d'agit avec les points d'intérêts. La plupart des cartes OpenStreetMap sont de portée générale et ne donne donc pas le niveau de détails qu'un usage pointu requiert (par exemple, "cette eau est-elle potable ?").

## MapComplete à la rescousse

MapComplete tente de résoudre tout cela. C'est une **application web progressive** qui peut être adaptée à n'importe quel sujet. Elle permet de:

* n'indiquer qu'un sous-ensemble particulier de points d'intérêts
* traduire les propriétés des objets dans un texte et un jeu d'icônes compréhensibles à l'utilisateur
* et même de consulter des [critiques publiques](https://mangrove.reviews) à propos de l'objet!

Et MapComplete ne se contente pas d'afficher les données, elle permet également **d'ajouter ou de modifier des données**. Pour n'importe quel type de point d'intérêt, un jeu de questions a été créé. Et toute personne qui dispose d'un peu de connaissance sur le sujet peut y répondre - aucune connaissance spécifique n'est requise. Les informations sont ajoutées directement à OpenStreetMap. Il suffit de disposer d'un compte et il n'y a pas de bases de données séparées pour les données ou pour les comptes d'utilisateurs. Des images peuvent être hébergées sur d'autres sites et l'adresse URL peut être ajoutée à l'objet. Toutes ces informations sont alors disponibles à tous les utilisateurs d'OpenStreetMap.

L'app est un outil convivial de visualisation et d'édition de données sur téléphone mobile. En même temps, c'est aussi un **site web** accessible avec un ordinateur et qui peut être **intégré à votre propre site web**.

## Etre membre de la communauté

Faciliter la contribution de données à OpenStreetMap signifie aussi qu'il est plus simple de commettre des erreurs. Donc nous surveillons les données qui sont produites par ces outils.

A mesure qu'un utilisateur gagne de l'expérience, il peut combiner les différents thèmes de contribution qui constituent ses centres d'intérêts personnels.

Les utilisateurs avertis peuvent même créer leurs propres thèmes sans aucune intervention de notre part.

## Aidez-nous à faire grandir l'outil

S'agissant d'un projet open source, toutes les contributions bénéficient à tous les utilisateurs.

Les bases ont déjà jetées grâce au financement par Groen de [Buurtnatuur.be](https://buurtnatuur.be/) et par Brussels Mobility via le [projet Cyclofix](https://cyclofix.osm.be)). Mais pour les partenaires, l'aspect et le comportement peuvent être adapté à leur préférences. La qualité des données dépends du nombre d'utilisateurs et nous travaillons donc avec nos partenaires pour faire connaître nos actions. Nous organisons aussi des mapathons (des "marathons" d'édition de cartes) où nous donnons une formation rapide avant d'envoyer les personnes sur le terrain pour relever les données. Nous devons également travailler davantage aux aspects fondamentaux, tels qu'améliorer l'aspect visuel et la convivialité.

Une bonne manière de travailler ensemble est de lancer un projet [Open Summer of Code](https://osoc.be/), mais nous aussi sommes ouverts à d'autres façons de faire.

Un dévelopement essentiel à venir est l'affichage de données hors OpenStreeMap, tout en veillant à la qualité des données intégrées. Ce faisant, les données externes sont également validées, ce qui aide maintenir la qualité de ses données à la source.

## Principaux événements

Pour de plus amples informations sur l'outil MapComplete (ainsi que tous les thèmes pris en charge) : <https://wiki.openstreetmap.org/wiki/MapComplete>.

Pour essayer MapComplete : [mapcomplete.osm.be](https://mapcomplete.osm.be/).

* Développements en cours (mai 2020) : [Buurtnatuur.be](https://buurtnatuur.be/)
* Développements majeurs du projet (juillet 2020) : [projet Cyclofix](https://cyclofix.osm.be)) via [le projet OSOC](https://osoc.be/editions/2020/cyclofix)
* Développements en cours :
  * intégration des critiques via <https://mangrove.reviews/>
  * interface pour rajouter les heures d'ouverture
  * icônes superposées (pour indiquer qu'un lieu est actuellement ouvert, par exemple)
  * éditeur de thèmes pour les utilisateurs avertis
  * ajout de la possibilité de combiner des thèmes
