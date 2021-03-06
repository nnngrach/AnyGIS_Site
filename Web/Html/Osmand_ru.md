---
layout: default
---

| [На главную][01] | [Полезные статьи][02] | [Скачать карты][03] | [Поддержать проект][04] |


[01]: /index
[02]: /Web/Html/Articles_ru
[03]: /Web/Html/DownloadPage_ru
[04]: https://www.donationalerts.com/r/nnngrach



# Карты для OsmAnd

[Список изменений][00]

[00]: /Web/Html/Changelog_ru

![](/Web/Img/4mapsOsmand.png)



Не секрет, что базового комплекта карт, с которым поставляется приложение, часто не хватает. Однако существует возможность добавлять самостоятельно дополнительные карты [разных типов][1]. Представляю вашему вниманию набор [растровых][07] онлайн-карт:


[Скачать весь архив карт (sqlitedb)][20]

[Скачать весь архив карт (metainfo)][21]

[Скачать карты выборочно (sqlitedb)][13]

[Скачать карты выборочно (metainfo)][14]



[07]: /Web/Html/Vektor_and_raster_ru

[0]: https://shuriktravel.ru/maps/

[1]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Sqlitedb/Zip/Maps_short_ru.zip

[2]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Metainfo/Zip/Maps_short_ru.zip

<!-- [3]: /Web/Html/Download/OsmAnd_Maps_(sqlitedb)_Short_ru
[4]: /Web/Html/Download/OsmAnd_Maps_(metainfo)_Short_ru -->
[3]: /Web/Html/Download_ru?shortSet=true&app=OsmandSqlite
[4]: /Web/Html/Download_ru?shortSet=true&app=OsmandMeta







[5]: /Web/Html/RusOutdoor_ru
[6]: https://melda.ru/locus/maps/
[7]: https://4pda.ru/forum/index.php?showtopic=210573&st=3060#entry52768866
[8]: https://ms.galileo-app.com/
[9]: https://custom-map-source.appspot.com/
[10]: https://www.sasgis.org/

[11]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Sqlitedb/Zip/Maps_full_ru.zip

[12]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Metainfo/Zip/Maps_full_ru.zip

<!-- [13]: /Web/Html/Download/OsmAnd_Maps_(sqlitedb)_Full_ru
[14]: /Web/Html/Download/OsmAnd_Maps_(metainfo)_Full_ru -->
[13]: /Web/Html/Download_ru?app=OsmandSqlite
[14]: /Web/Html/Download_ru?app=OsmandMeta

[20]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Sqlitedb/Zip/Maps_full_ru.zip

[21]: https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Metainfo/Zip/Maps_full_ru.zip

[22]: /Web/Html/ForbiddenMaps_ru



---

<div class="nav"><div class="item">
  <input type="checkbox" id="01"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="01">
  Инструкция по установке для Android
  </label></h3>
  <div class="spoiler" markdown="1">

* Выберите, в каком формате хотите скачать карты. Формат sqlitedb, теоретически, должен немного быстрее загружаться. Зато формат metainfo позволяет вручную удалять кэш (прямо из папки с картой). В принципе, можете выбирать что угодно, но карту Strava я рекомендую скачивать именно в формате metainfo. 
* Итак, если вы выбрали sqlitedb, то скачается один файл. Скопируйте его.
* Если же формат metainfo, то скачается zip-архив. Распакуйте его. Внутри будет папка. Скопируйте эту папку. (Не ее содержимое, а саму папку)
* Вставьте скачанный файл (или папку) в следующую директорию на своем смартфоне  `Android\data\net.osmand\files\tiles`
* Если по каким-то причинам у вас нет такой папки (например, Osmand установлен на SD-карту), то нужно узнать, в какой именно директория он находится. Для этого запустите приложение, откройте `Настройки`, выберите пункт `Основные настройки` и промотайте вниз до пункта `Каталог для хранения данных`. Здесь будет указан адрес. Карты нужно копировать в подпапку `tiles`

![](/Web/Img/Osmand_patch.png)

* Новые карты должны появиться в приложении в разделах `Источник карты`, `Карты покрытия`, `Карта подложки`
* После этого можно устанавливать новые карты как в качестве основного слоя, так и в качестве дополнительного.
* Если потребуется убрать какую-либо карту из списка, то нужно удалить её из папки с помощью файлового менеджера.

![](/Web/Img/Osmand_maplist.png)

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="02"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="02">
  Инструкция по установке для  IOS
  </label></h3>
  <div class="spoiler" markdown="1">

* Скачайте карту в формате sqlitedb.

<p align="center">
<img src="/Web/Img/Osmand_ios_1.jpg" width="200"/>
</p>

* Найдите скачанный файл в списке загрузок браузера. 

<p align="center">
<img src="/Web/Img/Osmand_ios_2.jpg" width="200"/>
</p>

* Откройте файл с помощью Osmand.

<p align="center">
<img src="/Web/Img/Osmand_ios_3.jpg" width="200"/>
</p>

<p align="center">
<img src="/Web/Img/Osmand_ios_4.jpg" width="200"/>
</p>

* Карта должна появиться в меню Настройки карты -> Карты покрытия.

<p align="center">
<img src="/Web/Img/Osmand_ios_5.jpg" width="200"/>
</p>

<p align="center">
<img src="/Web/Img/Osmand_ios_6.jpg" width="200"/>
</p>

<p align="center">
<img src="/Web/Img/Osmand_ios_7.jpg" width="200"/>
</p>


* Если вам потребуется удалить установленные карты, то это можно сделать из меню Карты и Ресурсы -> Установлено -> Создать карту

<p align="center">
<img src="/Web/Img/Osmand_ios_8.jpg" width="200"/>
</p>

> Внимание! На текущий момент подключение дополнительных онлайн-карт доступно только в версии Osmand для бета-тестирования.

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="03"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="03">
  Инструкция по работе с дополнительными слоями
  </label></h3>
  <div class="spoiler" markdown="1">

Osmand позволяет показывать и скрывать дополнительные слои, отображая их поверх основной карты. Для этого:

* Откройте меню `Настроить карту`
* Выберите пункт `Карта покрытия`

![](/Web/Img/Osmand_pic_100.png)

* В появившемся списке выберите интересующий вас слой

![](/Web/Img/Osmand_pic_101.png)

* Откроется меню в котором можно настроить прозрачность слоя с помощью горизонтального ползунка. Чтобы скрыть это меню и начать пользоваться картой достаточно кликнуть на любое место карты.

![](/Web/Img/Osmand_pic_102.png)

* Если потребуется скрыть этот дополнительный слой, то достаточно вернуться в меню `Настроить карту` и просто кликнуть на тумблер справа от пункта `Карта покрытия`

![](/Web/Img/Osmand_pic_103.png)

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="04"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="04">
  Инструкция по настройке кнопки Быстрых действий
  </label></h3>
  <div class="spoiler" markdown="1">

Однако существует еще один способ, который многим может показаться более удобным: можно добавить скрытие/отображение дополнительного слоя на кнопку быстрого действия. 

* Откройте меню `Настроить экран`

![](/Web/Img/Osmand_pic_104.png)

* С помощью иконок в верху меню переключитесь на интересующий вас режим отображения. (На картинке выбран пешеходный режим)
* Кликните на тумблер справа от кнопки `Быстрое действие`, чтобы на экране устройства отображалась эта кнопка.
* После этого нажмите на саму надпись `Быстрое действие`, чтобы внести необходимые настройки. 

![](/Web/Img/Osmand_pic_105.png)

* Нажмите на кнопку с синим плюсиком, чтобы добавить новое действие.
* В открывшемся окне выберите `Сменить карту покрытия`

![](/Web/Img/Osmand_pic_106.png)

* Нажмите на кнопку `Добавить карту покрытия`

![](/Web/Img/Osmand_pic_107.png)

* В открывшемся окне выберите карту, которую вы хотите добавить. В моем случае это - Overlay_Strava.
* После этого еще раз нажмите `Добавить карту покрытия`. 
* На этот раз выберите пункт `Нет покрытия`. 

![](/Web/Img/Osmand_pic_107.png)

* В результате, меню должно выглядеть примерно так. Теперь, при каждом новом нажатии на кнопку быстрого действия эти пункты будут сменять друг друга, тем самым то включая, то отключая показ дополнительного слоя.

![](/Web/Img/Osmand_pic_109.png)

* Настало время проверить, как это работает. Выйдите из всех меню, чтобы оказаться на экране с показом карты.
* На экране появится новая кнопка для запуска быстрых действий. Кликните на нее.

![](/Web/Img/Osmand_pic_110.png)

* Откроется меню с только что добавленной нами кнопкой Overlay_Strava. Нажмите на нее, чтобы включить или выключить этот дополнительный слой. Теперь это действительно можно делать довольно быстро.

![](/Web/Img/Osmand_pic_111.png)

> На момент написания статьи эта функция действовала только в Android-версии OsmAnd.

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="05"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="05">
  Инструкция по сохранению карты в кэш
  </label></h3>
  <div class="spoiler" markdown="1">

Если вам нужно просматривать карту без интернета, то ее можно выделить какой-либо участок местности и скачать его в кэш. Замечу, что [растровые][07] онлайн-карты имеют довольно большой объем и могут скачиваться сравнительно долго. Поэтому рекомендую выкачивать только небольшие участки местности: например, не всю Алтайскую область целиком, а только тот участок леса, в который вы планируете посетить. А теперь перейдем к инструкции:

* Откройте Османд и выберите интересующую карту.
* Подгоните масштаб карты, чтобы на экране отображалась та область, которую вы хотите выкачать. Скачается только то, что в данный момент на экране!

![](/Web/Img/Osmand_pic_112.png)

* Нажмите и удерживайте на любое место на экране. Появится всплывающее меню.
* Выберите пункт `Действия`. Затем  `Загрузить карту`.

![](/Web/Img/Osmand_pic_113.png)

* Появится меню с ползунком. Выберите до какого уровня приближения нужно скачивать карту. Индикатор покажет, какой объем, примерно, будет скачанный фрагмент. Нажмите ОК. 

![](/Web/Img/Osmand_pic_114.png)

После этого область на экране будет скачана в кэш выбранной карты и будет доступна без интернета. Кстати, если скачиваемая область имеет сложную форму и плохо укладывается в прямоугольник экрана, то можно выкачивать ее в несколько этапов.

> На момент написания статьи эта функция действовала только в Android-версии OsmAnd.

</div></div></div>



<div class="nav"><div class="item">
  <input type="checkbox" id="06"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="06">
  Инструкция по работе с динамическими картами
  </label></h3>
  <div class="spoiler" markdown="1">

Замечу, что среди карт этой подборки есть несколько динамических. Я имею ввиду все карты с пробками: Яндекс Пробки, Google и Here Traffic. Туда же стоит отнести и слой с движущимися кораблями OpenSeaMaps. Стоит отметить, что приложение не рассчитывалось на подобные карты, так что для того, чтобы с ними можно было работать потребуются каждый раз проделывать дополнительные операции.

Допустим, у вас на экране уже отображается динамическая карта. Например, Яндекс пробки. Прошло некоторое время и вам хочется узнать, не изменилось ли состояние на дорогах. Для этого нужно сделать следующее:

* Нужно сделать так, чтобы обновляемая карта не отображалась на экране. Если карта выбрана в качестве базового слоя, то переключите её на другую. Если она выбрана в качестве подложки, то просто отключите отображение подложки. 
* Выключите OsmAnd, чтобы сбросить кэш.
* Включите OsmaAnd.
* Снова включите карту, которую требовалось обновить. 

После этих действий карта будет загружена заново. И если состояние пробок изменилось, то вы это увидите.

</div></div></div>



<div class="nav"><div class="item">
  <input type="checkbox" id="07"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="07">
  Ссылки
  </label></h3>
  <div class="spoiler" markdown="1">


Напоследок хочу порекомендовать несколько полезных ссылок:

[Подробная инструкция Osmand - Часть 1][15]

[Подробная инструкция Osmand - Часть 2][16]

[Скачать точки горных перевалов Вестра в формате GPX (с сайта Nakarte.me)][19]

[Русскоязычный telegram-чат навигатора Osmand. Можно задавать там вопросы об использовании приложения][18] 

[Русскоязычный форум Osmand на 4PDA и множество полезных файлов для него][17]


[15]: https://www.drive2.ru/l/533880791202005393/

[16]: https://www.drive2.ru/l/533949785556648406/

[17]: http://4pda.ru/forum/index.php?showtopic=181125&st=10780

[18]: https://t.me/ruosmand

[19]: http://anygis.ru/api/v1/westra_gpx/osmand




> Внимание! Для просмотра форума 4PDA нужно на нем зарегистрироваться. Иначе будет показано сообщение "Страница не найдена".

</div></div></div>

---


На этом всё. Если у вас есть предложения, какие еще источники карт стоит добавить в подборку, то пишите мне на электронную почту. Желательно, приложить к письму ссылку на страницу с интересующей картой. Ну и, конечно же, сообщайте об ошибках и неточностях на сайте. 

Если же вы являетесь правообладателем какой-либо из карт, присутствующих в данной подборке и считаете, что эту карту из этой подборки нужно убрать, то пишите мне. Я с готовностью пойду вам навстречу.


<p align="center">
<a href="/Web/Html/Contacts_ru">Отправить сообщение</a> 
</p>

