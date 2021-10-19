const FILMS = document.getElementById('reponses-films');
const VAISSEAUX = document.getElementById('vaisseaux-films');
const ESPECES = document.getElementById('especes-films');
const DEPLIE = document.getElementById ('deploiement-films');
const DEPLIE2 = document.getElementById ('deploiement-films2');
const DEPLIE3 = document.getElementById ('deploiement-films3');
const DEPLIE4 = document.getElementById ('deploiement-films4');
const DEPLIE5 = document.getElementById ('deploiement-films5');
const DEPLIE6 = document.getElementById ('deploiement-films6');

console.log(FILMS);

const API_URL = "https://swapi.dev/api/films/"; // déclare la localisation de la liste des films
fetch(API_URL)                                  // recupère la liste des films
.then((response) => {                           // retourne une reponse
    console.log(response);
    return response.json();                     // sous format json
})
.then(afficherFilms => {                        // on affiche ensuite les films
    console.log(afficherFilms);
    for(let index = 0; index <6; index++){      // on sait qu'il y en a 6, donc une boucle pour les afficher tous
        console.log(afficherFilms.results[index]);  
        const EPISODES = afficherFilms.results[index];      // on déclare qu'un épisode est toujours la fonction avec sa boucle
        console.log(EPISODES);                             
    
        FILMS.innerHTML +=`                                 
        <p class= "titre">${EPISODES.title}</p>
    `
    }

})

DEPLIE.addEventListener('click', ()=>{

const API_URL_1 = "https://swapi.dev/api/films/1"; 
fetch(API_URL_1)                                  
.then((response1) => {                           
    console.log(response1);
    return response1.json();                     
})
.then(afficherFilms => {                        
    /*console.log(afficherFilms);
    for(let index = 0; index <6; index++){      
        console.log(afficherFilms.results[index]);  */
        const EPISODE1 = afficherFilms;      
        console.log(EPISODE1);                             

    FILMS.innerHTML +=`                                 
    <p class= "episode">Episode :  ${EPISODE1.episode_id}</p>
    <p class= "directeur">Directeur : ${EPISODE1.director}</p>
    <p class= "producteur">Producteur : ${EPISODE1.producer}</p>
    <p class= "sortie">Date de Sortie : ${EPISODE1.release_date}</p>
`
}
,)

const API_URL_VAISSEAUX = "https://swapi.dev/api/starships/"
fetch(API_URL_VAISSEAUX)
.then((response2)=>{
    console.log(response2);
    return response2.json();
})
.then(afficherVaisseaux =>{
    console.log(afficherVaisseaux);
    for (let index = 0; index <36; index++){
        console.log(afficherVaisseaux.results[index]);
        const VAISSEAU = afficherVaisseaux.results[index];
        console.log(VAISSEAU);

        VAISSEAUX.innerHTML +=`                                 
    <p class= "Nom des Vaisseaux">${VAISSEAU.name}</p>
    `
    }
}
,)

const API_URL_ESPECES = "https://swapi.dev/api/species/"
fetch(API_URL_ESPECES)
.then((response3)=>{
    console.log(response3);
    return response3.json();
})
.then(afficherEspeces =>{
    console.log(afficherEspeces);
    for (let index = 0; index <37; index++){
        console.log(afficherEspeces.results[index]);
        const ESPECE = afficherEspeces.results[index];
        console.log(ESPECE);

        ESPECES.innerHTML +=`                                 
    <p class= "Nom des Espèces">${ESPECE.name}</p>
    `

}
})


DEPLIE2.addEventListener('click', ()=>{

    const API_URL_2 = "https://swapi.dev/api/films/2"; 
    fetch(API_URL_2)                                  
    .then((response) => {                           
        console.log(response);
        return response.json();                     
    })
    .then(afficherFilms => {                        
        /*console.log(afficherFilms);
        for(let index = 0; index <6; index++){      
            console.log(afficherFilms.results[index]);  */
            const EPISODE2 = afficherFilms;      
            console.log(EPISODE2);                             
    
        FILMS.innerHTML +=`                                 
        <p class= "titre">${EPISODE2.episode_id}</p>
        <p class= "titre">${EPISODE2.director}</p>
        <p class= "titre">${EPISODE2.producer}</p>
        <p class= "titre">${EPISODE2.release_date}</p>
    `
    }
    ,)
})
})
