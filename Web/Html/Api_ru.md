---
layout: default
---

| [AnyGIS][01] | [Как это работает?][02] | [RusOutdoor Maps][03] | [Скачать карты][04] | [API][05] |


[01]: https://anygis.ru/index
[02]: https://anygis.ru/Web/Html/Description_ru
[03]: https://anygis.ru/Web/Html/RusOutdoor_ru
[04]: https://anygis.ru/Web/Html/DownloadPage_ru
[05]: https://anygis.ru/Web/Html/Api_ru



# AnyGIS API

Для получения тайлов интересующей Вас онлайн-карты нужно послать GET запрос, состоящий из следующих частей:

```
Host / MapName / X / Y / Z
```

В качестве примера сформируем запрос для загрузки тайла карты Wikimapia. Для этого будем использовать следующие параметры:

```
Host = https://server.anygis.ru/
MapName = Wikimapia
X = 619
Y = 320
Z = 10
```

Результирующий запрос будет выглядеть следующим образом:

```
https://server.anygis.ru/Wikimapia/619/320/10
```

X ,Y - это номера тайлов в стандартной проекции Web Mercator. Z - уровень приближения для нее же. Иными словами, это - те же самые значения, что используются для получения карт OpenStreetMaps.


Так же, вместо номеров тайлов можно указать координаты в десятичном формате:

```
Host / MapName / Longitude / Latitude / Z
https://server.anygis.ru/Wikimapia/56.062293/37.708244/10
```


Чтобы получить параметр MapName нужно перейти на страницу  со списком доступных карт:

```
https://server.anygis.ru/list
```

