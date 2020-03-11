// =======================================================
// Types
// =======================================================

type MapDataLine = {name: string, regions: string, types: string, apps: string};





// =======================================================
// Redirecting
// =======================================================

const indexPageUrlRu: string = "index";
const indexPageUrlEn: string = "index_en";
const russianPagesPostfix: string = "_ru";
const englishPagesPostfix: string = "_en";
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
// First launch page setup
// =======================================================

    //showCorrectUiForCurrentMode();




// =======================================================
// Downloading menu mode
// =======================================================

let isInDownloadingMode = false;
const regularModeButtonID = "downloadMenuListBtn";
const downloadingModeButtonID = "downloadMenuBackBtn";


function changeMenuMode(): void {

    isInDownloadingMode = !isInDownloadingMode
    showCorrectUiForCurrentMode();
}


function showCorrectUiForCurrentMode() {

    if (isInDownloadingMode) {
        setDivVisiability(regularModeButtonID, false);
        setDivVisiability(downloadingModeButtonID, true);
    } else {
        setDivVisiability(regularModeButtonID, true);
        setDivVisiability(downloadingModeButtonID, false);
        updateMapList()
    }
}




// =======================================================
// Reset Html elements
// =======================================================

const defaultSelectorValue = 0;
const countrySelectID = "mapCountrySelector";
const categorySelectID = "mapCategorySelector";


function resetAllSelectElements(): void {
    currentRegion = defaultValue;
    currentType = defaultValue;
    resetSelectElement(countrySelectID);
    resetSelectElement(categorySelectID);
    updateMapList();
}


function resetSelectElement(id: string): void {
    let element = document.getElementById(id) as HTMLSelectElement;
    if (!element) return;

    element.selectedIndex = defaultSelectorValue;
}






// =======================================================
// Select elements state
// =======================================================

const defaultValue = "All";

let currentRegion = defaultValue;
let currentType = defaultValue;
let currentApp = defaultValue;

function changeRegion(newValue: string): void {
    currentRegion = newValue;
    updateMapList();
}

function changeType(newValue: string): void {
    currentType = newValue;
    updateMapList();
}

function changeApp(newValue: string): void {
    currentApp = newValue;
    updateMapList();
}





// =======================================================
// Generating Html maps list
// =======================================================

const allCountriesValue = "World";
const replacingDivClass = "replacing_div";

let downloadedMapList: MapDataLine[] = [];

function updateMapList(): void {

    if (downloadedMapList.length === 0) {
        downloadedMapList = downloadMapList();
    }

    generateMapListHtml(downloadedMapList);
}





function generateMapListHtml(mapListItems: MapDataLine[]): void {

    let result: string = "";

    mapListItems.forEach(function (mapItem) {

        if (currentRegion == defaultValue ||
            isContains(mapItem.regions, currentRegion) ||
            isContains(mapItem.regions, allCountriesValue)) {

            if (currentType == defaultValue ||
                isContains(mapItem.types, currentType)) {

                let preparedMapline = mapLineTemplate.replace("{mapName}", mapItem.name);
                result += preparedMapline;
            }
        }
    });

    replaceElementContent(replacingDivClass, result);
}


const mapLineTemplate = `
<br>

<div class="mapLine">
    <input type="checkbox" class="mapLineCheckbox">

    <a
        href="https://anygis.ru/api/v1/preview/{anygisMapName}"
        target="_blank" title="Предпросмотр карты">
        <img src="/Web/Img/eye_gray.png" class="eye_icon"/>
    </a>
    
    <a
        href="{singleMapDownloadUrl}"
        title="Скачать эту карту">
        {mapName}
    </a>
</div>

    `;




function replaceElementContent(elementClass: string, newContent: string): void {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
}





// =======================================================
// Helping functions
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


function setDivVisiability(className: string, isVisible: boolean): void {

    let elements = document.getElementsByClassName(className);
    if (!elements) return;

    let element = elements[0] as HTMLDivElement;
    element.style.display = isVisible ? "inline-block" : "none";
}





// =======================================================
// Download All maps list JSON  (just MOCK for now)
// =======================================================

function downloadMapList(): MapDataLine[] {
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





