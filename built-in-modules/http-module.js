
const http = require('http');

const server = http.createServer((request,response)=>{
    console.log('url: ',request.url);
    // response.write('<h1>Welcome to our Home page<h1>');
    // response.end();
    if(request.url === '/'){
        response.end('<h1>Welcome to our Home page<h1>');
    }
    else if(request.url === '/about-us'){
        response.end('<h1>We are here to learn some Node.js and Express.js<h1>');
    }
    else {    //default
        response.end(`
        <h1> Error: 404 <h1>
        <p> Page not found </p>
        <a href="/">Back Home</a>
        `);
    }
});

server.listen(5050);