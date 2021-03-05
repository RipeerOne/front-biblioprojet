# front-biblioprojet

## en entraînement, création d'un sélecteur de pokémon

Obtenir une fiche de description du pokemon à partir de son nom ou de son N°

## Taper dans l'API avec fetch

Ça marchait avec `XMLHttpRequest` mais `fetch` est asynchrone, c'est mieux.

```js
try {
    const response = await fetch(this.url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }).then((response) => response.json());

    // écrire le html sur l'élément du DOM qui s'appelle "liste"
} catch (error) {
    // faire des trucs avec l'erreur
}
```

## Poster avec fetch

Grâce au contrat OpenAPI édité par l'API, on sait que les requêtes `POST` sur Artist doivent ressembler à ça (sans les retours à la ligne) :

    curl -X POST "https://localhost:5001/api/Artists"
        -H  "accept: text/plain"
        -H  "Content-Type: application/json-patch+json"
        -d
            "{\"id\":0,\"civilName\":\"string\",\"artistName\":\"string\",\"birthday\":\"2021-03-05T10:27:07.896Z\",\"gender\":\"string\",\"nationality\":\"string\",\"picture\":\"string\",\"beginCarrerDate\":\"2021-03-05T10:27:07.896Z\",\"endCarrerDate\":\"2021-03-05T10:27:07.896Z\",\"dateCreation\":\"2021-03-05T10:27:07.897Z\"}"

Il faut donc:

-   fabriquer le JSON avec les données du formulaire
-   créer la requête avec `fetch` et tout ce qu'il faut, dont:
    -   l'url
    -   la méthode POST
    -   le header `Content-Type`
    -   le header `accept`
    -   le JSON stringifié
