import App from './App.js';

var app = new App("https://api.pokemontcg.io/v2/cards");
var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', async () => app.fetchPokemons());
