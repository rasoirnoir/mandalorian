import { api_call,API_URL } from "./util";

const PERSONNAGES = document.getElementById("resultats");
const NAME = document.getElementById("titreaccordeon");

class People {
  constructor(birth_year, eye_colo, gender, hair_color,height,mass,skin_color) {
    this.birth_year = birth_year;
    this.eye_colo = eye_colo;
    this.gender = gender;
    this.hair_color = hair_color;
    this.height = height;
    this.mass = mass;
    this.skin_color=skin_color;
  }


console.log('personnage.js loaded');

api_call(API_URL+"/people", console.log);


 function remplissage(json){
    console.log(json.results[0]);

    api_call(API_URL+ "/planets/1", (response) => {
        console.log(response);
        NAME.innerText = results[i];
     });


   personnages.innerHTML = 
     `<section class="resultat">
    <h1 class="titreAccordeon"></h1>
    <div class="accordeon">
        <div class="1">
        <div id=annéeNaissance>Année de Naissance : </div>
        <div id=couleurYeux> Couleur des Yeux : </div>
        <div id=genre>Genre : </div>
        <div id=couleurCheveux> Couleur des Cheveux : </div>
        <div id= poids> Poids du personnage :  kg</div>
        <div id= couleurPeau> Couleur de Peau : </div>
        <div class="2"> 2</div>
        <div class="3"> 3</div>
    </div>
</section>`;
}

PERSONNAGES.innerHTML = '';
const PERPAGE = 10;

for (let i = 0; i < PERPAGE; i++) {
  const urlbirth_year = json.results[i].birth_year;
  const urleye_colo=json.results[i].eye_colo;
  const urlgender=json.results[i].gender;
  const urlhair_color=json.results[i].hair_color;
  const urlheight = json.results[i].height;
  const urlmass=json.results[i].mass;
  const urlskin_color= json.results[i].skin_color;



  const gens = new Identite(urlbirth_year, urleye_colo, urlgender, urlhair_color, urlmass,urlskin_color);
  gens.PersonneSuiv();
}