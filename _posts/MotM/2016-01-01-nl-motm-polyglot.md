---
title: 'Mapper van de maand: Polyglot'
layout: post
category: motm
author: Marc Gemis
lang: nl
---

_Polyglot is netwerkbeheerder en woont in België. Zijn hobbies wisselen nogal doorheen de tijd: talen leren, fietsen, paardrijden, oh en ... OpenStreetMap neemt nogal een hap uit zijn vrije tijd!_

**Wanneer en op welke manier leerde je OpenStreetMap kennen?**

Blijkbaar is dat ondertussen alweer 8 jaar geleden. Ik wilde graag iets terugdoen voor de vrije softwarewereld. Een echte programmeur ben ik niet, dus gedurende een paar jaar uitte zich dat in bijdragen aan de Engelstalige Wiktionary. Dit totdat het daar wat saai werd, omwille van vandalismebestrijding die meer tijd in beslag begon te nemen dan bezig zijn met de inhoud.
OpenStreetMap had het voordeel dat je enerzijds buiten komt en actief bezig bent en anderzijds toch met de computer bezig bent. Op die manier herbeleeft je als het ware ook je wandeling of fietstocht. Het maakt de ervaring alleszins intenser.
Sinds ik Mapillary ontdekte is de focus weer wat verschoven. Nu is het maken van bergen fotografisch bronmateriaal een doel op zich geworden. Het levert echter zoveel data op dat het niet meer doenbaar is om dat allemaal ook te verwerken tot data achteraf. Voordien maakte ik foto's van datgene wat ik van plan was om ook toe te voegen, dat nam toen al ongeveer even veel tijd in beslag als het vergaren van de data zelf. Nu is het uitwieden van de mislukte foto's uit de duizenden gemaakte foto's al werk genoeg.

**Gebruik je OpenStreetMap ook zelf?**

Vreemd genoeg, niet zo heel vaak. Of misschien toch wel, bijvoorbeeld via OsmAnd. Prachtig toch dat je de data voor ons hele landje offline mee kan nemen op je smartphone. 
Ook heb ik wel eens een [kaartje](https://upload.wikimedia.org/wikipedia/commons/a/a2/Pad_van_Ad_op_OSM.png)  gemaakt met Maperitive ter illustratie van een artikel  op [Wikivoyage](https://en.wikivoyage.org/wiki/Ad) en [Wikipedia](https://en.wikipedia.org/wiki/Ad_Wouters). Om er dan achter te komen, dat ze daar al een geïntegreerd kaartje op basis van OpenStreetMap hebben. Wat zo bijzonder is aan dat kaartje, is dat het een aantal zaken combineert en dat het 10 jaar geleden ondenkbaar was dat Jan met de pet, zoiets zou kunnen realiseren. Het toont busroutes en haltes, het toont wandelknooppunten en het toont natuurlijk een gedetailleerde 'achtergrond'. Daaroverheen toont het dan natuurlijk het onderwerp van de kaart: een route die houten beelden van Ad Wouters verbindt doorheen het bos.
Een heel mooi initiatief vind ik [umap.openstreetmap.fr](http://umap.openstreetmap.fr/nl/user/Polyglot/), oh en Overpass API, natuurlijk. Onschatbaar waardevol.

**Hoe map je?**

Ik experimenteer graag, dus probeer ik alles zo'n beetje uit. Surveys met de fiets, te voet en zelfs te paard... gewoon leuk om te doen. Begonnen met een Windows CE telefoon met GPS, voorzien van een toetsenbordje, die ik tweedehands kon kopen, daarvoor ook wel even met een data logger en een 'gewone' telefoon waarmee 5MP foto's gemaakt konden worden. Tegenwoordig zweer ik bij een smartphone, voor minder dan 8 of 12MP doe ik het al niet meer. :-) Opmerkelijk hoe de technologie voortschrijdt en wat dat voor ons mogelijk maakt.

Armchairmapping? Wel ja, in zekere zin. Ik heb lang gezaagd bij De Lijn (openbaar vervoer bedrijf in Vlaanderen), dat ze toestemming zouden geven om hun data te mogen toevoegen aan OpenStreetMap. Na lang aandringen, en met wat hulp van OKFN, mocht het uiteindelijk. Vervolgens heb ik zitten uitzoeken hoe die data omgezet kon worden naar iets bruikbaars in OpenStreetMap, dit met behulp van PostGIS en Pythonscripts. Het was een interessante leerervaring om met SQL en dergelijke bezig te zijn. Vervolgens heb ik alle zowat 40 000 haltes toegevoegd in groepjes van ongeveer 100 per keer. Maanden ben ik er mee bezig geweest, als het geen jaren zijn. Tegen dat TEC (openbaar vervoer bedrijf in Wallonië) zijn data vrijgaf, had ik blijkbaar al wat ervaring, want hun 30 000 haltes zaten er in 3 maanden tijd in.
Wat me gaande hield, was wellicht de zoektocht naar een model, dat op een redelijke manier gemapt en onderhouden kon worden en dat toch de mogelijkheid geeft om openbaar vervoer zo getrouw mogelijk te modelleren. Het uitgangspunt was natuurlijk de 'nieuwe' manier om openbaar vervoer te mappen. Je hoort voortdurend dat het allemaal te ingewikkeld is, al die relaties, maar goed, openbaar vervoer heeft nu eenmaal een zekere complexiteit. Onmogelijk om het helemaal te vereenvoudigen.

Mijn uitgangspunt zijn haltes als knopen aan weerszijden van de weg. Ik houd er ook niet van om informatie te dupliceren. Dat maakt het onderhoud alleen maar lastiger. Dus de way die aangeeft waar het perron ligt of de stop_position node op de weg, krijgen wat mij betreft geen verdere tags. Enkel de node die min of meer aangeeft waar de haltepaal staat krijgt details mee, zoals refs, route_refs, zone, name. Ook beschouw ik haltes aan weerszijden van de straat als aparte entiteiten, dus twee stop_area-relaties, met daarin die platform/highway=bus_stop node, de stop_position, het bushokje, de bank, de platformway en eventueel een vuilbak vind ik daar voor de hand liggend. Als ik ondertussen over de landsgrenzen heen kijk, zie ik in bijvoorbeeld Duitsland andere manier van mappen. Alle haltes met dezelfde naam in één stop_area. (Daar heb ik niets aan, als ik wil weten welke stop_position bij welke platformnode hoort). Details op de way die public_transport=platform als tag meekreeg, of op de stop_position(s), etc. 't Is wat lastig als zulke haltes door operatoren over de landsgrenzen heen worden bediend.

Verder vind ik het leuk om waar mogelijk te automatiseren. Dus naast de Pythonscripts voor de omzetting van de data, ben ik beginnen scripten binnen JOSM om vlot stop_area relaties te maken. En een ander script om te assisteren bij het creëren van de routerelaties. Zonder die scripts is het allemaal onbegonnen werk.

**Wat map je zoal?**

In de begindagen, mapte ik mijn eigen (wijde) omgeving. Grappig om te merken, hoe je plots anders tegen de zaken in je omgeving aankijkt. Zo van, hoe zou ik dat kunnen mappen? Had ik dat al toegevoegd? Oh, dat is veranderd, dat moet ik straks maar eens gaan aanpassen... 

Ik veronderstel dat mijn specialisatie openbaar vervoer is geworden, al heb ik al met allerlei dingen geëxperimenteerd: fietsroutes, fietsknooppunten, wandelknooppuntenroutes, etc. Waar ik maar niet mee gestart geraak is 3D-mapping. Daar kruipt absurd veel tijd in om het goed te krijgen. De tools zijn wat mij betreft nog te beperkt.

Toen ik Mapillary ontdekte, heb ik een zijsprongetje gemaakt naar verkeersborden. Maar om nu te gaan proberen om die allemaal toe te voegen, leidt me toch weer wat te ver. Ik heb wel geprobeerd om de data voor de JOSM plugin bij te werken, maar ik vind dat die plugin moet worden herschreven. Wellicht iets voor de volgende Google Summer of Code?

**Wat motiveert je om te mappen?**

Ik vind het natuurlijk handig dat een app zoals OsmAnd goed werkt, deels omdat ik zelf ook mijn steentje heb bijgedragen bij het verbeteren van de data. Anderzijds vrees ik dat het ook een soort verslaving is, of een soort vlucht uit de werkelijkheid... Misschien niet zo gezond, al bij al. Als ik volgende week niet meer meedoe, heb ik te hard over deze vraag doorgedacht! :-)

**Doe je ook nog andere dingen in verband met OpenStreetMap?**

Om mijn talenkennis op peil te houden en om te weten wat er omgaat in het OpenStreetMap-wereldje, lees ik nogal wat mailinglijsten en fora. En ook al vind ik niet dat een publiek toespreken mijn sterkste punt is, de voordelen van het gebruik van JOSM maak ik wel graag wereldkundig!

Een fijne ervaring was het mentoren van Jorge (tijdens Google Summer of Code), die de Mapillary plugin voor JOSM ontwikkelde. Zoiets had ik nog nooit gedaan, maar het is goed meegevallen en het heeft denk ik een nuttig resultaat opgeleverd, zowel voor Jorge, als voor de gemeenschap. Wat mij betreft, zeker voor herhaling vatbaar. Ik heb al wat ideeën voor volgende zomer. Zo zou de plugin verder ontwikkeld kunnen worden met 3D-like view, of misschien kan dat 'expertsysteem' voor het mappen van openbaar vervoer-routes in Java worden geïmplementeerd, als een echte plugin. Of we kunnen die RoadSigns-plugin eens onder handen nemen...

Zowat een jaar geleden heb ik in Antwerpen meegedaan aan mijn eerste Missing Maps Mapathon. Toen ging ik daar redelijk onvoorbereid heen. Wat een opkomst, 30-40 deelnemers! Dat had ik niet verwacht eerlijk gezegd. Dan naar eentje in Nederland in het Geofort (bedankt Philippe om dat mogelijk te maken!). Vorige week ben ik dan zelf eens vooraan gaan staan, met de bedoeling om JOSM te presenteren. Het ligt minder voor de hand om meteen met die editor te starten, maar toch vind ik het belangrijk om de voordelen te demonstreren.

Ter voorbereiding ben ik de tasking manager dan eens wat van naderbij gaan bekijken, om te merken dat er wel veel gemapt wordt, maar dat de validatie van het werk wat minder glorieus is. Ik heb al wat ervaring opgebouwd, dus dacht: laat ik dat eens uitproberen. Het is soms wat lastig om een balans te vinden. Je wil de mensen motiveren en tips meegeven. Ik blijf het lastig vinden om tegels af te keuren, maar als je het dan weer niet doet, is de volgende taak ook niet gemapt zoals het hoort. Ik ben nu aan het experimenteren met Twitch, om op die manier een betere terugkoppeling te voorzien van hoe het beter was geweest. Maar ook weer om te demonstreren hoe veel dingen efficiënter gemapt kunnen worden met JOSM, moet ik toegeven...

In ieder geval is het mappen voor het Humanitarian OpenStreetMap Team (of tenminste het harde werk van anderen nakijken en trachten om te zorgen dat ze nog betere mappers worden) een bezigheid waar ik me wel goed bij voel. HOT maakt, volgens mij, een merkbaar verschil: ze creëren OpenStreetMap-gemeenschappen van mappers waar deze niet spontaan zouden ontstaan, omwille van economische omstandigheden, maar waar kaartmateriaal broodnodig is.

**Waar ben jij als mapper het meest trots op?**

Het script dat ik schreef dat je toelaat om in JOSM routerelaties bij te werken, waarbij dat script zich baseert op reeds bestaande/gemapte busroutes. De manier waarop we dat momenteel mappen, heeft als gevolg dat er nogal wat duplicatie in zit. Dat wil je niet manueel gaan herstellen, als de situatie van de weginfrastructuur wijzigt of meer in detail wordt gemapt.

Iets anders waar ik trots op ben is een ander klein experiment van me. Na te leren over Wikidata, begon ik met het toevoegen van tags voor straten genoemd naar artiesten, architecten en plaatsen. Ik begon met het linken van Overpass Turbo aan wikipedia artikels. Echter na een tijdje schreef ik een LUA-script waarvan ik hoop dat dit mensen kan helpen die een beetje 'geïntimideerd' zijn bij de Overpass syntax als startpunt voor hun eigen queries. Ik vind dit projectje ook leuk omdat dit verschillende open data projecten verbindt.

Maar wat me eigenlijk het meest trots maakt is vooral dat we er met zijn allen in slagen om te doen wat zo'n 10 jaar geleden totaal onbegonnen werk leek...
