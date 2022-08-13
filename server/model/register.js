const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username:String,
    password:String
})
module.exports= mongoose.model('TodoUser', RegisterSchema)