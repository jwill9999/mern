const express = require('express');
const router = express.Router();
const controller = require('../controllers/api.controller');

/*
    @type router
    @params route
    @callback controller api
*/

router.get('/', controller.index);
router.post('/', controller.post);
router.delete('/:id', controller.delete);


module.exports = router;