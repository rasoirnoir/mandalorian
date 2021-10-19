import { api_call } from "./util";

const personnages = document.getElementById("resultats");

console.log('personnage.js loaded');

api_call("people", console.log);


 function remplissage(json){
    console.log(json.results[0]);

    api_call("planets/1", (response) => {
        console.log(response);
     });

   personnages.innerHTML = 
     `<section class="resultat">
    <h1 class="titreAccordeon"></h1>
    <div class="accordeon">
        <div class="1"> 1</div>
        <div class="2"> 2</div>
        <div class="3"> 3</div>
    </div>
</section>`;
}

api_call("planets", remplissage);