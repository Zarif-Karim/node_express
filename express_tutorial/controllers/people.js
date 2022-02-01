let { people, PEOPLE_GLOBAL_ID_COUNTER } = require('../data');

const getAll = (req,res)=>{
    res.status(200).json({sucess: true, data: people});
}

const addPerson = (req,res)=>{
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
}

const getSingle = (req,res)=>{
    const {id} = req.params;
    const user = people.find(person=>person.id===Number(id));
    if(user){
        return res.status(200).json({sucess: true, user: user});
    }
    res.status(404).json({sucess: false, message: `No user found with ID: ${id}`});
}

const deleteSingle = (req,res)=>{
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
}

const updateSingle = (req,res)=>{
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
}

module.exports = { getAll, addPerson, getSingle, updateSingle, deleteSingle };