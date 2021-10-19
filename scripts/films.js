const FILMS = document.getElementById('reponses-films');
const DEPLIE = document.getElementById ('deploiement-films');

console.log(FILMS);

const API_URL = "https://swapi.dev/api/films/";
fetch(API_URL)
.then((response) => {
    console.log(response);
    return response.json();
})
.then(afficherFilms => {
    console.log(afficherFilms);
    for(let index = 0; index <6; index++){
        console.log(afficherFilms.results[index]);
        const EPISODES = afficherFilms.results[index];
        console.log(EPISODES);
    
        FILMS.innerHTML +=`
        <p class= "titre">${EPISODES.title}</p>
    `
    }
})