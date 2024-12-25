---
title: "Mapper of the Month: Polyglot"
categories: ["motm"]
author: escada
---

Polyglot is a Belgian network administrator who's hobbies are changing a bit over time: learning languages, cycling, horsebackriding, and oh .... OpenStreetMap became a major time sink!

## How did you discover OpenStreetMap?

Apparently, it's been eight years already. I wanted to give something back to the free software world. I'm not a real programmer, so for a few years I contributed to the English Wiktionary. However, at one point it was more fighting against vandalism than bringing in new and interesting data about words and translations, so I gave up on that.
OpenStreetMap had the advantage that, on the one hand, it's an outdoor activity,  and on the other hand you get to use a computer in interesting ways. Every time you enter the surveyed data, you sort of relive the itinerary you followed, which intensifies the experience.
Since I discovered Mapillary, my way of mapping/surveying changed again. Taking a huge amount of pictures, which serve as source material, became a goal in itself. I produce so many of them  now that it is no longer feasible to process all of the data I collect myself. Before Mapillary I just took pictures of what I was going to add on OpenStreetmap. This process took about the same amount of time as the surveying itself. Nowadays weeding out the failed pictures from the thousands I made is work enough as it is.

![Pad van Ad op OSM](https://upload.wikimedia.org/wikipedia/commons/a/a2/Pad_van_Ad_op_OSM.png){:style="max-width:960px;"}

## Do you use OpenStreetMap yourself?

Strangely enough, not that often. Or maybe I do, for example with OsmAnd. Wonderful how you can fit a complete offline map on your smartphone of our small country! And I once made a [map](https://upload.wikimedia.org/wikipedia/commons/a/a2/Pad_van_Ad_op_OSM.png) with Maperitive to illustrate an article on [Wikivoyage](https://en.wikivoyage.org/wiki/Ad) and [Wikipedia](https://en.wikipedia.org/wiki/Ad_Wouters). Afterwards I learned that they have integrated maps, based  on Openstreetmap of course.
What's remarkable about that map is that it combines data, in ways that would be unthinkable only 10 years ago. It took me a while to get it done, but only a fraction of the time, if I had to do all of the work myself.  It displays bus itineraries and stops, a network of hiking nodes and connecting routes on a detailed background, overlayed with the topic of the map, an itinerary connecting wooden statues created by Ad Wouters throughout the forest.
In my opinion, another very nice initiative is [Umap](http://umap.openstreetmap.fr/nl/user/Polyglot/), oh and Overpass API, of course. Invaluable, that is.

## How do you map? (field surveys, arm chair, ... )

I like to experiment, so I try pretty much everything! I do surveys by bike, on foot and even on horseback ... just fun to do. I started with a Windows CE phone with GPS, equipped with a small keyboard, which I could buy second-hand. Before that, I also used a data logger for a while and a 'regular' phone, which could take 5MP pictures. Today, it has to be a smartphone with no less than 8 or 12MP :-) Incredible how technology evolves and what how it enables us to do our mapping.

Arm chair? In a certain way yes. I kept bugging De Lijn (the public transport agency of Flanders) for permission to add their data into OpenStreetMap. After much insistence, and some help from OKFN, that finally came through. Then I started to figure out how to convert their data into OpenStreetMap format, using PostGIS and Python scripts. It was an interesting learning experience to be working with SQL and such. Subsequently I added all nearly 40 000 stops in groups of around 100 at a time on OpenStreetMap. I spent months doing this, if not years... By the time that TEC (the public bus and tramway agency in Wallonia) released their data, I apparently had some experience, because those 30 000 bus stops were added within three months!

Perhaps what kept me going, was the search for a model that can easily be mapped and maintained and is still powerful enough to represent the public transport routes as realistic as possible. The starting point was of course the "new" mapping schema of public transport. Many people call this schema too complex, because there are so many relations. On the other hand, it is impossible to model public transport routes with a simple schema.

I start with the (bus) stops as nodes on both sides of the road. I do not like to duplicate information, that only makes it harder to maintain. Therefore the way that represents the platform or the stop_position-node on the road, do not get any additional tags. All details go on the node, which represents the pole of the stop. The details include the refs, route_refs, zone and name of the stop. I also consider the stops on both sides of the road as different entities. So I have 2 stop area relations. Each relation contains the  platform or bus-stop-node, the stop-position, the shelter, the bench, the wastebin, etc.

When looking across the border, you see different mapping styles. For example, in Germany they put all stops with the same name in 1 stop-area-relation. This makes it impossible to associate the stop-position-node with the platform-node. Other differences are details that appear on the way representing the platform or on the stop positions.
Those different methods are especially difficult to deal with when operators have bus stops across the border.

I just like to automate stuff. I started to use Pythonscripts to convert data. Later on, I started to write scripts within JOSM, in order to create stop-area-relations. Another script I wrote, assists me in the creation of route-relations. Without those scripts it would be an impossibly daunting task to map all this info.

## Where do you map?

In the early days, I mapped in my own (wider) surroundings. It is remarkble how one suddenly starts to look differently at ordinary things while out and about. Something like "How could I map that? Did I already add this? O, that has changed, I should fix that later on."

I suppose that my specialization is public transport, although I experimented with lots of different things. One thing I can't  I seem to get stated with is 3D-mapping. It just takes too much time to get it right. The tools do not offer enough support yet.

When I discovered Mapillary, I spent some time on traffic signs. But I won't attempt to map them all. I did try to correct the Belgian data for the JOSM plugin, but I think that that plugin should be rewritten. Maybe it could make a nice project for the next GSoC?

## Why do you map? What motivates you?

Of course it comes in handy that OsmAnd works quite well, it's nice to know that I contributed some of the data myself. On the other side, I fear contributing is a kind of addiction, or an escape from reality. Maybe not too healthy after all. If I stop contributing next week, it might be because I gave this question a bit too much thought :-)

## Do you do other things beside mapping?

I read several mailing lists and fora to keep up-to-date with OpenStreetMap news, which has the added benefit of getting to practice my language skills.
I don't consider presenting in front of a public as my strongest point, but I do like to get people started with JOSM, when they become more seriously involved with Openstreetmap, so I tend to try it every once in a while.
A nice experience was the mentorship of Jorge, who developed the Mapillary-plugin for JOSM during GSoC. This was the first time I mentored, but it was an interesting experience and I believe the result is very useful for the community. I'm sure Jorge also had a good learning experience.
I might repeat it next year. I have some ideas already: the Mapillary plugin could be developed further to include a 3D-like view. Another possibility is to reimplement the "expert system" for public transport routes in Java, as a real plugin. Or we could rework the RoadSigns-plugin, so it intelligently assigns tags to the node representing the traffic sign and corresponding tags to the affected highway.

About a year ago, I participated in my first Missing Maps Mapathon. However, I was not very well prepared back then. I mostly went out of curiosity. The participation was much larger than I had expected. The next one was in the Geofort in The Netherlands. --- Philippe, thanks for making that possible! --- This month, I was a presenter, explaining JOSM. Perhaps it is not the most straightforward choice to start editing, but I think it is important to show the benefits of this editor.
Furthermore, I also digged into the tasking manager. I noticed that a lot of items get mapped, but the validation is lacking in many cases. Since I have gained some experience over the years, I thought to give that a try. I find it difficult to reject tiles, since you want to motivate the people and give tips on how they could improve their work. This is needed, otherwise they keep repeating the same mistake over and over. Finding the right balance is a bit of a challenge.
I am now experimenting with [Twitch](http://www.twitch.tv/polyglot_openstreetmap/), in order to implement a better way for giving feedback for that validation. However, I'll admit that it also serves as a way to demonstrate that things can be done more efficiently with JOSM most of the time.
Anyway mapping for HOT (or at least checking the hard labour others did and helping them to become better mappers) is quite rewarding. The Humanitarian Openstreetmap Team is really making a difference, creating communities where they wouldn't form spontaneously, but where the need for decent maps is greater than ever.

## What is your biggest achievement?

Definitely the script that I wrote to update PT route relations in JOSM. The script uses routes that are already mapped. The way we map those relations at this moment causes a lot of duplication. That is something you do not want to fix manually in case the street infrastructure changes, or when more detail is mapped.
A smaller achievement is another little experiment of mine. After learning about Wikidata, I started adding tags for streets named after artists, architects and [places](https://en.wikipedia.org/wiki/Leuven#External_links). I started out by adding direct links via Overpass Turbo to the wikipedia articles, but after a while I developed a LUA-script that expands into a link pointing to Overpass Turbo. I hope this can help people who may be intimidated by the Overpass syntax to get a starting point for their own queries. I also like how this connects several different opendata projects.

But the thing that makes me most proud is that all together we achieved to create something that was unimaginable only 10 years ago.

Thanks a lot Polyglot for this interview
