---
title: Heritage in Flanders and Crowd-Sourced Projects
lead: escada
cover: heritage.png
weight: 90
aliases: ["/2017/04/01/en-project-heritage-crowd-sourced.html","/en/projects/heritage-crowd-sourced.html"]
---

## Introduction

In this article I want to show you how one can add information about immovable heritage to
crowdsourced projects such as [OpenStreetMap](http://www.openstreetmap.org) and some of the projects of [Wikimedia](http://www.wikimedia.org).

In Belgium, the list of immovable heritage is controlled by three agencies, one for Flanders, one for Brussels and one for Wallonia. In Flanders, the agency is called [Agentschap Onroerend Erfgoed](https://www.onroerenderfgoed.be/). They make a catalogue of the items and decide on the protection. They also provide some of [their data](https://www.onroerenderfgoed.be/nl/onderzoek/wetenschappelijke-inventarissen) as open data.
In their catalogue they have churches, abbeys, castles, but also small farmhouses and villas, furthermore it includes  small items such as boundary stones and pillories. Occasionally, the list contains important trees on town squares.

![Pillory in Aartselaar](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-d6gBQB4/0/X3/Schandpaal%2C_Laar%2C_Aartselaar%20%282%29-X3.jpg)

*Pillory in Aartselaar*

What is a crowdsourced project? It is a project in which everybody can add data, unlike projects that are run by companies, where only employees can add data. When a company owns that data it can set the rules and price to get access to the data. In a crowdsourced project, normally the resulting database is free to use and consult. If you want to find out more about crowdsourcing, read the [Wikipedia article](https://en.wikipedia.org/wiki/Crowdsourcing) on the topic.

This also explains why it is interesting to have all the immovable heritage in crowdsourced project: one no longer depends on an agency or copyright rules defined by that agency to know when a building was created, or use a picture of a watermill in a publication, etc.

The scope of an agency such as Onroerend Erfgoed is also limited to a specific geographic region, the crowdsourced projects presented below all have a world-wide scope.

Let us now introduce some of the crowdsourced projects

### [OpenStreetMap](http://www.openstreetmap.org)

This is a global database of geographical info. This database can be used to created maps. [Wikipedia definition of OpenStreetMap](https://en.wikipedia.org/wiki/OpenStreetMap). Note that in OpenStreetMap, we only map features that exist today. We do not map buildings that are completely demolished.

### [Wikipedia](http://www.wikipedia.org)

An online encyclopedia about human knowledge. Items are described in articles and illustrated with images, just as in printed encyclopedia. [Wikipedia definition of Wikipedia](https://en.wikipedia.org/wiki/Wikipedia)

### [Wikimedia Commons](hhttps://commons.wikimedia.org)

A database of media files such as photos, videos, sound fragments and maps. [Wikipedia definition of Wikimedia Commons](https://en.wikipedia.org/wiki/Wikimedia_Commons)

### [Wikidata](http://www.wikidata.org)

A database about persons, facts, objects. [Wikipedia definition of Wikidata](https://en.wikipedia.org/wiki/Wikidata)

## What can we contribute and where?

The location and the floor plan of the heritage item, together with its name and some basic information can be put in OpenStreetMap. An article describing the origin and history of the item goes into Wikipedia. Photos, 3D-models, a movie taken with a drone are placed in Wikimedia Commons. And finally, a summary of the above information can be put in machine-readable format into Wikidata.

## How do we collect information?

OpenStreetMap is for a large part based on original survey. That means that the contributors go out and collect information about the world while they look at it. Wikipedia on the other hand is largely based on other sources and each article has a list of articles that are referenced. For Wikimedia Commons, one need to own the copyright of the media that one adds, or the file has to be out of copyright. Ideally, each property of a Wikidata item has a source, so just as for Wikipedia, the data is based on the work of others.

## How do I collect information?

My starting point is the list of immovable heritage items on Wikipedia. For Flanders, previous contributors have compiled a [list of items per village](https://nl.wikipedia.org/wiki/Cultureel_erfgoed_in_Belgi%C3%AB). I wrote a [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) program that converts such a wiki-page into a file with [waypoints](https://en.wikipedia.org/wiki/Waypoint) that can be used on a GPS-device or in navigation programs for smartphones such as [OsmAnd](http://osmand.net/).

![Garmin Dakota 10 with waypoints](https://photos.smugmug.com/OSM/Screenshots/Screenshots-1/i-8ntJtzd/0/O/70.jpg)
![Details on Garmin](https://photos.smugmug.com/OSM/Screenshots/Screenshots-1/i-63Fvk2T/0/O/92%20copy.jpg)

*Garmin Dakota 10 showing heritage items as red and blue flags, as well as some details on the item*

![OsmAnd](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-4LK2Lp4/0/O/Screenshot_2017-03-27-14-38-59.png)

*In OsmAnd the waypoints are displayed as red circles with white star. Clicking on a star shows additional information at the bottom of the screen. In case there are multiple items close to one another, the details are listed for each item*

This allows me to make small detours during my planned walks in order to visit (or view) the historical items. At the location I check whether the item still exists and take pictures of it. When the item no longer exists, I inform the Onroerend Erfgoed agency later on so they can update their database as well. I have the impression that they appreciate this kind of feedback.

## How do I process the collected data?
Back home, I make sure that the pictures get [georeferenced](https://en.wikipedia.org/wiki/Georeferencing) by using the GPS trace of my walk and the timestamp of the picture. I use [Geotag](http://geotag.sourceforge.net/) for that purpose.

The good, georeferenced photos are uploaded to Commons Wikimedia, a name and description are added as well as some categories. This category system is not always easy to understand, but I try to at least add "Onroerend erfgoed in <city>" and the category of the "part-village".

When this is done, I update the Wikipedia page with the list of heritage items in a town with a link to the newly uploaded photo. Of course, only when that page did not had a picture of the item before.

I also add the building layout to OpenStreetMap, and add the necessary tags to mark the area as a historic/protected item, with references to Onroerend Erfgoed. When there is a Wikipedia article or a Wikidata item those references get added as well.

Adding the necessary tags is easy in [JOSM](https://josm.openstreetmap.de/), especially when you use the preset for historical objects found in the [BENELUX presets](https://josm.openstreetmap.de/wiki/Presets/BENELUX).

![BENELUX Preset for monuments protected by Onroerend Erfgoed](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-pW9ptVd/0/X3/Screen%20Shot%202017-03-27%20at%2015.20.47-X3.png)
*BENELUX Preset for monuments protected by Onroerend Erfgoed*

You can also start writing Wikipedia articles for the items and/or create a Wikidata item with some properties. I recently started adding items for churches in Flanders based on information found the in the Onroerend Erfgoed and [ODIS](http://www.odis.be/) databases.

## How can you use the data?

### Wikipedia
The articles on Wikipedia can be read by anyone and further information can be found through the referenced articles, e.g. the [article](https://en.wikipedia.org/wiki/Cathedral_of_Our_Lady_(Antwerp)) on the Cathedral in Antwerp.

### OpenStreetMap
There are a number of maps based on OpenStreetMap that show those items.
#### HistOsm

Is a [map](http://histosm.org/) created by University of Heidelberg GIScience (Geoinformatics) Research Group. [More information](https://wiki.openstreetmap.org/wiki/HistOSM)

![HistOsm Map](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-ChHBNKX/0/X3/Screen%20Shot%202017-03-27%20at%2013.54.30-X3.png)
*HistOSM, all data (c) OpenStreetMap Contributors*

#### Historic Places

Is a [map](http://gk.historic.place) developed by some German enthusiasts in their spare time. It is available is several languages and has some [nice features](https://wiki.openstreetmap.org/wiki/Historical_Objects) such as the possibility to display old maps instead of contemporary maps based on OpenStreetMap data.

![Historic Places Map](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-NkHdJQ7/0/X3/Screen%20Shot%202017-03-27%20at%2021.07.04-X3.png)
*Historic Places, all data (c) OpenStreetMap Contributors. Topographical Map Vandermaelen.*

Each historic feature has a popup window which shows the information about the item as it is stored in the OpenStreetMap database. The popup can contain links to Onroerend Erfgoed (if there is a tag ...), wikipedia and wikidata. The tag *image* is recognized and will display the image if it is released under an open license (as is the case for images on Wikimedia Commons). The tag *wikimedia_commons* is also recognized and the link will bring you to the Wikimedia Commons page displaying the category with all images on the item.

The wikidata tag can not only be explored on the wikidata.org website, but also in "beautified" pages such as [Reasonator](https://tools.wmflabs.org/reasonator/) and [Sqid](https://tools.wmflabs.org/sqid) when you click on the icons next to the Wikidata item number.

![Reasonator for Q28464643](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-DxtJ6nf/0/X3/Screen%20Shot%202017-03-27%20at%2013.53.21-X3.png)
*The Sint-Pieterskerk in Rumst as seen on the Reasonator website with data from Wikidata*

If you look at a Reasonator page such as the one for the [Parochiekerk Sint-Pieter (Q28464643)](https://tools.wmflabs.org/reasonator/?q=Q28464643), you will find a link to "Overpass" under the maps. This will show the item on OpenStreetMap. So it is possible to define user interfaces on either Wikidata or OpenStreetMap and jump to the other project.

The result of clicking the [Overpass](http://overpass-turbo.eu) link on the above Reasonator page, shows the following page in which the Sint-Pieterskerk is highlighted and positioned in the middle of the visible map.

![Overpass showing item with Wikidata tag](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-v2vQxHG/0/X3/Screen%20Shot%202017-03-27%20at%2014.00.42-X3.png)
*Overpass UI showing the item with Wikidata identifier Q28464643*

### Wikidata

Since the data in Wikidata is structured, unlike the full text sentences in Wikipedia, one can query the data. This makes it e.g. possible to create a [time line](http://tinyurl.com/zso674w) with the inception date of Belgian churches, or a [bubble chart](http://tinyurl.com/myfpwqm) with their architectural styles. By clicking on the links in this paragraph, you are taken to the query site of Wikidata where you can run the queries and explore the data yourself.

![timeline of Belgian Churches](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-MGNPLd8/0/X3/Screen%20Shot%202017-03-27%20at%2013.51.04-X3.png)
*A time line of churches in Belgium*

![bubble chart of architecture of Belgian Churches](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-s544Ndb/0/X2/Screen%20Shot%202017-03-27%20at%2020.45.47-X2.png)
*Architectural Styles used in Belgian churches*

You can also make maps that combine Wikidata with OpenStreetMap shapes. The following map retrieves all Belgian churches from Wikidata when they have an inception date. According to this date, they get a different colour. The shape is taken from OpenStreetMap.

![Wikidata and OpenStreetMap](https://photos.smugmug.com/OSM/Screenshots/HeritageCrowdSourced/i-gKKpzrr/0/X2/Screen%20Shot%202017-04-01%20at%2021.33.00-X2.png)
*Combining Wikidata and OpenStreetMap*

You can look at the map on my Wikimedia [user page](https://www.mediawiki.org/wiki/User:Funkyxian)
and explore the data yourself, or look at the code used to generate the map.

## Conclusion

I hope that the examples give you an idea of what is possible with crowdsourced, open data. I think the possibilities to connect Wikidata and OpenStreetMap are endless and that better integration tools will appear in the future.

Feel free to contact me via marc dot gemis at gmail dot com.
