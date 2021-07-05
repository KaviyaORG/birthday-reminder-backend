const express =require('express');
const router =express.Router();
const Controllers = require('../Controllers(data_list)/controllers')

router.delete('/delete/:id',Controllers.deleteUserData)

module.exports=router;