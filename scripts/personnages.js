import { api_call, API_URL, createPagination } from "./util";

const PERSONNAGES = document.getElementById("resultats");


class People {
    constructor(birth_year, eye_colo, gender, hair_color, height, mass, skin_color) {
        this.birth_year = birth_year;
        this.eye_colo = eye_colo;
        this.gender = gender;
        this.hair_color = hair_color;
        this.height = height;
        this.mass = mass;
        this.skin_color = skin_color;
    }
}


console.log('personnage.js loaded');

//api_call(API_URL+"/people", console.log);

// fetch(API_URL+"/people")
// .then(response => {
//     return response.json();
// })
// .then(jsonResp => {
//     remplissage(jsonResp);
// })
// .catch(error => {
//     console.log(`Erreur lors de l'appel API : 
//                     ${error.message}`);
// });

function remplissage(json) {
    console.log(json.results[0]);

    // api_call(API_URL+ "/planets/1", (response) => {
    //     console.log(response);
    //     NAME.innerText = results[i].name;

    //  });





    PERSONNAGES.innerHTML = '';
    const PERPAGE = json.results.length;
    const previousUrl = json.previous;
    const nextUrl = json.next;
    console.log(previousUrl);
    console.log(nextUrl);

    for (let i = 0; i < PERPAGE; i++) {
        const urlbirth_year = json.results[i].birth_year;
        const urleye_colo = json.results[i].eye_colo;
        const urlgender = json.results[i].gender;
        const urlhair_color = json.results[i].hair_color;
        const urlheight = json.results[i].height;
        const urlmass = json.results[i].mass;
        const urlskin_color = json.results[i].skin_color;
        const urlname = json.results[i].name;
        const urlhomeworld = json.results[i].homeworld;
        const urlfilms = json.results[i].films;

        // const gens = new People(urlbirth_year, urleye_colo, urlgender, urlhair_color, urlmass,urlskin_color);
        // console.log(gens);
        //Appel Api pour les planetes :


        PERSONNAGES.innerHTML +=
            `<section class="resultat accordeon_item">
                <h1 class="accordeon_item_header">${urlname}</h1>
                <div class="accordeon_item_body">
                    <div class="column1">
                        <div id=ann??eNaissance>Ann??e de Naissance : ${urlbirth_year} </div>
                        <div id=couleurYeux> Couleur des Yeux : ${urleye_colo}</div>
                        <div id=genre>Genre : ${urlgender}</div>
                        <div id=couleurCheveux> Couleur des Cheveux : ${urlhair_color} </div>
                        <div id= poids> Poids du personnage : ${urlmass}  kg</div>
                        <div id= couleurPeau> Couleur de Peau : ${urlskin_color} </div>
                    </div>
                    <div class="column2"> Plan??te de Naissance : ${urlhomeworld}</div>
                    <div class="column3"> Film o?? je suis pr??sent : ${urlfilms}</div>
                </div>
                </section>`;

    }
    //Pagination
    createPagination(previousUrl, nextUrl, PERSONNAGES, remplissage);

    const accordeonItemHeader = document.querySelectorAll(".accordeon_item_header");
    accordeonItemHeader.forEach(accordeonItemHeader => {
        accordeonItemHeader.addEventListener("click", event => {
            accordeonItemHeader.classList.toggle("active");
        });
    });
}

api_call(API_URL + "/people", remplissage);
        console.log('personnage.js loaded');
