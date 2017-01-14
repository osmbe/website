---
title: "Wegenregister 2 OSM"
featured: images/hackday.jpg
layout: project
author: Ben Abelshausen
lang: en
project_lead: Joost Schouppe
---

The Flemish government has a large project to measure most stuff you find in the public domain, the GRB (Dutch). The data is measured to incredible accuracy, but the project is not focused on maximum recency. Update frequency is once or twice a year. When it comes to roads, only those that need an official streetname are included.

That's a bit limited for some purposes, so they started the Wegenregister (Registry of Roads). The idea is that all roads are included, also "slow roads" (paths and tracks), private roads and even future roads. They started of with the centerlines of roads from the GRB and enriched it with National Geographic Institute (NGI) data for smaller roads. It isn't quite finished yet: a lot of local governments must still validate the data, and there is no automatic procedure in place to feed new GRB roads to the database. So you can expect some of the "future roads" to be quite present. The NGI data is also of varying quality: it is quite complete and has generally good geometry, but it can be quite outdated.

The scope of the Wegenregister is to offer a complete road network, not navigable data. It does not include anything like access restrictions, detailed lane info or max speeds. It does contain road surface information. It is divided into segments, which go from one junction to the next. Only if a new road is added, an existing segment will be split. That means segment ID's are relatively stable. If a segment has a change of attribute somewhere, this is dealt with by dynamic segmentation. Basically, that means you have a table saying stuff like "from meter 0 to 100 asphalt, from meter 100 to end concrete".
