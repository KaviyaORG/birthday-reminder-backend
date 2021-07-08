const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers/controllers')

router.get('/',Controllers.verify,Controllers.getAllDataHome);


module.exports =router
