---
layout: default
---

| [Main page][01] | [Articles][02] | [Download maps][03] | [Donate][04] |


[01]: /index_en
[02]: /Web/Html/Articles_en
[03]: /Web/Html/DownloadPage_en
[04]: https://www.donationalerts.com/r/nnngrach




# Online-maps sources for OsmAnd

[Changelog][0]

[0]: /Web/Html/Changelog_en

![](/Web/Img/4mapsOsmand.png)



It's no secret that the basic set of cards with which the application is supplied is often not enough. However, it is possible to add additional maps yourself. Here you will find two sets of [raster][07] online-maps:



[Download all maps (sqlitedb)][20]

[Download all maps (metainfo)][21]

[Download maps by one file (sqlitedb)][13]

[Download maps by one file (metainfo)][14]



[07]: /Web/Html/Vektor_and_raster_en
[20]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Sqlitedb/Zip/Maps_full_en.zip
[21]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Metainfo/Zip/Maps_full_en.zip
[13]: /Web/Html/Download_en?app=OsmandSqlite
[14]: /Web/Html/Download_en?app=OsmandMeta





### How to install maps (Android)

Maps are presented in two formats. Theoretically, the maps are in the `sqlitedb` format should be loaded faster. On the other hand, you can easily delete the cache for `metainfo` maps. (Directly from the map folder). Anyway, you can download anything. But the Strava maps I recommend to download in the `metainfo` format.

* If you have downloaded the zip archive you need to unpack it first.
* If you have downloaded map file in `.sqlitedb` format, then copy this file to the folder on smatphone  `Android\data\net.osmand\files\tiles` 
* If you want to download map in `.metainfo` format, then you'll get zip archive. Unpack it. Copy unpacked folder to the `Android\data\net.osmand\files\tiles` 
* If for some reason you do not have such a folder (for example, Osmand is installed on the SD-card), then you need to know in which directory it is located. To do this, launch the application, open `Settings`, select `Basic settings` and scroll down to `Storage Directory`. Here you will find the address. Card you want to copy to the subfolder `tiles`

![](/Web/Img/Osmand_patch.png)

* New maps should appear in the application in the tabs `map Source`, `Coverage maps`, `substrate Map`
* If you need to remove any map from this list, you need to remove it from the storage of your phone using the File Manager app.

![](/Web/Img/Osmand_maplist.png)


### How to install maps (IOS)

* Download map in sqlitedb format.

<p align="center">
<img src="/Web/Img/Osmand_ios_1.jpg" width="200"/>
</p>

* Find the downloaded file in the browser downloads list. 

<p align="center">
<img src="/Web/Img/Osmand_ios_2.jpg" width="200"/>
</p>

* Open the file using Osmand.

<p align="center">
<img src="/Web/Img/Osmand_ios_3.jpg" width="200"/>
</p>

<p align="center">
<img src="/Web/Img/Osmand_ios_4.jpg" width="200"/>
</p>

* The map should appear in the menu Map -> Overlay.

<p align="center">
<img src="/Web/Img/Osmand_ios_5.jpg" width="200"/>
</p>

<p align="center">
<img src="/Web/Img/Osmand_ios_6.jpg" width="200"/>
</p>

<p align="center">
<img src="/Web/Img/Osmand_ios_7.jpg" width="200"/>
</p>


* If you need to delete the installed maps, you can do it from the menu Map & Resources -> Installed -> Map Creator.

<p align="center">
<img src="/Web/Img/Osmand_ios_8.jpg" width="200"/>
</p>

> Attention! At the moment, working with additional online maps is only available in the Osmand version for beta testing.




### How to set up the traffic layer?

I note that among the cards in this collection there are several dynamic. I mean all the maps with a layer of corrent traffic sitiation. There should also include a layer with moving ships Openseamap. It is worth noting that the application is not designed for such cards, so in order to be able to work with them will need to do additional settings each time.

Suppose you already have a dynamic map on your screen. For example, Google Traffic. Some time has passed and you want to know whether the situation on the roads has changed. To do this, you need to do the following:

* Make sure that the updated map is not displayed on the screen. If the map is selected as the base layer, switch it to another layer. If it is selected as a substrate, simply turn off the display of the substrate. 
* Turn off OsmAnd to reset the cache.
* Open OsmAnd.
* Turn on the card you want to update again.

After these actions, the map will be reloaded. And if the condition of traffic jams has changed, you will see it.

---


That's all. If you have any suggestions what other sources of maps should be added to the collection (and what to remove), then send me an e-mail. It is desirable to attach a link to the page with the map of interest to the letter. And, of course, report bugs and inaccuracies on the site.


<p align="center">
<a href="/Web/Html/Contacts_en">Send message</a> 
</p>

