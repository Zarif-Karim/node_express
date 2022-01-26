const http = require('http');

const domain = '127.0.0.1';
const port = 5050;

const server = http.createServer();

server.on('request', (request,response)=>{
    console.log('url: ',request.url);
    // response.write('<h1>Welcome to our Home page<h1>');
    // response.end();
    if(request.url === '/'){
        response.end(`
            <h1>Welcome to our Home page<h1>
            <a href="/about-us"> About Us </a>
        `);
    }
    else if(request.url === '/about-us'){
        response.end(`
        <h1>We are here to learn some Node.js and Express.js<h1>
        <a href="/">Back Home</a>
        `);
    }
    else if(request.url === '/bigFile') {

    }
    else  {    //default
        response.end(`
        <h1> Error: 404 <h1>
        <p> Page not found </p>
        <a href="/">Back Home</a>
        `);
    }
});

server.listen(port, ()=>{
    console.log('Server listening on : ', `http://${domain}:${port}`);
});