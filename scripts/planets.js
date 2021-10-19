import { api_call, API_URL, getPage } from "./util";

const planetes = document.getElementById("resultats");

console.log('planet.js loaded');

function remplissage(results){

    planetes.innerHTML = "";

    const previousUrl = results.previous;
    const nextUrl = results.next;
    const tabResults = results.results;

    for(resultPlanet of tabResults){
        const nom = resultPlanet.name;
        const diametre = resultPlanet.diameter;
        const climate = resultPlanet.climate;
        const terrain = resultPlanet.terrain;
        const population = resultPlanet.population;

        const tabResidents = resultPlanet.residents;
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


        planetes.innerHTML += 
        `<section class="resultat">
            <h1 class="titreAccordeon">${nom}</h1>
            <div class="accordeon">
                <div class="1">
                    <p>${terrain}</p>
                    <p>${climate}</p>
                    <p>${diametre}Km</p>
                </div>
                <div class="2">${tabResidents}</div>
                <div class="3">${tabFilms}</div>
            </div>
        </section>`;
    }

    //Pagination
    const currentPage = previousUrl == null ? getPage(nextUrl) - 1 : getPage(previousUrl) + 1;
    

}


api_call(API_URL + "/planets", remplissage);