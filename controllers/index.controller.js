const express = require('express');
const path = require('path');


/*
    @namespace / default
    @method GET
    @params req res
    @returns html
*/

exports.index = function(req,res){
    res.sendFile('../client/public/index.html');
}