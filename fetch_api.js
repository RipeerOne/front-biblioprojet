var listeElt = document.getElementById('liste');
var list = [];

function creer_liste_en_html(list) {
    // crée une chaîne de caractères vide
    var html = '';

    // pour chaque élément de la liste (d'index i),
    // ajouter au html <p>Nom du pokémon</p>
    for (var i = 0; i < list.length; i++) {
        html = html + `<p>${list[i].name}</p>`;
    }

    // écrire le html sur l'élément du DOM qui s'appelle "liste"
    listeElt.innerHTML = html;
}

// définir l'url de l'API
var requestURL = 'https://api.pokemontcg.io/v2/cards';

// créer une requête et l'envoyer
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// récupérer le json de la requête
var pokemonList = [];
request.onload = function () {
    // on sait déjà que l'API renvoie du json de la forme
    // {
    //     data:
    //         [
    //             ici la liste
    //         ]
    // }
    // donc on écrit .data
    pokemonList = request.response.data;
    // appeler la fonction qui affiche la liste en html
    // creer_liste_en_html(pokemonList);
};

var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', () => console.log("c'est bon"));
