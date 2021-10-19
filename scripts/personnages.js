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
}


console.log('personnage.js loaded');

//api_call(API_URL+"/people", console.log);

fetch(API_URL+"/people")
.then(response => {
    return response.json();
})
.then(jsonResp => {
    remplissage(jsonResp);
})
.catch(error => {
    console.log(`Erreur lors de l'appel API : 
                    ${error.message}`);
});

 function remplissage(json){
   console.log(json.results[0]);
   
   // api_call(API_URL+ "/planets/1", (response) => {
     //     console.log(response);
     //     NAME.innerText = results[i].name;
     
     //  });
     
     
     
     
     
     PERSONNAGES.innerHTML = '';
     const PERPAGE = json.results.length;
     
     console.log('coucou');
for (let i = 0; i < PERPAGE; i++) {
  const urlbirth_year = json.results[i].birth_year;
  const urleye_colo=json.results[i].eye_colo;
  const urlgender=json.results[i].gender;
  const urlhair_color=json.results[i].hair_color;
  const urlheight = json.results[i].height;
  const urlmass=json.results[i].mass;
  const urlskin_color= json.results[i].skin_color;
  const urlname= json.results[i].name;
  // const gens = new People(urlbirth_year, urleye_colo, urlgender, urlhair_color, urlmass,urlskin_color);
  // console.log(gens);

  PERSONNAGES.innerHTML += 
  `<section class="resultat">
 <h1 class="titreAccordeon">${urlname}</h1>
 <div class="accordeon">
     <div class="1">
     <div id=annéeNaissance>Année de Naissance : ${urlbirth_year} </div>
     <div id=couleurYeux> Couleur des Yeux : ${urleye_colo}</div>
     <div id=genre>Genre : ${urlgender}</div>
     <div id=couleurCheveux> Couleur des Cheveux : ${urlhair_color} </div>
     <div id= poids> Poids du personnage : ${urlmass}  kg</div>
     <div id= couleurPeau> Couleur de Peau : ${urlskin_color} </div>
     <div class="2"> 2</div>
     <div class="3"> 3</div>
 </div>
</section>`;


  }
}