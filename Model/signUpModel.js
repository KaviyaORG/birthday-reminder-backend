const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userData = new Schema({
    username:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
        required:true,
    }
});
module.exports =mongoose.model("kav_acc",userData);
