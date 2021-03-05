export default class App {
    constructor(url) {
        this.list = document.getElementById('liste');
        this.url = url;
    }

    async getArtists() {
        this.list.innerText = 'On va les attraper tous';
        try {
            const response = await fetch(this.url, {
                // method: method,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }).then((response) => response.json());

            // crée une chaîne de caractères vide
            var html = '';

            console.log(response);
            // pour chaque élément de la liste (d'index i),
            // ajouter au html <p>Nom du pokémon</p>
            for (var i = 0; i < response.length; i++) {
                console.log(response[i].civilName);
                html = html + `<li>${response[i].civilName} </li>`;
            }

            // écrire le html sur l'élément du DOM qui s'appelle "liste"
            this.list.innerHTML = html;
        } catch (error) {
            this.list.innerHTML = error;
        }
    }

    async postArtist(values) {
        const json_string = JSON.stringify(values);
        console.log(json_string);

        fetch(this.url, {
            method: 'POST',
            headers: {
                accept: 'text/plain',
                'Content-Type': 'application/json-patch+json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => console.log(response))
            .catch((error) => {
                console.log(console.log(error));
            });
    }
}
