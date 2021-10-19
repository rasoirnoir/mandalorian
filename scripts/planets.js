import { api_call } from "./util";

const planetes = document.getElementById("resultats");

console.log('planet.js loaded');

api_call("planets", console.log);


function remplissage(prout){
    console.log(prout.results[0]);

    api_call("films/1", (response) => {
        console.log(response);
    });

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

api_call("planets", remplissage);