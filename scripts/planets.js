import { api_call, API_URL } from "./util";

const planetes = document.getElementById("resultats");

console.log('planet.js loaded');

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

        const tabResidents = resultPLanet.residents;
        //Problème de requêtes asyncrones
        // let tabResidents = [];
        // for(index in resultPlanet.residents){
        //     api_call(resultPlanet.residents[index], (jsonresp)=>{
        //         console.log(jsonresp.name);
        //     });
        // }
        // console.log(`${nom} - résidents : ${resultPlanet.residents}`);
        // console.log(`nom des résidents : ${tabResidents}`);
        const tabFilms = resultPlanet.films;

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

api_call(API_URL + "/planets", remplissage);