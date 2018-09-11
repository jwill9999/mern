const express = require('express');
const router = express.Router();
const apicontroller = require('../controllers/api.controller');

/*
    @type router
    @params route
    @callback controller api
*/

router.get('/', apicontroller.index);
router.post('/', apicontroller.post);
router.delete('/:id', apicontroller.delete);


module.exports = router;