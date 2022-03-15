---
title: MapComplete
layout: project
lang: nl
featured: mapcomplete.png
lead: Pieter Vander Vennet
---



OpenStreetMap (OSM) wordt hoe langer hoe vaker gebruikt als basiskaart. Maar we méér dan enkel een kaart – we zijn een open geografische databank. Hoeveel applicaties ken je wel niet om dingen te crowdsourcen als drinkwaterfonteintjes, openbare toiletten, kampeerplekken, cafés met Wi-Fi, parkings, enzovoort? Helaas hebben al die apps hun eigen kleine datasilo. Ze zouden nochtans perfect op OpenStreetMap gebouwd kunnen worden!

Deze data buiten OpenStreetMap verzamelen heeft heel wat nadelen:
* **Iedereen die zo'n systeem opzet, moet alles zelf bouwen**: een website, een database, gebruikersbeheer, verschillende apps, een community, een databeheermodel, opslag, enzovoort.
* Deze taken stapelen zich op waardoor het veel moeite kost om het ding draaiende te houden. Dat zorgt voor **gesloten businessmodellen** – vaak start een project gratis, maar gaat men steeds meer geld vragen om toegang te krijgen tot de data. Vooral als klanten een zekere afhankelijkheid opgebouwd hebben, is dat verleidelijk.
* De silo's hebben tot gevolg dat er **competitie** ontstaat tussen initiatieven die dezelfde soort data verzamelen. Er wordt onnodig dubbel werk gedaan bij het verzamelen van de data, en nog eens bij het samenleggen van de datasets.
* Aangezien dit allemaal vrij kleine projectjes zijn, is de kans reëel dat de **data verloren gaat** als de ontwikkelaar geen interesse meer heeft.

Waarom gebruikt niet iedereen dan gewoon OpenStreetMap? Iedereen kan namelijk onze database en gebruikersbeheer gebruiken. Het is toegestaan de data commercieel in te zetten. De data worden bijgewerkt door een gigantische community en verrijkt door mensen met gelijkaardige interesses, ook als ze andere apps gebruiken.

Eerlijk gezegd vinden we het ook raar dat het niet meer gebeurt. We denken dat er twee redenen voor zijn waar we zelf iets aan kunnen doen:
* Om data toe te voegen aan OpenStreetMap moet je normaal gezien eerst leren werken met een algemene editor ­ en daardoor moeten gebruikers eerst leren over mappen in het algemeen, niet enkel het onderwerp dat hen interesseert. Ons datamodel is nogal ingewikkeld en het is gedocumenteerd in softwarepresets en op wikipagina's die niet altijd even makkelijk te lezen zijn.
* Datagebruikers zijn gewend aan basiskaarten die geen interactie met specifieke POI's toelaten. De meeste OSM-apps zijn voor algemeen gebruik en tonen dus niet de nodige gespecialiseerde informatie ("is dit water drinkbaar?")

## MapComplete brengt redding

MapComplete wil dit oplossen. Het is een zogenoemde *progressive **webapp*** (een die op smartphones aan het startscherm kan toegevoegd worden en dan ongeveer werkt als een geïnstalleerde app) die aangepast kan worden aan elk onderwerp. Het wordt makkelijk om:

- enkel met specifieke categorieën POI's te werken
- eigenschappen van het object als begrijpelijke tekst en icoontjes weer te geven
- foto's van het object te tonen
- en zelfs [open gebruikersbeoordelingen](https://mangrove.reviews/) over het object te tonen!

Met MapComplete kunnen gebruikers die data niet alleen bekijken, maar ook **bewerken of toevoegen**. Voor elke soort POI kun je een reeks vragen opstellen. Mensen die wat kennis ter zake hebben, kunnen die dan beantwoorden zonder eerst vertrouwd te moeten raken met mappen. De antwoorden komen meteen in OSM. De eindgebruikers hebben een eigen OSM-account nodig, maar daar staat tegenover dat je als appmaker zelf geen database moet bijhouden, noch van POI's, noch van gebruikers. Afbeeldingen worden extern gehost en de link komt op het OpenStreetMap-object. Alle info is zodoende zichtbaar voor elke mapper.

De toepassing kan gebruikt worden als een dataverkenner en -bewerker op smartphones en op desktops, en kan ook **ingebouwd worden in je eigen site**.

## Deel van de community

Als de drempel om OSM te bewerken verlaagt, kunnen we ook meer fouten verwachten. Daarom houden we een oogje in het zeil en inspecteren we de data die met MapComplete aangeleverd worden.

Naarmate een gebruiker ervaring opdoet, kan hij verschillende thema's combineren om de applicatie af te stemmen op zijn persoonlijke interesses.

Experts kunnen zelfs hun eigen thema maken zonder tussenkomst van ons.

## Help de tool verbeteren

Aangezien dit een opensourceproject is, helpt een softwareverbetering meteen alle gebruikers.

De basis is er gekomen met budget van Groen (voor [Buurtnatuur.be](https://buurtnatuur.be/)) en Mobiliteit Brussel (via het [Cyclofix-project](https://cyclofix.osm.be)). Maar als we partners hebben, kan de *look & feel* aangepast worden aan hun stijl. Omdat de datakwaliteit afhangt van het aantal gebruikers, werken we samen met partners voor promotie. We organiseren ook mapathons, waar we een korte opleiding geven en dan mensen de straat op sturen om data te verzamelen. Er is ook nog werk aan de fundamenten van het project, zoals de visualisaties verbeteren en de gebruiksvriendelijkheid nog beter maken.

Een goede manier om samen te werken is met een [Open Summer of Code](https://osoc.be/)-project, maar ook voor andere modellen staan we open. En we gaan de tool sowieso blijven verbeteren!

Een belangrijke toekomstige ontwikkeling zal zijn om niet-OpenStreetMap-data te tonen aan gebruikers, om ze te integreren in OpenStreetMap. Tijdens dat proces worden ook de externe data gevalideerd, waardoor de brondataset ook geholpen wordt om de kwaliteit te verbeteren.


## Over MapComplete

Meer informatie over de tool (inclusief een lijst van alle thema's): [MapComplete op de OSM-wiki](https://wiki.openstreetmap.org/wiki/MapComplete).

Probeer het zelf op [mapcomplete.osm.be](https://mapcomplete.osm.be/). 

## Sleutelmomenten
* Start van ontwikkeling: mei 2020, [Buurtnatuur.be](https://buurtnatuur.be/)
* Grote uitbreiding van het project: juli 2020, [Cyclofix-project](https://cyclofix.osm.be)), als een [OSOC-project](https://osoc.be/editions/2020/cyclofix)
* Verdere ontwikkeling:
    * integratie voor beoordelingen via https://mangrove.reviews/
    * interface om openingsuren toe te voegen
    * gelaagde icoontjes (bv. groen voor "nu open")
    * themabouwer voor geavanceerde gebruikers
    * functionaliteit om thema's te combineren
