var http = require('http');

var server = http.createServer((req, res) => {
    var pagina = req.url;
    console.log(pagina);

    if (pagina == '/contato') {
        res.end(`
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
    } else {
        res.end(`
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
    }
});

console.log('localhost:8000');
server.listen(8000);