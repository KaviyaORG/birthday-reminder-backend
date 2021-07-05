const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers(data_list)/controllers');

router.put('/',Controllers.updatePassword)



module.exports =router;