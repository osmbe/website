---
title: "Hackday GRB"
author: Joost Schouppe
cover: hackday.jpg
---

Dimanche 12 décembre 2016, nous avons vécu notre premier vrai *OSM Belgium hackday* ! 
Le programme consistait à travailler réellement sur l'import GRB. Une douzaine de volontaires se sont retrouvés à Bruxelles pour y participer.

En Flandre, 1944 de nos contributeurs ont déjà cartographié 1.400.00 bâtiments dont la plupart d'entre eux à la main, d'après les images aériennes. Mais récemment le Gouvernement flamand a libéré le Grootschalig Referentiebestand ([GRB](https://overheid.vlaanderen.be/producten-diensten/grootschalig-referentiebestand-grb), NL) comme open-data. Ces données contiennent environ 4.000.000 bâtiments et ils sont localisés avec une précision centimétrique. 
Ainsi nous souhaitons améliorer la géométrie de nos bâtiments et arriver à une couverture complète des bâtiments en Flandre. 

Nous tombons d'accord sur le fait que nous ne pouvons simplement copier les données officielles. Premièrement,  il nous faut transposer les concepts relatifs aux bâtiments du GRB vers les éléments cartographiques de [OpenStreetMap](https://wiki.openstreetmap.org/wiki/FR:%C3%89l%C3%A9ments_cartographiques).
Ensuite nous devons vérifier si un bâtiment est déjà présent dans la base de données OSM. 
Ces données ont déjà toute une histoire derrière elle : quelqu'un les a dessinées, ensuite une adresse a été ajoutée, et puis d'autres caractéristiques ont été ajoutées telles que le statut de bâtiment protégé, le nombre d'étages, etc.
Notre intention est de conserver cet objet et son histoire et de ne modifier que la trace de son périmètre. 
Cela signifie dès lors que de nombreux contrôles manuels sont indispensables. Par exemple, nous ne voulons pas que les bâtiments chevauchent une voirie ou qu'un édifice industriel soit cartographié comme une habitation.

Durant le hackaton, nous avons réfléchi au travail préparé depuis de nombreux mois par Glenn, travail basé sur les expériences antérieures de Sander. Nous avons trouvé quelques détails à améliorer et avons à présent une idée claire sur la voie à suivre pour réaliser cet import. Si vous êtes intéressé, jetez un coup d'oeil sur les pages [sur le GRB](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/GRB) et [l'import](https://wiki.openstreetmap.org/wiki/GRBimport) ; ou communiquez-nous via la [mailinglist](https://lists.openstreetmap.org/listinfo/talk-be) ou le [Newsletter](http://osm.us13.list-manage.com/subscribe?u=cc6632a49e784f67574e50269&id=5c2416bba6).

Même si c'est le GRB qui fut notre centre d'intérêt principal, nous avons travaillé sur quelques autres thèmes également. 
Il y avait à la fois des francophones et des néerlandophones et, comme il s'agit de OSM, c'est avant tout l'anglais qui fut 
utilisé. Le site Web sur lequel vous lisez ceci a été considérablement amélioré durant cette journée. Nous n'avons pas seulement fait ce nouveau site Web ; nous l'avons aussi rendu plus convivial pour vous inviter à y contribuer. 
Maintenant que nous avons migré sur GitHub, chacun a accès au code source. Nous avons déjà ajouté quelques aides pour vous inciter à [démarrer ici](https://github.com/osmbe/website).

L'espace de collaboration que [Transforma BXL](https://www.transformabxl.be) a mis à notre disposition, fut excellent pour l'évènement : brainstoming dans l'Innovation Garden, ensuite déplacement vers les espaces de bureaux pour un travail sérieux. Dans cette atmosphère de collaboration créative, nous avons travaillé sur nos propres projets OSM et avons testé POSM grâce à Colin Broderick. Encore merci à Transforma BXL !

Si vous aimez ce que cette communauté réalise, pourquoi ne pas apporter un petit soutien financier ? 
Les hackers et les mappers sont plus productifs si quelq'un leur offre leur pizza ! [Contactez-nous](mailto:community@osm.be) 
pour plus d'information sur le sponsoring, ou simplement [devenez membre d'OpenStreetMap Belgique](http://www.osm.be/fr/signup.html).
