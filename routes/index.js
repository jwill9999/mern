const express = require('express');
let router = express.Router();
const controller = require('../controllers/index.controller');

/*
    @type router
    @params wildcard route
    @callback controller index/html
*/
module.exports = router.get('*', controller.index);
