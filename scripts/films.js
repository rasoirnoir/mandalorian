const { div } = require("prelude-ls");

const FILMS = document.getElementsByClassName('accordeon');
const VAISSEAUX = document.getElementById('vaisseaux-films');
const ESPECES = document.getElementById('especes-films');
const TITRE = document.getElementsByClassName('titres');
console.log(FILMS);

const API_URL = "https://swapi.dev/api/films/";  
fetch(API_URL + target.id)  
.then((response) => {                                   // retourne une reponse
    console.log(response);
    return response.json();                             // sous format json
})
.then(afficherFilms => {                                // on affiche ensuite les films  
        const EPISODES = afficherFilms;      // on déclare qu'un épisode est toujours la fonction avec sa boucle
        console.log(EPISODES);                             
    
        TITRE.innerHTML +=`                                 
        <p class= "titre">${EPISODES.title}</p>
        ` 
}
,)

const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
accordeonItemHeader.forEach(accordeonItemHeader =>{
    accordeonItemHeader.addEventListener("click", event => {

        console.log(event.target.id);
        console.log(event.target.nextSibling)
        console.log(event.target.nextSibling.nextElementSibling)
        console.log(event.target.nextSibling.nextElementSibling.children)
        const DEPLIE = event.target.nextSibling.nextElementSibling.children[0];

        accordeonItemHeader.classList.toggle("active");

const API_URL = "https://swapi.dev/api/films/";         // déclare la localisation de la liste des films
fetch(API_URL + event.target.id)                                          // recupère la liste des films
.then((response) => {                                   // retourne une reponse
    console.log(response);
    return response.json();                             // sous format json
})
.then(afficherFilms => {                                // on affiche ensuite les films  
        const EPISODES = afficherFilms;      // on déclare qu'un épisode est toujours la fonction avec sa boucle
        console.log(EPISODES);                             
    
        DEPLIE.innerHTML +=`                                 
        <p class= "titre">${EPISODES.title}</p>
        <p class= "episode">Episode :  ${EPISODES.episode_id}</p>
        <p class= "directeur">Directeur : ${EPISODES.director}</p>
        <p class= "producteur">Producteur : ${EPISODES.producer}</p>
        <p class= "sortie">Date de Sortie : ${EPISODES.release_date}</p>
    `
    }
    /*for(let index = 0; index <5; index++){ 
        FILMS.innerHTML +=` 
        <p class ="especes"> Espèces : ${EPISODES.species[index]}</p>
        ` 
    }
        for(let index = 0; index<8; index++){
        FILMS.innerHTML +=`   
        <p class= "vaisseaux"> Vaisseaux : ${EPISODES.starships[index]}</p> 
        ` 
        }*/

,)
})
})
