---
title: "Weekly Riot chat digest : 10/12/2018 - 16/12/2018"
layout: post
author: Tim Couwelier
lang: en
---

See the original post and the following discussion here : <https://forum.openstreetmap.org/viewtopic.php?id=64819>

## Monday 10/12/2018

Glenn informs about how to map a 'tractorsluis' (physical construction to allow tractors to pass, but not normal cars).  
<https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dsump_buster>

bxl-forever asks about how to map a certain type of barrier/fence.  
`fence_type = railing` seems the best fit (<https://wiki.openstreetmap.org/wiki/Key:fence_type>)

Seppe points out there's a Mapillary grant program for camera's.  
Requires 50k+ uploaded pictures to be taken into consideration.  
<https://docs.google.com/forms/d/e/1FAIpQLScrPJcRGlh_FQCQCuZkk0tCK9317odk5RYeYfI2UruCzJW31Q/viewform>

Jakka suggests supplying a basic simple template using osm-be tiles to implement a map into a website.  
Most agree this would be good, issue created on the osmbe-website github.

## Tuesday 11/12/2018

Timcouwelier points out tiles are loading very slow,.  
Escada confirms there's indeed issues, linking to the status page (<https://wiki.openstreetmap.org/wiki/Platform_Status>)

Jakka asks about how to map mobil telephone antennae attached to power towers.  
Lionel_giard replies *'you only use `communication:mobile_phone/radio/...=yes/no` for the transmission equipment. The others tags are all for the structure. '*

## Wednesday 12/12/2018

Timcouwelier asks about tagging suggestions for an entrace ramp to a hospital with an overhead roof.  
Tagging as a bridge seems an option, but would not match with using 'tunnel' for the covered part under the building + it's rendered overly heavy. Consensus is to split the ramp and mark an `incline = up` and `incline = down`, but to not  add percentage as it's unknown.  
<https://taginfo.openstreetmap.org/keys/incline#values> apparantly shows 2 uses for `incline = steep_as_hell`

Lionel_giard ask about how to map an 'internaat' (living quarters at school for students not going home during the week).  
This is a recurring question, but there's nothing beyond `building = residential`. However, it should still clarify sufficient in combination with `amenity = school` around it.

Timcouwelier asks about options in Overpass Turbo: building on a query that selects all ways based on having a node last touched by a given user, is there an option to do that for TWO users and style them differently?  
Joost offers a workaround through mapcontrib, by using two layers with a different query, and working with two different styles.

s8evq asks about possible missing attribution to OSM in the maps used by postnl.be.  
Contact is made based on the following input by Joost:  
If you want to deal with it yourself, add it to this list and write them a message: <https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Websites#List_2>

A reply from wegspotter to a question by Glenn on 'slow roads', raises discussion on how to deal with getting 'complete' info, as the requirements for the vicinal ref (<https://wiki.openstreetmap.org/wiki/WikiProject_Belgium/Conventions/Slowroads>) requires info that's not visible possible to retrieve in the field.

## Thursday 13/12/2018

Discussion on the vicinal roads continues.  
Neither atlas number, the vicinal_type (sentier vs chemin) can be found without external sources.  
Tim re-links the WMS for the atlas for most provinces, but before editing them into the wiki, Joost plans to check to what extent they are 'within license' to use as a source. Suggestion is made (by himself) to remind him from time to time not to forget about this.

Discussion on the wiki status for the vicinal road tagging, raises issues about communication of such wiki edits, where escada points out ideally issues like that should get picked up either in riot channel or through the mailing list. Timcouwelier adds that ideally, to keep discussion / progress / knowledge / information spread widely, it'd probably be a good idea to created a weekly digest of what's discussed in the riot channel, both for later reference but also to open up the discussions with those not actively reading the channel.

That in mind, timcouwelier creates a framapad to start taking notes for a weekly digest, to be sent to talk-be, and writes up a first prelimary version for this week.

Lionel_giard asks about rendering status - it's still down, and there seem to be more issues with the Amsterdam tileserver.

Juminet announces an OpenStreetMap Arlon meetup (<https://www.meetup.com/nl-NL/OpenStreetMap-Belgium/events/257183572/>) and informs about adding it to the osm-be calendar and maptime, or to be told how to do it. It appears creating a PR (pull request) here gets the job done: <https://github.com/osmbe/website/tree/master/_posts/events>

Joost suggests a revert of changes by this user: <https://www.openstreetmap.org/user/NTSB/> and asks for assistance in doing so. Midgard helps out.

Suggestion is made that - if tileservers remain having issues - osm-be or osm-fr tiles can be used, which in turn raises questions on their update frequency. Jonathan explains that currently the osm-be tiles are updated approximately once a month, but the process (mostly starting/stopping) the rendering server is a manual process. He intends to keep a closer watch in 2019, to shorten update cycles.

Jakka points out there's a new source of incoming 'notes', generated through <http://amenagements-cyclables.fr/fr/contributions/5871>, often low quality. Joost will try to get in touch with the app devs.
As a side question, Tim asks where Jakka tracks notes (through a map or a feed). Jakka responds with his source feed (<http://resultmaps.neis-one.org/osm-notes-country?c=Belgium>)

## Friday 14/12/2018

Tim has contacted the city of Roeselare to point out their google maps 'map page' isn't working, suggesting the use of OSM instead.

The discussion on vicinal roads continues, with some background on them, legal status and such.  Tagging should be tackled on two levels: the 'designation' tag and the tags for the vicinal roads.

For designation, wegspotter proposes this:

*So for designation in Flanders & Brussels, we have basically 3 statutes.*

- `designation=vicinal_road` *(it appears in the atlas or in modifiyng documents)*
- `designation=communal_road_ss` *(it is property of the municipality & it is destinied for public use & it does not appear in the atlas of vicinal roads)*
- `designation=right_of_way_ss` *(it is a public right of way, but does not show up in the atlas of vicinal roads*

*In Wallonia, you only have one category `designation=communal_road` (without the ss, since the Flemish/Brussels situation is stricter*

By extension, for the vicinal roads we'd come to this: (based on an example picture by escada)

- `name = Speecaertweg`
- `vicinal_ref = Voetweg 44` (yes with the Voetweg --> because we also add N/A/E)
- `official_vicinal_ref = SMB_44_1` (usually the ref that can only be found in documents, gets 'official', there is already an official_name and official_ref that have the same purpose).
- `designation = vicinal` (Flanders) or `designation = communal` (Wallonia).

Plan of action is for wegspotter to make the required wiki edits for the vicinal roads tagging scheme, communicatie / discuss through riot/forum/talk-be mailing and then start applying it. As a second stage, an attempt can be made to formalise the `designation = *` tagging on a wider level, but to not let that hold back the (smaller) argument on how we tag vicinal roads in belgium. Escada refers to his imagery available for demo images to implement in the wiki, pietervdvn explains how to use the images in wiki edits.

Related to the argument, Wegspotter also shared a document on slow roads / vicinal roads and their (legal) statuses.

Pietervdvn informs he's hosting a session with Westtoer (provincial tourism agency for West-Flanders), and asks if any topics in specific should be stressed towards this target group. Tim points out that 'ensuring the source data they proces is within license for using for OSM'.

Some discussion is raised on 'duplicate tagging', more specifically 'manually adding tags for something that is implicitly a consequence of other tags'. Glen refers to this page: (<https://wiki.openstreetmap.org/wiki/OSM_tags_for_routing/Access-Restrictions#Belgium>) and points out only that given the rules have some implicit consequences, you should only map the exceptions through explicit tagging.

Wegspotter asks if 'tracktype' can also be applied to paths. It's countered tracktype should be considered strictly for use on 'tracks'.

Tim asks about tagging suggestions for an indoor building for sports.
Doudou suggests `leisure = sports_centre`, escada suggests `building = sports_hall` (as the latter implies more directly to the building rather then the broader site)

Some tracing back to earlier discussions on street names happens:

- Joost received feedback on the spelling over Breeërweg  (which is in GRB as Breeerweg). They agree it's technically incorrect, but that is like that officially and the municipality sticks to it, so they follow that version.
- Reference is made to the equally (technically incorrect) spelling for street names in Vilvoorde, which in GRB have a different format then what ground truth (street signs) show.

Suggestion is for those cases to add a `note="the name is not the official name but we chose to following street names as used on traffic signs, not the official notation"` . Note: as this point that is merely a suggestion.

## Saturday 15/12/2018

Escada picks up on a question from Joost the night before:  
adding `access=no` to a `highway=cycleway` that has `bicylce=yes`: that seems unwanted, no?  
His reply refers to <https://wiki.openstreetmap.org/wiki/OSM_tags_for_routing/Access-Restrictions#Belgium> and states that mostly the difference you can have, tends to be in the nature of mopeds being 'permissive' or not.  
Jakka adds to it by suggestion to stick to moped_a, moped_b and moped_p as keys rather then their capitalized versions. Normally the use of capital letters is restricted to where names require them.

Wegspotter refers to having updated this page:  
<https://wiki.openstreetmap.org/w/index.php?title=WikiProject_Belgium/Conventions/Slowroads&wteswitched=1#Trage_wegen_Inventory> and suggest proofreading / input.  
As a side point, rendering of tracks based on access types gets discussed. Escada adds that to this day, the default rendering is mostly car-oriënted, but that the location to make suggestions is here: <https://github.com/gravitystorm/openstreetmap-carto/issues> . He also links to two related issues.

Joost announces having been elected into the OSMF board, with a round of congratulations all around to celebrate the news. Some discussion about the voting (and the nature of the voting system used here, and other systems in other contexts) follows.

Ubipo asks for help with turn lane relations and the JOSM plugin for it. Midgard replies it's not common practice in Belgium to use them, as we go for `turn:lanes` tagging. Given ubipo was mostly trying to fix the broken relation, and the suggested tagging is in place, the relation gets removed.

## Sunday 16/12/2018

Jakka asks about ta default mail template to point out missing attribution in webpages, given it's lacking here: <https://vrijeparking.be/vindparking> . s8evq points here: <https://wiki.openstreetmap.org/wiki/User:Joost_schouppe/Coprightbrieven#Gouden_Gids> , and Jakka sent the e-mail.

Joost asks about these marker stones he found in Hallerbos ( <https://photos.app.goo.gl/eHuqsztJJoSg1GMh9> ), which he assumes to be old border marker stones. No input is given beyond 'that's what we would get as well'

Escada points out he's having issues with user BHiko's work. It looks like it's a (manual) import of data for networks found through knooppuntnet, and in the proces deleting/replacing network data known to be correct. The user seems however difficult to reach, so if anyone has a somewhat direct line to the person, please let us know. Requesting a block through DWG is at this point an option to consider.
