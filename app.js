var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Introdução a NodeJS</title>
                </head>
                <body>
                    <h1>Página Home</h1>
                </body>
            </html>
        `);
});

app.get('/contato', (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Introdução a NodeJS</title>
                </head>
                <body>
                    <h1>Página Contato</h1>
                </body>
            </html>
        `);
});

app.listen(8000, () => {
    console.log('locahost:8000');
});