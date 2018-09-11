const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


var Items = module.exports =  mongoose.model('Item', ItemSchema);
    

module.exports.getAllUsers = (cb) => {
     Items.find(cb);
              
    }

module.exports.addUser = (user,cb) => {
 
    if(user){
    let newItem = new Items(user);    
        newItem.save(cb);  
       
    } else {
        cb(true,null)
    }
};