---
title: "Hackday GRB"
author: Joost Schouppe
cover: hackday.jpg
---

Last Sunday 12 December, we had our first real OSM Belgium hackday!
The plan was mainly to work on the GRB import. A dozen volunteers made it to Brussels and participated.

In Flanders, 1944 of our contributors have already mapped 1.4 million buildings.
Most of that by hand, from aerial imagery. But recently the Flemish government released the
['GRB (NL)'](https://overheid.vlaanderen.be/producten-diensten/grootschalig-referentiebestand-grb) as open data.
This data contains over 4 million buildings, and they are drawn to centimeter level precision.
So we want to improve the geometry of our existing buildings, then go for complete building coverage in Flanders.

We agreed we wouldn't just copy the government data. First we need to translate the local building
concepts to [global OSM definitions](https://wiki.openstreetmap.org/wiki/Tags).
Then we will check if an OSM building already exists. Those existing buildings have a whole history
behind them: someone drew them, later an address was added, maybe their protection status, number of floors,
shops, etc. Our goal is to keep that object and its history, and only change its outline. That means that a lot of
manual checking will be necessary. One example is that we don't want our buildings to overlap roads, or we don't
want industrial buildings mapped as houses.

During the hackaton, we thought along with the work prepared over many months by Glenn, building on previous
experience by Sander. We found a few points of improvement, and now have a good plan on how to get the import going.
Keep an eye on the wiki pages [about the GRB](https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/GRB) and
 [about the GRB import](https://wiki.openstreetmap.org/wiki/GRBimport) if you are interested. Or talk to us
 via [the mailinglist](https://lists.openstreetmap.org/listinfo/talk-be) or one of the other channels.

Even though the GRB was our main focus, we worked on several other projects too. As it goes in OpenStreetMap,
both French and Dutch speakers were there, eager to work together. So most of the talking was in English :)
The very website you are visiting now was much improved on during the day. We didn't just make a new website,
we also made it more inviting to contribute! Now that we have migrated to GitHub, everyone has access to the
source code. We've already added [some help to get you started](https://github.com/osmbe/website).

The co-working space that [Transforma BXL](https://www.transformabxl.be) allowed us to use, was excellent for
the event: brainstorming in the Innovation Garden, then off to the office space for the hard work. In a co-creative
atmosphere, we worked on our own OSM projects too, and got to test the POSM setup with Colin Broderick.
Thanks again to Transforma BXL!

If you like what this community is doing, why not give it a little financial support? Hackers and mappers
erform better if someone pays for their pizza! [Contact us](mailto:community@osm.be) for sponsoring opportunities or [become a member of OpenStreetMap Belgium](http://www.osm.be/nl/signup.html).
To stay up to date on all things OSM-be, sign up to our [newsletter](http://eepurl.com/bZoZlj).
