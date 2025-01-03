---
title: "Erfgoed in Vlaanderen en crowdsourced projecten"
lead: escada
cover: heritage.png
weight: 90
aliases: ["/2017/04/01/nl-project-heritage-crowd-sourced.html"]
---

## Introductie

In dit artikel wil ik tonen hoe je informatie over onroerend erfgoed kan toevoegen aan crowdsourced projecten zoals [OpenStreetMap](http://www.openstreetmap.org) en enkele [Wikimedia](http://www.wikimedia.org)-projecten.

In België wordt de lijst van onroerend erfgoed beheerd door drie agentschappen, een voor Vlaanderen, een voor Brussel en een voor Wallonië. Voor Vlaanderen is er het [Agentschap Onroerend Erfgoed](https://www.onroerenderfgoed.be/). Zij maken een inventaris van de objecten en bepalen de bescherming ervan. Ze stellen ook sommige van [hun gegevens](https://www.onroerenderfgoed.be/nl/onderzoek/wetenschappelijke-inventarissen) beschikbaar als open data. Zo hebben ze in hun inventaris kerken, abdijen en kastelen, maar ook kleine boerderijhuizen en villa's, en ook kleine objecten zoals grenspalen en schandpalen. Af en toe vind je er ook belangrijke bomen op dorpspleinen in.

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-d6gBQB4/0/X3/Schandpaal%2C_Laar%2C_Aartselaar%20%282%29-X3.jpg" title="Schandpaal in Aartselaar" >}}

Wat is een crowdsourced project? Dat is een project waarin iedereen data kan toevoegen, in tegenstelling tot projecten van bedrijven waar enkel werknemers dat kunnen. Als een bedrijf die data bezit, kan het de regels en prijs betalen om er toegang tot te krijgen. In veel crowdsourced projecten is het resultaat vrij te gebruiken en te raadplegen. Als je meer wil leren over crowdsourcing, kan je de [Engelstalige](https://en.wikipedia.org/wiki/Crowdsourcing) of [Nederlandstalige](https://nl.wikipedia.org/wiki/Crowdsourcing) Wikipedia-artikels erover lezen.

Dat verklaart ook waarom het interessant is al het onroerend erfgoed in een crowdsourced project te hebben: zo is men niet meer afhankelijk van een agentschap of de copyrightregels die ze verzinnen om te weten wanneer een constructie gebouwd is, of om een foto van een bepaalde watermolen in een publicatie te gebruiken, enzovoort …

Een agentschap zoals Onroerend Erfgoed is ook beperkt tot een specifiek geografisch gebied, terwijl de crowdsourced projecten die ik hieronder toon allemaal globaal zijn.

### [OpenStreetMap](http://www.openstreetmap.org)

Dit is een wereldwijde verzameling van geografische informatie (een geografische databank). Die verzameling kan onder andere gebruikt worden om kaarten te maken. Wikipedia heeft artikels over OpenStreetMap in het [Nederlands](https://nl.wikipedia.org/wiki/OpenStreetMap) en in het [Engels](https://en.wikipedia.org/wiki/OpenStreetMap). Merk op dat we in OpenStreetMap enkel dingen mappen die vandaag bestaan. Volledig afgebroken gebouwen dus niet, ruïnes van gebouwen wel.

### [Wikipedia](http://www.wikipedia.org)

Een internet-encyclopedie van menselijke kennis. Objecten worden in artikels beschreven die verrijkt worden met afbeeldingen, net zoals in een encyclopedie op papier. Wikipedia heeft artikels over zichzelf in het [Nederlands](https://nl.wikipedia.org/wiki/Wikipedia) en in het [Engels](https://en.wikipedia.org/wiki/Wikipedia).

### [Wikimedia Commons](hhttps://commons.wikimedia.org)

Een verzameling mediabestanden zoals foto's, video's, geluidsfragmenten en kaarten. Wikipedia heeft artikels over Wikimedia Commons in het [Nederlands](https://nl.wikipedia.org/wiki/Wikimedia_Commons) en in het [Engels](https://en.wikipedia.org/wiki/Wikimedia_Commons).

### [Wikidata](http://www.wikidata.org)

Een databank over vanalles, zoals personen, feiten en objecten. Wikipedia heeft artikels over Wikidata in het [Nederlands](https://nl.wikipedia.org/wiki/Wikidata) en in het [Engels](https://en.wikipedia.org/wiki/Wikidata).

## Wat we kunnen we waar bijdragen?

De locatie en plattegrond van een erfgoedobject kan samen met zijn naam en wat basisgegevens in OpenStreetMap ingevoerd worden. Een artikel over de oorsprong en geschiedenis kan op Wikipedia geschreven worden. Foto's, 3D-modellen, een video vanuit de lucht, enzovoort kunnen in Wikimedia Commons. En een samenvatting van al die dingen kan in machine-leesbaar formaat in Wikidata gezet worden.

## Hoe verzamelen we informatie?

OpenStreetMap is voor een groot stuk gebaseerd op origineel onderzoek ter plaatse. Dat betekent dat de bijdragers naar buiten gaan en informatie verzamelen over de wereld door observatie. Wikipedia daarentegen is grotendeels gebaseerd op andere, al bestaande bronnen. Elk artikel verwijst door naar andere artikels. Voor Wikimedia Commons moet de bijdrager rekening houden met het auteursrecht: of de bijdrager moet zelf het auteursrecht hebben op de media, of het bestand moet onder een vrije licentie beschikbaar gesteld zijn, of er mag geen auteursrecht op rusten. Idealiter heeft elke eigenschap op een Wikidataitem een bron. Net zoals Wikipedia is het dus gebaseerd op werk van anderen.

## Hoe verzamel ik informatie?

Ik begin bij een lijst van onroerend erfgoed op Wikipedia. Voor Vlaanderen hebben vorige bijdragers [een lijst van items per gemeente](https://nl.wikipedia.org/wiki/Cultureel_erfgoed_in_Belgi%C3%AB) gemaakt. Ik heb een [Python](https://en.wikipedia.org/wiki/Python_(programming_language))script geschreven dat zulke wikipagina's omzet in een bestand met [waypoints](https://nl.wikipedia.org/wiki/Waypoint) dat gebruikt kan worden op een GPS-systeem of in navigatieapps op smartphones, zoals [OsmAnd](https://osmand.net/).

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/Screenshots-1/i-8ntJtzd/0/O/70.jpg" alt="Garmin Dakota 10 met waypoints" >}}

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/Screenshots-1/i-63Fvk2T/0/O/92%20copy.jpg" caption="Garmin Dakota 10 met erfgoedobjecten weergegeven als rode en blauwe vlaggetjes, en wat informatie over het object" >}}

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-4LK2Lp4/0/O/Screenshot_2017-03-27-14-38-59.png" caption="In OsmAnd worden waypoints getoond als rode cirkels met een witte ster. Klikken op zo'n stericoon toont informatie onderaan het scherm. Als er meerdere items dicht bij elkaar staan, wordt een lijst getoond en kan het gewenste item geselecteerd worden" >}}

Dit laat me toe kleine omwegen te maken in mijn wandelingen om historisch erfgoed te bezoeken of bekijken. Ter plaatse kijk ik dan of het object nog bestaat en neem ik er foto's van. Als het niet meer bestaat, geef ik dat door aan het agentschap Onroerend Erfgoed zodat ze ook hun eigen databank kunnen bijwerken. Ik heb de indruk dat ze zo'n feedback wel waarderen.

## Hoe verwerk ik de verzamelde gegevens?

Terug thuis zorg ik dat de foto's [georeferenced](https://en.wikipedia.org/wiki/Georeferencing) (artikel in het Engels) worden, aan de hand van de GPS-log van mijn wandeling en het tijdstip waarop de foto genomen is. Daar gebruik ik het programma [Geotag](http://geotag.sourceforge.net/) voor.

Eens ze georeferenced zijn, upload ik de goede foto's naar Wikimedia Commons. Ik voeg een naam en beschrijving en enkele categorieën toe. Dat categoriesysteem is niet altijd eenvoudig te begrijpen, maar ik voeg ten minste "Onroerend Erfgoed in \<gemeente\>" en de categorie van de deelgemeente toe.

Als dat gedaan is, voeg ik de foto's toe aan Wikipedia, in de lijst van erfgoeditems in een gemeente, als er nog geen afbeelding van het item was.

Ik voeg de gebouw-layout ook toe aan OpenStreetMap, en voeg ook de nodige erfgoed-tags toe, met een verwijzing naar Onroerend Erfgoed. Als er een Wikidata-item of Wikipedia-artikel is, voeg ik daar ook een tag voor toe.

De nodige tags toevoegen is gemakkelijk in [JOSM](https://josm.openstreetmap.de/), vooral als je de preset voor historische objecten gebruikt uit de [BENELUX-presets](https://josm.openstreetmap.de/wiki/Presets/BENELUX).

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-pW9ptVd/0/X3/Screen%20Shot%202017-03-27%20at%2015.20.47-X3.png" caption="BENELUX-preset voor monumenten die beschermd worden door Onroerend Erfgoed" >}}

Je kan ook Wikidataitems maken (vrij simpel) en/of Wikipedia-artikels beginnen schrijven over de objecten. Ik ben recentelijk begonnen met Wikidataitems maken voor kerken in Vlaanderen, gebaseerd op informatie van Onroerend Erfgoed en [ODIS](https://www.odis.be/).

## Hoe kan je de gegevens gebruiken?

### Wikipedia

De artikels van Wikipedia kunnen door iedereen gelezen worden, en de informatie is bovendien gelinkt door koppelingen naar andere artikels. Bekijk bijvoorbeeld eens het artikel over de Onze-Lieve-Vrouwekathedraal van Antwerpen in het [Nederlands](https://nl.wikipedia.org/wiki/Onze-Lieve-Vrouwekathedraal_%28Antwerpen%29) of [Engels](https://en.wikipedia.org/wiki/Cathedral_of_Our_Lady_(Antwerp)).

### OpenStreetMap

Er zijn verschillende kaarten gebaseerd op OpenStreetMap die deze objecten tonen.

#### HistOsm

[HistOsm](http://histosm.org/) is een kaart gemaakt door de geoinformaticaonderzoeksgroep van de Universiteit Heidelberg. [Meer informatie in het Engels op de OpenStreetMap-wiki](https://wiki.openstreetmap.org/wiki/HistOSM)

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-ChHBNKX/0/X3/Screen%20Shot%202017-03-27%20at%2013.54.30-X3.png" caption="HistOSM, alle gegevens ©OpenStreetMap-bijdragers" >}}

#### Historic Places

[Historic Places](http://gk.historic.place) is een kaart door Duitse enthousiastelingen, ontwikkeld in hun vrije tijd. Het is beschikbaar in verschillende talen en heeft enkele [leuke features](https://wiki.openstreetmap.org/wiki/Historical_Objects) zoals de mogelijkheid om oude kaarten te tonen in plaats van hedendaagse OpenStreetMapkaarten.

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-NkHdJQ7/0/X3/Screen%20Shot%202017-03-27%20at%2021.07.04-X3.png" caption="Historic Places, all data (c) OpenStreetMap Contributors. Topographical Map Vandermaelen." >}}

Over elk historisch object kan je een popupvenster openen met meer informatie over het item zoals het in de OpenStreetMapdatabank staat. Die popup bevat links naar Onroerend Erfgoed, Wikipedia en Wikidata (als die tags toegevoegd zijn in OSM). De tag *image* wordt ook herkend en zal een afbeelding tonen, als die beschikbaar is onder een vrije licentie (voor alle afbeeldingen op Wikimedia Commons is dat steeds zo). De tag *wikimedia_commons* wordt ook herkend en de link brengt je naar de categorie met mediabestanden over dat object.

Wikidataitems kun je niet alleen op wikidata.org bekijken, maar ook in mooiere pagina's zoals [Reasonator](https://tools.wmflabs.org/reasonator/) en [Sqid](https://tools.wmflabs.org/sqid) wanneer je klikt op de icoontjes naast het Wikidataitemnummer.

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-DxtJ6nf/0/X3/Screen%20Shot%202017-03-27%20at%2013.53.21-X3.png" title="Reasonator voor Q28464643" caption="De Sint-Pieterskerk in Rumst op de Reasonatorwebsite, met data van Wikidata" >}}

Als je een Reasonatorpagina bekijkt, zoals die voor de [Parochiekerk Sint-Pieter (Q28464643)](https://tools.wmflabs.org/reasonator/?q=Q28464643), vind je onder de kaarten een link naar "Overpass". Dat kan je naar het item op OpenStreetMap brengen. Het is dus mogelijk om gebruikersinterfaces te maken gebaseerd op Wikidata of OpenStreetMap en te koppelen naar het andere project.

Het resultaat van klikken op de [Overpass](https://overpass-turbo.eu)-link op de Reasonatorpagina die hierboven staat, brengt je naar de volgende pagina waarop de Sint-Pieterskerk gemarkeerd is en in het midden van de getoonde kaart staat.

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-v2vQxHG/0/X3/Screen%20Shot%202017-03-27%20at%2014.00.42-X3.png" caption="De Overpass-gebruikersinterface die het OpenStreetMapobject met Wikidata-id Q28464643 toont" >}}

### Wikidata

Aangezien de data in Wikidata gestructureerd is – in tegenstelling tot Wikipedia – kan je er query's op uitvoeren. Dat maakt het onder andere mogelijk om een
[tijdlijn](https://query.wikidata.org/#%23Timeline%20of%20Belgian%20churches%0A%23defaultView%3ATimeline%0ASELECT%20DISTINCT%20%3Fchurch%20%3FchurchLabel%20%3FchurchDescription%20%3F_ODIS_ID%20%3F_coordinate_location%20%3F_start_time%20%3F_image%20WHERE%20%7B%0A%20%20%3Fchurch%20%28wdt%3AP31%2Fwdt%3AP279%2a%29%20wd%3AQ16970.%0A%20%20%3Fchurch%20wdt%3AP17%20wd%3AQ31.%0A%20%20%3Fchurch%20wdt%3AP571%20%3F_start_time.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22nl%2Cfr%2Cen%22.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fchurch%20wdt%3AP2372%20%3F_ODIS_ID.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fchurch%20wdt%3AP625%20%3F_coordinate_location.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fchurch%20wdt%3AP18%20%3F_image.%20%7D%0A%7D%0A)
te maken met de bouwdatum van Belgische kerken, of een
[bellengrafiek](https://query.wikidata.org/#%23defaultView%3ABubbleChart%0ASELECT%20DISTINCT%20%3Farchitecture%20%3FarchitectureLabel%20%3Fcount%0AWHERE%20%7B%0A%20%20%20%20%7B%0A%20%20%20%20SELECT%20%3Farchitecture%20%28COUNT%28%3Fchurch%29%20AS%20%3Fcount%29%20WHERE%20%7B%0A%20%20%20%20%20%20%3Fchurch%20%28wdt%3AP31%2Fwdt%3AP279%2a%29%20wd%3AQ16970.%0A%09%20%20%3Fchurch%20wdt%3AP17%20wd%3AQ31.%0A%20%20%20%20%20%20%3Fchurch%20wdt%3AP149%20%3Farchitecture.%20%0A%20%20%20%7D%0A%20%20%20%20GROUP%20BY%20%3Farchitecture%0A%20%20%7D%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22nl%2Cfr%2Cen%22.%20%7D%0A%7D%0A)
met hun architecturale stijlen. Door te klikken op de links in deze paragraaf, word je naar de query-site van Wikidata genomen waar je de query's kan uitvoeren en zelf de data verkennen.

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-MGNPLd8/0/X3/Screen%20Shot%202017-03-27%20at%2013.51.04-X3.png" caption="Een tijdlijn van kerken in België" >}}

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-s544Ndb/0/X2/Screen%20Shot%202017-03-27%20at%2020.45.47-X2.png" caption="Architecturale stijlen gebruikt voor Belgische kerken" >}}

Je kan ook kaarten maken die Wikidata combineren met OpenStreetMap-vormen. De volgende kaart haalt alle Belgische kerken op van Wikidata als er een bouwdatum voor bekend is. Op basis van deze datum wordt de kleur gekozen. De vorm is uit OpenStreetMap overgenomen.

{{< figure src="https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-gKKpzrr/0/X2/Screen%20Shot%202017-04-01%20at%2021.33.00-X2.png" caption="Wikidata en OpenStreetMap combineren" >}}

Je kan deze kaart bekijken op mijn Wikimedia-[gebruikerspagina](https://www.mediawiki.org/wiki/User:Funkyxian)
en de data zelf verkennen, of de code bekijken waarmee de kaart gegenereerd is.

## Besluit

Ik hoop dat deze voorbeelden je een idee geven van wat mogelijk is met crowdsourced, open data. Ik
denk dat de mogelijkheden om Wikidata en OpenStreetMap te linken eindeloos zijn en dat er in de toekomst nog betere
integratietools gemaakt zullen worden.

Contacteer me gerust op marc dot gemis at gmail dot com.
