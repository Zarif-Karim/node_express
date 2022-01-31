const express = require('express');
const app = express();

//useful methods
/*
    get,post,put,delete,all,use,listen
*/

app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
});

app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
});

app.all('*', (req,res)=>{
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(5000, () => { console.log('http://localhost:5000'); });