const express = require('express');
const path = require('path');


/*
    @namespace / default
    @method GET
    @params req res
    @returns html
*/

exports.index = function(req,res){
    res.sendFile(path.resolve('client/build/index.html'));
}