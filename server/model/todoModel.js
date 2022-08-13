const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todolist : [{
        activity : String,
        status : String,
        time : String
    }
    ],
    username: String

})
module.exports = mongoose.model('todo',todoSchema)