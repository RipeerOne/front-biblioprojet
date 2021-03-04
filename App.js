export default class App {
    constructor(url) {
        this.list = document.getElementById('liste');
        this.url=url;
    }

    async fetchPokemons() {
        this.list.innerText = 'On va les attraper tous';
        try {
            const response = await fetch(this.url).then((response) =>
                response.json()
            );
            const pokemonList = response.data;

            // crée une chaîne de caractères vide
            var html = '';

            // pour chaque élément de la liste (d'index i),
            // ajouter au html <p>Nom du pokémon</p>
            for (var i = 0; i < pokemonList.length; i++) {
                html = html + `<p>${pokemonList[i].name} </p>`;
            }

            // écrire le html sur l'élément du DOM qui s'appelle "liste"
            this.list.innerHTML = html;
        } catch (error) {
            this.list.innerHTML = error;
        }
    }
}
