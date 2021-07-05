const express = require("express");
const app =express()
const path =require("path");
const multer = require('multer');
const bodyParser = require("body-parser");
const cookieParser =require("cookie-parser");
const cors = require("cors");
app.use(cors());
app.use(cookieParser());
//
const storage = multer.diskStorage({
    destination:  'uploads/',
    filename: (req, file, cb)=> {
       return  cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
//
// const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };
//
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });
//
//
//
//


const upload = multer({storage:storage})
app.post('/api',upload.single('image'),function(req, res) {


    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})
app.listen(8000,console.log("server is up"))