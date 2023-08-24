// ------------------ IMPORTS ------------------ //

/**
 * Express est un framework pour Node.js qui permet de créer des applications web.
 * Il s'agit d'un framework minimaliste, flexible et rapide, avec lequel on peut créer des applications web, des API et des sites web.
 */
const express = require('express');

/**
 * fs est un module de Node.js qui permet de lire et d'écrire des fichiers.
 * C'est un module qui est installé par défaut avec Node.js, il n'est donc pas nécessaire de l'installer.
 */
const fs = require('fs');

/**
 * Le moteur de template EJS permet de créer des vues HTML à partir de données.
 * Cela permet de créer des pages web dynamiques, c'est-à-dire des pages web qui s'adaptent en fonction des données.
 */
const bodyParser = require('body-parser');

/**
 * json-server est un module qui permet de créer une API REST complète à partir d'un fichier JSON.
 * Cela simplifie grandement la création d'une API REST, car il suffit de créer un fichier JSON pour avoir une API fonctionnelle.
 */
const jsonServer = require('json-server');

// ------------------ VARIABLES ------------------ //
/**
 * Le Middleware est un terme générique qui désigne une fonction qui va être exécutée entre la requête et la réponse.
 * C'est une fonction qui va être exécutée à chaque fois qu'une requête est reçue par le serveur.
 * jsm est juste un nom de variable, on aurait pu l'appeler comme on voulait.
 */
const jsm = jsonServer.router('db.json');

/**
 * Ici, on crée une application Express qui va utiliser le Middleware json-server.
 * Cela signifie que toutes les requêtes reçues par notre serveur seront traitées par le Middleware json-server.
 */
//
const app = express();

app.get('/martin', (req, res) => {
    res.send('Coucou');
})


app.listen(3000, () => console.log('Le serveur est lancé sur le port 3000'));
