import { api_call, API_URL, createPagination, api_call_array } from "./util";


const planetes = document.getElementById("resultats");


function remplissage(results) {

    planetes.innerHTML = "";

    const previousUrl = results.previous;
    const nextUrl = results.next;
    const tabResults = results.results;

    planetsItems = [];
    residentsArray = [];
    filmsArray = [];

    for (resultPlanet of tabResults) {
        const nom = resultPlanet.name;
        const diametre = resultPlanet.diameter;
        const climate = resultPlanet.climate;
        const terrain = resultPlanet.terrain;
        const population = resultPlanet.population;

        const tabResidents = resultPlanet.residents;
        const tabFilms = resultPlanet.films;
        residentsArray.push(tabResidents);
        filmsArray.push(tabFilms);


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

        const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
        console.log(accordeonItemHeader[accordeonItemHeader.length - 1]);
        accordeonItemHeader[accordeonItemHeader.length - 1].addEventListener("click", function (event) {
            console.log(`click on `);
            console.log(event.target);
            accordeonItemHeader[accordeonItemHeader.length - 1].classList.toggle("active");
            // api_call_array(residentsArray[index], fillDetails);
            // api_call_array(filmsArray[index], fillDetails);
        });
    }
    // item = accordeonItemHeader[accordeonItemHeader.length - 1];
    // planetsItems.push(item);





    //Pagination
    createPagination(previousUrl, nextUrl, planetes, remplissage);


    // for(index in planetsItems){
    //     console.log(planetsItems[index]);
    //     planetsItems[index].addEventListener("click", function(event){
    //         console.log(`click on ${event.target}`);
    //         planetsItems[index].classList.toggle("active");
    //         // api_call_array(residentsArray[index], fillDetails);
    //         // api_call_array(filmsArray[index], fillDetails);
    //     });
    // }
    // const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
    // accordeonItemHeader.forEach(accordeonItemHeader => {
    //     accordeonItemHeader.addEventListener("click", event => {
    //         accordeonItemHeader.classList.toggle("active");
    //         api_call_array(tabResidents, fillDetails);
    //         api_call_array(tabFilms, fillDetails);
    //     });
    // });

}

const fillResidents = (jsonResp) => {
    console.log(jsonResp);
}

const fillFilms = (jsonResp) => {
    console.log(jsonResp);
}


api_call(API_URL + "/planets", remplissage);


console.log('planet.js loaded');
