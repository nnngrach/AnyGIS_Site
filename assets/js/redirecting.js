function redirectToIndexPage() {
    var url = String(location);

    if (url.indexOf("_en") == -1) {
      url = "/index";
    } else {
      url = "/index_en";
    }

    window.location.replace(url);
}


function redirectToContactsPage() {
    var url = String(location);

    if (url.indexOf("_en") == -1) {
      url = "/Web/Html/Contacts_ru";
    } else {
      url = "/Web/Html/Contacts_en";
    }

    window.location.replace(url);
}


function redirectToPageWithAnotherLanguage() {
    var url = String(location);

    if (url.indexOf("index_en") != -1) {
      url = url.replace("index_en", "index");
    } else if (url.indexOf("index") != -1) {
      url = url.replace("index", "index_en");
    } else if (url.indexOf("_ru") == -1) {
        url = url.replace("_en", "_ru");
    } else if (url.indexOf("") == -1) {
        url = url.replace("", "index_en");
    } else {
      url = url.replace("_ru", "_en");
    }

    window.location.replace(url);
}