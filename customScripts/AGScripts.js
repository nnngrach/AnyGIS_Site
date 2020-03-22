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
            case "Guru": {
                currentApp = "Guru";
                setSelectElementWith(4, appSelectID);
                break;
            }
            case "Alpine": {
                currentApp = "Alpine";
                setSelectElementWith(5, appSelectID);
                break;
            }
            case "Orux": {
                currentApp = "Orux";
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
        var preparedMapline = mapLineTemplate.replace("{mapName}", mapItem.nameRU);
        result += preparedMapline;
    });
    replaceElementContent(replacingDivClass, result);
}
var mapLineTemplate = "\n<br>\n\n<div class=\"mapLine\">\n<!--    <input type=\"checkbox\" class=\"mapLineCheckbox\">-->\n\n    <a class=\"mapLinePreview\"\n        href=\"https://anygis.ru/api/v1/preview/{anygisMapName}\"\n        target=\"_blank\" title=\"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u0430\u0440\u0442\u044B\">\n        <img src=\"/Web/Img/eye_gray.png\" class=\"eye_icon\"/>\n    </a>\n    \n    <a class=\"mapLineLink\"\n        href=\"{singleMapDownloadUrl}\"\n        title=\"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u0430\u0440\u0442\u0443\">\n        {mapName}\n    </a>\n</div>\n\n    ";
function replaceElementContent(elementClass, newContent) {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
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
// =======================================================
// Download All maps list JSON  (just MOCK for now)
// =======================================================
// MapList is in file "MapList.js".
// It added in HTML page with  <script = "..."> tag.
function downloadMapList() {
    // @ts-ignore
    return MapsList.mapsList;
}
//# sourceMappingURL=AGScripts.js.map