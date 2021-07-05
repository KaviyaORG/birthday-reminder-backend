const express = require('express');
const mongoose =require('mongoose');
const mongoRouter =require('./mongoRouter/mogoRouter')

const app=express();
app.use(express.json());
const port= process.env.PORT || 3500;

const dbURI ='mongodb+srv://rahal:12345@cluster0.ddfkm.mongodb.net/kav?retryWrites=true&w=majority'

mongoose. connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( results => console.log("db connected"))
    .catch((err)=>console.log(err));



app.listen(port,()=>{console.log("connected")})

app.use('/',mongoRouter);
