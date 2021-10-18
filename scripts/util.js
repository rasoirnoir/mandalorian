console.log("util.js loaded");

const URL = "https://swapi.dev/api";

/**
 * Envoie un GET à l'api swappi
 * @param {string} endpoint l'endpoint à interroger (ex: planets)
 * @param {function} callback La fonction qui traitera la réponse JSON en retour
 */
const api_call = (endpoint, callback) => {
    fetch(`${URL}/${endpoint}`)
        .then(response => {
            return response.json();
        })
        .then(jsonResp => {
            callback(jsonResp);
        });
}