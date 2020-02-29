---
layout: default
---

| [На главную][01] | [Полезные статьи][02] | [Скачать карты][03] | [Поддержать проект][04] |


[01]: https://anygis.ru/index
[02]: https://anygis.ru/Web/Html/Articles_ru
[03]: https://anygis.ru/Web/Html/DownloadPage_ru
[04]: https://www.donationalerts.com/r/nnngrach



# AnyGIS API

Для получения тайлов интересующей Вас онлайн-карты нужно послать GET запрос, состоящий из следующих частей:

```
Host / MapName / X / Y / Z
```

В качестве примера сформируем запрос для загрузки тайла карты Wikimapia. Для этого будем использовать следующие параметры:

```
Host = https://anygis.ru/api/v1/
MapName = Wikimapia
X = 619
Y = 320
Z = 10
```

Результирующий запрос будет выглядеть следующим образом:

```
https://anygis.ru/api/v1/Wikimapia/619/320/10
```

X ,Y - это номера тайлов в стандартной проекции Web Mercator. Z - уровень приближения для нее же. Иными словами, это - те же самые значения, что используются для получения карт OpenStreetMaps.


Так же, вместо номеров тайлов можно указать координаты в десятичном формате:

```
Host / MapName / Longitude / Latitude / Z
https://anygis.ru/api/v1/Wikimapia/56.062293/37.708244/10
```


Чтобы получить параметр MapName нужно перейти на страницу  со списком доступных карт:

```
https://anygis.ru/api/v1/list
```

