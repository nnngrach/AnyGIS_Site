// =======================================================
// MARK: Types
// =======================================================
// =======================================================
// MARK: Redirecting
// =======================================================
var russianPagesPostfix = "_ru";
var englishPagesPostfix = "_en";
var indexPageUrlRu = "index";
var indexPageUrlEn = "index_en";
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
// MARK: Generating html maps list
// =======================================================
var defaultValue = "All";
var allCountriesValue = "World";
var replacingDivClass = "replacing_div";
var currentRegion = defaultValue;
var currentType = defaultValue;
var downloadedMapList = [];
function updateMapList() {
    console.log("updateMapList");
    if (downloadedMapList.length === 0) {
        downloadedMapList = downloadMapList();
    }
    generateMapListHtml(downloadedMapList);
}
function generateMapListHtml(mapListItems) {
    console.log("generateMapListHtml");
    var result = "";
    mapListItems.forEach(function (mapItem) {
        if (currentRegion == defaultValue ||
            isContains(mapItem.regions, currentRegion) ||
            isContains(mapItem.regions, allCountriesValue)) {
            if (currentType == defaultValue ||
                isContains(mapItem.types, currentType)) {
                result += mapItem.name + "<br>";
            }
        }
    });
    replaceElementContent(replacingDivClass, result);
}
function replaceElementContent(elementClass, newContent) {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
}
// =======================================================
// MARK: Download All maps list JSON  (MOCK)
// =======================================================
function downloadMapList() {
    console.log("pregeneratedMapList");
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
// =======================================================
// MARK: Helping functions
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
console.log("!");
//# sourceMappingURL=AGScripts.js.map