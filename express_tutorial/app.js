const express = require('express');
const app = express();
const morgan = require('morgan');

const api_people = require('./routes/people');
const api_login = require('./routes/login');

//logger
app.use(morgan('tiny'));

//static files
app.use(express.static('./static'));

//parse form data
app.use(express.urlencoded({extended: false}));
//parse json data
app.use(express.json());

//routes
app.use('/api/people', api_people);
app.use('/login', api_login);1


app.listen(5000,()=> console.log('http://localhost:5000'));
