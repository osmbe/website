---
title: "Weekly Riot chat digest : 17/12/2018 - 23/12/2018"
layout: post
author: Tim Couwelier
lang: en
---

Lots of conversation happens in our chat room. The volume is so high, it's hard to keep up. And it's easy to forget about issues that were raised. So Tim started making this weekly summary. Have a look at our [channels page]({{ site.baseurl }}{% link contact.html %}) for more info about joining the chat or other ways to reach us.

See the original post and the following discussion here : <https://forum.openstreetmap.org/viewtopic.php?id=64897>

---

## Monday 17/12/2018

In addition to the issues raised about BHiko's work, possible ways to get in touch with him are looked at.

Jakka asks about the use of `highway = stop` in Flanders, in particular as that rules out the option to have something describing the road as `highway = residential` or similar  Key difference appears to be that STOP-signs are mapped on NODES, not WAYS. There's a few odd differences between the seperate language versions of the page. Jakka asks for wiki-editing help, Joost steps in.

Joost has figured out (through chat with a local expert) that the marker stones he found in Hallerbos are old (spanish) parcel marker stones.

Tim links to the first forum-post with the OSM-be Weekly Riot Digest, and sends it to the talk-be mailing list. Confirmation is given it went through properly. Within the channel, the initiative is met with great enthousiasm, and suggestions on how to optimally manage the workflow / have the option to open up the process to others willing to contribute, or if given a fixed link/name format to have it queryable through bebot, or to link it from the news sections on openstreetmap.be
Options will be taken into consideration, as it's still early days.

Escada informs the channel that OSM Bussiness is now running on a 'production server' ( https://osmybiz.osm.ch/ ).
Juminet is pleased with this (but feels an 'opening hours generator' would be a nice extra feature).
Glen regrets it running of the osm.org tiles, where tile servers are still struggling.
Joost is enthousiastic, but regrets it not being able to directly edit data.

Tim asks about the changed layout of the 'WhoDidIt'- RSS-feed, which used to be human readable in brower but now seems to show only in code form. Lionel_giard refers to using Riot as an RSS-reader for the feed.
Quick summary of how to do it:

- Open a new room
- At the top, find the '9 blocks' icon for 'manage integrations'.
- Find 'RSS bot', and feed it the RSS link generated through  https://simon04.dev.openstreetmap.org/whodidit/ (with the 'get RSS link')
    
Once changesets get added in watched region, the bot will link the changesets in your newly created room.

Pietervdvn reports back on his day at Westtoer, explaining how to do certain edits. He also points out there's two newcomers from those in the riot channel (gptm and peggya).

Joost reports he's received feedback from the Leaflet development guys (Vladimir), stating they'd be willing to include more default attribution in code examples. He will prepare a PR.

---

## Tuesday 18/12/2018

doudou pointed out that while the riot digest is helpful, he wonders if it wouldn't be better to extend certain discussions to the mailinglist a bit earlier on in the proces. Tim counters that ideally 'seeds' get planted in the chat, but that based on early reaction it will be relevant/required to pick out these 'seeds' early enough for those cases. Mailinglist and chat aren't 100% same people, and there's certain skills, input angles, talents, .. represented in both that ideally find a coöperation. Ideally the people present in both environments help arbitrate those choices, not unlike how wegspotter handled the slow-roads-wiki item.

s8evq's question from monday evening ('how to map uitgezonderd plaatselijk verkeer / exception circulation locale') gets picked up.
His guess of using `acces = destination` is deemed correct.
Doudou links <https://wiki.openstreetmap.org/w/index.php?title=Tag:access%3Ddestination&redirect=no> for the acces tag, lionel_giard expands to <https://wiki.openstreetmap.org/wiki/Conditional_restrictions> for options about the conditional parts.

The BHiko-situation continues, with arguments in favor of a (temporary) block through DWG. However, during the day, BHiko replies to one of the messages, and pop into the channel, willing to see what the issues are about and how to proceed from here, and what the optimal channel is to discuss this (as the 'mixed topic' chat feels confusing to him).
Joost later adds that unfortunately JOSM does not have a function like iD does to link to community channels.
BHiko took initiative to start a forum thread to have the discussion in, and informs how others are notified of changesets comments etc.
In the evening, part of the discussion continues in Riot chat: mainly raising concerns about copying government data which is assumed to be quality without verifying it's quality in the field. usually, not much can go wrong with network nodes alone, but the key concern is about the trajectories in between. Ideally the network is used as basis for survey and the network later added after survey. However, wegspotter points out that there is always the risk of alterations in those networks, both in the dataset as in the field, making it a bit like shooting on a moving target.
There's however a slight difference in opinion: do we go for 'we only add if we're certain, no use in adding possibly wrong data' versus 'there's no better source currently, why don't we add it so possible mistakes get spotted through actual use of the data (in part through OSM)'. In essence it boils down to: 'is it inherently wrong to armchair map these, as the availability may end up help spotting mistakes and thus eventually improve upon the data'?

Tim makes the suggestion to include a 'reminder' function in bebot.
Later on, Glen appears to have fixed that already:
Command: `BEBOT remind me (on <date>|in <time>) to <action> - Set a reminder in <time> to do an <action>`
Detail on parameters: `<time>` is in the format 1 day, 2 hours, 5 minutes etc. Time segments are optional, as are commas
Proof of functionality is given by setting a reminder to slap Joost with a salmon.

s8evq asks how to map 'future' changes (i.e. two mailboxes going out of use in march '19). There's a tagging option for end date, but for such small scale matters in the relatively near future , the use of notes is probably the easiest way to go.
Based on this 'future changes' discussion, Joost asks if anyone can pick up <https://github.com/osmbe/community_planning/issues/2> , due to not being available himself when the changes are to go live. So far no takers have stepped up.

lionel_giard asks about the color of farmland in the OSM-be tiles. Jonathan replies he didn't change it by himself, but that his version may be out of sync with the last version of the default OSM-carto style, causing the dffierence.

Pietervdvn asks (on behalf of the 'Westtoer' folks) if there's specific tagging to be applied to their 'groene assen' ('green axis'), cycling ways, most often on old railway track locations. Midgard points out `railway=razed/dismantled/historic` could be added, Tim suggests attention to the surrounding landuses being mapped in detail for the visual effect + using the given (and publicly used) names for them (Groene 62, Trimaarzate, Stroroute, ...)

Midgard picks up the questions about the WhoDidIt -RSS feed and points out that it's indeed Firefox no longer acting as RSS-reader by default. There's however add-ons to cover for the functionality. (Tim later tested 'Feedbro', which does allow to acces the achavi-links, something the solution discussed on monday does not).
For reference, it's possible to add RSS feeds for posts on belgian forum (<https://forum.openstreetmap.org/extern.php?action=feed&type=rss&fid=29>), or for the appearance of new notes within a certain BBox (<https://www.openstreetmap.org/api/0.6/notes/feed?bbox=2.975237,50.868403,3.330919,51.042282>, replace with lon/lat values as desired. Easiest way is to copy them from the WhoDidIt feed-url)

(Note by the editor: the above was restructured by theme, and is therefor not entirely chronological)

---

## Wednesday 19/12/2018

Given no response about the municipality merger, the item is picked back up, with some discussion about what exactly needs to be done.

s8evq links to a page to visualize OSM speed limits (<http://mijndev.openstreetmap.nl/~peewee32/maxspeed/Maxspeed.htm>).
It is however not a clear 1:1 match with belgian speed limits (at least not in one overview). Tim refers to an earlier overpass query, but that if he wants a matching page with speed limits without having to run the query over and over, mapcontrib may be of help. A quick demo was set up: <https://www.mapcontrib.xyz/t/6c6b82-MapContrib>
Along with the visualisation, s8evq asks about mapping the actual numeric value for speed: would it be best to map the speedlimit-type, or the numerical value? Consensus is that while mapping the speedlimit-type appears to be the noble thing, most data consumers probably only rely on the numerical value...  earlier arguments have shown that consistenly mapping the speedlimit-type is not a failsafe method incase government changes things.

Lionel_giard asks about mapping 'stars' or 'épis', rating schemes for hotels / gites / ...  There's no clear wiki page on the matter, but references are made to similar pages. Most chatters tend to agree that such a rating, if visually displayed, is a perfectly mappable thing. However, tagging should probably refer to the rating agency/system, ideally also to the date of the last known rating.

Juminet links to an article he wrote about maps he made for OSM in the Ardennes region: <https://blog.champs-libres.coop/carto/2018/12/18/openardennemap.html> . The article receives some praise, in part about the method used to determine orientation for markers, and for the special attention to christmas trees.

---

## Thursday 20/12/2018

Tim asks if others also feel the rendering for `highway := construction` appears disproportionally 'heavy' compared to other rendered road widths. Most agree, but research show there's already an issue opened on the gravitystorm osmcarto github page.
Discussion continues with the question of whether or not highway = construction is applied for a redo of existing roads, rather then just new roads. While a selective `access = no` works best, Jakka choses to also tag as `highway = construction` for visual support. The `access = no` does have a certain visual impact, but that's limited. Easier to point out it needs touching up after completion though.

Tim asks about how to connect cycleways on a T-intersection with a onewaystreet (with dual way cyclists). His suggestion (dual way cycleway between the road crossing node and the cycleway on the other side is deemed correct.
Based on the screenshot of tagging for the road it connects to, the discussion about using small or capital letters in tags like 'moped_a' or 'moped_A' is revived, and extended to forum. General consensus appears to be to go with lower case letters.

Jonathan reports the pull request he and Joost made for attribution through leaflet was accepted.

Seppe asks about mapping tactile paving at a crossing. Lines leading up to it can be mapped, but most commonly the presence is tagged on the node.  ( <https://taginfo.openstreetmap.org/keys/?key=tactile_paving#overview> ) This is a bit counter-intuitive, as most commonly the actual crossing is the part without the tactile paving.

---

## Friday 21/12/2018

Seppe reports attribution was fixed on this page: <https://trainmap.belgiantrain.be/>
Some side discussion about it lacking accuracy due to non real-time tracking follows.

Joost reports OsMyBiz actually can edit OSM, contrary to earlier conclusions: <https://wiki.openstreetmap.org/wiki/Special:MobileDiff/1725647>

Jakka and midgard have a discussion on line 6 in the Ghent bus network, where validation appears to cause issues. While De Lijn does try to keep it's data actualised, there's no clear focus on this in OSM. Polyglot used to focus on this, but appears to have shifted interest.

Jakka informs about suggestion a new mapper to avoid mapping seperate sidewalks everywhere. General consensus is that it indeed requires a lot of care (for routing etc), and is often best not to get into. (note by editor: consider this a form of micromapping that's lower priority while there's still alot else left to do)

Pietervdvn supplies a link for testing the routeplanner he's working on. Some feedback is given bij Tim and Midgard. As Pieter stated 'it's still early testing'.

Seppe asks about a dataset in which you can find who maintains a road ('wegbeheerder'). There's no official dataset, but you can track which are maintained by AWV through one of the GeoPunt layers (transport over land / amenities of numbered roads)
Joost suggested wegenregister. Seppe checked both wegenregister and LARA, both to no avail.

---

## Saturday 22/12/2018

Seppe and midgard have an exchange of ideas how routing can be done / improved for emergency services, based on an example by Seppe where there turns out to be an unneeded detour. Essentially it revolves about where precisely the destination marker is set.

A note about the private nature of a parking space in Brussels is referenced by Escada. Jonathan had a look at the area and updated it.

Joost posts a picture from his airplane, a Boeing from Air Europa. It has an in-flight information screen based on OSM-data, attribution included.

---

## Sunday 23/12/2018

Midgard mentions there's a new icon for hospitals in the default OSM-carto

Glenn adds to the earlier routing discussion. Given emergency services can 'bend the rules' a bit on traffic, it may be an option to set the building as the destination, rather then a point on the road (as in one-way-streets that forces entering it from the correct side, using a destination point besides it may be a work-around). Later on, the source of the routing is mentioned ( https://www.frontforce.be/news/hulpverl … emergency/ ). Apparantly, they also leave notes about what needs fixing for it to work properly. (note: it uses technology by xivk - Ben Abelshausen)

Koninklijke asks about mapping a 'zone 50' (with zonal signs), and how to tag the source for the speed limit. To date, there is no reason to differentiate between a 'belgian' or 'flemish' version, clearing up the confusion.
