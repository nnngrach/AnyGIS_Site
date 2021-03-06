---
layout: default
---

| [На главную][01] | [Полезные статьи][02] | [Скачать карты][03] | [Поддержать проект][04] |


[01]: /index
[02]: /Web/Html/Articles_ru
[03]: /Web/Html/DownloadPage_ru
[04]: https://www.donationalerts.com/r/nnngrach




# Карты для десктопных и web редакторов

[Список изменений][00]

[00]: /Web/Html/Changelog_ru

![](/Web/Img/4mapsDesktop.png)



Существуют многочисленные программы для компьютера в которые можно добавлять дополнительные источники [растровых][001] онлайн карт. Например QGIS или JOSM. Также некоторые сайты для просмотра карт позволяют изменить слой подложки. Например [Nakarte][002] или [BRouter][003].

Однако, таких программ (и форматов их файлов с настройками) слишком много, чтобы их можно было хоть как-то автоматически генерировать. Кроме того, в некоторые программы новые слои можно добавлять исключительно вручную, через графический интерфес приложения. 

Так что в этом разделе я просто привел список подготовленных шаблонов URL-адресов. Их можно просто скопировать и вставить в то приложение или сайт, которым вы пользуетесь. И, таким образом, добавить новые слои с картами. 


[Скачать настройки карт][11]

[001]: /Web/Html/Vektor_and_raster_ru
[002]: https://nakarte.me
[003]: https://brouter.de/brouter-web/

<!-- [11]: /Web/Html/Download/Desktop_Full_ru -->
[11]: /Web/Html/Download_ru?app=Desktop


---


<div class="nav"><div class="item">
  <input type="checkbox" id="01"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="01">
  Инструкция по установке
  </label></h3>
  <div class="spoiler" markdown="1">

Как я уже писал выше, интерфейсы программ сильно отличаются. Поэтому какой-то универсальной инструкции тут не будет. Но, как правило, процесс будет примерно выглядеть следующим образом:

* Найти кнопку с названием типа "Добавить онлайн-карту" или "Добавить TMS слой"
* В открывшемся меню ввести название карты и ее URL-шаблон, минимальный и максимальный уровни масштаба.
* Нажать кнопку "Сохранить", после чего новая карта должна появиться в списке доступных слоев.

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="02"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="02">
  Какую ссылку копировать?
  </label></h3>
  <div class="spoiler" markdown="1">


В списке для большинства карт будут представлены несколько ссылок. Как выбрать, какую из них использовать? 


* [URL direct] - Это прямая ссылка на скачивание с сервера карты. Без промежуточных звеньев и поэтому наиболее быстрая. Если ваша программа умеет работать с заглушками ( {х} {y} {z} ), которые используются в этой ссылке, то следует выбрать именно ее.


* [URL via AnyGIS proxy] - Ссылка на промежуточный вспомогательный сервер. Если ваша программа не поддерживает некоторые заглушки ( {q} {-y} {bbox} ), то используйте ссылку на мой вспомогательный сервер. Добавление этого промежуточного звена немного снизит скорость, зато позволит подключать труднодоступные карты.


> Внимание: В некоторых программах в место заглушек типа  {z} {x} {y}  могут использоваться немного другие заглушки. Например  {$z} {$x} {$y}  или  {0} {1} {2}.

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="03"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="03">
  Лайфхак - предпросмотр карт с помощью сайта Nakarte.me
  </label></h3>
  <div class="spoiler" markdown="1">


На сайте есть некоторое подобие функции предпросмотра, которая реализована с помощью сайта Nakarte. Просто откройте список карт и кликните на иконку с глазом слева от названия карты. В результате откроется сайт Nakarte на котором в качестве подложки будет автоматически загруженна выбранная вами карта.

![](/Web/Img/desktop_eye_icon.png)

</div></div></div>




<div class="nav"><div class="item">
  <input type="checkbox" id="04"/>
  <img src="/Web/Img/arrow_menu.png" class="arrow_in_spoiler">
  <h3><label class="spoiler_label" for="04">
  А что с JOSM?
  </label></h3>
  <div class="spoiler" markdown="1">

Если вы хотите редактировать OSM и приносить тем самым пользу проекту, то нельзя обрисовывать карты и спутниковые снимки и карты защищенные авторскими правами. Иначе на проект могут за это подать в суд. 

Поэтому, лучше всего, прежде чем добавить в JOSM или в ID какой-либо новый слой, лучше просто спросите у более опытных участников, разрешает ли лицензия использовать тот или иной слой для редактирования OSM. Сделать это можно. например, в русскоязычном [телеграмм-чатике][21] проекта.

Сама же ссылка для подключению нового слоя к JOSM имеет следующий вид. Числа 3 и 16 - это значения из полей MinZoom и MaxZoom соответственно.

> tms[3,16]: https://anygis.ru/api/v1/Tracks_Strava_All/{x}/{y}/{z}


[21]: https://t.me/ruosm

</div></div></div>

---

На этом всё. Если у вас есть предложения, какие еще источники карт стоит добавить в подборку, то пишите мне на электронную почту. Желательно, приложить к письму ссылку на страницу с интересующей картой. Ну и, конечно же, сообщайте об ошибках и неточностях на сайте. 

Если же вы являетесь правообладателем какой-либо из карт, присутствующих в данной подборке и считаете, что эту карту из этой подборки нужно убрать, то пишите мне. Я с готовностью пойду вам навстречу.


<p align="center">
<a href="/Web/Html/Contacts_ru">Отправить сообщение</a> 
</p>

