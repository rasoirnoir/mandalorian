import { api_call, API_URL } from "./util";

const planetes = document.getElementById("resultats");

console.log('planet.js loaded');

api_call(API_URL + "/planets", console.log);


function remplissage(results){

    const previousUrl = results.previous;
    const nextUrl = results.next;
    const tabResults = results.results;

    for(resultPlanet of tabResults){
        const nom = resultPlanet.name;
        const diametre = resultPlanet.diameter;
        const climate = resultPlanet.climate;
        const terrain = resultPlanet.terrain;
        const population = resultPlanet.population;

        // const tabResidents = resultPLanet.residents;
        // const tabResidents = call_api(`people/`);
        const tabFilms = resultPLanet.films;

    }


    planetes.innerHTML = 
    `<section class="resultat">
    <h1 class="titreAccordeon"></h1>
    <div class="accordeon">
        <div class="1">Prout 1</div>
        <div class="2">Prout 2</div>
        <div class="3">Prout 3</div>
    </div>
</section>`;
}

// api_call(API_URL + "/planets", remplissage);