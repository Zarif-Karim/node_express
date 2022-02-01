const express = require('express');
const app = express();
const morgan = require('morgan');

let { people, PEOPLE_GLOBAL_ID_COUNTER } = require('./data');

//logger
app.use(morgan('tiny'));

//static files
app.use(express.static('./static'));

//parse form data
app.use(express.urlencoded({extended: false}));
//parse json data
app.use(express.json());

app.post('/login',(req,res)=>{
    console.log(req.body);

    const {name} = req.body;
    const matchedName = people.find((person)=>person.name.includes(name));

    if(matchedName){
        return res.status(200).send(`
        <h1>Welcome ${name}<h1>
        <table>
            <thead>
                <tr>
                    <td> ID </td>
                    <td> NAME </td>
                    <td> ROLE </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> ${matchedName.id} </td>
                    <td> ${matchedName.name} </td>
                    <td> ${matchedName.role} </td>
                </tr>
            </tbody>
        </table>
        `);
    }
    res.status(401).send('Person Unauthorized!');
});

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess: true, data: people});
});


app.post('/api/people',(req,res)=>{
    console.log(req.body);
    const {name, role} = req.body;
    if(name && role){
        const newPerson = { 
            id : ++PEOPLE_GLOBAL_ID_COUNTER, 
            name : name, 
            role : role
        };
        
        people.push(newPerson);

        return res.status(200).json({sucess: true, person: name});
    }
    res.status(200).json({sucess: false});
});



app.get('/api/people/userid/:id',(req,res)=>{
    const {id} = req.params;
    const user = people.find(person=>person.id===Number(id));
    if(user){
        return res.status(200).json({sucess: true, user: user});
    }
    res.status(404).json({sucess: false, message: `No user found with ID: ${id}`});
});

app.delete('/api/people/userid/:id', (req,res)=>{
    const {id} = req.params;
    if(id){
        const person = people.find(person=>person.id===Number(id));
        if(person) {
            const index = people.indexOf(person);
            people.splice(index,1);
            return res.status(200).json({sucess: true, message: 'User Deleted'});
        }
    }
    res.status(404).json({sucess: false, message: `No user found with ID: ${id}`});
});

app.put('/api/people/userid/:id', (req,res)=>{
    const {id} = req.params;
    const {name, role} = req.query;

    if(id){
        let updated = false; 
        for(let i = 0; i < people.length; ++i) {
            if(people[i].id===Number(id)){
                if(name) people[i].name = name;
                if(role) people[i].role = role;
                updated = true;
                break;
            }
        }    
        
        if(updated)
            return res.status(200).json({sucess: true, message: 'User Updated'});
    }
    res.status(404).json({sucess: false, message: `No user found with ID: ${id}, Update Failed`});
});

app.listen(5000,()=> console.log('http://localhost:5000'));

