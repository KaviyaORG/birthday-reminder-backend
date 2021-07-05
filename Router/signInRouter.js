const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers/controllers');

router.post('/',Controllers.LoginController)

module.exports =router;