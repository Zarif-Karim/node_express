const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
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

module.exports = router;