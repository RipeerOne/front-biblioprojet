import App from './App.js';

var app = new App('https://localhost:5001/api/Artists');
var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', async () => app.getArtists());

const envoyerArtiste = document.getElementById('nouvelArtiste');
nouvelArtiste.addEventListener('submit', async (event) => {
    app.postArtist(event);
    console.log('ca marche');
});
