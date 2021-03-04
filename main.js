import App from './App.js';

var app = new App();
var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', () => app.fetchPokemons());
