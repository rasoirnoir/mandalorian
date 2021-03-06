import { api_call } from './util';

const films = document.getElementById("resultats");

const API_URL = "https://swapi.dev/api/films/";         // déclare la localisation de la liste des films

function remplissage(EPISODES) {
    console.log(EPISODES);

    for (index in EPISODES.results) {
        films.innerHTML += `
            <section class="resultat accordeon_item">
                <h1 class="accordeon_item_header">${EPISODES.results[index].title}</h1>
                <div class="accordeon_item_body">
                    <div class="column1">
                        <p class= "episode">Episode :  ${EPISODES.results[index].episode_id}</p>
                        <p class= "directeur">Directeur : ${EPISODES.results[index].director}</p>
                        <p class= "producteur">Producteur : ${EPISODES.results[index].producer}</p>
                        <p class= "sortie">Date de Sortie : ${EPISODES.results[index].release_date}</p>
                    </div>
                </div>
            </section>`
    }
    const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
    accordeonItemHeader.forEach(accordeonItemHeader => {
        accordeonItemHeader.addEventListener("click", event => {
            accordeonItemHeader.classList.toggle("active");
        })
    })
}


api_call(API_URL, remplissage);