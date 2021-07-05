const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    imageName: {
        type: String,
        required: true
    },image: {
        type: String,
        required: true
    }

},);
const UserSchema = new Schema({

    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    userBirthdays:[userSchema]
},);

const UserModel =mongoose.model('kav_bds',UserSchema);
// const UserModel =mongoose.model('testDetails',userSchema);
module.exports =UserModel;