const http = require('http');
const { readFileSync } = require('fs');

//server const
const port = 5000;
//const domainLocal = '127.0.0.1';
const domainPublic = '192.168.0.113';

//pre reading file before server startup
const homePage = readFileSync('./html/home.html');

const server = http.createServer();

server.on('request', (req,res)=>{
    console.log(req.url);
    switch(req.url){
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.write(homePage);
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.write('About Page');
            break;
        default :
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.write('Page Not Found');
    }
    res.end();
});

server.listen(port,() => { console.log(`
    Local : http://127.0.0.1:${port}
    Public : http://${domainPublic}:${port}
    `); });