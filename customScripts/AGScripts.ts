// =======================================================
// MARK: Types
// =======================================================

type MapDataLine = {name: string, regions: string, types: string, apps: string};





// =======================================================
// MARK: Redirecting
// =======================================================

const russianPagesPostfix: string = "_ru";
const englishPagesPostfix: string = "_en";
const indexPageUrlRu: string = "index";
const indexPageUrlEn: string = "index_en";
const contactsPageUrlRu: string = "/Web/Html/Contacts_ru";
const contactsPageUrlEn: string = "/Web/Html/Contacts_en";


function redirectToIndexPage(): void {

    if (isContains(getCurrentURL(), englishPagesPostfix)) {
        redirectTo("/" + indexPageUrlRu);
    } else {
        redirectTo("/" + indexPageUrlEn);
    }
}


function redirectToContactsPage(): void {

    if (isContains(getCurrentURL(), englishPagesPostfix)) {
        redirectTo(contactsPageUrlRu);
    } else {
        redirectTo(contactsPageUrlEn);
    }
}


function redirectToPageWithAnotherLanguage(): void {

    const currentUrl: string = getCurrentURL();
    let newUrl: string = "";

    if (isContains(currentUrl, indexPageUrlEn)) {
        newUrl = currentUrl.replace(indexPageUrlEn, indexPageUrlRu);
    } else if ( isContains(currentUrl, indexPageUrlRu)) {
        newUrl = currentUrl.replace(indexPageUrlRu, indexPageUrlEn);
    } else if (isContains(currentUrl, russianPagesPostfix)) {
        newUrl = currentUrl.replace(russianPagesPostfix, englishPagesPostfix);
    } else if (isContains(currentUrl, englishPagesPostfix)) {
        newUrl = currentUrl.replace(englishPagesPostfix, russianPagesPostfix);
    } else {
        newUrl = currentUrl;
    }

    redirectTo(newUrl);
}






// =======================================================
// MARK: Generating html maps list
// =======================================================

const defaultValue = "All";
const allCountriesValue = "World";
const replacingDivClass = "replacing_div";

let currentRegion = defaultValue;
let currentType = defaultValue;


let downloadedMapList: MapDataLine[] = [];


function updateMapList(): void {

    console.log("updateMapList");

    if (downloadedMapList.length === 0) {
        downloadedMapList = downloadMapList();
    }

    generateMapListHtml(downloadedMapList);
}


function generateMapListHtml(mapListItems: MapDataLine[]): void {

    console.log("generateMapListHtml");

    let result: string = "";

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


function replaceElementContent(elementClass: string, newContent: string): void {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
}






// =======================================================
// MARK: Download All maps list JSON  (MOCK)
// =======================================================

function downloadMapList(): MapDataLine[] {
    console.log("pregeneratedMapList");
    return pregeneratedMapList;
}


const pregeneratedMapList: MapDataLine[] = [
    {name: "Google Satellite", regions: "World", types: "Satellite", apps: "Locus, Guru, Osmand"},
    {name: "Yandex Satellite", regions: "World", types: "Satellite", apps: "Locus, Osmand"},
    {name: "Open Street Map", regions: "World", types: "City", apps: "Locus, Guru, Osmand"},
    {name: "2Gis", regions: "Russia", types: "City", apps: "Locus, Guru, Osmand"},
    {name: "Visikom", regions: "Ukraine", types: "City", apps: "Locus, Osmand"},
    {name: "Open Topo Map", regions: "World", types: "Hike", apps: "Locus, Guru"},
    {name: "GGC", regions: "Russia", types: "Hike", apps: "Locus, Guru, Osmand"},
    {name: "Karpaty", regions: "Ukraine", types: "Hike", apps: "Locus, Guru, Osmand"}
];





// =======================================================
// MARK: Helping functions
// =======================================================

function getCurrentURL(): string {
    return String(location);
}


function redirectTo(url: string): void {
    window.location.replace(url);
}


function isContains(sourceText: string, checkingText: string): boolean {
    // not found = -1
    return sourceText.indexOf(checkingText) > -1;
}

console.log("!");