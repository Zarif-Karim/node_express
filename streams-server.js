//write a bigFile for this demo
//when running first time uncomment block 2 and comment block 1

const http = require('http');
const fs = require('fs');


//block 1
const server = http.createServer();

server.on('request', (req,res)=> {
    if(req.url === '/'){
        res.end('<h1>Home Page</h1><a href="/bigFile"> Big File </a>')
    } else if (req.url === '/bigFile'){
        //send all at once:
        // const text = fs.readFileSync('./bigFile.txt','utf-8');
        // res.end(text);

        //send in chunks
        //simply reading async sends data in chunks? : Yes
        //method 1
        // fs.readFile('./bigFile.txt','utf-8',(err,data)=>{
        //     if(err){
        //         console.log(err);
        //         res.end(err);
        //         return;
        //     }
        //     res.write(data);
        //     res.end();
        // });

        //method 2
        const readStream = fs.createReadStream('./bigFile.txt','utf-8');

        readStream.on('open',()=>{
            readStream.pipe(res);
        });

        readStream.on('error', (err)=>{
            console.log(err);
            res.end(err);
        });
    } else {
        res.end('Page Not Found!');
    } 
});

server.listen(5050, ()=>{console.log('http://localhost:5050')});





//block 2

// for(let line = 1; line <= 10000; ++line)
//     fs.writeFileSync('./bigFile.txt', `Big File Line: ${line}\n`, {flag : 'a'});