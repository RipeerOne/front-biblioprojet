import App from './App.js';

var app = new App('https://localhost:5001/api/Artists');
var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', async () => app.getArtists());

var nouvelArtiste = document.getElementById('nouvelArtiste');
nouvelArtiste.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    // console.log(data);
    const values = Object.fromEntries(data.entries());
    console.log(values);

    app.postArtist(values);
});

var getArtist = document.getElementById('getArtist');
getArtist.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const artistId = data.get('artistId');

    console.log(artistId);

    app.getArtist(artistId);
});
