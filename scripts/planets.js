import { api_call, API_URL, createPagination } from "./util";


const planetes = document.getElementById("resultats");


function remplissage(results) {

    planetes.innerHTML = "";

    const previousUrl = results.previous;
    const nextUrl = results.next;
    const tabResults = results.results;

    for (resultPlanet of tabResults) {
        const nom = resultPlanet.name;
        const diametre = resultPlanet.diameter;
        const climate = resultPlanet.climate;
        const terrain = resultPlanet.terrain;
        const population = resultPlanet.population;

        const tabResidents = resultPlanet.residents;
        const tabFilms = resultPlanet.films;


        planetes.innerHTML +=
            `<section class="resultat accordeon_item">
            <h1 class="accordeon_item_header">${nom}</h1>
            <div class="accordeon_item_body">
                <div class="column1">
                    <p>${terrain}</p>
                    <p>${climate}</p>
                    <p>${diametre}Km</p>
                </div>
                <div class="column2">${tabResidents}</div>
                <div class="column3">${tabFilms}</div>
            </div>
        </section>`;
    }

    //Pagination
    createPagination(previousUrl, nextUrl, planetes, remplissage);

    const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
    for (item of accordeonItemHeader) {
        item.addEventListener("click", (event) => {
            item.classList.toggle("active");
        });
    }
}

api_call(API_URL + "/planets", remplissage);


console.log('planet.js loaded');
