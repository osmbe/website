---
title: Road completion project
layout: project
lang: nl
featured: road-completion2.gif
featured_caption: "Overheidsdata in het rood. OSM in het zwart erbovenop. In de loop der tijd worden plaatsen waar er geen OSM wegen zijn (en je dus rood ziet) alsmaar zeldzamer."
lead: Joost Schouppe, Ben Abelshausen & Jonathan Beliën
redirect_from: /2017/01/06/nl-project-road-completion.html
---

Hoewel we OpenStreetMap heten, zijn niet echt álle straten gemapped in OSM. Natuurlijk hebben we een excellent routeerbaar wegnetwerk, maar toch zijn er hier en daar nog kleine fouten. De bedoeling van dit project is om die fouten te detecteren en ontbrekende wegen toe te voegen. Tegelijk willen we er ook voor zorgen dat we nooit achterlopen op de overheidsdata, en dat we fouten aan overheidskant kunnen laten nakijken door hen.

### Crowdsourcing, open data en machine learning

Aangezien OSM volledig gebaseerd is op crowdsourcing, zal onze crowd elk opgemerkt foutje corrigeren. Sommige wijzigingen op het terrein vallen echter niet echt op. Een nieuwe verkaveling met maar een paar huizen in een doodlopende straat bijvoorbeeld. Een wijziging van een straatnaam of een spelfout in die naam. Een weg die slecht ingetekend is in OSM omdat de luchtfoto's vroeger van mindere kwaliteit waren.

Overheden over de hele wereld zetten in op open data, zodat meer en meer datasets met wegen beschikbaar worden. We kunnen ook machine vision loslaten op luchtfoto's om een wegennetwerk op te bouwen. We willen die data gebruiken om onze kaart te verbeteren – en waarom niet, om de overheidsdata zelf ook te verbeteren.

We bouwen tools om verbeteringen in de officiële wegendata aan te bieden aan onze mappers, op een snelle en gemakkelijke manier. Omdat het niet enkel Vlaanderen is dat dit soort data aanbiedt, proberen we iets te bouwen dat eenvoudig uit te breiden is naar om het even welke dataset van wegassen, wereldwijd.

![]({{ site.baseurl }}/assets/images/post/road-completion1.jpg)
*De evolutie van het mappen van trage wegen in Brussel. Groen: trage wegen. Grijs: reeds getekende wegen. Zwart: wegen die deze maand verbeterd of toegevoegd werden.*

### Betrouwbare data

OpenStreetMap groeit op een chaotische manier. Op bepaalde plaatsen is de kwaliteit van de data verbluffend. Op andere plaatsen is de kaart nog rudimentair. Wie de OSM data gebruikt, krijgt doorgaans geen kwaliteitsgarantie. We willen het vertrouwen in de data verhogen met de eenvoudige garantie dat OSM minstens even volledig is als de overheidsdata. Met de tool die we bouwden, kan je op elk moment het aantal wegsegmenten zien dat de overheid kent, maar OSM nog niet. Met deze objectieve meting van volledigheid willen we de OSM data voor nog meer usecases geschikt maken.

Je kan [het aantal ontbrekende wegen hier opvolgen](https://osmbe.github.io/road-completion/). 

### Huidige stand van zaken

- Het vergelijkingsproces loopt elke week voor [Vlaanderen](https://github.com/osmbe/road-completion/tree/master/data/belgium/flanders/difference) en [Brussel](https://github.com/osmbe/road-completion/tree/master/data/belgium/brussels/difference)
- Het vergelijkingsproces loopt manueel voor [Wallonië](https://github.com/osmbe/road-completion/tree/master/data/belgium/wallonia/difference)
- We maken gebruik van MapRoulette. Wil je zelf aan de slag gaan, lees dan [deze instructies](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project/Instructions)
- Je kan [het aantal ontbrekende wegen hier opvolgen](https://osmbe.github.io/road-completion/).  
- Digitaal Vlaanderen heeft onze feedback voor Vlaanderen verwerkt. Onze mappers vonden 561 gevallen waarin de officiële data wellicht fout waren. Dit leidde in 90% van de gevallen tot een correctie van de officiële data. 


### Sleutelmomenten van dit project

* Exploratie van het Wegenregister als bron, met afgeleide kaartlagen om mappers te helpen. Zie dit ([artikel - EN](http://www.openstreetmap.org/user/joost%20schouppe/diary/39250))
* In omgekeerde richting: Wegenregister valideren met OSM, case study in Antwerpen ([artikel - EN](http://www.openstreetmap.org/user/joost%20schouppe/diary/39573))
* Taak toegevoegd in de (stopgezette) Belgische tasking manager; Halle als voorbeeldproject.
* [Wiki pagina gemaakt](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project) om de concrete taken te organiseren.
* Eerste Maproulette taak online, [instructies vind je hier](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project/Instructions)
* Presentatie op AIV Trefdag 2017 en [State of the Map 2018](https://2018.stateofthemap.org/2018/T097-Road_Completion_in_Belgium_-_Mapping___verifying__all__the_roads_/) (video)
* [Open Summer of Code 2018 project](https://2018.summerofcode.be/roadcompletion.html)
* De huidige versie van het project wordt bijgehouden op de [OSMBE github pagina](https://github.com/osmbe/road-completion/). Met een [OpenStreetMap Foundation microgrant 2020](https://wiki.openstreetmap.org/wiki/Microgrants/Microgrants_2020/Proposal/Road_Completion_project) kon bestuurslid Jonathan Beliën de nodige tijd investeren in het bouwen van de tool. Vlaanderen, Brussel en Wallonië werden eerst opgezet. Later volgden Luxemburg, Kosovo en Nederland.
* In 2021 werkten we samen met Digitaal Vlaanderen om hen te helpen onze feedback te verwerken. We bezorgden 561 gevallen waarin de officiële data wellicht fout waren. Dit leidde in 90% van de gevallen tot een correctie van de officiële data. 
