---
title: "Weekly Riot chat digest : 24/12/2018 - 31/12/2018"
featured: riot.png
layout: post
author: Tim Couwelier
lang: en
---

Lots of conversation happens in our chat room. The volume is so high, it's hard to keep up. And it's easy to forget about issues that were raised. So Tim started making this weekly summary. Have a look at our [channels page]({{ site.baseurl }}{% link en/contact.html %}) for more info about joining the chat or other ways to reach us.

See the original post and the following discussion here : <https://forum.openstreetmap.org/viewtopic.php?id=64953>

---

## Monday 24/12/2018

Monday's chat is largely dominated by Christmas wishes.

bxl-forever asks about how to map a staircase with a 'wheelchair-lift' mounted to the side.  
eventual consensus is to use two ways: one for `highway = stairs` and one for `highway = elevator` + `elevator:type = stairs` + `wheelchair  =limited`

---

## Tuesday 25/12/2018

s8evq asks about how to tag a shop for 'water softeners'. People agree that `shop = trade` doesn't quite fit perfectly, but there's no designated tag for it as of present. Most plumbing stores appear to be tagged as `shop = doityourself`, but that's not a good match either.

---

## Wednesday 26/12/2018

s8evq asks about the convention for mapping  speed limits around schools.  
Essentially there's two types: 'fixed' and 'variable' ones. The latter are only active when the signs are lit up.

For the fixed ones, `maxspeed = 30`, and possibly the maxspeed type set to school zones (note by the editor: only when the F4a sign is accompanied by the A23 sign is it a 'school zone')  
For the dynamic ones: these are ALWAYS school zones, as this is the only type of zone 30 that is legally allowed to be variable.  
Tim suggests tagging it with `maxspeed = signals`. Jakka suggests using `maxspeed:variable = school zone` (which is what s8evq went with eventually)  
In other countries, a conditional maxspeed would work, but in belgium there is no set hours during which the zones are considered active.

Besides that, when mapping the actual sign itself, it's a node, not located on the way itself, with `traffic_sign = *` and `direction = *`  
(the signs are called F4a for entering, F4b for leaving a such zone)

Jakka asks about leaving a note in the changesets for the municipality mergers, to avoid name changes being overruled by people comparing to the GRB-background layer, which may not be updated as fast. Midgard suggests preparing everything over the course of dec 31st, so everything goes through in time to be included in the january versions. Midgard explains he has a proper workflow in mind to change everything to JOSM, rather then working through a 'search and replace' version via Level0. The list AIV has, as of 10 dec 2018, should be final, so that's being used as baseline. There's no known changes of postal codes, although Oudsbergen appears to have stated some house numbers will have to be changed.

bxl-forever asks about tagging a 'birth-registration-office' within a hospital, and how to tag it.  
`office=governement` + `government=register_office` is deemed correct, there's however mixed opinions about using the municipality name as name for the node, it's suggested to put that in the operator field.

---

## Thursday 27/12/2018

Joost posts a map he spotted in Bilbao, using OSM. It shows markers with all the places where you can learn the Basque language.

Polyglot jumps in, based on last weeks digest, that he actually is looking into keeping public transport data up to date again, but that he's working on a tool to make it easier for others to help out / join in. For lack of sufficient understanding of the technical aspects by the editor, this is his explanation on the matter:

Polyglot wrote:

> *Now I shifted to using a Google's Colab Notebook to generate a Google Sheet: <https://docs.google.com/spreadsheets/d/1PGgEqobO90Mf9NsJHO1-JD-Npte1fYztK30HO5lRDI8/edit?usp=sharing>*
>
> *The code in the Notebook needs credentials to access the FTP server of De Lijn, which it finds in my Google Drive*
>
> *After that, I have another script that downloads that spreadsheet and loads into Pandas DataFrames.*
>
> - <https://github.com/osmbe/public_transport/blob/master/scripts/De%20Lijn.py>
> - <https://github.com/osmbe/public_transport/blob/master/scripts/Agency.py>
> - <https://github.com/osmbe/public_transport/blob/master/scripts/OSM_data_model.py>
>
> *The second script is supposed to be usable by all mappers in mapping public transport in Belgium, but I'm still trying to figure out how exactly that will work, probably another Python Notebook.*
>
> *Where you can enter an identiifier, say 5, after which it will show all possible lines 5 in Flanders or Wallonia. Then you choose a specific line and it starts comparing with the official data.*

Discussion extends about where/how to host it. There may be options through Open Knowledge Belgium for this.

---

## Friday 28/12/2018

Escade informs about moving <http://knooppuntnet.be> (a Q/A site, ran by a belgian OSM'er) to Open Knowledge Belgium aswell.

Joost is asking wiki-formatting help in trying to fix the inconsistencies between multiple language versions of `highway = stop`.  
Doudou answers his question: when you click View Source, you see the wiki syntax “onWay=yes”, which I suppose you need to turn to “=no”.

Doudou informs the chat that the 'phone number not in international format' maproulette challenge has been completed. s8evq, one of the chat members, ranked second in the efforts made for completing this. Midgard pitches in later on, saying he has a query ready with even stricter criteria for the phone numbers ( <https://wiki.openstreetmap.org/wiki/User:M!dgard/Overpass_queries#phone.3D.2A_in_Belgium_with_value_that_isn.27t_a_valid_Belgian_number> ) which flags around 7000 objects in belgium.

A forum question ('check_date vs survey:date') is discussed. Consensus appears to be that survey:date has clearer meaning. Midgard relays doudou's answer back to the forum topic (<https://forum.openstreetmap.org/viewtopic.php?pid=731423#p731423> )

Midgard asks about dialing numbers like '1733' from abroad, to figure out how to correctly tag them. Doudou points out wiki has an example like `phone:FR:mobile:SFR=3000`. He also copies this passage from the wiki:

> *groupings are just kept by convenience and according to local usages in phone books or as shown in amenities (these groupings may vary for mnemonic reasons only, there's no requirement to suppress these group separators even if they are ignored when dialing).*

---

## Saturday 29/12/2018

Doudou continues the chat on the 4-digit numbers, wondering if he should use `phone:BE=1733`.  
He links this page: <https://www.ibpt.be/en/consumers/telephone/numbering/short-numbers> , but that lacks info on the 17xx range.

Jakka asks about a ton of notes tagging all 'Record bank' offices, stating that it merged with ING.  
Midgard asks for caution: most of the officies were independent owners, and not all of them intend to move along to ING, some will fall back to just insurance work and no longer offer banking services.

---

## Sunday 30/12/2018

Sunday was quiet. Like, completely silent.
