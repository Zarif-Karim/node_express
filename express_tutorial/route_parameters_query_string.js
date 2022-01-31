const express = require('express');
const app = express();
const {data} = require('./data.js')

app.use(express.static('./static'));

//dumping the homepage in static folder 
app.get('/data',(req,res)=>{
    res.json(data);
});

app.get('/api/users/:userID', (req,res)=>{
    const request = {
        'Route Paramaters' : req.params,
        'Query Strings' : req.query
    }
    console.log(request);

    const {userID} = req.params;
    
    let response = data.find(person => person.id == Number(userID));
    
    if(!userID){ //if ID not found
        return res.send('No results match your search!'); 
    }
    //assuming ID found

    //check if query provided for sepcific fields
    const {column} = req.query;
    if(column){
        switch(column){
            case 'name':
                return res.json({name: response.name});
                break;
            case 'role':
                return res.json({role: response.role});
                break;
            case 'id':
                return res.json({id: response.id});
                break;
            default:
                return res.send(`No data for '${column}' with ID: ${userID}`);
        }
    }
        
    res.json(response);
});

app.all('*',(req,res)=>{
    console.log(req.url);
    res.status(404).send('Page not Found');
});

app.listen(5000, ()=>{ console.log('http://localhost:5000'); });