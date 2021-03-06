---
layout: default
---

| [Main page][01] | [Articles][02] | [Download maps][03] | [Donate][04] |


[01]: /index_en
[02]: /Web/Html/Articles_en
[03]: /Web/Html/DownloadPage_en
[04]: https://www.donationalerts.com/r/nnngrach




# RusOutdoor maps

***Universal map for hiking and mountain tourism in Russia and neighboring countries***

*last update: 1.09.19*

![](/Web/Img/nnngrach_zagedan.jpg)

Despite the fact that I have already written that there is no ideal and universal map and can not be, I still tried to do it. As a model, I chose a map from the site [Matshruty.ru][1] - when changing the scale it changing the displayed map.

This idea seemed to me quite convenient, because here to choose another map you just need to change the scale: just one click on the `"+"` or` -'`. At that time, as usual you had to press `Menu -> map Selection -> Scroll to desired -> Click on the map`. Sometimes even on the button `"back"` then press.  That is, 3-4 clicks each time you need to change the displayed map. And in some cases the maps have to be changed very often and it is frankly tiring.

So I decided to develop this idea and add the missing layers in my opinion. I note that in this collection the priority was given to raster maps. In my opinion, for many regions they are still more detailed than OSM-based maps. Now let's see some of the layers consists of RusOutdoor Maps.



***

### Layer 1 - Countries

Zoom: from 0 to 9

Google Terrain

This group of layers should be used to select the desired continent, country, and region of interest in this country. For convenience, the map is marked relief, so find the mountain areas will be relatively easy.

![](/Web/Img/google_terrain.png)


***


### Layer 2 - Cities and highways

Zoom: 10 - 11

OSM Sputnik.ru

This and the next layer should be used to find the region of interest, focusing on city names and highway lines. Plus maps from the site Sputnik that it loads quickly and that it displays the terrain. Minus - not the most visual drawing of roads.

![](/Web/Img/sputnik_ru.png)



***

The next three layers are the ones for which this set was created - raster maps. Fortunately, quite enough of all three zoom levels maps are larger 12th unsuitable for Hiking, and maps 14-15 more usually simply do not exist.

These maps should be used for forest and mountain areas. Of the advantages - they were made by professional cartographers. They contain a lot of information that there are no other maps: forest glades, wetlands, streams, springs, mountain trails and more. Of the minuses - many of these cards are outdated. Some - quite critical, some - not yet.

It is worth noting that there are too many raster maps and, therefore, on these layers, the function of automatic search for the most suitable map for the area is used.

First of all, the program checks whether there are local raster maps for this area? For example Slazav maps for mountain areas. The list contains almost all the cards from the SAS.planet programm from the section "Hiking".

In the second place (if local maps were not found), topographic maps with a wider coverage area, but a slightly lower level of detail will be loaded. Namely, the modern Russian topographic map GGC (made in 2000s).

<noindex>In the third place, if the card GHZ not found, load the Genshtab (Soviet military) topographic map (drawn up in the 1980s). These maps are the most outdated. Especially, near settlements, and many marked on them forest trails could have time to grow. </noindex>

And last of all, if there are no maps of the General staff for this territory, a map based on OSM is loaded. Namely - Thunderforest Outdoors.




### Layer 4 - Raster topo maps

Zoom: 12

<noindex>Maps with local coverage, Genshtab 1km, Genshtab 2km, OSM Outdoors </noindex>

![](/Web/Img/gtb.png)



### Layer 5 - Raster topo maps

Zoom: 13

<noindex>Maps with local coverage, GGC 1km, Genshtab 500m </noindex>

![](/Web/Img/kavkaz_1000.png)



### Layer 6 - Raster topo maps

Zoom: 14

Maps with local coverage, GGC 500m, OSM Outdoors

![](/Web/Img/ggc.png)


***

About Thunderforest Outdoors

Thunderforest Outdoors is OSM-based map. There is quite a clear drawing of the terrain and well-marked lines of trails.

![](/Web/Img/osm_outdoors.png)

***

### Layer 7 - Vector OSM-based maps

Zoom: 15

Chepeck OSM 

OSM maps are public digital maps that cover the entire planet. The information here is the most up-to-date. Suitable not only for the forest, but also for the city. In addition to natural sites and trails, this map can be marked by public transport and railway stations, as well as shops and some attractions.

Of the minuses, it is worth noting that this is a public map it can be changed by anyone. Including not competent enough . It is also worth noting that remote areas that are visited by few people can be drawn in insufficient detail.

For this layer I chose map Chepetsk.net. This is cycle map with hight contrast level to make it easier to see the map on the phone screen in the bright sun. Also here POI ponits drawings from 15 zoom level. This is very usefull with planning. Of the minuses - it does not display the terrain.

![](/Web/Img/chepeck.png)



### Layer 8 - Vector OSM-based maps

Zoom: 16

OpenStreetMaps Mapnik

This is the basic version of OSM maps. It has the same pros and cons as all OSM maps. In my opinion, this version is the most versatile and has the largest number of POI icons and signed objects. Of the minuses - it does not display the terrain.


![](/Web/Img/mapnik.png)

***

At smaller zoom levels, OSM maps become less suitable for the countryside. Often they show the entire screen of the smartphone solid white (field) or solid green (forest). The only type of map that shows anything interesting at this close - up is satellite imagery.

And to add more useful information to the map on top of these images, I added a Wikimapia layer. This is another public map where users mark the contours of interesting objects. Here you can find springs, places for camping, gazebos, attractions (large and not), abandoned and dilapidated objects, the remains of fortifications of WW2 and other objects that users of the site found interesting. Note that the labels on some objects appear only at a sufficiently strong approximation. 






### Layer 9 - Reference information

Zoom: 17

OpenStreetMaps Mapnik

Wikimapia layer

![](/Web/Img/wiki_mapnik.png)




### Layer 10 - Reference information

Zoom: 18

Google Satellite

Wikimapia layer

![](/Web/Img/wiki_google.png)




### Layer 11 - Reference information

Zoom: from 19 to 21

Yandex Satellite

Wikimapia layer

![](/Web/Img/wiki_ya.png)



***

That's it. I think now it will be easier for you to understand how to work with this map.



[1]: https://www.marshruty.ru/Maps/Maps.aspx?x=36.96990966796878&y=56.787274943962025&z=8&t=4

[2]: https://github.com/nnngrach/AnyGIS_maps/tree/master/Locus_online_maps

[3]: https://github.com/nnngrach/AnyGIS_maps/tree/master/Galileo_online_maps

[4]: https://shuriktravel.ru/maps/


