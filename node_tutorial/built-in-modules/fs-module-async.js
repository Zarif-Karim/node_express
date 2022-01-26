//file read write async (non-blocking)
const {readFile,writeFile} = require('fs');

console.log('Starting async functions');

//read first file
readFile('./first.txt','utf8',(error,result)=>{
    if(error){
        console.log('First File: ',error);
        return;
    }
    const first = result;
    console.log('First file read: ',first);

    //read second file
    readFile('./second.txt','utf8',(error,result)=>{
        if(error){
            console.log('Second File: ',error);
            return;
        }

        const second = result;
        console.log('Second file read: ',second);

        //write
        writeFile('./result-async.txt',
        `Here are the contents of the async write: ${first,second}`,
        {flag: 'a'}, //can also add flags here
        (error,result) => {
            if(error){
                console.log('Write Error: ',error);
                return;
            }
            console.log('Write finished!');
        });
    });
});
console.log('Moving on...');
setTimeout(()=>{
    console.log('5ms');
},5);