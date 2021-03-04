const ourApp = (function () {
    const constants = {
        liste: document.getElementById('liste'),
    };

    const fetchPokemons = async () => {
        constants.liste.innerText = 'On va les attraper tous';
        try {
            const response = await fetch('https://api.pokemontcg.io/v2/cards').then((response) =>
                response.json()
            );
            const pokemonList = response.data;

            // crée une chaîne de caractères vide
            var html = '';

            // pour chaque élément de la liste (d'index i),
            // ajouter au html <p>Nom du pokémon</p>
            for (var i = 0; i < pokemonList.length; i++) {
                html = html + `${pokemonList[i].name}, `;
            }

            // écrire le html sur l'élément du DOM qui s'appelle "liste"
            constants.liste.innerHTML = html;
        } catch (error) {
            console.log(error);
        }
    };

    const init = () => {
        fetchPokemons();
    };
    return {
        init: init,
    };
})();

var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', () => ourApp.init());
