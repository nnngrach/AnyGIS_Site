---
layout: default
---

| [AnyGIS][01] | [How it works?][02] | [RusOutdoor Maps][03] | [Download][04] | [API][05] |


[01]: https://anygis.ru/index_en
[02]: https://anygis.ru/Web/Html/Description_en
[03]: https://anygis.ru/Web/Html/RusOutdoor_en
[04]: https://anygis.ru/Web/Html/DownloadPage_en
[05]: https://anygis.ru/Web/Html/Api_en
[07]: https://anygis.ru/Web/Html/Vektor_and_raster_en




# Maps for Desktop and Web editors

[Changelog][00]

[00]: https://anygis.ru/Web/Html/Changelog_en

![](https://anygis.ru/Web/Img/4mapsDesktop.png)

There are numerous computer programs that allow you to add additional sources of [raster][01] online maps. For example, QGIS or JOSM. Also, some map viewing sites allow you to change the background layer. For example, [Nakarte][02] or [BRouter][03].

However, there are too many such programs (and their configuration file formats) to generate them automatically. In addition, some programs allow you to add new layers only manually, through the application's graphical interface.

So in this section, I just provided a list of prepared URL templates. You can just copy and paste them into the app or website you use. And this way you can add more maps to your app.

[Download maps configurations][11]

[01]: https://anygis.ru/Web/Html/Vektor_and_raster_en
[02]: https://nakarte.me
[03]: http://brouter.de/

[11]: https://anygis.ru/Web/Html/Download/Desktop_Full_en



### How to install

As I wrote above, the interfaces of the programs are very different. Therefore, there will be no universal instruction here. But, most likely, the process will look something like this:

* Find a button with a name like "Add online map" or "Add TMS layer"
* After that, the menu window should open. Enter the name of the map, its URL template, and the minimum and maximum zoom levels.
* Click the "Save" button, after which the new map should appear in the list of available layers.



### Which link to choose? 

The parameters list of many maps contains two types of links: 

* [URL direct] - This is a direct link to download the to the map server. This does not contain unnecessary elements and is therefore the fastest option. If the program you are using is able to work with the stubs ({x} {y} {z}) that are used in this link, then you should select it.

* [URL via AnyGIS proxy] - This is a link to an intermediary help server. If your program does not support some stubs ( {q} {-y} {bbox} ), then use this link. Adding this proxying element will slow down the speed a bit, but it will allow you to connect some hard-to-reach maps.


> Note: Some applications may use something else instead of the usual {z} {x} {y} stubs. For example, {$z} {$x} {$y}  or  {0} {1} {2}.



### Preview option

This site has some semblance of a preview function that is implemented using the Nakarte site. To use this feature, simply open the map list and click on the eye icon to the left of the map name. This will open the Nakarte website where the map you selected will be automatically loaded as the background.

![](https://anygis.ru/Web/Img/desktop_eye_icon.png)



### What about JOSM?

If you want to edit OSM, you should only use such map sources with a license that allows you to use the map to edit OSM. Unfortunately, the list of allowed and prohibited cards changes periodically. So I don't keep track of it. 

The easiest way is to use only those layers that are added to OSM editing applications. However, if you still want to add an additional layer from my collection to JOSM or ID, I recommend that you first consult with more experienced members of the OSM community. For example, you can do this using [Telegram chat of OSM][21].

The link for connecting a new layer to JOSM looks like the one shown below. The numbers 3 and 16 are values from the MinZoom and MaxZoom fields.

> tms[3,16]:https://anygis.ru/api/v1/Tracks_Strava_All/{x}/{y}/{z}


[21]: https://t.me/OpenStreetMapOrg


---

That's all. If you have any suggestions what other sources of maps should be added to the collection (and what to remove), then send me an e-mail. It is desirable to attach a link to the page with the map of interest to the letter. And, of course, report bugs and inaccuracies on the site.


<p align="center">
<a href="mailto:anygis@bk.ru">anygis@bk.ru</a> 
</p>

