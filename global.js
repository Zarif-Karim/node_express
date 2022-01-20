//GLOBALS - NO WINDOW IN NODE JS!!!

/*
    __dirname   -   path to current directory
    __filename  -   file name
    require     -   function to use modules (CommonJS)
    module      -   info about current module(file)
    process     -   info about env where the program is being executed
*/

console.log('Directory: ',__dirname);
console.log('Filename: ',__filename);
console.log('process: ',process);

//Research about setInterval and setTimout

//keeps on repeating after defined milli seconds
setInterval(()=>{
    console.log('Interval: ding-dong!');
},1000);

//only triggers once after the defined milli seconds
setTimeout(()=>{
    console.log('Timeout: blah-blah!');
},2000);

