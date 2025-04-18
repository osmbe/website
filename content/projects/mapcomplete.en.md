---
title: MapComplete
lead: Pieter Vander Vennet
cover: mapcomplete.png
weight: 80
---

More and more use OpenStreetMap (OSM) as their basemap. But we're not just a map - we're an open spatial database. How many apps do you know that collect drinking fountains, public toilets, camping spots, bars with wifi, parking info etc? Unfortunately, all of these apps have their own little data island. All of these things could be built very easily on top of OpenStreetMap!

Collecting this data outside of OpenStreetMap has serious disadvantages.

* **Everyone who builds such an app, has to built everything**: a website, a database, user account management, various apps, a user community, a data curation model, data hosting, etc.
* This multiplication of efforts means that it is a lot of effort to keep these things going. That leads to **closed business models** - often an app starts free of costs, but will ask for more and more money to access the data. Especially if a "captive audience" can be created, it is tempting to do this.
* These **data islands** mean that there might even be competing datacollections for the same type of objects. This leads to having to do the same data collection work multiple times, or unnecessary work in trying to merge several collections
* Since these are all relatively small projects, there's a serious risk of **data loss** when the maintainer loses interest.

Why doesn't everyone just use OpenStreetMap then? Anyone can use our database and user management. You're allowed to build a business model around our data. Your data will be curated by a huge community. Your data will be enriched by people with similar interests using other apps.

To be honest, we're surprised as well. We think there are two reasons we can do something about:

* adding data to OpenStreetMap generally requires learning to work with editing software that you can use for any sort of editing - which means you have to learn a bit about mapping in general, not just the topic that interests you. Our data model is pretty complex, it's documented in software presets and on wiki pages which can be hard to read.
* Consumers are used to basemaps that do not allow interaction with specific POIs. Most OSM apps are general purpose, so they don't give you the level of detail ("is this water drinkable?") that a specialised user needs.

## MapComplete to the rescue

MapComplete aims to make this all easy to solve. It is a generic progressive **web-app** that can be adapted to any topic. It makes it easy to:

* only show a specific subset of special POIs
* translate attributes of the object into human readable text and icons
* consult pictures of the object
* and even consult [open reviews](https://mangrove.reviews/) about the object!

And it doesn't just show this data, it also **allows you to add or edit data**. For any POI, we define a number of questions that are interesting. These can be answered by anyone who knows a bit about the topic - no specialized knowledge required. The information is added to OpenStreetMap directly - you only need a personal OSM account, but there is no separate database of POI or users. Pictures are hosted externally, and the URL is added to the OSM object. So all information will be available to any OSM user.

The app works as a mobile friendly data viewing and editing tool. At the same time, it is also built to be used as a **desktop website** as well as for **inclusion in your own website**.

## Part of the community

Making it easier to contribute to OSM data also means it's easier to make mistakes. So we monitor the data that is being generated by the tool.

As a user gains experience, they can start combining the different themes to use it for all of their personal specific interests.

Expert users can even make their own theme without any intervention from our side.

## Help us grow the tool

Because this is an open source project, all development helps all of the users.

The foundational work has been laid already, thanks to grants from Groen for [Buurtnatuur.be](https://buurtnatuur.be/) and Brussels Mobility (via the [Cyclofix project](https://cyclofix.osm.be)). But when we have partners, the look & feel can be tweaked to their preferences. The quality of the data depends on the number of users - so we work with partners for promotion. We also organize mapathons, where we give a quick training and send people out in the field to collect data. We also need more work on the fundamentals of the project, for example to improve the visualization or make it even more user-friendly.

A good way to work together is through an [Open Summer of Code](https://osoc.be/) project, but we're open to other models as well. And we will keep improving the tool anyway!

A key future development is using it to present non-OpenStreetMap data to users, with an eye to integrating that data into OpenStreetMap. In that process, the external data is also validated, helping the original source maintain quality of their dataset.

## Info & history

For more information about the tool (including a list of all themes): <https://wiki.openstreetmap.org/wiki/MapComplete>

Try it out at [mapcomplete.osm.be](https://mapcomplete.osm.be/).

* Development started: May 2020, [Buurtnatuur.be](https://buurtnatuur.be/)
* Major extension of the project: July 2020, [Cyclofix project](https://cyclofix.osm.be)), as an [OSOC project](https://osoc.be/editions/2020/cyclofix)
* Continued development:
  * reviews integration via <https://mangrove.reviews/>
  * interface for adding opening hours
  * layered icons (e.g. green for "open right now")
  * theme builder for advanced users
  * add functionality to combine themes

### Inspirations & alternatives

There are several other apps to edit OpenStreetMap on mobile. [Vespucci](https://wiki.openstreetmap.org/wiki/Vespucci) has all the functionality of a dekstop editor. [StreetComplete](https://wiki.openstreetmap.org/wiki/StreetComplete) is a gamified approach that focuses on extending existing data and has a very wide range of "quests". [MapContrib](https://wiki.openstreetmap.org/wiki/MapContrib) is very similar to MapComplete in goals and options. Umap does not have editing features, but can be used to make maps similar to MapComplete and allows to upload or draw data from outside of OpenStreetMap. Then there are tools like [OSMTracker](https://wiki.openstreetmap.org/wiki/OSMTracker_(Android)) which help you survey data in the field, but expect you to add the data to OpenStreetMap in a desktop tool.
