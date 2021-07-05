const express =require('express');
const app=express();
const bodyParser = require('body-parser');
const cores =require('cors');
const morgan =require('morgan');
const mongoose =require('mongoose');
const session = require('express-session');
const MongoDbSession = require('connect-mongodb-session')(session);

const addBirthdayRouter =require('./Router(data_list)/addBirthdayRouter');
const userDataDeleteRouter =require('./Router(data_list)/userDataDeleteRouter');
const homePageloadDataRouter =require('./Router(data_list)/homePageloadDataRouter');
const SignUpRouter =require('./Router(data_list)/signUprouter');
const SignInRouter =require('./Router(data_list)/signInRouter');
const forgotPasswordGetRouter =require('./Router(data_list)/getPasswordRouter');
const updatePasswordRouter =require('./Router(data_list)/updatePassword');

require("dotenv").config({
    path:'./config/config.env'
});
app.use("/uploads",express.static('uploads'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cores());
app.use(bodyParser.json())

// const dbURI ='mongodb+srv://rahal:12345@cluster0.ddfkm.mongodb.net/test-db?retryWrites=true&w=majority'
const dbURI ='mongodb+srv://rahal:12345@cluster0.ddfkm.mongodb.net/test-db?retryWrites=true&w=majority'

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false ,useCreateIndex:true})
    .then(results=> console.log("database connected"))
    .catch(err=>console.log(err))

const store = new MongoDbSession({
    uri:dbURI,
    collection:"mySession"
})



app.use('/addUserData',addBirthdayRouter);
app.use('/addUserData',userDataDeleteRouter);
app.use('/home',homePageloadDataRouter);
app.use('/getPassword',forgotPasswordGetRouter);
app.use('/updatePassword',updatePasswordRouter);
app.use('/signUp',SignUpRouter);
app.use('/signIn',SignInRouter);

app.listen(8000,console.log("Birthday reminder server running..."))