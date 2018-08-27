---
title: "Road completion project"
featured: images/project/road-completion2.gif
featured_caption: "Red is government data, the less red, the more complete OSM becomes."
layout: project
category: project
author: Ben Abelshausen
lang: en
project_lead: Joost Schouppe & Ben Abelshausen
---

We're called OpenSTREETMap for a reason: we have an excellent road network. With turn restrictions and lane navigation, hiking paths and cycle lanes. But there are still some basic mistakes here and there. We aim to correct these mistakes by using open government datasets to verify and detect missing data. Meanwhile, we'll improve government data too, and offer you a guaranteed minimum quality.

### Crowdsourcing, Open Data and Machine Learning

As we are crowdsourcers, every mistake that our crowd sees will be corrected. But some changes aren't very visible. For example, a new road with just a few houses, without connections. A name change of a road, or a misspelled road name. Or a road that was mapped back when aerial imagery was much lower quality.

We use open-data and machine learning to verify OSM data. As governments are finally embracing open data, more and more open road datasets are becoming available. We want to use that data to improve our map - and why not, to improve those open datasets themselves too. Our contributor Joost Schouppe did some experimental work on the subject, resulting in [stuff you can use for your mapping in Flanders](http://www.openstreetmap.org/user/joost%20schouppe/diary/39250).

As a community, we want to build the tools to make sure that any correction in the official open data road sets is made visible to the mapping community as quickly and as accurately as possible. Because it isn't just Flanders that has released tools like this, we will try to build something that is easily scalable to any dataset of road centerlines worldwide.

![](/assets/images/project/road-completion.gif)
*The evolution of mapping roads in Brussels. Green: slow roads. Grey: mapped roads. Black: roads being worked on that month*

### Trust

The core of this project is trust, we want data consumers to be able to trust OSM as a source of data for roads. We want to produce quality metrics that we publish in this website.

Once these tools are up-and-running and we have done a first pass over the data, then we can evaluate the quality of OSM in Flanders by comparing the datasets again and analysing the differences. We then hope to guarantee a minimum level of quality of the OSM road data compared to the quality of the open datasets available. Hopefully, that will make OSM in Belgium usable in even more cases because there is a metric of completeness.

![](/assets/images/project/road-completion1.jpg)
*A sample of missing 'slow' roads*

### Current status

- We are mapping in Maproulette, to get started go to this [instructions page](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project/Instructions).
- ~~We are doing a first comparison.~~
- ~~We are building a first version of the comparison tools.~~

### Project key events

* Exploration of Wegenregister as a source, with mapping layers and downloadable GPX files ([diary entry](http://www.openstreetmap.org/user/joost%20schouppe/diary/39250))
* The other way around: validating Wegenregister with OSM in Antwerp ([diary entry](http://www.openstreetmap.org/user/joost%20schouppe/diary/39573))
* Set up [a Task in the Belgian tasking manager](https://tasks.osm.be/project/2); in the town of Halle as an example.
* Added a [wiki page with a project overview](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project)
* [Presented the project at FOSS4G](http://slides.com/benabelshausen-1/deck-1).
* Ran a first comparison and [first results](https://github.com/osmbe/road-completion/tree/master/results/wegenregister) are available.
* Started a first Maproulette task to map missing roads
