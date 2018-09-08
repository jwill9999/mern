const express = require('express');
const Item = require('../model');

/*
    @namespace /api/v1/
    @method GET
    @params req res
    @returns json items
    @throws error object
*/

exports.index = function (req, res) {
    Item.find()
        .then(items => res.status(200).json(items))
        .catch(e => res.status(500).send({
            error: 'Unable to load files from database'

        }));
}

/*
    @namespace /api/v1/
    @method POST
    @params req res
    @returns json item
    @throws error object
*/

exports.post = function (req, res, next) {
    const {name} = req.body;
    let newItem = new Item({name});

    newItem.save()
        .then(item => res.status(201).json(item))
        .catch(e => res.status(500).send({
            error: 'Unable to save file to database',
            message: e.message
        }))
}

/*
    @namespace /api/v1/
    @method DELETE
    @params req res ID
    @returns json item
    @throws error object
*/

exports.delete = function (req, res, next) {
    const {id} = req.params
    Item.findById(id)
        .then(item => item.remove())
        .then(item => res.json({
            'deletedItem': item
        }))
        .catch(e => res.status(500).send({
            error: 'Unable to delete file from database'
        }));
}
