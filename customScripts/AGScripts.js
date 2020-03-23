"use strict";
// =======================================================
// Types
// =======================================================
// =======================================================
// Redirecting
// =======================================================
var indexPageUrlRu = "index";
var indexPageUrlEn = "index_en";
var russianPagesPostfix = "_ru";
var englishPagesPostfix = "_en";
var contactsPageUrlRu = "/Web/Html/Contacts_ru";
var contactsPageUrlEn = "/Web/Html/Contacts_en";
function redirectToIndexPage() {
    if (isContains(getCurrentURL(), englishPagesPostfix)) {
        redirectTo("/" + indexPageUrlRu);
    }
    else {
        redirectTo("/" + indexPageUrlEn);
    }
}
function redirectToContactsPage() {
    if (isContains(getCurrentURL(), englishPagesPostfix)) {
        redirectTo(contactsPageUrlRu);
    }
    else {
        redirectTo(contactsPageUrlEn);
    }
}
function redirectToPageWithAnotherLanguage() {
    var currentUrl = getCurrentURL();
    var newUrl = "";
    if (isContains(currentUrl, indexPageUrlEn)) {
        newUrl = currentUrl.replace(indexPageUrlEn, indexPageUrlRu);
    }
    else if (isContains(currentUrl, indexPageUrlRu)) {
        newUrl = currentUrl.replace(indexPageUrlRu, indexPageUrlEn);
    }
    else if (isContains(currentUrl, russianPagesPostfix)) {
        newUrl = currentUrl.replace(russianPagesPostfix, englishPagesPostfix);
    }
    else if (isContains(currentUrl, englishPagesPostfix)) {
        newUrl = currentUrl.replace(englishPagesPostfix, russianPagesPostfix);
    }
    else {
        newUrl = currentUrl;
    }
    redirectTo(newUrl);
}
// =======================================================
// Downloading menu mode
// =======================================================
var isInDownloadingMode = false;
var regularModeHeaderID = "regularModeHeader";
var downloadingHeaderID = "downloadModeHeader";
var regularModeButtonID = "downloadMenuListBtn";
var downloadingModeButtonID = "downloadMenuBackBtn";
var rubricatorID = "rubricator";
function changeMenuMode() {
    isInDownloadingMode = !isInDownloadingMode;
    showCorrectUiForCurrentMode();
}
function showCorrectUiForCurrentMode() {
    if (isInDownloadingMode) {
        setDivVisiability(regularModeHeaderID, false);
        setDivVisiability(downloadingHeaderID, true);
        setDivVisiability(regularModeButtonID, false);
        setDivVisiability(downloadingModeButtonID, true);
        setDivVisiability(rubricatorID, false);
    }
    else {
        setDivVisiability(regularModeHeaderID, true);
        setDivVisiability(downloadingHeaderID, false);
        setDivVisiability(regularModeButtonID, true);
        setDivVisiability(downloadingModeButtonID, false);
        setDivVisiability(rubricatorID, true);
        updateMapList();
    }
}
// =======================================================
// Reset Html elements
// =======================================================
var defaultSelectorValue = 0;
var countrySelectID = "mapCountrySelector";
var categorySelectID = "mapCategorySelector";
var appSelectID = "mapAppSelector";
function resetAllSelectElements() {
    currentRegion = defaultValue;
    currentType = defaultValue;
    setSelectElementWith(defaultSelectorValue, countrySelectID);
    setSelectElementWith(defaultSelectorValue, categorySelectID);
    updateMapList();
}
function setSelectElementWith(value, id) {
    var element = document.getElementById(id);
    if (!element)
        return;
    element.selectedIndex = value;
}
function setAppTypeFromUrlParams() {
    try {
        var queryAppName = getQueryVariable("app");
        switch (queryAppName) {
            case "Locus": {
                currentApp = "Locus";
                setSelectElementWith(1, appSelectID);
                break;
            }
            case "OsmandSqlite": {
                currentApp = "OsmandSqlite";
                setSelectElementWith(2, appSelectID);
                break;
            }
            case "OsmandMeta": {
                currentApp = "OsmandMeta";
                setSelectElementWith(3, appSelectID);
                break;
            }
            case "GuruIOS": {
                currentApp = "GuruIOS";
                setSelectElementWith(4, appSelectID);
                break;
            }
            case "GuruAndroid": {
                currentApp = "GuruAndroid";
                setSelectElementWith(5, appSelectID);
                break;
            }
            case "Alpine": {
                currentApp = "Alpine";
                setSelectElementWith(6, appSelectID);
                break;
            }
            case "Desktop": {
                currentApp = "Desktop";
                setSelectElementWith(7, appSelectID);
                break;
            }
            default: {
                throw new Error();
                break;
            }
        }
    }
    catch (e) {
        currentApp = defaultValue;
        setSelectElementWith(defaultSelectorValue, appSelectID);
    }
}
function getFavoriteModeFromUrlParams() {
    try {
        var queryAppName = getQueryVariable("shortSet");
        switch (queryAppName) {
            case "true": {
                return true;
                break;
            }
            case "false": {
                return false;
                break;
            }
            default: {
                throw new Error();
                break;
            }
        }
    }
    catch (e) {
        return false;
    }
}
// =======================================================
// Select elements state
// =======================================================
var defaultValue = "All";
var globalCoverageValue = "World";
var currentRegion = defaultValue;
var currentType = defaultValue;
var currentApp = defaultValue;
function changeRegion(newValue) {
    currentRegion = newValue;
    updateMapList();
}
function changeType(newValue) {
    currentType = newValue;
    updateMapList();
}
function changeApp(newValue) {
    currentApp = newValue;
    updateMapList();
}
// =======================================================
// Generating Html maps list
// =======================================================
var allCountriesValue = "World";
var replacingDivClass = "replacing_div";
var downloadedMapList = [];
function updateMapList() {
    if (downloadedMapList.length === 0) {
        downloadedMapList = downloadMapList();
    }
    generateMapListHtml(downloadedMapList);
}
function generateMapListHtml(mapListItems) {
    var result = "";
    var isEnglish = isContains(getCurrentURL(), englishPagesPostfix);
    var isShortSet = getFavoriteModeFromUrlParams();
    mapListItems.forEach(function (mapItem) {
        if (currentRegion != defaultValue &&
            !isContains(mapItem.regions, currentRegion) &&
            !isContains(mapItem.regions, globalCoverageValue))
            return;
        if (currentType != defaultValue &&
            !isContains(mapItem.types, currentType))
            return;
        if (currentApp != defaultValue &&
            !isContains(mapItem.apps, currentApp))
            return;
        if (isShortSet && !(mapItem.isInShortSet))
            return;
        var preparedMapline = mapLineTemplate;
        var previewBlock = getPrewiewHtmlBlock(mapItem.hasPreview);
        preparedMapline = preparedMapline.replace("{previewBlock}", previewBlock);
        var previewMessage = (isEnglish) ? "Preview" : "Предпросмотр карты";
        preparedMapline = preparedMapline.replace("{previewMessage}", previewMessage);
        preparedMapline = preparedMapline.replace("{anygisMapName}", mapItem.apiName);
        var name = (isEnglish) ? mapItem.nameEn : mapItem.nameRU;
        preparedMapline = preparedMapline.replace("{mapName}", name);
        var downloadMessage = (isEnglish) ? "Download this map" : "Скачать эту карту";
        preparedMapline = preparedMapline.replace("{downloadMessage}", downloadMessage);
        var downloadUrl = getDownloadUrlTemplate(currentApp);
        var lang = (isEnglish) ? "en" : "ru";
        //let fileNormalName = mapItem.fileName.replace("=", "%3D")
        downloadUrl = downloadUrl.replace("{lang}", lang);
        downloadUrl = downloadUrl.replace("{fileName}", mapItem.fileName);
        //downloadUrl = downloadUrl.replace("{fileNormalisedName}", fileNormalName);
        downloadUrl = downloadUrl.replace("{fileNormalisedName}", mapItem.normallisedFileName);
        preparedMapline = preparedMapline.replace("{singleMapDownloadUrl}", downloadUrl);
        result += preparedMapline;
    });
    replaceElementContent(replacingDivClass, result);
}
function getDownloadUrlTemplate(app) {
    switch (app) {
        case "Locus": {
            return "locus-actions://https/raw.githubusercontent.com/nnngrach/AnyGIS_maps/master/Locus_online_maps/Installers_{lang}/__{fileNormalisedName}.xml";
        }
        case "OsmandSqlite": {
            return "https://raw.githubusercontent.com/nnngrach/AnyGIS_maps/master/Osmand_online_maps/Sqlitedb/Maps_full_{lang}/{fileName}.sqlitedb";
        }
        case "OsmandMeta": {
            return "https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Metainfo/Maps_full_{lang}/{fileName}.zip";
        }
        case "GuruIOS": {
            return "guru://open?path=https://raw.githubusercontent.com/nnngrach/AnyGIS_maps/master/Galileo_online_maps/Maps_full_{lang}/{fileNormalisedName}.ms";
        }
        case "GuruAndroid": {
            return "https://anygis.ru/api/v1/download/galileo_{lang}/{fileName}.ms";
        }
        case "Alpine": {
            return "https://anygis.ru/api/v1/download/alpine_{lang}/{fileName}.AQX";
        }
        case "Desktop": {
            return "https://github.com/nnngrach/AnyGIS_maps/blob/master/Desktop/_{lang}/{fileName}.txt";
        }
        default: {
            return "#";
        }
    }
}
function getPrewiewHtmlBlock(hasPrewiew) {
    if (hasPrewiew) {
        return "\n    <a class=\"mapLinePreview\"\n        href=\"https://anygis.ru/api/v1/preview/{anygisMapName}\"\n        target=\"_blank\" title=\"{previewMessage}\"> \n        <img src=\"/Web/Img/eye_gray.png\" class=\"eye_icon\"/>\n    </a>\n        ";
    }
    else {
        return "   \n    <img class=\"mapLinePreview\" src=\"/Web/Img/eyeNo_gray.png\" class=\"eye_icon\"/>      \n    ";
    }
}
var mapLineTemplate = "\n<br>\n\n<div class=\"mapLine\">\n    \n    {previewBlock}\n    \n    <a class=\"mapLineLink\"\n        href=\"{singleMapDownloadUrl}\"\n        target=\"_blank\" title=\"{downloadMessage}\">\n        {mapName}\n    </a>\n</div>\n\n    ";
// =======================================================
// Get/Download All maps list JSON
// =======================================================
// MapList is in file "MapList.js".
// It added in HTML page with  <script = "..."> tag.
function downloadMapList() {
    // @ts-ignore
    return MapsList.mapsList;
}
// =======================================================
// Helping functions
// =======================================================
function getCurrentURL() {
    return String(location);
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    throw new Error("Query variable not found: " + variable);
}
function replaceElementContent(elementClass, newContent) {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
}
function redirectTo(url) {
    window.location.replace(url);
}
function isContains(sourceText, checkingText) {
    // not found = -1
    return sourceText.indexOf(checkingText) > -1;
}
function setDivVisiability(className, isVisible) {
    var elements = document.getElementsByClassName(className);
    if (!elements)
        return;
    var element = elements[0];
    element.style.display = isVisible ? "inline-block" : "none";
}
//# sourceMappingURL=AGScripts.js.map