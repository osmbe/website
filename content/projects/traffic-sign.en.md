---
title: Traffic Sign Project
lead: Joost Schouppe, Ivan Diaz
cover: Samenscholingsverbod_Doel.jpeg
cover_caption: "A traffic sign that has an OpenStreetMap on it"
weight: 50
---

In Flanders, [all traffic signs are open data](https://www.vlaanderen.be/datavindplaats/catalogus/verkeersbordenvlaanderenborden). This information is hugely useful. Well, it could be. Most of the traffic signs date from several years back and have not been updated since. The Flemish Verkeersborden.vlaanderen project intends to change that. Municipality by municipality, we see updates starting to happen. Several of them have done a complete update, or at least do occasional additions.

In a perfect world, when the municipality decides to change a traffic situation (a new speed limit, a new one-way restriction,...), they start to work in this database. First there's a planned sign. Then when it is installed, it becomes a real sign. The real sign is offered to the OSM mapping community (and Waze, TomTom, Here, ...) and they add the info to the affected street - almost in real time.

We're not quite there just yet, but the edits in the database that do happen are still useful. Obviously because it makes for a better map. Less obviously because it saves everyone a lot of time. We often get a mail from municipalities: "hey, we have changed reality, can you now change your map". We want to be able to say: "oh we know, we already updated it!""

So we're building on a tool in good [Road Completion]({{< ref "projects/road-completion.md" >}}) tradition to make sure that if the government provides the data, we can guarantee that we'll be up to date. This in turn might be a little incentive for more municipalities to keep their bit of the database online. Just like in Road Completion, we "accidentally review" the government data as well. When we map traffic signs, we spot errors. Often user error, sometimes logical errors. These can then help municipalities to improve their data quality or even local reality. OSM data users will be able to see how well we keep track of new traffic signs - they won't have to trust us on our word that the data is good.

![Brighter means updated after 2019](https://i.imgur.com/V9zjUuD.png)
*Traffic signs in Flanders: highlighted are from 2019 and more recent*

### In practice

[We have a MapRoulette task online](https://maproulette.org/browse/challenges/23550) that is updated periodically. This task simply offers the most recent traffic signs as microtasks: the challenge is to map their effects.

How do we do that:

- we download all the traffic signs from the WFS service.
- we enrich the data with information about its name and effects. This is harvested from the JOSM plugin for traffic signs
- we keep only traffic signs that are "interesting" to us. For example, the traffic sign to say "you are on a priority road" has no effect on an OSM road. The sign "give way" does.
- we keep only traffic signs that are new since the previously processing date. N
- at the end of the process, a GeoJSON with relevant signs is put online. This is then harvested by MapRoulette
- The task is available at <https://maproulette.org/browse/challenges/23550> . Please read the instructions carefully, and give it a shot. Make sure to select "nearby" not "random" when going to the next task; because you might end up mapping the effects of several nearby signs. Mapillary imagery might often be outdated with this hyper recent stuff. Please leave a comment if there is something wrong with the traffic sign data or if you have other remarks. Please [refer to the wiki](https://wiki.openstreetmap.org/wiki/Road_signs_in_Belgium) to learn which tags are associated with which traffic sign.

The [code is available on Github](https://github.com/osmbe/traffic-sign-project). You can post issues there. A first proof of concept was built by Joost Schouppe. Ivan Diaz from TomTom rebuilt the entire workflow in Python and prepared a weekflow to ultimately run weekly updates completely automatically.

### What's next

- Activate automatic weekly updates with Github Actions.
- It might be possible to compare two dumps to find traffic signs that have been improved
- With our StreetLevel Imagery project, we create images that are uploaded to Mapillary. That platform automatically derives traffic signs. These signs are in turn detected by Osmose. This tool creates microtasks that are filtered for already mapped traffic signs. For example, it will only create a task for a max 30 sign if there is no road in OSM nearby where you can drive 30. The amount of tasks is still daunting. We intend to synchronize these tasks to MapRoulette, to "gamify" the mapping process in hopes of motivating more mappers to contribute.
- Find other source datasets to use this logic on. It is most interesting when there is an open, continously updated traffic sign database available. We did a first exploration in the Netherlands already, and it looks promising. If you know similar datasets, you're invited to create a pull request or post an Issue.

### Project key events

- 9/2021: [first exploration of the dataset for mapping use](https://lists.openstreetmap.org/pipermail/talk-be/2021-September/011322.html).
- 11/2021: [first filtering of traffic signs](https://lists.openstreetmap.org/pipermail/talk-be/2021-November/011374.html) published on MapRoulette
- Since then the task has been updated occassionally and over 6000 new signs have been reviewed! We also passed along mistakes we saw to the managing government, who have used it to improve the source data.
- 10/2022: first contacts with TomTom about automating the analysis flow
- 6/2023: Github Actions based flow created
