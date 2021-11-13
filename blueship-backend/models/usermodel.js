const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({

    email : { type : String, unique : true , dropDups : true }, 
    password : { type : String,}, 
    name : { type : String,  }, 
    isAdmin : { type : Boolean,  default : false }, 

})

const user = mongoose.model('User', userSchema);
module.exports = user