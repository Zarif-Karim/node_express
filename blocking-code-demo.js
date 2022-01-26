
const http = require('http');

const port = 5050;
const domain = '127.0.0.1';

const server = http.createServer((request,response)=>{
    switch(request.url){
        case '/':
            response.end('Home Page');
            break;
        case '/about':
            response.end('About Page');
            break;
        case '/blockdemo':
            for(let i = 0; i < 15; ++i)
                for(let j = 0; j < 1000; ++j)
                    console.log(i, ': ', j);
            response.end('Hello Finally!');
            break;
        default :
            response.end('Page Not Found');
    }
});

server.listen(port,()=>{
    console.log(`Server active: http://${domain}:${port}`)
});