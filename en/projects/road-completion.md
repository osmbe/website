---
title: Road completion project
layout: project
lang: en
featured: road-completion2.gif
featured_caption: "Red is government data, the less red, the more complete OSM becomes."
lead: Joost Schouppe, Ben Abelshausen & Jonathan Beliën
redirect_from: /2017/01/06/en-project-road-completion.html
---

We're called OpenSTREETMap for a reason: we have an excellent road network. With turn restrictions and lane navigation, hiking paths and cycle lanes. But there are still some basic mistakes here and there. We aim to correct these mistakes by using open government datasets to verify and detect missing data. Meanwhile, we'll improve government data too, and offer you a guaranteed minimum quality.

### Crowdsourcing, Open Data and Machine Learning

As we are crowdsourcers, every mistake that our crowd sees will be corrected. But some changes aren't very visible. For example, a new road with just a few houses, without connections. A name change of a road, or a misspelled road name. Or a road that was mapped back when aerial imagery was much lower quality.

We use open-data and machine learning to verify OSM data. As governments are finally embracing open data, more and more open road datasets are becoming available. We want to use that data to improve our map - and why not, to improve those open datasets themselves too. Our contributor Joost Schouppe did some experimental work on the subject, resulting in [stuff you can use for your mapping in Flanders](http://www.openstreetmap.org/user/joost%20schouppe/diary/39250).

As a community, we want to build the tools to make sure that any correction in the official open data road sets is made visible to the mapping community as quickly and as accurately as possible. Because it isn't just Flanders that has released tools like this, we will try to build something that is easily scalable to any dataset of road centerlines worldwide.

![]({{ site.baseurl }}/assets/images/post/road-completion.gif)
*The evolution of mapping roads in Brussels. Green: slow roads. Grey: mapped roads. Black: roads being worked on that month*

### Trust

The core of this project is trust, we want data consumers to be able to trust OSM as a source of data for roads. We want to produce quality metrics that we publish in this website.

Once these tools are up-and-running and we have done a first pass over the data, then we can evaluate the quality of OSM in Flanders by comparing the datasets again and analysing the differences. We then hope to guarantee a minimum level of quality of the OSM road data compared to the quality of the open datasets available. Hopefully, that will make OSM in Belgium usable in even more cases because there is a metric of completeness.

![]({{ site.baseurl }}/assets/images/post/road-completion1.jpg)
*A sample of missing 'slow' roads*

### Current status

- Comparison process is running every week for [Flanders](https://github.com/osmbe/road-completion/tree/master/data/belgium/flanders/difference) and [Brussels](https://github.com/osmbe/road-completion/tree/master/data/belgium/brussels/difference)
- Comparison process is run manually for [Wallonia](https://github.com/osmbe/road-completion/tree/master/data/belgium/wallonia/difference)
- We are mapping in MapRoulette, to get started go to this [instructions page](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project/Instructions)

### Project key events

* Exploration of Wegenregister as a source, with mapping layers and downloadable GPX files ([diary entry](http://www.openstreetmap.org/user/joost%20schouppe/diary/39250))
* The other way around: validating Wegenregister with OSM in Antwerp ([diary entry](http://www.openstreetmap.org/user/joost%20schouppe/diary/39573))
* Set up [a Task in the Belgian tasking manager](https://tasks.osm.be/project/2); in the town of Halle as an example.
* Added a [wiki page with a project overview](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Road_completion_project)
* [Presented the project at FOSS4G](http://slides.com/benabelshausen-1/deck-1).
* Started a first Maproulette task to map missing roads
* Presented at [State of the Map 2018](https://2018.stateofthemap.org/2018/T097-Road_Completion_in_Belgium_-_Mapping___verifying__all__the_roads_/) ([video](https://www.youtube.com/watch?v=K0PClU5yZTQ&feature=youtu.be) and [slides](https://github.com/osmbe/website/)) and AIV Trefdag 2017
* Created a prototype at [Open Summer of Code 2018](https://2018.summerofcode.be/roadcompletion.html)
* [OpenStreetMap Foundation microgrant 2020](https://wiki.openstreetmap.org/wiki/Microgrants/Microgrants_2020/Proposal/Road_Completion_project)

