
const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);



//async function approch
async function work(){
    try {
        const first = await readFile('./built-in-modules/first.txt','utf-8');
        const second = await readFile('./built-in-modules/first.txt','utf-8');
        await writeFile('./built-in-modules/promise_write.txt',
        `First file : ${first}, Second file : ${second}`
        )
        console.log(first,second);
    } catch(error){
        console.log(error);
    }
}


work();



// promise then catch approch
/*
getText('./built-in-modules/first.txt')
.then( result => console.log(result) )
.catch(error => console.log(error) );
*/

//  function getText(path) {
//      return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//      })
//  }