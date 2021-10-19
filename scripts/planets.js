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
    console.log("Url précédente : " + previousUrl);
    console.group("Url suivante : " + nextUrl);
    const currentPage = (previousUrl == null ? parseInt(getPage(nextUrl)) - 1 : parseInt(getPage(previousUrl)) + 1);
    console.log("Page courante : " + currentPage);

    let firstPage = false;
    let lastPage = false;
    if(previousUrl == null) firstPage = true;
    if(nextUrl == null) lastPage = true;
    let previousButton = `<button id="prevButton">Page précédente</button>`;
    let currentButton = `${currentPage}`;
    let nextButton = `<button id="nextButton">Page suivante</button>`;
    if(!firstPage) {
        planetes.innerHTML += previousButton;
        console.log(document.getElementById("prevButton"));
        document.getElementById("prevButton").addEventListener("click", () => {
            api_call(previousUrl, remplissage);
        });
    }
    planetes.innerHTML += currentButton;
    if(!lastPage) {
        planetes.innerHTML += nextButton;
        document.getElementById("nextButton").addEventListener("click", () => {
            api_call(nextUrl, remplissage);
        });
    };

    
    
}

api_call(API_URL + "/planets", remplissage);
