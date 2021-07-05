const express = require('express');
const path =require("path");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cookieParser =require("cookie-parser");
const cors = require("cors");

const multer = require("multer")


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use('/profile', express.static('uploads'));
////////////////////////////////////////////////////////////

//////////////////////////////////////////////
const storage = multer.diskStorage({
    destination:  'uploads/',
    filename: (req, file, cb)=> {
        return  cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage});
//////////////////////////////////////////////////////////////////////////////////

// const upload = multer({dest: 'uploads/'});

// const arr =[];
// app.get('/api/user',(req,res)=>{
//
//
//     res.send(arr)
// })

app.post('/api',upload.single('image'),function(req, res) {
    console.log(req.file)

    // const user_id =req.body.name ;
    // const token = req.body.date;
    // const image = req.file.filename;
    //
    //
    //
    //
    // arr.push({
    //     'user_id': user_id,
    //     'token': token,
    //     'image': image,
    // })




});




app.listen(port);
console.log('Server started at http://localhost:' + port);