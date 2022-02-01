const { Testing, color } = require('../testing');
const test = new Testing();
const axios = require('axios');
let {people} = require('./data');

async function do_test() {
    console.log(color.yellow,'Starting Tests...')
    //get Test
    let query = 'http://localhost:5000/api/people';
    await axios.get(query)
    .then(result=> test.run('get: /api/people', result.data.sucess, true))
    .catch(err => test.run('get: /api/people', err, {sucess: true, data: people}));

    //post Test
    await axios.post(query,{name : 'Maliha', role : 'Finance'})
    .then(result=>test.run('post: /api/people',result.data.sucess,true))
    .catch(err=>test.run('post: /api/people',err,{sucess:true, person: 'Maliha'}));   
    
    //put Test
    query = 'http://localhost:5000/api/people/userid/4';
    await axios.put(query,{name : 'Mohammed', role : 'Incident Reporter'})
    .then(result=>test.run('put: /api/people/userid/4',result.data.sucess,true))
    .catch(err=>test.run('put: /api/people/userid/4',err,{sucess: true, message: 'User Updated'}));

    //delete Test
    query = 'http://localhost:5000/api/people/userid/4';
    await axios.delete(query,{name : 'Mohammed', role : 'Incident Reporter'})
    .then(result=>test.run('delete: /api/people/userid/4',result.data.sucess,true))
    .catch(err=>test.run('delete: /api/people/userid/4',err,{sucess: true, message: 'User Deleted'}));
     
    test.summary();
    console.log(color.yellow, 'Test Finished...');
}


do_test();