const express = require('express');
const Item = require('../model');

/*
    @namespace /api/v1/
    @method GET
    @params req res
    @returns json items
    @throws error object
*/

exports.index = (req, res) =>  {
   
    Item.getAllUsers((err, users) => {
        		if(err){
        			res.status(500).send({error: 'Unable to get users from database' })
        		} else {
                    res.status(200).json(users);
        	};
});
};
/*
    @namespace /api/v1/
    @method POST
    @params req res
    @returns json item
    @throws error object
*/

exports.post = (req, res, next) =>  {
    const {name} = req.body;

    Item.addUser({name}, (err, user) => {
        
        if(err){
            res.status(400).send({error : 'Please provide a new user'})
        } else {
            res.status(201).json(user)
        }

    })
  
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
