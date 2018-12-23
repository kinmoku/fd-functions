const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.post('/user', (request, response) => {
    response.send('Hello Mitani');
});

app.post('/group', (request, response) => {
    response.send('Mitanisan');
});

app.post('/team', (request, response) => {
    response.send('Watarusan');
});

const api = functions.https.onRequest(app);
module.exports = { api };