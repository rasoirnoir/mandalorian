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

