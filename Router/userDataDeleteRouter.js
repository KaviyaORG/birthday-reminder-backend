const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers/controllers')

router.delete('/delete/:id',Controllers.deleteUserData)

module.exports=router;