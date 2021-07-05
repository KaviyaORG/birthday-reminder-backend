const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers/controllers');

router.put('/',Controllers.updatePassword)



module.exports =router;