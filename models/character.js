let mongoose = require('mongoose');

// define the schema for our user model
let characterSchema = new mongoose.Schema({

    id:Number,
    name:String,
    age:Number,
    signatureAbility:String,
    village:String,
    image:String,

});

module.exports= mongoose.model('Character',characterSchema,'characters')