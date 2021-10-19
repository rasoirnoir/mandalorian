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
export const getPage = (url) => {
    tabUrl = url.split('/');
    pageEgal = tabUrl[tabUrl.length - 1];
    tabPageEgal = pageEgal.split('=');
    numeroPage = tabPageEgal[tabPageEgal.length - 1];

    return numeroPage;
}
