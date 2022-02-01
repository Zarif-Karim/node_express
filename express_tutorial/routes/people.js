const express = require('express');
const router = express.Router();
const { 
    getAll, 
    addPerson, 
    getSingle, 
    updateSingle, 
    deleteSingle 
} = require('../controllers/people');

router.route('/').get(getAll).post(addPerson);
router.route('/userid/:id').get(getSingle).put(updateSingle).delete(deleteSingle);

module.exports = router;