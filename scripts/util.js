console.log("util.js loaded");

export const API_URL = "https://swapi.dev/api";

/**
 * Envoie une requête GET à l'api swappi
 * @param {string} endpoint l'endpoint à interroger (ex: planets)
 * @param {function} callback La fonction qui traitera la réponse JSON en retour
 */
export const api_call = (url, callback) => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(jsonResp => {
            callback(jsonResp);
        })
        .catch(error => {
            console.log(`Erreur lors de l'appel API : 
                            ${error.message}`);
        });
}

/**
 * Récupère le numéro de la page courante
 * @param {string} url l'url d'un résultat multipage (qui se termine par ?page=2 par exemple)
 * @returns Le numéro de la page de l'url
 */
 const getPage = (url) => {
    tabUrl = url.split('/');
    pageEgal = tabUrl[tabUrl.length - 1];
    tabPageEgal = pageEgal.split('=');
    numeroPage = tabPageEgal[tabPageEgal.length - 1];

    return numeroPage;
}

/**
 * Ajoutes des boutons de pagination à un élément
 * @param {string} prevUrl l'url de la page précédente
 * @param {string} nextUrl l'url de la page suivante
 * @param {object} elementParent L'objet parent dans lequel ajouter les boutons
 */
export const createPagination = (prevUrl, nextUrl, elementParent, remplissage) => {
    console.log("Url précédente : " + prevUrl);
    console.log("Url suivante : " + nextUrl);
    const currentPage = (prevUrl == null ? parseInt(getPage(nextUrl)) - 1 : parseInt(getPage(prevUrl)) + 1);
    console.log("Page courante : " + currentPage);

    let firstPage = false;
    let lastPage = false;
    if (prevUrl == null) firstPage = true;
    if (nextUrl == null) lastPage = true;
    let previousButton = `<button id="prevButton">Page précédente</button>`;
    let currentButton = `<span style="color:#ccc;">${currentPage}</span>`;
    let nextButton = `<button id="nextButton">Page suivante</button>`;

    elementParent.innerHTML += previousButton;
    elementParent.innerHTML += currentButton;
    elementParent.innerHTML += nextButton;

    if(firstPage){
        document.getElementById("prevButton").hidden = true;
    }
    else{
        document.getElementById("prevButton").hidden = false;
    }
    if(lastPage){
        document.getElementById("nextButton").hidden = true;
    }
    else{
        document.getElementById("nextButton").hidden = false;
    }


    document.getElementById("prevButton").addEventListener("click", () => {
        api_call(prevUrl, remplissage);
    });
    document.getElementById("nextButton").addEventListener("click", () => {
        api_call(nextUrl, remplissage);
    });
}
