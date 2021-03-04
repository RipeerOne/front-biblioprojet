import App from './App.js';

var app = new App("https://localhost:5001/api/Artists");
var bouton = document.getElementById('bouton_liste');
bouton.addEventListener('click', async () => app.fetch());
