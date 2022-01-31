
const express = require('express');
const app = express();
const morgan = require('morgan');
//const logger = require('./logger.js');
//app.use(logger);

//third party logger
app.use(morgan('tiny'));

//static folder middleware
app.use(express.static('./static'));

app.all('*',(req,res)=>{
    res.status(404).send('Page Not Found')
})

app.listen(5000,()=> console.log('http://localhost:5000'));