
//PATH MODULE
const path = require('path');

//path separator
// console.log(path.sep)

//path join: can join many folders leading to a file
//zarif note: good practice to include a path separator in the begining not the end
// or does it matter?
const demoPath = path.join('\\built-in-modules','path-module.js\\');
// console.log(demoPath);

//path.basename: the last part of the path (file or folder?)
const base = path.basename(demoPath);
// console.log(base);

//absolute path
const absolutePath = path.resolve(__dirname,base);
console.log(absolutePath);