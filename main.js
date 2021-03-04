import App from './App.js';

var app = new App('https://localhost:5001/api/Artists');
var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', async () => app.getArtists());

var nouvelArtiste = document.getElementById('nouvelArtiste');
nouvelArtiste.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event, 'depuis main.js qui marche');
    app.postArtist(event.target);
});
