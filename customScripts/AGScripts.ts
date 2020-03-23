// =======================================================
// Types
// =======================================================

type MapDataLine = {nameRU: string, nameEn: string, fileName: string, normallisedFileName: string, apiName: string, hasPreview: boolean, regions: string, types: string, apps: string, isInShortSet: string};





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

    } catch (e) {
        currentApp = defaultValue;
        setSelectElementWith(defaultSelectorValue, appSelectID);
    }
}



function getFavoriteModeFromUrlParams(): boolean {

    try {
        let queryAppName = getQueryVariable("shortSet");

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

    } catch (e) {
        return false;
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

    let isEnglish = isContains(getCurrentURL(), englishPagesPostfix);
    let isShortSet = getFavoriteModeFromUrlParams();


    mapListItems.forEach(function (mapItem) {

        if (currentRegion != defaultValue &&
            !isContains(mapItem.regions, currentRegion) &&
            !isContains(mapItem.regions, globalCoverageValue)) return;

        if (currentType != defaultValue &&
            !isContains(mapItem.types, currentType)) return;

        if (currentApp != defaultValue &&
            !isContains(mapItem.apps, currentApp)) return;

        if (isShortSet && !(mapItem.isInShortSet)) return;


        let preparedMapline = mapLineTemplate;

        let previewBlock = getPrewiewHtmlBlock(mapItem.hasPreview);
        preparedMapline = preparedMapline.replace("{previewBlock}", previewBlock);

        const previewMessage = (isEnglish) ? "Preview" : "Предпросмотр карты";
        preparedMapline = preparedMapline.replace("{previewMessage}", previewMessage);
        preparedMapline = preparedMapline.replace("{anygisMapName}", mapItem.apiName);


        const name = (isEnglish) ? mapItem.nameEn : mapItem.nameRU;
        preparedMapline = preparedMapline.replace("{mapName}", name);

        const downloadMessage = (isEnglish) ? "Download this map" : "Скачать эту карту";
        preparedMapline = preparedMapline.replace("{downloadMessage}", downloadMessage);

        let downloadUrl = getDownloadUrlTemplate(currentApp);
        let lang = (isEnglish) ? "en" : "ru";
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




function getDownloadUrlTemplate(app: string): string {
    switch (app) {
        case "Locus": {
            return "locus-actions://https/raw.githubusercontent.com/nnngrach/AnyGIS_maps/master/Locus_online_maps/Installers_{lang}/__{fileNormalisedName}.xml"
        }
        case "OsmandSqlite": {
            return "https://raw.githubusercontent.com/nnngrach/AnyGIS_maps/master/Osmand_online_maps/Sqlitedb/Maps_full_{lang}/{fileName}.sqlitedb"
        }
        case "OsmandMeta": {
            return "https://github.com/nnngrach/AnyGIS_maps/raw/master/Osmand_online_maps/Metainfo/Maps_full_{lang}/{fileName}.zip"
        }
        case "GuruIOS": {
            return "guru://open?path=https://raw.githubusercontent.com/nnngrach/AnyGIS_maps/master/Galileo_online_maps/Maps_full_{lang}/{fileNormalisedName}.ms"
        }
        case "GuruAndroid": {
            return "https://anygis.ru/api/v1/download/galileo_{lang}/{fileName}.ms"
        }
        case "Alpine": {
            return "https://anygis.ru/api/v1/download/alpine_{lang}/{fileName}.AQX"
        }
        case "Desktop": {
            return "https://github.com/nnngrach/AnyGIS_maps/blob/master/Desktop/_{lang}/{fileName}.txt"
        }
        default: {
            return "#"
        }
    }
}


function getPrewiewHtmlBlock(hasPrewiew: boolean): string {

    if (hasPrewiew) {
        return `
    <a class="mapLinePreview"
        href="https://anygis.ru/api/v1/preview/{anygisMapName}"
        title="{previewMessage}"> 
        <img src="/Web/Img/eye_gray.png" class="eye_icon"/>
    </a>
        `

    } else {
        return `   
    <img class="mapLinePreview" src="/Web/Img/eyeNo_gray.png" class="eye_icon"/>      
    `
    }
}



const mapLineTemplate = `
<br>

<div class="mapLine">
    
    {previewBlock}
    
    <a class="mapLineLink"
        href="{singleMapDownloadUrl}"
        target="_blank" title="{downloadMessage}">
        {mapName}
    </a>
</div>

    `;









// =======================================================
// Get/Download All maps list JSON
// =======================================================

// MapList is in file "MapList.js".
// It added in HTML page with  <script = "..."> tag.
function downloadMapList(): MapDataLine[] {

    // @ts-ignore
    return MapsList.mapsList;
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


function replaceElementContent(elementClass: string, newContent: string): void {
    document.getElementsByClassName(elementClass)[0].innerHTML = newContent;
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
