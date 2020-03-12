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
// First launch page setup
// =======================================================
//showCorrectUiForCurrentMode();
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
function resetAllSelectElements() {
    currentRegion = defaultValue;
    currentType = defaultValue;
    resetSelectElement(countrySelectID);
    resetSelectElement(categorySelectID);
    updateMapList();
}
function resetSelectElement(id) {
    var element = document.getElementById(id);
    if (!element)
        return;
    element.selectedIndex = defaultSelectorValue;
}
// =======================================================
// Select elements state
// =======================================================
var defaultValue = "All";
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
        if (currentRegion == defaultValue ||
            isContains(mapItem.regions, currentRegion) ||
            isContains(mapItem.regions, allCountriesValue)) {
            if (currentType == defaultValue ||
                isContains(mapItem.types, currentType)) {
                var preparedMapline = mapLineTemplate.replace("{mapName}", mapItem.name);
                result += preparedMapline;
            }
        }
    });
    replaceElementContent(replacingDivClass, result);
}
var mapLineTemplate = "\n<br>\n\n<div class=\"mapLine\">\n    <input type=\"checkbox\" class=\"mapLineCheckbox\">\n\n    <a\n        href=\"https://anygis.ru/api/v1/preview/{anygisMapName}\"\n        target=\"_blank\" title=\"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043A\u0430\u0440\u0442\u044B\">\n        <img src=\"/Web/Img/eye_gray.png\" class=\"eye_icon\"/>\n    </a>\n    \n    <a\n        href=\"{singleMapDownloadUrl}\"\n        title=\"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u0430\u0440\u0442\u0443\">\n        {mapName}\n    </a>\n</div>\n\n    ";
function replaceElementContent(elementClass, newContent) {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
}
// =======================================================
// Helping functions
// =======================================================
function getCurrentURL() {
    return String(location);
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
function downloadMapList() {
    return pregeneratedMapList;
}
var pregeneratedMapList = [
    { name: "Google Satellite", regions: "World", types: "Satellite", apps: "Locus, Guru, Osmand" },
    { name: "Yandex Satellite", regions: "World", types: "Satellite", apps: "Locus, Osmand" },
    { name: "Open Street Map", regions: "World", types: "City", apps: "Locus, Guru, Osmand" },
    { name: "2Gis", regions: "Russia", types: "City", apps: "Locus, Guru, Osmand" },
    { name: "Visikom", regions: "Ukraine", types: "City", apps: "Locus, Osmand" },
    { name: "Open Topo Map", regions: "World", types: "Hike", apps: "Locus, Guru" },
    { name: "GGC", regions: "Russia", types: "Hike", apps: "Locus, Guru, Osmand" },
    { name: "Karpaty", regions: "Ukraine", types: "Hike", apps: "Locus, Guru, Osmand" }
];
//# sourceMappingURL=AGScripts.js.map