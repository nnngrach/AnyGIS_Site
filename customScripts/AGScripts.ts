// =======================================================
// Types
// =======================================================

type MapDataLine = {nameRU: string, regions: string, types: string, apps: string};





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
// Downloading menu mode
// =======================================================

let isInDownloadingMode = false;
const regularModeHeaderID = "regularModeHeader";
const downloadingHeaderID = "downloadModeHeader";
const regularModeButtonID = "downloadMenuListBtn";
const downloadingModeButtonID = "downloadMenuBackBtn";
const rubricatorID = "rubricator";


function changeMenuMode(): void {

    isInDownloadingMode = !isInDownloadingMode
    showCorrectUiForCurrentMode();
}


function showCorrectUiForCurrentMode() {

    if (isInDownloadingMode) {
        setDivVisiability(regularModeHeaderID, false);
        setDivVisiability(downloadingHeaderID, true);
        setDivVisiability(regularModeButtonID, false);
        setDivVisiability(downloadingModeButtonID, true);
        setDivVisiability(rubricatorID, false);
    } else {
        setDivVisiability(regularModeHeaderID, true);
        setDivVisiability(downloadingHeaderID, false);
        setDivVisiability(regularModeButtonID, true);
        setDivVisiability(downloadingModeButtonID, false);
        setDivVisiability(rubricatorID, true);
        updateMapList()
    }
}




// =======================================================
// Reset Html elements
// =======================================================

const defaultSelectorValue = 0;
const countrySelectID = "mapCountrySelector";
const categorySelectID = "mapCategorySelector";
const appSelectID = "mapAppSelector";


function resetAllSelectElements(): void {
    currentRegion = defaultValue;
    currentType = defaultValue;
    setSelectElementWith(defaultSelectorValue, countrySelectID);
    setSelectElementWith(defaultSelectorValue, categorySelectID);

    updateMapList();
}



function setSelectElementWith(value: number, id: string, ): void {
    let element = document.getElementById(id) as HTMLSelectElement;
    if (!element) return;

    element.selectedIndex = value;
}



function setAppTypeFromUrlParams(): void {

    try {
        let queryAppName = getQueryVariable("app");

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

    } catch (e) {
        currentApp = defaultValue;
        setSelectElementWith(defaultSelectorValue, appSelectID);
    }
}








// =======================================================
// Select elements state
// =======================================================

const defaultValue = "All";
const globalCoverageValue = "World";

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

        if (currentRegion != defaultValue &&
            !isContains(mapItem.regions, currentRegion) &&
            !isContains(mapItem.regions, globalCoverageValue)) return;

        if (currentType != defaultValue &&
            !isContains(mapItem.types, currentType)) return;

        if (currentApp != defaultValue &&
            !isContains(mapItem.apps, currentApp)) return;


        let preparedMapline = mapLineTemplate.replace("{mapName}", mapItem.nameRU);
        result += preparedMapline;
    });

    replaceElementContent(replacingDivClass, result);
}


const mapLineTemplate = `
<br>

<div class="mapLine">
<!--    <input type="checkbox" class="mapLineCheckbox">-->

    <a class="mapLinePreview"
        href="https://anygis.ru/api/v1/preview/{anygisMapName}"
        target="_blank" title="Предпросмотр карты">
        <img src="/Web/Img/eye_gray.png" class="eye_icon"/>
    </a>
    
    <a class="mapLineLink"
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


function getQueryVariable(variable: string): string {
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
// Get/Download All maps list JSON  
// =======================================================

// MapList is in file "MapList.js".
// It added in HTML page with  <script = "..."> tag.
function downloadMapList(): MapDataLine[] {

    // @ts-ignore
    return MapsList.mapsList;
}
