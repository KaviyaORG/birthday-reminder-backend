const express =require('express');
const router =express.Router();
const path =require("path");
const multer=require('multer');
const Controllers = require('../Controllers/controllers');


const storage =multer.diskStorage({
    destination:'uploads/',
    filename:(req,file,callback)=>{
        return callback(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const Upload =multer({
    storage:storage
});

router.post('/',Upload.single('image'),Controllers.validationOfImage,Controllers.postAlldata)
      .get('/',Controllers.verify,Controllers.getAlldata)

module.exports = router









