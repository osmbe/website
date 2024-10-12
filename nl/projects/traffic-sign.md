---
title: Traffic Sign Project
layout: project
lang: nl
featured: Samenscholingsverbod_Doel.jpeg
featured_caption: "Een verkeersbord dat een OpenStreetMap kaart weergeeft"
lead: Joost Schouppe, Ivan Diaz
---



In Vlaanderen zijn [alle verkeersborden open data](https://www.vlaanderen.be/datavindplaats/catalogus/verkeersbordenvlaanderenborden). Deze informatie is enorm nuttig. Nou ja, ze zou het kunnen zijn. De meeste verkeersborden dateren van meerdere jaren geleden en zijn sindsdien niet bijgewerkt. Het Vlaamse project Verkeersborden.vlaanderen wil daar verandering in brengen. Gemeente na gemeente zien we dat er updates beginnen te komen. Verscheidene gemeenten hebben een volledige update uitgevoerd, of doen op zijn minst aan occasionele aanvullingen.

In een perfecte wereld, wanneer de gemeente beslist om een verkeerssituatie te wijzigen (een nieuwe snelheidslimiet, een nieuwe eenrichtingsbeperking,...), gaan ze aan de slag in deze databank. Eerst komt er een gepland bord. Als het dan geïnstalleerd is, wordt het een echt bord. Het echte bord wordt aangeboden aan de OSM mapping gemeenschap (en Waze, TomTom, Here, ...) en zij voegen de informatie toe aan de betreffende straat - bijna in real time.

We zijn er nog niet helemaal, maar de bewerkingen in de database die plaatsvinden zijn wel al nuttig. Uiteraard omdat het een betere kaart oplevert. Minder vanzelfsprekend omdat het iedereen veel tijd bespaart. We krijgen vaak een mailtje van gemeenten: "Hé, we hebben de werkelijkheid veranderd, kunnen jullie nu je kaart aanpassen". Wij willen kunnen zeggen: "oh dat weten we, we hebben het al bijgewerkt!".

Dus we bouwen voort op een tool in de traditie van [Road Completion](https://openstreetmap.be/en/projects/road-completion.html) om ervoor te zorgen dat als de overheid de gegevens levert, wij kunnen garanderen dat we up-to-date zijn. Gebruikers van OSM-gegevens zullen kunnen zien hoe goed we nieuwe verkeersborden bijhouden - ze hoeven ons niet op ons woord te vertrouwen dat de gegevens goed zijn.
Dit soort project kan op zijn beurt een kleine stimulans zijn voor meer gemeenten om hun deel van de database online te houden. Net als bij Road Completion controleren we daarbij "per ongeluk" ook de data van de overheid. Als we verkeersborden in kaart brengen, zien we fouten. Vaak gebruikersfouten, soms logische fouten. Als we dat melden, kunnen we gemeenten helpen om de kwaliteit van hun gegevens of zelfs de lokale realiteit te verbeteren. 


[Helderder betekent bijgewerkt na 2019](https://i.imgur.com/V9zjUuD.png)
*Verkeersborden in Vlaanderen, met uitlichting van borden vanaf 2019*.

### In de praktijk

[We hebben een MapRoulette-taak online](https://maproulette.org/browse/challenges/23550) die periodiek wordt bijgewerkt. Deze taak biedt gewoon de meest recente verkeersborden als microtaken: de uitdaging is om hun effecten in kaart te brengen.

Hoe doen we dat?

- we downloaden alle verkeersborden via de WFS-service.
- we verrijken de gegevens met informatie over de naam en de effecten. Deze informatie wordt verzameld uit de JOSM-plugin voor verkeersborden.
- we bewaren alleen verkeersborden die voor ons "interessant" zijn. Het verkeersbord met de tekst "u bevindt zich op een voorrangsweg" heeft bijvoorbeeld geen effect op een OSM-weg. Het bord "voorrang verlenen" wel.
- We bewaren alleen verkeersborden die nieuw zijn sinds de vorige verwerkingsdatum.
- Aan het einde van het proces wordt een GeoJSON met relevante verkeersborden online gezet. Deze wordt vervolgens aan MapRoulette geleverd.
- De taak is beschikbaar op <https://maproulette.org/browse/challenges/23550> . Lees de instructies zorgvuldig en probeer het eens. Zorg ervoor dat je "in de buurt" selecteert en niet "willekeurig" als je naar de volgende taak gaat, want het kan zijn dat je uiteindelijk de effecten van meerdere borden in de buurt in kaart brengt. Mapillary beelden kunnen vaak verouderd zijn met dit hyper recente materiaal. Laat alsjeblieft een reactie achter als er iets mis is met de verkeersbordgegevens of als je andere opmerkingen hebt. [Raadpleeg de wiki](https://wiki.openstreetmap.org/wiki/Road_signs_in_Belgium) om te zien welke tags bij welk verkeersbord horen.

De [code is beschikbaar op Github](https://github.com/osmbe/traffic-sign-project). U kunt daar problemen plaatsen. Een eerste proof of concept is gebouwd door Joost Schouppe. Ivan Diaz van TomTom herbouwde de hele workflow in Python en bereidde een workflow voor om de updates uiteindelijk volledig automatisch uit te voeren.

### Wat is de volgende stap?

- Automatische wekelijkse updates activeren met Github Actions.
- Het is misschien mogelijk om twee dumps te vergelijken om verkeersborden te vinden die zijn verbeterd
- Met ons StreetLevel Imagery project maken we beelden die worden geüpload naar Mapillary. Dat platform leidt automatisch verkeersborden af. Deze verkeersborden worden op hun beurt gedetecteerd door Osmose. Deze tool maakt microtaken aan die gefilterd worden op reeds in kaart gebrachte verkeersborden. Het zal bijvoorbeeld alleen een taak voor een max 30 bord aanmaken als er geen weg in OSM in de buurt is waar je 30 mag rijden. Het aantal taken is nog steeds ontmoedigend. We zijn van plan om deze taken te synchroniseren met MapRoulette, om het karteringsproces te “gamificeren” in de hoop meer mappers te motiveren om bij te dragen.
- Andere brondatasets vinden om deze logica op te gebruiken. Het is het meest interessant als er een open, continu bijgewerkte database met verkeersborden beschikbaar is. We hebben al een eerste verkenning gedaan in Nederland, en het ziet er veelbelovend uit. Als je vergelijkbare datasets kent, word je uitgenodigd om een pull request aan te maken of een Issue te plaatsen.

### Belangrijkste gebeurtenissen

- 9/2021: [eerste verkenning van de dataset voor kaartgebruik](https://lists.openstreetmap.org/pipermail/talk-be/2021-September/011322.html).
- 11/2021: [eerste filtering van verkeersborden](https://lists.openstreetmap.org/pipermail/talk-be/2021-November/011374.html) gepubliceerd op MapRoulette.
- Sindsdien is de taak af en toe bijgewerkt en zijn er meer dan 6000 nieuwe borden bekeken! We hebben ook fouten die we zagen doorgegeven aan de beherende overheid, die ze heeft gebruikt om de brondata te verbeteren.
- 10/2022: eerste contacten met TomTom over het automatiseren van de analysestroom
- 6/2023: Github Acties gebaseerde flow gemaakt
