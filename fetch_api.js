var liste = document.getElementById("liste")

// async function afficherListe()
// {
    // etape 1 : faire une requête à l'API, attribuer le résultat à la var pokelist

    fetch("https://api.pokemontcg.io/v2/cards")
    .then(function(response){
        console.log(response.body)
    })
    // etape 2 : lire la liste des pokemon 
    
    //
// }

// var boutonElt = document.getElementById("bouton_liste");
// boutonElt.addEventListener("click", await afficherListe());
