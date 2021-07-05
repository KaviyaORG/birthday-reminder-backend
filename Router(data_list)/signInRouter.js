const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers(data_list)/controllers');

router.post('/',Controllers.LoginController)

module.exports =router;