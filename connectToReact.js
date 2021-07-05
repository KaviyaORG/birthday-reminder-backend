const createError =require("http-errors");
const express = require('express');
const path =require("path");
const cookieParser =require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const apiRouter = require('./router/testRouter')

const app = express();

app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));

app.use('/api',apiRouter);


app.listen(8000,console.log("port is running now"))